/*
 * THE NEW RESOURCE ORDER
 * Critical Minerals and the Geopolitics of the Energy Transition
 *
 * Build:  NODE_PATH=../deck/node_modules node build-deck.js
 * Output: the-new-resource-order.pptx
 */

const pptxgen = require('pptxgenjs');

/* Set PRESENTER to the name that should be credited on the title slide.
   Leave it an empty string to ship the deck without a personal byline. */
const PRESENTER = '';

const p = new pptxgen();
p.layout = 'LAYOUT_WIDE';
p.author = PRESENTER || 'IIRIS International Presentation Series';
p.company = 'IIRIS';
p.title = 'The New Resource Order';
p.subject = 'Critical Minerals and the Geopolitics of the Energy Transition';

/* ---------- palette: graphite ore and oxidised copper ---------- */
const INK    = '15191F';   // graphite, the dominant tone
const SLATE  = '222B36';   // raised surface on dark slides
const COPPER = 'BE5F26';   // accent
const AMBER  = 'E39A5C';   // light accent, dark backgrounds only
const TEAL   = '2C7A72';   // secondary data series
const WHITE  = 'FFFFFF';
const STONE  = 'F1F3F5';   // card fill on light slides
const EDGE   = 'DFE4E9';   // card border
const GREY   = '69737F';   // muted body on light
const MIST   = 'AEBACA';   // muted body on dark

const H = 'Cambria';       // headings
const B = 'Calibri';       // body

const W = 13.333, M = 0.7, CW = W - 2 * M;

/* column grids that land flush on both margins */
const G = {
  2: { w: 5.7965, s: 6.1365 },
  3: { w: 3.7778, s: 4.0778 },
  4: { w: 2.7733, s: 3.0533 }
};
const gx = (n, i) => M + i * G[n].s;

/* ---------- helpers ---------- */
function darkSlide() {
  const s = p.addSlide();
  s.background = { color: INK };
  return s;
}

/* the repeating motif: a squared "ore block" carrying a number */
function block(s, label, x, y, d, fill, txt, fs) {
  s.addShape(p.ShapeType.roundRect, {
    x, y, w: d, h: d, rectRadius: 0.05, fill: { color: fill || COPPER }
  });
  s.addText(String(label), {
    x, y, w: d, h: d, margin: 0, align: 'center', valign: 'middle',
    fontFace: H, fontSize: fs || (d >= 0.5 ? 15 : 11.5), bold: true, color: txt || WHITE
  });
}

function kicker(s, t, color) {
  s.addText(t.toUpperCase(), {
    x: M, y: 0.42, w: CW, h: 0.26, margin: 0, valign: 'top',
    fontFace: B, fontSize: 11.5, bold: true, color: color || COPPER, charSpacing: 2.4
  });
}

function lightSlide(title, kick) {
  const s = p.addSlide();
  s.background = { color: WHITE };
  if (kick) kicker(s, kick);
  s.addText(title, {
    x: M, y: 0.74, w: CW, h: 0.58, margin: 0, valign: 'top',
    fontFace: H, fontSize: 30, bold: true, color: INK
  });
  return s;
}

function deck(title, kick) {
  const s = darkSlide();
  kicker(s, kick, AMBER);
  s.addText(title, {
    x: M, y: 0.74, w: CW, h: 0.58, margin: 0, valign: 'top',
    fontFace: H, fontSize: 30, bold: true, color: WHITE
  });
  return s;
}

function card(s, x, y, w, h, fill, line) {
  s.addShape(p.ShapeType.roundRect, {
    x, y, w, h, rectRadius: 0.06,
    fill: { color: fill || STONE },
    line: { color: line || EDGE, width: 0.75 }
  });
}

function txt(s, t, o) {
  s.addText(t, Object.assign({ margin: 0, valign: 'top', fontFace: B, color: GREY }, o));
}

function source(s, t, onDark) {
  s.addText(t, {
    x: M, y: 6.94, w: CW, h: 0.3, margin: 0, valign: 'top',
    fontFace: B, fontSize: 9.5, color: onDark ? '7C889A' : '8B95A1'
  });
}

function bullets(items) {
  return items.map((it, k) => ({
    text: it, options: { bullet: true, breakLine: k < items.length - 1 }
  }));
}

/* ============================================================
   1 · TITLE
   ============================================================ */
{
  const s = darkSlide();

  const field = [
    [10.55, 0.55, 1.15], [11.85, 0.55, 0.72], [10.55, 1.85, 0.72],
    [11.42, 1.85, 1.15], [12.72, 1.85, 0.55], [11.42, 3.15, 0.55]
  ];
  field.forEach(([x, y, d], i) => {
    s.addShape(p.ShapeType.roundRect, {
      x, y, w: d, h: d, rectRadius: 0.05,
      fill: { color: i % 3 === 0 ? COPPER : SLATE }
    });
  });

  txt(s, 'IIRIS  ·  INTERNATIONAL PRESENTATION SERIES  ·  2026', {
    x: M, y: 0.62, w: 9.2, h: 0.28, fontSize: 11.5, bold: true, color: AMBER, charSpacing: 2.4 });

  txt(s, 'THE NEW\nRESOURCE ORDER', {
    x: M, y: 1.18, w: 9.3, h: 1.8, fontFace: H, fontSize: 50, bold: true, color: WHITE, lineSpacing: 54 });

  txt(s, 'Critical Minerals and the Geopolitics of the Energy Transition', {
    x: M, y: 3.06, w: 9.3, h: 0.42, fontFace: H, fontSize: 19, color: MIST });

  card(s, M, 3.86, 9.3, 1.56, SLATE, SLATE);
  txt(s, 'The last century’s power ran on who owned the oil.', {
    x: M + 0.44, y: 4.06, w: 8.4, h: 0.42, fontFace: H, fontSize: 19, color: WHITE });
  txt(s, 'This one will turn on who controls the refinery.', {
    x: M + 0.44, y: 4.56, w: 8.4, h: 0.42, fontFace: H, fontSize: 19, bold: true, color: AMBER });

  const byline = PRESENTER
    ? 'Presented by ' + PRESENTER + '  ·  Research, analysis and design by the author'
    : 'Prepared for the International Institute for Research and International Studies';
  txt(s, byline, { x: M, y: 5.78, w: 9.6, h: 0.3, fontSize: 13, color: MIST });
  txt(s, 'Evidence base: IEA Global Critical Minerals Outlook 2026, World Bank, USGS, African Union, UNECA, CSIS  ·  August 2026', {
    x: M, y: 6.16, w: 11.2, h: 0.3, fontSize: 10.5, color: '7C889A' });

  s.addNotes('Open on the contrast, not on the title. For a hundred years the question that decided alliances and wars was who owned the oil. ' +
    'The energy transition does not remove that question. It relocates it. The bottleneck is no longer the wellhead, it is the refinery and the ' +
    'processing plant. Everything in the next twenty minutes follows from that single relocation. About forty-five seconds, then move on.');
}

/* ============================================================
   2 · THE ARGUMENT
   ============================================================ */
{
  const s = lightSlide('The argument in one slide', 'Thesis');

  card(s, M, 1.42, CW, 1.5, INK, INK);
  txt(s, 'Decarbonisation has quietly become the most concentrated supply-chain dependency in the modern world economy — and no country can decarbonise alone.',
    { x: M + 0.45, y: 1.62, w: CW - 0.9, h: 1.12, fontFace: H, fontSize: 18, color: WHITE, lineSpacing: 25 });

  const arg = [
    ['Concentration moved downstream',
     'The scarcity is not geological. Deposits are spread across dozens of states. The chokepoint is refining and component manufacture, where a single supplier now averages 70% of world capacity.'],
    ['Climate policy is now security policy',
     'Once one state can price, licence or halt the inputs to another’s grid, cars and defence systems, the energy transition stops being an environmental file and becomes a security file.'],
    ['Redundancy, not autarky',
     'No economy can rebuild the whole chain at home. The realistic objective is a system with more than one path through every stage — plus rules that make interruption costly.']
  ];
  arg.forEach(([h, b], i) => {
    const x = gx(3, i);
    card(s, x, 3.1, G[3].w, 2.62);
    block(s, i + 1, x + 0.34, 3.36, 0.44);
    txt(s, h, { x: x + 0.34, y: 3.96, w: G[3].w - 0.68, h: 0.6,
      fontFace: H, fontSize: 15, bold: true, color: INK, lineSpacing: 19 });
    txt(s, b, { x: x + 0.34, y: 4.62, w: G[3].w - 0.68, h: 1.0, fontSize: 11, lineSpacing: 15.5 });
  });

  txt(s, 'Route:  definition  →  historical context  →  concentration data  →  case studies  →  governance  →  scenarios  →  recommendations',
    { x: M, y: 6.0, w: CW, h: 0.34, fontSize: 11.5, italic: true });

  s.addNotes('State the claim plainly and do not soften it. Three moves. One: the scarcity is political, not geological. ' +
    'Two: that turns a climate file into a security file. Three: the answer is not self-sufficiency, which is unaffordable, but redundancy — ' +
    'more than one route through every stage — backed by rules. Everything after this slide is evidence for those three claims.');
}

/* ============================================================
   3 · BACKGROUND
   ============================================================ */
{
  const s = lightSlide('How a climate question became a strategic one', 'Introduction and background');

  const pts = [
    ['A different physics of energy',
     'Fossil systems consume fuel continuously; clean systems front-load their resource use into hardware. A wind farm, a battery or a transmission line is a one-off act of materials procurement that then runs for decades.'],
    ['Materials intensity multiplies',
     'An electric vehicle requires roughly six times the mineral input of a comparable combustion car; an offshore wind installation many times that of a gas plant of similar capacity.'],
    ['Demand arrived faster than supply',
     'Lithium demand grew by close to 30% in a single year against a historical trend near 10%, while a new mine still takes on average well over a decade from discovery to first production.'],
    ['Industrial policy returned',
     'The United States, European Union, China, India, Japan and Korea now all run explicit state programmes for mineral supply. Markets no longer set these prices alone.']
  ];
  pts.forEach(([h, b], i) => {
    const y = 1.5 + i * 1.34;
    block(s, i + 1, M, y + 0.02, 0.42);
    txt(s, h, { x: M + 0.66, y: y, w: 7.0, h: 0.32, fontFace: H, fontSize: 15, bold: true, color: INK });
    txt(s, b, { x: M + 0.66, y: y + 0.36, w: 7.0, h: 0.86, fontSize: 11.5, lineSpacing: 16 });
  });

  const stats = [
    ['~6×', 'mineral input of an electric car versus a petrol equivalent'],
    ['~30%', 'single-year growth in lithium demand, driven overwhelmingly by batteries'],
    ['10–17 yrs', 'typical lead time from mineral discovery to producing mine']
  ];
  stats.forEach(([n, l], i) => {
    const y = 1.5 + i * 1.72;
    const dark = i === 0;
    card(s, 8.5, y, 4.13, 1.5, dark ? INK : STONE, dark ? INK : EDGE);
    txt(s, n, { x: 8.82, y: y + 0.16, w: 3.6, h: 0.56, fontFace: H, fontSize: 31, bold: true, color: dark ? AMBER : COPPER });
    txt(s, l, { x: 8.82, y: y + 0.82, w: 3.5, h: 0.56, fontSize: 11, color: dark ? MIST : GREY, lineSpacing: 14.5 });
  });

  source(s, 'Sources: IEA, Global Critical Minerals Outlook 2025 and 2026; IEA, The Role of Critical Minerals in Clean Energy Transitions.');

  s.addNotes('The key idea here is the change in the physics. Fossil energy is a flow: you buy fuel forever. Clean energy is a stock: you buy the ' +
    'materials once, in the hardware, and then generate for twenty-five years. That is strategically better in the long run and strategically worse ' +
    'in the short run, because it concentrates the vulnerability into a single procurement moment — and that moment is happening now, everywhere, at once.');
}

/* ============================================================
   4 · DEFINITION
   ============================================================ */
{
  const s = lightSlide('What actually makes a mineral “critical”', 'Definition and scope');

  txt(s, 'Criticality is not a property of the rock. It is a judgement about a state’s exposure — which is why national lists differ.',
    { x: M, y: 1.42, w: CW, h: 0.34, fontSize: 13.5 });

  const eq = [
    ['ECONOMIC IMPORTANCE', 'How much output, employment and strategic capability depends on the input'],
    ['SUPPLY RISK', 'Geological concentration, refining concentration, governance quality, substitutability'],
    ['CRITICALITY', 'The score that places a mineral on a national or regional strategic list']
  ];
  eq.forEach(([t, d], i) => {
    const x = gx(3, i);
    const dark = i === 2;
    card(s, x, 1.92, G[3].w, 1.42, dark ? INK : STONE, dark ? INK : EDGE);
    txt(s, t, { x: x + 0.28, y: 2.1, w: G[3].w - 0.56, h: 0.28,
      fontFace: H, fontSize: 13.5, bold: true, color: dark ? AMBER : COPPER });
    txt(s, d, { x: x + 0.28, y: 2.44, w: G[3].w - 0.56, h: 0.8,
      fontSize: 10.5, color: dark ? MIST : GREY, lineSpacing: 14 });
    if (i < 2) s.addText(i === 0 ? '×' : '=', {
      x: x + G[3].w + 0.02, y: 2.38, w: 0.26, h: 0.4, margin: 0, valign: 'middle',
      align: 'center', fontFace: H, fontSize: 22, bold: true, color: COPPER });
  });

  txt(s, 'Four functional families', { x: M, y: 3.62, w: 6, h: 0.32, fontFace: H, fontSize: 16, bold: true, color: INK });

  const fam = [
    ['Battery metals', 'Lithium · cobalt · nickel · graphite · manganese', 'Storage: vehicles and grid firming'],
    ['Magnet metals', 'Neodymium · praseodymium · dysprosium · terbium', 'Motors, turbines, guidance systems'],
    ['Semiconductor metals', 'Gallium · germanium · antimony · silicon', 'Chips, optics, sensors, munitions'],
    ['Grid and structure', 'Copper · aluminium · silver · steel alloys', 'Transmission, wiring, construction']
  ];
  fam.forEach(([t, list, use], i) => {
    const x = gx(4, i);
    const iw = G[4].w - 0.52;
    card(s, x, 4.06, G[4].w, 2.34);
    block(s, i + 1, x + 0.26, 4.26, 0.38, COPPER, WHITE, 11);
    txt(s, t, { x: x + 0.26, y: 4.74, w: iw, h: 0.34, fontFace: H, fontSize: 13.5, bold: true, color: INK });
    txt(s, list, { x: x + 0.26, y: 5.12, w: iw, h: 0.72, fontSize: 10.5, color: COPPER, lineSpacing: 14 });
    txt(s, use, { x: x + 0.26, y: 5.86, w: iw, h: 0.46, fontSize: 10.5, italic: true, lineSpacing: 13.5 });
  });

  source(s, 'Definitions synthesised from the EU Critical Raw Materials Act (2024), the US Geological Survey critical minerals list, and IEA methodology.');

  s.addNotes('Make the point that criticality is relative. Japan and Chile would not write the same list, because criticality depends on what your ' +
    'economy makes and who you can buy from. This matters diplomatically: when negotiators say critical minerals they are often not talking about ' +
    'the same set of substances at all, and the first job in any bilateral is to agree the list.');
}

/* ============================================================
   5 · HISTORICAL CONTEXT
   ============================================================ */
{
  const s = deck('Four moments that built the present system', 'Historical and international context');

  const ev = [
    ['1973', 'The oil weapon', 'The OPEC embargo sets the template: a producer group converts a commodity into diplomatic leverage, and importing states answer with strategic reserves and a new agency to coordinate them — the IEA.'],
    ['2010', 'The rare-earth signal', 'Amid a maritime dispute with Japan, Chinese rare-earth shipments are disrupted. Prices spike, then collapse. Two lessons land at once: the leverage is real, and using it accelerates the search for alternatives.'],
    ['2020', 'The producer answer', 'Indonesia bans exports of unprocessed nickel ore, forcing smelting onshore. The WTO rules against it; Indonesia appeals into a paralysed Appellate Body and keeps the policy. Value addition beats legal compliance.'],
    ['2024–25', 'Architecture, not episode', 'China moves from ad hoc restriction to a standing licensing system covering gallium, germanium, antimony, graphite and heavy rare earths — with extraterritorial reach modelled on US export-control law.']
  ];
  ev.forEach(([yr, t, d], i) => {
    const x = gx(4, i);
    const iw = G[4].w - 0.52;
    card(s, x, 1.5, G[4].w, 3.86, SLATE, SLATE);
    txt(s, yr, { x: x + 0.26, y: 1.74, w: iw, h: 0.44, fontFace: H, fontSize: 24, bold: true, color: AMBER });
    txt(s, t, { x: x + 0.26, y: 2.26, w: iw, h: 0.62, fontFace: H, fontSize: 15, bold: true, color: WHITE, lineSpacing: 19 });
    txt(s, d, { x: x + 0.26, y: 2.94, w: iw, h: 2.3, fontSize: 11, color: MIST, lineSpacing: 15.5 });
  });

  card(s, M, 5.66, CW, 0.9, SLATE, SLATE);
  txt(s, 'The pattern across all four: leverage is exercised at whichever stage of the chain is hardest to duplicate — and that stage keeps moving.',
    { x: M + 0.42, y: 5.9, w: CW - 0.84, h: 0.44, fontFace: H, fontSize: 14.5, italic: true, color: AMBER });

  s.addNotes('Do not read the four boxes. Draw the line through them. In 1973 the hard-to-duplicate stage was the oilfield. By 2010 it was rare-earth ' +
    'separation chemistry. By 2020 producers realised the same logic could work for them, in reverse. And by 2025 what had been a series of episodes ' +
    'had become a standing legal architecture. That is the real change: from incident to institution.');
}

/* ============================================================
   6 · CONCENTRATION DATA
   ============================================================ */
{
  const s = lightSlide('One supplier, most of the world’s capacity', 'The current global situation');

  txt(s, 'Share of global refined output held by the single largest supplier, 2025',
    { x: M, y: 1.36, w: 7.6, h: 0.3, fontSize: 12.5 });

  s.addChart(p.ChartType.bar, [{
    name: 'Top supplier share (%)',
    labels: ['Copper', 'Nickel', 'Lithium', 'Cobalt', 'Manganese', 'Graphite', 'Rare earths', 'Gallium'],
    values: [44, 63, 70, 76, 90, 91, 92, 98]
  }], {
    x: M - 0.12, y: 1.7, w: 7.9, h: 4.9,
    barDir: 'bar', barGapWidthPct: 45,
    chartColors: [COPPER],
    showValue: true, dataLabelPosition: 'outEnd',
    dataLabelFontFace: B, dataLabelFontSize: 11, dataLabelColor: INK, dataLabelFormatCode: '0"%"',
    valAxisMaxVal: 110, valAxisHidden: true,
    catAxisLabelFontFace: B, catAxisLabelFontSize: 12, catAxisLabelColor: INK,
    catGridLine: { style: 'none' }, valGridLine: { style: 'none' },
    showLegend: false, showTitle: false,
    plotArea: { fill: { color: WHITE } }
  });

  const notes = [
    ['70%', 'Average share held by the top refining country across energy minerals in 2025 — up from 68% in 2020. Concentration is still rising.'],
    ['Midstream', 'For most of these minerals the country that refines is not the country that mines. Congolese cobalt and Australian lithium are overwhelmingly processed in China.'],
    ['Fragile by design', 'This is not an accident of geology. It is the result of two decades in which processing was treated as a low-margin, high-pollution activity best located elsewhere.']
  ];
  notes.forEach(([h, b], i) => {
    const y = 1.7 + i * 1.66;
    card(s, 8.72, y, 3.91, 1.5);
    txt(s, h, { x: 9.0, y: y + 0.14, w: 3.4, h: 0.34, fontFace: H, fontSize: 17, bold: true, color: COPPER });
    txt(s, b, { x: 9.0, y: y + 0.52, w: 3.4, h: 0.92, fontSize: 10.5, lineSpacing: 14 });
  });

  source(s, 'Source: IEA, Global Critical Minerals Outlook 2026; CSIS on gallium. Figures are approximate shares of refined or processed output.');

  s.addNotes('Let the chart do the work; pause before speaking. The number to hold on to is seventy per cent — that is the average, not the worst case. ' +
    'And note the direction of travel: it was sixty-eight in 2020. Every diversification announcement of the last five years has not yet bent this curve. ' +
    'Announcements are not capacity.');
}

/* ============================================================
   7 · THE CHOKEPOINT
   ============================================================ */
{
  const s = lightSlide('The chokepoint is the midstream, not the mine', 'Analysis');

  const stages = [
    ['EXTRACTION', 'Geologically dispersed', 'Deposits exist across Africa, Latin America, Australia, Canada and Central Asia. No single state controls the ore.'],
    ['REFINING', 'Structurally concentrated', 'Separation chemistry is capital-heavy, pollution-intensive and slow to permit. One state built it at scale while others outsourced it.'],
    ['COMPONENTS', 'Concentrated and rising', 'Cathodes, anodes and permanent magnets sit even closer to a single supplier than refining does.'],
    ['ASSEMBLY', 'Widely distributed', 'Cars, turbines and electronics are assembled in many countries — which is precisely why an upstream restriction propagates so widely.']
  ];
  stages.forEach(([t, sub, d], i) => {
    const x = gx(4, i);
    const iw = G[4].w - 0.52;
    const hot = i === 1 || i === 2;
    card(s, x, 1.52, G[4].w, 2.92, hot ? INK : STONE, hot ? INK : EDGE);
    txt(s, t, { x: x + 0.26, y: 1.72, w: iw, h: 0.28, fontSize: 11, bold: true,
      color: hot ? AMBER : GREY, charSpacing: 1.6 });
    txt(s, sub, { x: x + 0.26, y: 2.04, w: iw, h: 0.6, fontFace: H, fontSize: 15, bold: true,
      color: hot ? WHITE : INK, lineSpacing: 19 });
    txt(s, d, { x: x + 0.26, y: 2.72, w: iw, h: 1.85, fontSize: 11,
      color: hot ? MIST : GREY, lineSpacing: 15 });
    if (i < 3) s.addShape(p.ShapeType.rightArrow, {
      x: x + G[4].w + 0.03, y: 2.86, w: 0.22, h: 0.24, fill: { color: COPPER }
    });
  });

  card(s, M, 4.78, CW, 1.66, STONE);
  txt(s, 'Why this distinction decides policy', { x: M + 0.4, y: 5.12, w: 4.1, h: 0.6,
    fontFace: H, fontSize: 14.5, bold: true, color: INK, lineSpacing: 19 });
  txt(s, 'A state that funds exploration but not processing has bought itself ore it still cannot use. Most Western mineral strategies of the past five years have been written at the wrong end of the chain — and the two stages that matter are the two with the worst environmental politics at home.',
    { x: M + 4.7, y: 5.08, w: CW - 5.1, h: 1.1, fontSize: 11.5, lineSpacing: 16 });

  s.addNotes('This is the analytical heart of the presentation. If the audience takes one slide away, it should be this one. Ore is common; the ability ' +
    'to turn ore into battery-grade material is not. And the reason is not technical secrecy — refining is dirty, slow to permit and low-margin, so it ' +
    'was deliberately offshored. The dependency was chosen, not imposed. That also means it can be unchosen, expensively and slowly.');
}

/* ============================================================
   8 · STAKEHOLDERS
   ============================================================ */
{
  const s = lightSlide('Who sits at the table — and who does not', 'Major actors and stakeholders');

  const act = [
    ['Resource states', 'DR Congo · Indonesia · Chile · Australia · Guinea · Zimbabwe · Kazakhstan',
     'Hold the deposits. Increasingly refuse to export them raw. Their leverage is real but time-limited by substitution.'],
    ['The refining power', 'China',
     'Converts most of the world’s ore into usable material, and has built the legal machinery to license who receives it.'],
    ['Consumer economies', 'EU · United States · Japan · Korea · India',
     'Large demand, thin midstream. Responding with subsidy, stockpiles, friend-shoring clubs and bilateral partnerships.'],
    ['Corporate actors', 'Miners · refiners · automakers · commodity traders',
     'Offtake contracts and equity stakes often determine real dependency more than state policy does.'],
    ['Multilateral institutions', 'UN · IEA · WTO · ISA · OECD · World Bank',
     'Provide data, standards and dispute settlement — but no institution holds a mandate over mineral supply security as such.'],
    ['Communities and labour', 'Artisanal miners · indigenous peoples · host municipalities',
     'Bear the water, land and health costs. Rarely represented in the bilateral agreements that allocate the resource.']
  ];
  act.forEach(([t, who, d], i) => {
    const x = gx(3, i % 3);
    const y = 1.5 + Math.floor(i / 3) * 2.62;
    const iw = G[3].w - 0.6;
    const last = i === 5;
    card(s, x, y, G[3].w, 2.4, last ? INK : STONE, last ? INK : EDGE);
    txt(s, t, { x: x + 0.3, y: y + 0.2, w: iw, h: 0.3, fontFace: H, fontSize: 15, bold: true, color: last ? WHITE : INK });
    txt(s, who, { x: x + 0.3, y: y + 0.56, w: iw, h: 0.58, fontSize: 10.5, bold: true,
      color: last ? AMBER : COPPER, lineSpacing: 14 });
    txt(s, d, { x: x + 0.3, y: y + 1.2, w: iw, h: 1.06, fontSize: 11, color: last ? MIST : GREY, lineSpacing: 15 });
  });

  s.addNotes('Move quickly across the first five and slow down on the sixth. The asymmetry of this table is the point: the actors who carry the ' +
    'environmental and human cost of extraction are the only ones with no seat in the negotiations that allocate it. That is not a moral aside. ' +
    'It is a durability problem — agreements that exclude host communities are the ones that get renegotiated after the next election.');
}

/* ============================================================
   9 · KEY CHALLENGES
   ============================================================ */
{
  const s = lightSlide('Six structural obstacles', 'Key challenges');

  const ch = [
    ['Timeline mismatch', 'Demand curves move on a five-year political cycle. Mines and refineries move on a fifteen-year capital cycle. Policy cannot compress geology or permitting.'],
    ['Price volatility kills projects', 'Lithium and nickel prices collapsed, then rebounded. Investors will not finance a decade-long asset against a two-year price signal without a floor.'],
    ['The environmental paradox', 'Clean technology requires extraction that is water-intensive, land-hungry and often sited on ecologically or culturally sensitive ground.'],
    ['Governance and conflict', 'Several of the richest deposits sit in states with weak institutions or active armed conflict, where mineral rents finance the very instability that threatens supply.'],
    ['Weak recycling base', 'Circularity is the structural answer, but the first large cohort of EV batteries will not retire in volume until the 2030s. There is a stock that does not yet exist.'],
    ['No governing institution', 'There is no minerals equivalent of the IAEA or of the WTO for energy. Rules are being written bilaterally, by the stronger party in each pair.']
  ];
  ch.forEach(([t, d], i) => {
    const x = gx(3, i % 3);
    const y = 1.5 + Math.floor(i / 3) * 2.62;
    const iw = G[3].w - 0.6;
    card(s, x, y, G[3].w, 2.4);
    block(s, i + 1, x + 0.3, y + 0.24, 0.42);
    txt(s, t, { x: x + 0.84, y: y + 0.26, w: iw - 0.54, h: 0.36, fontFace: H, fontSize: 14.5, bold: true, color: INK });
    txt(s, d, { x: x + 0.3, y: y + 0.94, w: iw, h: 1.3, fontSize: 11, lineSpacing: 15.5 });
  });

  s.addNotes('Six obstacles, but they are not equal. If pressed for the binding constraint, name the first and the last: the timeline mismatch, ' +
    'because it cannot be legislated away, and the institutional vacuum, because it is the one item on this list that diplomacy could actually fix ' +
    'this decade.');
}

/* ============================================================
   10 · DATA
   ============================================================ */
{
  const s = lightSlide('Demand is rising while investment falls', 'Relevant statistics and data');

  txt(s, 'Change in global critical-minerals investment, 2025', { x: M, y: 1.38, w: 6.4, h: 0.3, fontSize: 12.5 });

  s.addChart(p.ChartType.bar, [{
    name: 'Change in investment (%)',
    labels: ['All critical minerals', 'Battery metals', 'Lithium'],
    values: [-9, -21, -40]
  }], {
    x: M - 0.1, y: 1.68, w: 6.6, h: 3.1,
    barDir: 'col', barGapWidthPct: 60,
    chartColors: [COPPER],
    showValue: true, dataLabelPosition: 'outEnd',
    dataLabelFontFace: B, dataLabelFontSize: 12, dataLabelColor: INK, dataLabelFormatCode: '0"%"',
    valAxisMinVal: -50, valAxisMaxVal: 0, valAxisHidden: true,
    catAxisLabelFontFace: B, catAxisLabelFontSize: 11.5, catAxisLabelColor: INK,
    catGridLine: { style: 'none' }, valGridLine: { style: 'none' },
    showLegend: false, showTitle: false,
    plotArea: { fill: { color: WHITE } }
  });

  card(s, M, 5.0, 6.4, 1.62, INK, INK);
  txt(s, 'The scissors', { x: M + 0.34, y: 5.2, w: 3.0, h: 0.3, fontFace: H, fontSize: 15, bold: true, color: AMBER });
  txt(s, '2025 was the first year in half a decade in which capital spending on the minerals of the energy transition went into reverse — at exactly the point in the demand curve where it needed to accelerate.',
    { x: M + 0.34, y: 5.58, w: 5.75, h: 0.94, fontSize: 11.5, color: MIST, lineSpacing: 16 });

  const big = [
    ['40%', 'projected lithium supply deficit by 2035, even assuming every announced project is delivered'],
    ['30%', 'projected copper supply deficit by 2035, driven by falling ore grades and few new discoveries'],
    ['USD 6.5 tn', 'of downstream production outside China exposed to full implementation of the 2025 rare-earth export controls']
  ];
  big.forEach(([n, l], i) => {
    const y = 1.68 + i * 1.66;
    card(s, 7.5, y, 5.13, 1.5);
    txt(s, n, { x: 7.82, y: y + 0.14, w: 4.6, h: 0.5, fontFace: H, fontSize: 27, bold: true, color: COPPER });
    txt(s, l, { x: 7.82, y: y + 0.72, w: 4.55, h: 0.7, fontSize: 11, lineSpacing: 14.5 });
  });

  source(s, 'Source: IEA, Global Critical Minerals Outlook 2026 and 2025. Deficit figures are projections under the IEA base case.');

  s.addNotes('Slow down here for a technical audience. Two curves are moving in opposite directions. Demand for lithium and copper is heading towards a ' +
    'structural deficit by the mid-2030s, and in the same year investment fell nine per cent overall and forty per cent in lithium. Markets are behaving ' +
    'rationally — prices crashed, so capital left — but the aggregate result is a shortage the market will correct only through a price spike, and that ' +
    'spike lands hardest on consumers and on importing developing economies.');
}

/* ============================================================
   11 · CASE STUDY I — DRC
   ============================================================ */
{
  const s = lightSlide('Case study I · Cobalt in the DR Congo', 'Real-world evidence');

  card(s, M, 1.44, 5.3, 5.0, INK, INK);
  txt(s, 'The paradox of abundance', { x: M + 0.36, y: 1.66, w: 4.6, h: 0.34,
    fontFace: H, fontSize: 17, bold: true, color: AMBER });
  txt(s, 'The DRC supplies roughly three-quarters of the world’s cobalt and remains among the poorest countries on earth. The mineral leaves as concentrate; the value is added elsewhere.',
    { x: M + 0.36, y: 2.1, w: 4.6, h: 1.1, fontSize: 12, color: MIST, lineSpacing: 17 });

  const dr = [['~72%', 'of global cobalt output'],
              ['150–250k', 'artisanal miners at 40+ sites'],
              ['~40,000', 'children estimated in cobalt mining']];
  dr.forEach(([n, l], i) => {
    const y = 3.42 + i * 0.94;
    txt(s, n, { x: M + 0.36, y: y, w: 1.9, h: 0.42, fontFace: H, fontSize: 21, bold: true, color: WHITE });
    txt(s, l, { x: M + 2.14, y: y + 0.08, w: 2.8, h: 0.6, fontSize: 11, color: MIST, lineSpacing: 14.5 });
  });

  const moves = [
    ['2025 · Export quotas', 'Kinshasa halts, then replaces, free cobalt exports with a state-administered quota system run by ARECOMS — an explicit attempt to set price rather than accept it. Prices responded.'],
    ['2025 · The Washington Accords', 'A US-brokered package pairs a DRC–Rwanda peace framework with a strategic minerals partnership and regional economic integration. Security and supply are negotiated in the same room.'],
    ['The unresolved core', 'Armed groups remain active in mineral zones of the east. A minerals agreement can change who buys, and at what price; it has not yet changed who holds the ground.']
  ];
  moves.forEach(([t, d], i) => {
    const y = 1.44 + i * 1.72;
    card(s, 6.34, y, 6.29, 1.56);
    txt(s, t, { x: 6.64, y: y + 0.16, w: 5.7, h: 0.3, fontFace: H, fontSize: 14, bold: true, color: COPPER });
    txt(s, d, { x: 6.64, y: y + 0.52, w: 5.7, h: 0.94, fontSize: 11, lineSpacing: 15 });
  });

  source(s, 'Sources: USGS Mineral Commodity Summaries 2025; World Bank cobalt market analysis; US Department of State; ILO and Save the Children field estimates.');

  s.addNotes('Handle the child-labour figure with care and without sensationalism. The analytical point is that the DRC has begun doing something new: ' +
    'instead of asking for aid or better contract terms, it now manages export volumes directly, the way an oil producer does. Whether that works ' +
    'depends on whether it holds through a price cycle and whether the eastern security problem is genuinely settled — and on current evidence it is not.');
}

/* ============================================================
   12 · CASE STUDY II — INDONESIA
   ============================================================ */
{
  const s = lightSlide('Case study II · Indonesia and the nickel ban', 'Real-world evidence');

  txt(s, 'The most consequential resource-policy experiment of the decade: ban the export of raw ore, force processing onshore, accept the legal and environmental costs.',
    { x: M, y: 1.4, w: CW, h: 0.34, fontSize: 13 });

  const wins = [['~24×', 'increase in export value added per tonne'],
                ['~56%', 'of world mined nickel now Indonesian'],
                ['47%', 'share of global processed-nickel exports']];
  wins.forEach(([n, l], i) => {
    const x = gx(3, i);
    card(s, x, 1.88, G[3].w, 1.32, INK, INK);
    txt(s, n, { x: x + 0.3, y: 2.02, w: G[3].w - 0.6, h: 0.5, fontFace: H, fontSize: 28, bold: true, color: AMBER });
    txt(s, l, { x: x + 0.3, y: 2.6, w: G[3].w - 0.6, h: 0.5, fontSize: 11, color: MIST, lineSpacing: 14.5 });
  });

  const cols = [
    ['What worked', [
      'The ban was credible and was not reversed under pressure.',
      'Smelting capacity followed within five years, not fifteen.',
      'Indonesia moved from price-taker to a state that adjusts world supply: the 2026 mining quota was cut sharply to defend prices.'
    ]],
    ['What it cost', [
      'A WTO panel found the ban inconsistent with trade rules; Indonesia appealed into a non-functioning Appellate Body.',
      'Most smelting capacity is Chinese-financed and Chinese-operated: the dependency changed shape rather than disappearing.',
      'Coal-fired processing and heavy deforestation in Sulawesi and Halmahera. The transition metal has a dirty first mile.'
    ]],
    ['What travels', [
      'Scale and a captive investor made this work. Few states have both.',
      'The lesson generalises as sequencing, not prohibition: tie market access to committed processing investment.',
      'Value capture without governance conditions reproduces dependency at a higher price point.'
    ]]
  ];
  cols.forEach(([t, items], i) => {
    const x = gx(3, i);
    card(s, x, 3.36, G[3].w, 3.2);
    txt(s, t, { x: x + 0.32, y: 3.54, w: G[3].w - 0.64, h: 0.3, fontFace: H, fontSize: 14.5, bold: true, color: COPPER });
    txt(s, bullets(items), { x: x + 0.32, y: 3.92, w: G[3].w - 0.64, h: 2.5,
      fontSize: 10.5, lineSpacing: 14.5, paraSpaceAfter: 7 });
  });

  source(s, 'Sources: CSIS, Charting Geoeconomics; African Development Bank case study on nickel value addition; Argus and ANTARA on the 2026 RKAB quotas; WTO DS592.');

  s.addNotes('Present Indonesia as neither a success story nor a cautionary tale but as evidence. It proves that a determined middle power can force ' +
    'value addition onshore inside five years — that is genuinely new, and every resource ministry in Africa and Latin America has read it. But note the ' +
    'sting in the middle column: the plants are Chinese-owned. Indonesia captured the smelting margin and simultaneously deepened a strategic relationship ' +
    'it may later want to loosen. Value capture and sovereignty are not the same thing.');
}

/* ============================================================
   13 · WEAPONISATION
   ============================================================ */
{
  const s = deck('From restriction to architecture', 'Economic statecraft');

  const tl = [
    ['Dec 2024', 'Outright prohibition on gallium, germanium and antimony exports to the United States — inputs to semiconductors, optics and munitions.'],
    ['Apr 2025', 'Seven medium and heavy rare earths added to the control list, including dysprosium and terbium: the elements that let a magnet survive heat.'],
    ['Oct 2025', 'Controls extended extraterritorially to foreign-made goods containing Chinese-origin rare earths or produced with Chinese technology.'],
    ['Nov 2025', 'After the Busan leaders’ meeting, key measures are suspended for one year to November 2026 — suspended, not withdrawn.']
  ];
  tl.forEach(([d, t], i) => {
    const y = 1.6 + i * 1.16;
    block(s, i + 1, M, y + 0.04, 0.42, i === 3 ? TEAL : COPPER);
    txt(s, d, { x: M + 0.62, y: y, w: 1.5, h: 0.3, fontFace: H, fontSize: 14, bold: true, color: AMBER });
    txt(s, t, { x: M + 2.2, y: y, w: 5.5, h: 0.9, fontSize: 11.5, color: MIST, lineSpacing: 16 });
  });

  card(s, 8.5, 1.6, 4.13, 2.5, SLATE, SLATE);
  txt(s, 'USD 6.5 trillion', { x: 8.82, y: 1.8, w: 3.6, h: 0.5, fontFace: H, fontSize: 27, bold: true, color: AMBER });
  txt(s, 'of automotive, defence, energy and high-technology production outside China judged exposed if the October 2025 measures are fully implemented.',
    { x: 8.82, y: 2.4, w: 3.5, h: 1.5, fontSize: 11.5, color: MIST, lineSpacing: 16 });

  card(s, 8.5, 4.26, 4.13, 1.94, SLATE, SLATE);
  txt(s, 'The suspension is the message', { x: 8.82, y: 4.46, w: 3.5, h: 0.34, fontFace: H, fontSize: 14, bold: true, color: WHITE });
  txt(s, 'A control that is lifted for twelve months and can be reimposed is more useful than one permanently in force. It keeps the dependency priced into every board decision without triggering the substitution a permanent embargo would.',
    { x: 8.82, y: 4.84, w: 3.5, h: 1.24, fontSize: 10.5, color: MIST, lineSpacing: 14.5 });

  source(s, 'Sources: China MOFCOM announcements; CSIS; Pillsbury Law analysis of the November 2025 suspension; IEA, Global Critical Minerals Outlook 2026.', true);

  s.addNotes('The right frame for a diplomatic audience is mechanism, not accusation. What changed in 2025 is not that a state used a supply chokepoint — ' +
    'every great power has. What changed is that the instrument became permanent, licensed, case-by-case and extraterritorial. That is the same ' +
    'architecture the United States built for semiconductors, applied to materials. The system now has two such regimes pointed at each other, and ' +
    'everyone else is downstream of both.');
}

/* ============================================================
   14 · REGIONAL IMPLICATIONS
   ============================================================ */
{
  const s = lightSlide('How the pressure lands, region by region', 'Regional and international implications');

  const reg = [
    ['Africa', 'Roughly 30% of world mineral reserves and a very small share of world processing. The question is whether the African Green Minerals Strategy and the AfCFTA can build regional processing corridors before bilateral deals lock the ore into export-only contracts.'],
    ['Latin America', 'The lithium triangle holds the cheapest brine resource on earth alongside acute water conflict in Atacama and the salt flats. Chile, Bolivia and Argentina have each chosen a different balance of state control — a live natural experiment.'],
    ['Southeast Asia', 'Indonesia and the Philippines have converted resource endowment into industrial policy, but with capital and offtake overwhelmingly from one partner. ASEAN has yet to coordinate a common position.'],
    ['Europe', 'The Critical Raw Materials Act sets 2030 benchmarks of 10% extraction, 40% processing and 25% recycling, with no more than 65% of any strategic material from a single third country. The Court of Auditors warned in 2026 that most targets are unlikely to be met.'],
    ['North America and Indo-Pacific', 'Stockpiles, price floors, offtake guarantees and minerals clubs — the Minerals Security Partnership and the US–Japan and US–Australia frameworks. Effective at signalling; slow at pouring concrete.'],
    ['The systemic effect', 'Mineral endowment is becoming a criterion of alignment. States are being asked to choose a bloc not by ideology but by where their ore is processed — a form of pressure the non-aligned tradition has no established answer to.']
  ];
  reg.forEach(([t, d], i) => {
    const x = gx(3, i % 3);
    const y = 1.48 + Math.floor(i / 3) * 2.64;
    const iw = G[3].w - 0.6;
    const last = i === 5;
    card(s, x, y, G[3].w, 2.42, last ? INK : STONE, last ? INK : EDGE);
    txt(s, t, { x: x + 0.3, y: y + 0.2, w: iw, h: 0.36, fontFace: H, fontSize: 15, bold: true, color: last ? AMBER : COPPER });
    txt(s, d, { x: x + 0.3, y: y + 0.62, w: iw, h: 1.66, fontSize: 10.5, color: last ? MIST : GREY, lineSpacing: 14.5 });
  });

  s.addNotes('Finish on the sixth box and give it weight. The deepest implication is not economic. It is that a state’s geology is starting to determine ' +
    'its diplomatic room for manoeuvre. A country with a large nickel or cobalt endowment is now under pressure to pick a processing partner, and that ' +
    'choice carries alignment consequences it never used to. For the sixty-odd states that built their foreign policy on non-alignment, this is a ' +
    'genuinely new constraint.');
}

/* ============================================================
   15 · PERSPECTIVES
   ============================================================ */
{
  const s = lightSlide('Four ways to read the same facts', 'Different perspectives');

  const per = [
    ['The security realist', 'Concentration is leverage and leverage will be used. Treat minerals as a defence-industrial input: stockpile, subsidise, secure allied supply, accept the cost.',
     'Blind spot: overstates how durable leverage is. Every use of the weapon funds the alternative.'],
    ['The market liberal', 'High prices call forth supply; the 2010 rare-earth spike triggered a decade of substitution. Interference produces inefficient capacity that dies at the next price trough.',
     'Blind spot: markets clear eventually, but eventually can be a decade — and a decade is a security horizon.'],
    ['The developmentalist', 'Producing states have been locked into raw export for a century. Downstreaming is legitimate industrial policy, and the rules that forbid it were written by countries that industrialised behind tariffs.',
     'Blind spot: value capture without institutional quality can enrich an elite and entrench a new dependency.'],
    ['The ecological-justice view', 'Total material throughput, not its ownership, is the real problem. Substitution, efficiency, public transport and circularity reduce the extraction burden falling on the Global South.',
     'Blind spot: demand reduction on the required scale has no political constituency in any large economy today.']
  ];
  per.forEach(([t, pos, bs], i) => {
    const x = gx(4, i);
    const iw = G[4].w - 0.48;
    card(s, x, 1.44, G[4].w, 4.34);
    block(s, i + 1, x + 0.24, 1.66, 0.38, COPPER, WHITE, 11);
    txt(s, t, { x: x + 0.24, y: 2.14, w: iw, h: 0.6, fontFace: H, fontSize: 14.5, bold: true, color: INK, lineSpacing: 18 });
    txt(s, pos, { x: x + 0.24, y: 2.8, w: iw, h: 1.9, fontSize: 10.5, lineSpacing: 14.5 });
    txt(s, bs, { x: x + 0.24, y: 4.6, w: iw, h: 1.1, fontSize: 10, italic: true, color: COPPER, lineSpacing: 13.5 });
  });

  txt(s, 'None of the four is wrong about its own evidence. A workable policy borrows the realist’s time horizon, the liberal’s scepticism about permanent subsidy, the developmentalist’s equity claim and the ecologist’s arithmetic.',
    { x: M, y: 6.02, w: CW, h: 0.6, fontFace: H, fontSize: 13, italic: true, color: INK, lineSpacing: 19 });

  s.addNotes('Give each school its strongest form, not a caricature — that is what separates analysis from advocacy. If asked which one I hold, say the ' +
    'honest thing: the realist diagnosis with the developmentalist prescription. The dependency is real and will be exploited; but the durable answer ' +
    'runs through giving producing states a genuine stake in the system rather than through building a parallel one behind subsidy walls.');
}

/* ============================================================
   16 · INTERNATIONAL ORGANISATIONS
   ============================================================ */
{
  const s = lightSlide('What the institutions can and cannot do', 'Role of international organisations');

  const org = [
    ['IEA', 'Data, outlooks and early warning. Convenes the critical-minerals security programme.', 'No mandate over minerals as it has over oil stocks. Membership excludes most producers.'],
    ['WTO', 'The only binding forum on export restrictions; DS592 tested it directly.', 'A paralysed Appellate Body means adverse rulings can be appealed into the void.'],
    ['UN system', 'The Secretary-General’s Panel on Critical Energy Transition Minerals agreed equity and human-rights principles in 2024.', 'Principles are voluntary. No compliance mechanism and no financing attached.'],
    ['ISA', 'Sole authority over seabed minerals beyond national jurisdiction — a genuine global commons mandate.', 'Missed its own deadline for a mining code; extended a contested exploration contract in 2026 amid litigation.'],
    ['OECD', 'Due-diligence guidance for conflict-affected mineral supply chains is the de facto global standard.', 'Compliance is corporate and voluntary; enforcement depends on importing-state legislation.'],
    ['World Bank / AfDB', 'Project finance, infrastructure corridors and the technical work behind the African Green Minerals Strategy.', 'Cannot compel value addition; lending scale is small against the capital required.']
  ];
  org.forEach(([n, can, cant], i) => {
    const x = gx(3, i % 3);
    const y = 1.44 + Math.floor(i / 3) * 2.26;
    const iw = G[3].w - 0.6;
    card(s, x, y, G[3].w, 2.06);
    txt(s, n, { x: x + 0.3, y: y + 0.16, w: iw, h: 0.3, fontFace: H, fontSize: 15, bold: true, color: INK });
    txt(s, [{ text: 'Can:  ', options: { bold: true, color: TEAL } }, { text: can, options: { color: GREY } }],
      { x: x + 0.3, y: y + 0.52, w: iw, h: 0.74, fontSize: 10.5, lineSpacing: 14 });
    txt(s, [{ text: 'Cannot:  ', options: { bold: true, color: COPPER } }, { text: cant, options: { color: GREY } }],
      { x: x + 0.3, y: y + 1.26, w: iw, h: 0.74, fontSize: 10.5, lineSpacing: 14 });
  });

  card(s, M, 5.98, CW, 0.88, INK, INK);
  txt(s, 'The gap: no institution holds a mandate over mineral supply security itself. Six bodies each own a fragment — data, trade law, ethics, the seabed, due diligence, finance — and none owns the problem.',
    { x: M + 0.4, y: 6.16, w: CW - 0.8, h: 0.6, fontFace: H, fontSize: 13.5, color: WHITE, lineSpacing: 19 });

  source(s, 'Sources: UN Secretary-General’s Panel on Critical Energy Transition Minerals (2024); WTO DS592; ISA Council 2026; OECD Due Diligence Guidance.');

  s.addNotes('The "can and cannot" structure carries the argument here. Read one pair aloud, then jump to the black bar. The institutional map is not ' +
    'empty — it is fragmented. Six organisations each hold a piece and none holds the file. That is precisely the condition under which the strongest ' +
    'bilateral actor writes the rules, which is what is happening now.');
}

/* ============================================================
   17 · GLOBAL SOUTH
   ============================================================ */
{
  const s = lightSlide('The price of being upstream', 'Impact on developing countries and the Global South');

  card(s, M, 1.44, 5.2, 5.0, INK, INK);
  txt(s, '“Green” does not mean equitable', { x: M + 0.36, y: 1.66, w: 4.5, h: 0.34,
    fontFace: H, fontSize: 17, bold: true, color: AMBER });
  txt(s, 'The transition moves an environmental burden from the atmosphere, which is shared, to particular watersheds, forests and communities, which are not. Those places are overwhelmingly in the Global South.',
    { x: M + 0.36, y: 2.1, w: 4.5, h: 1.3, fontSize: 12, color: MIST, lineSpacing: 17 });

  txt(s, bullets([
    'Enclave economies: capital-intensive extraction with limited local employment or linkage.',
    'Revenue volatility: budgets built on commodity cycles that policy cannot control.',
    'Water and land: brine extraction and laterite mining in already water-stressed or forested regions.',
    'Contract asymmetry: long-tenor agreements negotiated against far better-resourced counterparties.'
  ]), { x: M + 0.36, y: 3.5, w: 4.5, h: 2.7, fontSize: 11, color: MIST, lineSpacing: 15.5, paraSpaceAfter: 9 });

  const ops = [
    ['~30%', 'of world mineral reserves are in Africa — the largest single bargaining asset the continent has held since independence.'],
    ['The window', 'Leverage lasts only while substitution is expensive. Sodium-ion chemistry and magnet-free motors are already trimming demand for specific inputs. The negotiating position is strong now and weaker later.'],
    ['What good looks like', 'Not a higher royalty rate. Processing capacity, regional infrastructure corridors, transferred technical skills, enforceable environmental standards, and pooled bargaining between producers instead of competition for the same buyer.']
  ];
  ops.forEach(([t, d], i) => {
    const y = 1.44 + i * 1.72;
    card(s, 6.34, y, 6.29, 1.56);
    txt(s, t, { x: 6.64, y: y + 0.16, w: 5.7, h: 0.32, fontFace: H, fontSize: 16, bold: true, color: COPPER });
    txt(s, d, { x: 6.64, y: y + 0.54, w: 5.7, h: 0.92, fontSize: 11, lineSpacing: 15 });
  });

  source(s, 'Sources: African Union, Africa’s Green Minerals Strategy (2025); UNECA; African Development Bank; UN Panel on Critical Energy Transition Minerals.');

  s.addNotes('This slide carries the strongest claim in the deck, so make it precisely. The transition is necessary and it is not neutral. It moves harm ' +
    'from a global commons to specific places. And the window in which producing states can convert that harm into industrial capacity is not open ' +
    'indefinitely — chemistry is moving. Sodium-ion batteries need no cobalt and no lithium. The bargaining power that exists in 2026 may not exist in ' +
    '2036, and that argues for urgency in the Global South, not patience.');
}

/* ============================================================
   18 · SOLUTIONS
   ============================================================ */
{
  const s = lightSlide('A three-layer response', 'Possible solutions');

  const layers = [
    ['01', 'Diversify supply', COPPER, [
      'Finance the midstream, not just the mine — refining and separation are the binding constraint.',
      'Price floors and contracts-for-difference so projects survive the trough of the cycle.',
      'Regional processing hubs shared by several producing states, at a scale no one of them can justify alone.',
      'Strategic reserves for the handful of inputs with no near-term substitute.'
    ]],
    ['02', 'Reduce the need', TEAL, [
      'Recycling and urban mining: recovered material is the only supply source not subject to geopolitics.',
      'Design mandates for battery collection, disassembly and material recovery.',
      'Substitution research — sodium-ion, lithium-iron-phosphate, magnet-free motors.',
      'Demand-side efficiency: smaller batteries, shared and public transport, grid flexibility.'
    ]],
    ['03', 'Govern the system', INK, [
      'A minerals security mechanism with producer states as full members, not as suppliers.',
      'A plurilateral discipline on export restrictions with a functioning appeal route.',
      'One interoperable traceability and due-diligence standard instead of five competing schemes.',
      'Binding free, prior and informed consent for affected communities, tied to project finance.'
    ]]
  ];
  layers.forEach(([n, t, c, items], i) => {
    const x = gx(3, i);
    card(s, x, 1.44, G[3].w, 4.3);
    block(s, n, x + 0.3, 1.66, 0.5, c, WHITE, 14);
    txt(s, t, { x: x + 0.94, y: 1.74, w: G[3].w - 1.24, h: 0.34, fontFace: H, fontSize: 16, bold: true, color: INK });
    txt(s, bullets(items), { x: x + 0.32, y: 2.32, w: G[3].w - 0.64, h: 3.3,
      fontSize: 10.5, lineSpacing: 14.5, paraSpaceAfter: 9 });
  });

  txt(s, 'Layer one is the most expensive route and the slowest. Layer two is the only one that shrinks the problem rather than relocating it. Layer three is the cheapest — and the least attempted.',
    { x: M, y: 6.0, w: CW, h: 0.5, fontFace: H, fontSize: 13, italic: true, color: INK, lineSpacing: 19 });

  s.addNotes('Note the ordering, because it is deliberate. Most national strategies stop at layer one — build more of everything, at home. Layer one alone ' +
    'is the most expensive route and the slowest. Layer two is the only one that shrinks the problem instead of relocating it. Layer three is the cheapest ' +
    'and the least attempted, because it requires giving producing states a vote rather than a contract.');
}

/* ============================================================
   19 · POLICY RECOMMENDATIONS
   ============================================================ */
{
  const s = lightSlide('Six recommendations, by actor', 'Policy recommendations');

  const rec = [
    ['Consumer economies', 'Shift subsidy from extraction to refining and components. Replace headline self-sufficiency targets with a measurable redundancy standard: at least two qualified suppliers, in different jurisdictions, for every strategic input.'],
    ['Producer states', 'Negotiate as a bloc where the resource allows it, and trade market access for processing investment with enforceable local-content and skills-transfer clauses. Bank the windfall in a stabilisation fund before the cycle turns.'],
    ['The multilateral system', 'Give one body a clear mandate. The most practical route is an IEA-hosted mechanism with full producer membership and a standing early-warning function for supply disruption.'],
    ['Trade governance', 'Restore a working appellate route at the WTO and negotiate a narrow plurilateral code on export restrictions: notification, time limits, and a carve-out for genuine value-addition policy.'],
    ['Development finance', 'Make concessional capital conditional on midstream capacity and regional infrastructure, not on extraction volume. Guarantee offtake for first-of-a-kind processing plants in producing countries.'],
    ['All parties', 'Fund substitution and recycling as security policy, not as environmental policy. Every tonne recovered domestically is a tonne that cannot be embargoed.']
  ];
  rec.forEach(([who, what], i) => {
    const x = gx(2, i % 2);
    const y = 1.42 + Math.floor(i / 2) * 1.74;
    card(s, x, y, G[2].w, 1.6);
    block(s, i + 1, x + 0.28, y + 0.24, 0.46);
    txt(s, who, { x: x + 0.9, y: y + 0.2, w: G[2].w - 1.2, h: 0.3, fontFace: H, fontSize: 14.5, bold: true, color: COPPER });
    txt(s, what, { x: x + 0.9, y: y + 0.56, w: G[2].w - 1.2, h: 0.98, fontSize: 10.5, lineSpacing: 14.5 });
  });

  txt(s, 'The test of any of these is not ambition but sequencing: which can be started in the next eighteen months without new treaty law.',
    { x: M, y: 6.66, w: CW, h: 0.32, fontSize: 11.5, italic: true });

  s.addNotes('If time is short, present only recommendation one and recommendation three. One corrects the single most common policy error of the last ' +
    'five years — funding mines when the constraint is refineries. Three is the institutional fix, and it is deliberately unambitious: not a new treaty ' +
    'organisation, but a mandate given to a body that already exists and already has the data.');
}

/* ============================================================
   20 · SCENARIOS
   ============================================================ */
{
  const s = lightSlide('Three futures for the mineral system', 'Future outlook to 2035');

  s.addChart(p.ChartType.line, [
    { name: 'Managed fragmentation',      labels: ['2025', '2028', '2031', '2035'], values: [70, 71, 72, 70] },
    { name: 'Weaponised bloc split',      labels: ['2025', '2028', '2031', '2035'], values: [70, 74, 77, 79] },
    { name: 'Coordinated diversification', labels: ['2025', '2028', '2031', '2035'], values: [70, 66, 60, 54] }
  ], {
    x: M - 0.1, y: 1.4, w: 6.5, h: 3.95,
    chartColors: [GREY, COPPER, TEAL],
    lineDataSymbol: 'circle', lineDataSymbolSize: 7, lineSize: 3,
    valAxisMinVal: 45, valAxisMaxVal: 85,
    valAxisLabelFontFace: B, valAxisLabelFontSize: 10, valAxisLabelColor: GREY,
    valAxisLabelFormatCode: '0"%"',
    catAxisLabelFontFace: B, catAxisLabelFontSize: 10.5, catAxisLabelColor: INK,
    valGridLine: { color: EDGE, size: 0.75 }, catGridLine: { style: 'none' },
    showLegend: true, legendPos: 'b', legendFontFace: B, legendFontSize: 10, legendColor: INK,
    showTitle: true, title: 'Average top-supplier share of refining (%)',
    titleFontFace: B, titleFontSize: 11.5, titleColor: GREY,
    plotArea: { fill: { color: WHITE } }
  });

  txt(s, 'Illustrative scenario framing by the author, anchored on the IEA 2025 baseline of 70%. Not a forecast.',
    { x: M, y: 5.46, w: 6.3, h: 0.3, fontSize: 9.5, italic: true });

  const sc = [
    ['Managed fragmentation', INK, 'Most likely. Parallel supply chains harden, duplication raises costs, restrictions are used sparingly because both sides can retaliate. Concentration barely moves; the transition gets more expensive but does not stop.'],
    ['Weaponised bloc split', COPPER, 'A sustained restriction during a crisis. Prices spike, manufacturing stalls in importing economies, and neutral producer states are forced into exclusive alignments. Climate targets slip by years.'],
    ['Coordinated diversification', TEAL, 'Requires producer states in the governance room, patient midstream capital, and recycling reaching scale in the 2030s. Technically achievable; politically the hardest of the three.']
  ];
  sc.forEach(([t, c, d], i) => {
    const y = 1.42 + i * 1.72;
    card(s, 7.1, y, 5.53, 1.56);
    txt(s, t, { x: 7.4, y: y + 0.16, w: 4.95, h: 0.3, fontFace: H, fontSize: 14.5, bold: true, color: c });
    txt(s, d, { x: 7.4, y: y + 0.52, w: 4.95, h: 0.94, fontSize: 10.5, lineSpacing: 14.5 });
  });

  txt(s, 'What separates them is not technology or price. It is whether producing states are members of the system or inputs to it.',
    { x: M, y: 6.6, w: CW, h: 0.34, fontFace: H, fontSize: 13.5, italic: true, color: INK });

  s.addNotes('Be explicit that the chart is illustrative — a research audience will respect the disclosure and distrust a fabricated forecast. Then land ' +
    'the line at the bottom. All three scenarios use the same geology and roughly the same technology. What differs between them is a political choice ' +
    'about who gets a seat. That is the argument of the whole presentation compressed into one sentence.');
}

/* ============================================================
   21 · CONCLUSION
   ============================================================ */
{
  const s = darkSlide();

  [[11.3, 0.5, 0.9], [12.4, 0.5, 0.6], [11.3, 1.6, 0.6], [12.05, 1.6, 0.95]].forEach(([x, y, d], i) => {
    s.addShape(p.ShapeType.roundRect, {
      x, y, w: d, h: d, rectRadius: 0.05, fill: { color: i === 1 ? COPPER : SLATE }
    });
  });

  kicker(s, 'Conclusion', AMBER);
  txt(s, 'What this decade decides', { x: M, y: 0.74, w: 9.5, h: 0.58, fontFace: H, fontSize: 32, bold: true, color: WHITE });

  const fin = [
    ['The dependency was built, not inherited', 'Refining concentration is the product of forty years of deliberate offshoring. What policy created, policy can unwind — but on a fifteen-year clock, not an electoral one.'],
    ['Security and equity point the same way', 'Every additional processing hub in a producing country is at once a development gain and a redundancy gain. This is the rare file where the just answer and the strategic answer coincide.'],
    ['The window is open now', 'Producer leverage depends on substitution staying expensive. Chemistry is moving. The agreements struck in the next five years will set the terms for the following twenty-five.']
  ];
  fin.forEach(([t, d], i) => {
    const y = 1.62 + i * 1.44;
    block(s, i + 1, M, y + 0.02, 0.46);
    txt(s, t, { x: M + 0.72, y: y, w: 9.6, h: 0.34, fontFace: H, fontSize: 17, bold: true, color: AMBER });
    txt(s, d, { x: M + 0.72, y: y + 0.42, w: 9.6, h: 0.86, fontSize: 12, color: MIST, lineSpacing: 17 });
  });

  card(s, M, 5.94, CW, 0.92, SLATE, SLATE);
  txt(s, 'The energy transition will be judged not only by how fast it decarbonises, but by whether it reproduces the extractive order it was meant to replace.',
    { x: M + 0.42, y: 6.14, w: CW - 0.84, h: 0.6, fontFace: H, fontSize: 16, italic: true, color: WHITE, lineSpacing: 22 });

  s.addNotes('Slow down. Three sentences, then the closing line, then stop talking — do not add a summary after it. The last line is what the room should ' +
    'carry out of the door: the transition can be fast and still unjust, and if it is, it will not hold. Then invite questions.');
}

/* ============================================================
   22 · REFERENCES
   ============================================================ */
{
  const s = lightSlide('References and sources', 'Evidence base');

  const refs = [
    ['Primary data and outlooks', [
      'International Energy Agency, Global Critical Minerals Outlook 2026 and 2025 (Paris: IEA).',
      'IEA, “Supply concentration, export restrictions and declining investment put critical mineral security at risk”, 2026.',
      'US Geological Survey, Mineral Commodity Summaries 2025 — cobalt, nickel, lithium, gallium.',
      'World Bank, Cobalt in the Democratic Republic of Congo: Market Analysis.'
    ]],
    ['Policy and legal instruments', [
      'Regulation (EU) 2024/1252, European Critical Raw Materials Act.',
      'European Court of Auditors, report on EU critical raw materials policy, February 2026.',
      'WTO, DS592: Indonesia — Measures Relating to Raw Materials.',
      'Ministry of Commerce of the People’s Republic of China, export-control announcements, 2024–2025.',
      'US Department of State, DRC–Rwanda Peace Agreement and the Washington Accords, 2025.'
    ]],
    ['Institutional and regional strategy', [
      'African Union, Africa’s Green Minerals Strategy, adopted 2025.',
      'UN Secretary-General’s Panel on Critical Energy Transition Minerals, Resourcing the Energy Transition, 2024.',
      'African Development Bank, Advancing from Nickel Mining to Downstream Processing: Lessons from Indonesia.',
      'UNECA, Africa’s critical mineral resources and intra-African trade.',
      'OECD, Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected Areas.'
    ]],
    ['Analysis and commentary', [
      'CSIS, “Beyond Rare Earths: China’s Growing Threat to Gallium Supply Chains”.',
      'CSIS, “Indonesian Industrialization: Downstreaming Up the Value Chain”.',
      'Atlantic Council and Egmont Institute, assessments of the DRC–Rwanda Washington Accords.',
      'ODI, “Europe’s critical raw materials bet: a reality check”.',
      'Mongabay and ISA Council records on the 2026 seabed exploration contract extension.'
    ]]
  ];
  refs.forEach(([t, items], i) => {
    const x = gx(2, i % 2);
    const y = 1.42 + Math.floor(i / 2) * 2.6;
    card(s, x, y, G[2].w, 2.4);
    txt(s, t, { x: x + 0.3, y: y + 0.16, w: G[2].w - 0.6, h: 0.3, fontFace: H, fontSize: 13.5, bold: true, color: COPPER });
    txt(s, bullets(items), { x: x + 0.32, y: y + 0.54, w: G[2].w - 0.64, h: 1.78,
      fontSize: 9.5, lineSpacing: 13, paraSpaceAfter: 4 });
  });

  txt(s, 'Every figure is cited on the slide where it appears. Analysis, framing, scenario construction and all wording are the author’s own.',
    { x: M, y: 6.66, w: CW, h: 0.32, fontSize: 10.5, italic: true });

  s.addNotes('Do not read this slide. Leave it on screen during questions — it is the slide that tells a research audience the deck is sourced, and it is ' +
    'the one people photograph.');
}

p.writeFile({ fileName: 'the-new-resource-order.pptx' }).then(f => console.log('Wrote ' + f));
