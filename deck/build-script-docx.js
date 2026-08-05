const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell,
  WidthType, ShadingType, AlignmentType, BorderStyle, PageOrientation, LevelFormat,
  TableOfContents, PageBreak, TableLayoutType, FootnoteReferenceRun,
} = require('docx');

const SRC = '/home/user/Claude/deck/speaking-script.md';
const OUT = '/home/user/Claude/deck/speaking-script.docx';

let md = fs.readFileSync(SRC, 'utf8');



// ---- inline parser: **bold**, *italic*, `code` ----
function inline(text, base = {}) {
  const runs = [];
  const SEP = String.fromCharCode(0xE000);
  const codes = [];
  const work = text.replace(/`([^`]*)`/g, (_, c) => {
    codes.push(c);
    return SEP + (codes.length - 1) + SEP;
  });

  // emit a plain chunk, restoring any masked code spans
  const emit = (chunk, style) => {
    if (!chunk) return;
    const parts = chunk.split(new RegExp(SEP + '(\\d+)' + SEP));
    parts.forEach((p, idx) => {
      if (p === '') return;
      if (idx % 2 === 1) {
        runs.push(new TextRun({ text: codes[Number(p)], font: 'Consolas', size: 19, ...base, ...style }));
      } else {
        runs.push(new TextRun({ text: p, ...base, ...style }));
      }
    });
  };

  // emit a chunk that may itself contain *italic* spans
  const emitNested = (chunk, style) => {
    const ire = /\*([^*]+)\*/g;
    let l = 0, mm;
    while ((mm = ire.exec(chunk)) !== null) {
      emit(chunk.slice(l, mm.index), style);
      emit(mm[1], { ...style, italics: true });
      l = mm.index + mm[0].length;
    }
    emit(chunk.slice(l), style);
  };

  // bold content may contain single asterisks (italics), just not a literal **
  const re = /(\[\^\d+\]|\*\*\*[^*]+\*\*\*|\*\*(?:[^*]|\*(?!\*))+?\*\*|\*[^*]+\*)/g;
  let last = 0, m;
  while ((m = re.exec(work)) !== null) {
    emit(work.slice(last, m.index), {});
    const tok = m[0];
    if (tok.startsWith('[^')) { runs.push(new FootnoteReferenceRun(Number(tok.slice(2, -1)))); }
    else if (tok.startsWith('***')) emit(tok.slice(3, -3), { bold: true, italics: true });
    else if (tok.startsWith('**')) emitNested(tok.slice(2, -2), { bold: true });
    else emit(tok.slice(1, -1), { italics: true });
    last = m.index + tok.length;
  }
  emit(work.slice(last), {});
  if (runs.length === 0) runs.push(new TextRun({ text: '', ...base }));
  return runs;
}

const clean = (s) => s.replace(/\\\[/g, '[').replace(/\\\]/g, ']').replace(/★+\s*/g, '').trim();

const TABLE_W = 9360; // 6.5in usable on Letter with 1in margins

function buildTable(rows) {
  const cols = rows[0].length;

  // ---- measure: weight each column by its typical content length ----
  // header text counts for less (headers are short but the column may be wide)
  const weights = new Array(cols).fill(0);
  for (let c = 0; c < cols; c++) {
    let total = 0, n = 0;
    for (let r = 0; r < rows.length; r++) {
      const raw = clean(rows[r][c] || '').replace(/\*+/g, '');
      // long cells matter more than short ones, but sub-linearly
      total += Math.sqrt(raw.length + 1) * (r === 0 ? 0.6 : 1);
      n += (r === 0 ? 0.6 : 1);
    }
    weights[c] = n ? total / n : 1;
  }

  // ---- allocate: proportional, then clamp, then re-normalise ----
  const MIN = Math.round(TABLE_W * 0.085);           // no column narrower than ~8.5%
  const MAX = Math.round(TABLE_W * (cols <= 3 ? 0.55 : 0.40));
  const sum = weights.reduce((a, b) => a + b, 0);
  let widths = weights.map(w => Math.round((w / sum) * TABLE_W));
  widths = widths.map(w => Math.min(MAX, Math.max(MIN, w)));

  // re-normalise so the columns sum exactly to TABLE_W
  const drift = TABLE_W - widths.reduce((a, b) => a + b, 0);
  if (drift !== 0) {
    // push the drift onto the widest column, which can absorb it
    const widest = widths.indexOf(Math.max(...widths));
    widths[widest] += drift;
  }

  // ---- type size scales down as the table gets wider ----
  const fs = cols >= 6 ? 16 : cols === 5 ? 17 : cols === 4 ? 18 : 19;

  const trs = rows.map((cells, ri) => new TableRow({
    tableHeader: ri === 0,
    cantSplit: false,
    children: cells.map((c, ci) => new TableCell({
      width: { size: widths[ci], type: WidthType.DXA },
      shading: ri === 0
        ? { type: ShadingType.CLEAR, fill: 'E8EDF2', color: 'auto' }
        : undefined,
      margins: { top: 50, bottom: 50, left: 80, right: 80 },
      children: [new Paragraph({
        spacing: { before: 15, after: 15, line: 240 },
        alignment: AlignmentType.LEFT,
        children: inline(clean(c), { size: fs, bold: ri === 0 ? true : undefined }),
      })],
    })),
  }));

  return new Table({
    columnWidths: widths,
    width: { size: TABLE_W, type: WidthType.DXA },
    layout: TableLayoutType.FIXED,
    rows: trs,
  });
}

// pull the NOTES block out and turn it into Word footnotes
const footnotes = {};
const notesIdx = md.indexOf('\n## NOTES');
if (notesIdx !== -1) {
  const after = md.slice(notesIdx);
  const bibIdx = after.indexOf('\n## Bibliography');
  const notesBlock = bibIdx === -1 ? after : after.slice(0, bibIdx);
  const rest = bibIdx === -1 ? '' : after.slice(bibIdx);
  md = md.slice(0, notesIdx) + rest;
  const re = /^\[\^(\d+)\]:\s*([\s\S]*?)(?=\n\[\^\d+\]:|$)/gm;
  let m;
  while ((m = re.exec(notesBlock)) !== null) {
    footnotes[Number(m[1])] = {
      children: [new Paragraph({
        spacing: { after: 60, line: 220 },
        children: inline(clean(m[2].replace(/\s+/g, ' ')), { size: 17 }),
      })],
    };
  }
}
const lines = md.split('\n');

const children = [];

// Title page
children.push(new Paragraph({
  spacing: { before: 2400, after: 240 },
  alignment: AlignmentType.CENTER,
  children: [new TextRun({ text: 'Speaking Script', bold: true, size: 40 })],
}));
children.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { after: 480 },
  children: [new TextRun({
    text: 'Future of Cyber Operations: Vulnerabilities of Critical National Infrastructure',
    size: 22, italics: true,
  })],
}));
children.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { after: 120 },
  children: [new TextRun({ text: 'Ten to twelve minute talk, with the source for every claim', size: 18 })],
}));
children.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  children: [new TextRun({ text: 'Slide by slide: what to say, and the evidence behind it', size: 16, color: '555555' })],
}));
children.push(new Paragraph({ children: [new PageBreak()] }));

// TOC
children.push(new Paragraph({
  heading: HeadingLevel.HEADING_1,
  spacing: { after: 200 },
  children: [new TextRun({ text: 'Contents', bold: true })],
}));
children.push(new TableOfContents('Contents', { hyperlink: true, headingStyleRange: '1-3' }));
children.push(new Paragraph({ children: [new PageBreak()] }));

let i = 0;
let skippedTitle = false;
while (i < lines.length) {
  let line = lines[i];
  const t = line.trim();

  // skip the markdown H1 title (already on title page)
  if (!skippedTitle && /^# /.test(t)) { skippedTitle = true; i++; continue; }

  if (t === '' ) { i++; continue; }

  // horizontal rule
  if (/^---+$/.test(t)) {
    children.push(new Paragraph({
      spacing: { before: 120, after: 120 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: 'BBBBBB', space: 1 } },
      children: [new TextRun({ text: '' })],
    }));
    i++; continue;
  }

  // table
  if (t.startsWith('|')) {
    const raw = [];
    while (i < lines.length && lines[i].trim().startsWith('|')) { raw.push(lines[i].trim()); i++; }
    const rows = raw
      .filter(r => !/^\|[\s:|-]+\|$/.test(r))
      .map(r => r.replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim()));
    if (rows.length) {
      children.push(buildTable(rows));
      children.push(new Paragraph({ spacing: { after: 160 }, children: [new TextRun('')] }));
    }
    continue;
  }

  // headings
  let hm = t.match(/^(#{2,4})\s+(.*)$/);
  if (hm) {
    const lvl = hm[1].length;
    const level = lvl === 2 ? HeadingLevel.HEADING_1 : lvl === 3 ? HeadingLevel.HEADING_2 : HeadingLevel.HEADING_3;
    children.push(new Paragraph({
      heading: level,
      spacing: { before: lvl === 2 ? 360 : 240, after: 140 },
      keepNext: true,
      children: inline(clean(hm[2])),
    }));
    i++; continue;
  }

  // blockquote (may span lines)
  if (t.startsWith('>')) {
    const buf = [];
    while (i < lines.length && lines[i].trim().startsWith('>')) {
      buf.push(lines[i].trim().replace(/^>\s?/, ''));
      i++;
    }
    const text = clean(buf.join(' ').replace(/\s+/g, ' '));
    if (text) {
      children.push(new Paragraph({
        indent: { left: 480, right: 360 },
        spacing: { before: 140, after: 140 },
        border: { left: { style: BorderStyle.SINGLE, size: 12, color: '7A93AC', space: 8 } },
        children: inline(text, { size: 21, italics: true }),
      }));
    }
    continue;
  }

  // bullet list
  let bm = t.match(/^[-*]\s+(.*)$/);
  if (bm) {
    children.push(new Paragraph({
      bullet: { level: 0 },
      spacing: { after: 60 },
      children: inline(clean(bm[1])),
    }));
    i++; continue;
  }

  // numbered list
  let nm = t.match(/^(\d+)\.\s+(.*)$/);
  if (nm) {
    children.push(new Paragraph({
      numbering: { reference: 'nums', level: 0 },
      spacing: { after: 60 },
      children: inline(clean(nm[2])),
    }));
    i++; continue;
  }

  // paragraph: gather continuation lines
  const buf = [t];
  i++;
  while (i < lines.length) {
    const nx = lines[i].trim();
    if (nx === '' || nx.startsWith('|') || nx.startsWith('>') || /^#{2,4}\s/.test(nx)
        || /^[-*]\s/.test(nx) || /^\d+\.\s/.test(nx) || /^---+$/.test(nx)) break;
    buf.push(nx); i++;
  }
  children.push(new Paragraph({
    spacing: { after: 140, line: 300 },
    alignment: AlignmentType.JUSTIFIED,
    children: inline(clean(buf.join(' '))),
  }));
}

const doc = new Document({
  footnotes,
  creator: 'Strategic Studies research',
  title: 'The Price of Patience',
  description: 'AI autonomy, costly signalling, and the strategic meaning of cyber pre-positioning',
  numbering: {
    config: [{
      reference: 'nums',
      levels: [{
        level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.START,
        style: { paragraph: { indent: { left: 720, hanging: 360 } } },
      }],
    }],
  },
  styles: {
    default: {
      document: { run: { font: 'Calibri', size: 22 } },
      heading1: { run: { font: 'Calibri', size: 30, bold: true, color: '1F3355' } },
      heading2: { run: { font: 'Calibri', size: 25, bold: true, color: '2E4B72' } },
      heading3: { run: { font: 'Calibri', size: 22, bold: true, color: '3A5A80' } },
    },
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840, orientation: PageOrientation.PORTRAIT },
        margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 },
      },
    },
    children,
  }],
});

Packer.toBuffer(doc).then(b => { fs.writeFileSync(OUT, b); console.log('wrote', OUT, b.length, 'bytes'); });
