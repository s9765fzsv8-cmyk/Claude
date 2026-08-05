const pptxgen = require('pptxgenjs');
const p = new pptxgen();
p.layout = 'LAYOUT_WIDE';               // 13.3 x 7.5
p.author = 'Strategic Studies';
p.title  = 'The Price of Patience';

// ---- palette: midnight executive + a warning amber ----
const NAVY  = '1E2761';
const DEEP  = '141B45';
const ICE   = 'CADCFC';
const WHITE = 'FFFFFF';
const AMBER = 'D98C1F';
const INK   = '22252E';
const GREY  = '6A6F7D';
const PAPER = 'FFFFFF';

const H = 'Cambria';                     // headers
const B = 'Calibri';                      // body

const W = 13.3, HT = 7.5, M = 0.7;

// ---------- helpers ----------
function darkSlide() {
  const s = p.addSlide();
  s.background = { color: NAVY };
  return s;
}
function lightSlide(title, kicker) {
  const s = p.addSlide();
  s.background = { color: PAPER };
  if (kicker) {
    s.addText(kicker.toUpperCase(), {
      x: M, y: 0.42, w: 8, h: 0.28, margin: 0,
      fontFace: B, fontSize: 12, bold: true, color: AMBER, charSpacing: 2,
    });
  }
  s.addText(title, {
    x: M, y: 0.72, w: W - 2 * M, h: 0.75, margin: 0,
    fontFace: H, fontSize: 32, bold: true, color: NAVY,
  });
  return s;
}
// circular number badge (the deck's repeated motif)
function badge(s, n, x, y, d, fill, txtColor) {
  s.addShape(p.ShapeType.ellipse, {
    x, y, w: d, h: d, fill: { color: fill || NAVY },
  });
  s.addText(String(n), {
    x, y, w: d, h: d, margin: 0,
    align: 'center', valign: 'middle',
    fontFace: H, fontSize: d > 0.6 ? 20 : 14, bold: true, color: txtColor || WHITE,
  });
}
function card(s, x, y, w, h, fill) {
  s.addShape(p.ShapeType.roundRect, {
    x, y, w, h, rectRadius: 0.08,
    fill: { color: fill || 'F4F6FB' },
    line: { color: 'E2E7F2', width: 0.75 },
  });
}

/* ============================ 1. TITLE ============================ */
{
  const s = darkSlide();
  s.addShape(p.ShapeType.ellipse, { x: 10.4, y: -1.5, w: 5.2, h: 5.2, fill: { color: DEEP } });
  s.addShape(p.ShapeType.ellipse, { x: 11.6, y: 4.6, w: 3.4, h: 3.4, fill: { color: DEEP } });

  s.addText('THE PRICE OF PATIENCE', {
    x: M, y: 2.05, w: 9.4, h: 0.9, margin: 0,
    fontFace: H, fontSize: 44, bold: true, color: WHITE,
  });
  s.addText('What foreign code inside our power grids really tells us,\nand what AI does to that message',
    { x: M, y: 3.05, w: 9.2, h: 1.0, margin: 0,
      fontFace: B, fontSize: 19, color: ICE, lineSpacing: 28 });

  s.addShape(p.ShapeType.rect, { x: M, y: 4.35, w: 1.1, h: 0.035, fill: { color: AMBER } });

  s.addText('A study of sixteen works on cyber conflict, 2018 to 2026', {
    x: M, y: 4.68, w: 9, h: 0.3, margin: 0,
    fontFace: B, fontSize: 14, color: 'A9B6DC',
  });
  s.addNotes(
    'Open by naming the object: software left sitting inside civilian infrastructure. ' +
    'The talk asks one question. When we find it, what does it actually tell us, and does AI change the answer. ' +
    'Roughly one minute here.'
  );
}

/* ============================ 2. THE PUZZLE ============================ */
{
  const s = lightSlide('An intrusion that made no sense as spying', 'The puzzle');

  s.addText([
    { text: 'May 2023.', options: { bold: true } },
    { text: ' The United States and its Five Eyes partners named China as the source of a campaign called ' },
    { text: 'Volt Typhoon', options: { bold: true } },
    { text: '. Operators had been living inside American energy, water, communications and transport networks, and in systems supporting the military base on Guam.' },
  ], { x: M, y: 1.72, w: 6.5, h: 1.6, margin: 0, fontFace: B, fontSize: 16, color: INK, lineSpacing: 24 });

  s.addText('They took almost nothing.', {
    x: M, y: 3.45, w: 6.5, h: 0.4, margin: 0,
    fontFace: H, fontSize: 22, bold: true, color: NAVY,
  });
  s.addText('That is the puzzle. A spy steals. These operators sat still.', {
    x: M, y: 3.95, w: 6.5, h: 0.4, margin: 0,
    fontFace: B, fontSize: 15, color: GREY,
  });

  // quote block
  card(s, 7.75, 1.72, 4.85, 3.15, 'F4F6FB');
  s.addText('“', { x: 7.95, y: 1.68, w: 0.9, h: 1.05, margin: 0,
    fontFace: H, fontSize: 60, bold: true, color: ICE });
  s.addText('There is absolutely no intelligence to be gathered by putting malicious code in critical infrastructure networks.', {
    x: 8.05, y: 2.35, w: 4.25, h: 1.7, margin: 0,
    fontFace: H, fontSize: 16, italic: true, color: NAVY, lineSpacing: 24,
  });
  s.addText('General Paul Nakasone', {
    x: 8.05, y: 4.15, w: 4.25, h: 0.28, margin: 0,
    fontFace: B, fontSize: 13, bold: true, color: INK,
  });
  s.addText('Then head of US Cyber Command', {
    x: 8.05, y: 4.42, w: 4.25, h: 0.28, margin: 0,
    fontFace: B, fontSize: 12, color: GREY,
  });

  s.addNotes(
    'Set the scene quickly. The campaign was found in the systems that keep the lights and water on. ' +
    'The striking thing is what did not happen: no theft worth the effort. ' +
    'Nakasone is saying, in effect, nobody puts code there to read your email. Use the quote, then move on.'
  );
}

/* ============================ 3. THE ASSUMPTION ============================ */
{
  const s = lightSlide('So analysts read it as a warning', 'The assumption behind that reading');

  s.addText('If access gives you little to read but great power in a crisis, the reason for being there is the crisis.',
    { x: M, y: 1.68, w: 11.9, h: 0.9, margin: 0,
      fontFace: H, fontSize: 20, italic: true, color: NAVY, lineSpacing: 28 });

  // three step blocks
  const steps = [
    ['Staying hidden is hard', 'Years inside a defended network takes skill and patience. It is not cheap.'],
    ['So the act carries meaning', 'People do not pay a high price for nothing. The effort itself is the message.'],
    ['Therefore: preparation', 'The intrusion is read as a state getting ready for a fight it expects to have.'],
  ];
  steps.forEach((st, i) => {
    const x = M + i * 4.03;
    card(s, x, 2.62, 3.75, 2.35);
    badge(s, i + 1, x + 0.28, 2.9, 0.55);
    s.addText(st[0], { x: x + 0.28, y: 3.62, w: 3.2, h: 0.4, margin: 0,
      fontFace: H, fontSize: 17, bold: true, color: NAVY });
    s.addText(st[1], { x: x + 0.28, y: 4.05, w: 3.2, h: 0.85, margin: 0,
      fontFace: B, fontSize: 13.5, color: INK, lineSpacing: 19 });
  });

  s.addText('This whole reading rests on one word: expensive.', {
    x: M, y: 5.25, w: 11.9, h: 0.4, margin: 0,
    fontFace: B, fontSize: 15, bold: true, color: AMBER,
  });

  s.addNotes(
    'This is the logic the whole field runs on, in plain terms. Walk the three boxes left to right. ' +
    'Land hard on the last line: the argument only works if staying hidden is expensive. ' +
    'Flag that we will come back to that word.'
  );
}

/* ============================ 4. THE CENTRAL FINDING ============================ */
{
  const s = lightSlide('But governments do not act as if they believe it', 'The finding');

  // two comparison columns
  const cols = [
    { t: 'Volt Typhoon', sub: 'Code left inside power, water\nand transport systems',
      res: 'A technical advisory', tag: 'No sanctions. No allied statement.', c: AMBER },
    { t: 'Salt Typhoon', sub: 'Spying on phone companies\nand call records',
      res: 'Treasury sanctions', tag: 'Named entities. Real penalties.', c: NAVY },
  ];
  cols.forEach((c, i) => {
    const x = M + i * 6.15;
    card(s, x, 1.68, 5.85, 3.15, i === 0 ? 'FDF6EA' : 'F4F6FB');
    s.addText(c.t, { x: x + 0.35, y: 1.95, w: 5.1, h: 0.45, margin: 0,
      fontFace: H, fontSize: 24, bold: true, color: c.c });
    s.addText(c.sub, { x: x + 0.35, y: 2.42, w: 5.1, h: 0.7, margin: 0,
      fontFace: B, fontSize: 13.5, color: GREY, lineSpacing: 19 });
    s.addText('What the United States did', { x: x + 0.35, y: 3.18, w: 5.1, h: 0.26, margin: 0,
      fontFace: B, fontSize: 11.5, bold: true, color: GREY, charSpacing: 1 });
    s.addText(c.res, { x: x + 0.35, y: 3.46, w: 5.1, h: 0.45, margin: 0,
      fontFace: H, fontSize: 21, bold: true, color: c.c });
    s.addText(c.tag, { x: x + 0.35, y: 3.98, w: 5.1, h: 0.55, margin: 0,
      fontFace: B, fontSize: 13.5, color: INK });
  });

  s.addText('Same country. Same period. Same victim. The lesser act was punished; the graver one was not.', {
    x: M, y: 5.12, w: 11.9, h: 0.45, margin: 0,
    fontFace: H, fontSize: 18, bold: true, color: NAVY,
  });
  s.addText('Volt Typhoon coding from Baram (2026), a study of twenty joint attribution cases. Salt Typhoon sanctions from US Treasury.', {
    x: M, y: 5.62, w: 11.9, h: 0.3, margin: 0,
    fontFace: B, fontSize: 11, color: GREY,
  });

  s.addNotes(
    'This is the heart of the talk. Slow down. Read the two columns across, then deliver the bottom line. ' +
    'Weapons in the water supply got a memo. Stolen call records got sanctions. ' +
    'Ask the room to sit with how strange that ordering is. Take a full minute and a half here.'
  );
}

/* ============================ 5. WHY THE WARNING FAILS ============================ */
{
  const s = lightSlide('Three reasons the message never lands', 'Why');

  const rows = [
    ['Nobody notices', 'These operations leave no wreckage and no pictures. Nothing forces a government to act.'],
    ['The sender denies it', 'China calls the accusation disinformation. A warning nobody admits sending is hard to receive.'],
    ['It reaches the wrong desk', 'The response is written for network engineers, not for the people who decide on war and peace.'],
  ];
  rows.forEach((r, i) => {
    const y = 1.78 + i * 1.22;
    badge(s, i + 1, M, y, 0.62, NAVY);
    s.addText(r[0], { x: M + 0.92, y: y - 0.02, w: 4.0, h: 0.4, margin: 0,
      fontFace: H, fontSize: 19, bold: true, color: NAVY });
    s.addText(r[1], { x: M + 5.0, y: y - 0.02, w: 6.9, h: 0.75, margin: 0,
      fontFace: B, fontSize: 14.5, color: INK, lineSpacing: 20 });
  });

  card(s, M, 5.5, 11.9, 0.95, 'F4F6FB');
  s.addText('A threat only works if it is seen, believed, and read by the right people. This one fails all three tests.', {
    x: M + 0.4, y: 5.62, w: 11.1, h: 0.7, margin: 0, valign: 'middle',
    fontFace: H, fontSize: 17, italic: true, color: NAVY,
  });

  s.addNotes(
    'Three short beats, one each. Do not over-explain. ' +
    'The closing line is the point: for something to work as a warning it has to be seen, believed and land on the right desk. ' +
    'This one fails on all three counts.'
  );
}

/* ============================ 6. THE RECORD ============================ */
{
  const s = lightSlide('And it has never actually led anywhere', 'The record');

  const cases = [
    ['Russia inside US infrastructure', '2018 to today', 'Still sitting there. Seven years, never used.'],
    ['Volt Typhoon', '2023 to today', 'Still sitting there. Never used.'],
    ['Russia inside Ukraine', '2021 to 2022', 'Used in April 2022. Ukrainian defenders stopped it.'],
  ];
  cases.forEach((c, i) => {
    const y = 1.72 + i * 1.08;
    card(s, M, y, 7.9, 0.95, 'F4F6FB');
    s.addText(c[0], { x: M + 0.32, y: y + 0.13, w: 4.3, h: 0.35, margin: 0,
      fontFace: H, fontSize: 16.5, bold: true, color: NAVY });
    s.addText(c[1], { x: M + 0.32, y: y + 0.5, w: 4.3, h: 0.3, margin: 0,
      fontFace: B, fontSize: 12.5, color: GREY });
    s.addText(c[2], { x: M + 4.75, y: y + 0.2, w: 3.35, h: 0.6, margin: 0,
      fontFace: B, fontSize: 13, color: INK, lineSpacing: 18 });
  });

  // the stat
  card(s, 8.95, 1.72, 3.65, 3.31, 'FDF6EA');
  s.addText('0', { x: 9.15, y: 1.98, w: 3.25, h: 1.5, margin: 0,
    align: 'center', fontFace: H, fontSize: 80, bold: true, color: AMBER });
  s.addText('cases where this\nled to a successful\nattack', {
    x: 9.15, y: 3.5, w: 3.25, h: 0.95, margin: 0,
    align: 'center', fontFace: B, fontSize: 15, color: INK, lineSpacing: 21 });
  s.addText('Three attempts at reading it.\nNo successful example to read.', {
    x: 9.15, y: 4.4, w: 3.25, h: 0.55, margin: 0,
    align: 'center', fontFace: B, fontSize: 12, italic: true, color: GREY, lineSpacing: 17 });

  s.addText('Everything the field says about what this activity means rests on no successful examples.', {
    x: M, y: 5.28, w: 11.9, h: 0.42, margin: 0,
    fontFace: H, fontSize: 18, bold: true, color: NAVY,
  });

  s.addNotes(
    'Three cases is the entire record. Two are still just sitting there doing nothing, one was tried and defeated. ' +
    'In Ukraine the malware would have cut power to two million people, and Ukrainian defenders stopped it. ' +
    'The zero is the number to leave in the room.'
  );
}

/* ============================ 7. WHICH SIDE DOES AI HELP ============================ */
{
  const s = lightSlide('Does AI favour the attacker? Probably not yet', 'The technology');

  const pts = [
    ['Attack tools are still assisted, not automatic', 'AI helps scout targets and adjust tools. Fully automatic attack systems remain, in the literature’s own word, theoretical.'],
    ['Almost all the AI work is defensive', 'The research being published is about spotting intruders faster, not about replacing them.'],
    ['Defenders currently cannot see', 'Intrusions go unnoticed for 197 days on average, and roughly three quarters are spotted by outsiders rather than the victim. Better detection makes hiding harder, not easier.'],
  ];
  pts.forEach((r, i) => {
    const y = 1.72 + i * 1.24;
    badge(s, i + 1, M, y + 0.04, 0.55, NAVY);
    s.addText(r[0], { x: M + 0.85, y: y, w: 11.05, h: 0.36, margin: 0,
      fontFace: H, fontSize: 17.5, bold: true, color: NAVY });
    s.addText(r[1], { x: M + 0.85, y: y + 0.38, w: 11.05, h: 0.72, margin: 0,
      fontFace: B, fontSize: 14, color: INK, lineSpacing: 20 });
  });

  card(s, M, 5.48, 11.9, 1.0, 'F4F6FB');
  s.addText([
    { text: 'In the one real war we can study, ', options: { color: INK } },
    { text: 'defence held', options: { bold: true, color: NAVY } },
    { text: '. But that was Ukraine, backed by Western agencies and by Microsoft, Google and Cisco. A weaker defender would give a different answer.', options: { color: INK } },
  ], { x: M + 0.4, y: 5.6, w: 11.1, h: 0.78, margin: 0, valign: 'middle',
       fontFace: B, fontSize: 14.5, lineSpacing: 20 });

  s.addNotes(
    'Push back on the room’s instinct that AI obviously helps attackers. ' +
    'The evidence points the other way, at least for now. ' +
    'The bottom box is the important qualifier: who wins depends on who is fighting whom. ' +
    'So the useful question is not whether AI helps attackers, but which side can use it better.'
  );
}

/* ============================ 8. TWO EXPLANATIONS ============================ */
{
  const s = lightSlide('So which is it?', 'Two explanations');

  const opts = [
    { n: 'A', t: 'The warning is fading',
      d: 'It used to mean something, because staying hidden was expensive. AI makes it cheaper, so the meaning drains away.',
      f: 'Predicts: the gap between what we say and what we do keeps widening.', c: NAVY, bg: 'F4F6FB' },
    { n: 'B', t: 'There never was a warning',
      d: 'It was never meant to say anything. Staying quiet and below the line that triggers a response was always the point.',
      f: 'Predicts: the gap stays the same, because it was never about cost.', c: AMBER, bg: 'FDF6EA' },
  ];
  opts.forEach((o, i) => {
    const x = M + i * 6.15;
    card(s, x, 1.68, 5.85, 3.5, o.bg);
    badge(s, o.n, x + 0.35, 1.95, 0.62, o.c);
    s.addText(o.t, { x: x + 1.15, y: 2.02, w: 4.4, h: 0.45, margin: 0,
      fontFace: H, fontSize: 20, bold: true, color: o.c });
    s.addText(o.d, { x: x + 0.35, y: 2.78, w: 5.15, h: 1.15, margin: 0,
      fontFace: B, fontSize: 14, color: INK, lineSpacing: 20 });
    s.addText(o.f, { x: x + 0.35, y: 4.05, w: 5.15, h: 0.85, margin: 0,
      fontFace: B, fontSize: 13, italic: true, color: GREY, lineSpacing: 18 });
  });

  s.addText('The evidence so far fits B at least as well as A. That is uncomfortable, because our doctrine assumes A.', {
    x: M, y: 5.38, w: 11.9, h: 0.8, margin: 0,
    fontFace: H, fontSize: 18, bold: true, color: NAVY, lineSpacing: 24,
  });

  s.addNotes(
    'Present both fairly, then give the verdict. Years of sitting still, no punishment, effects kept carefully small: ' +
    'that fits B. Say plainly that the paper does not settle it, and that saying so honestly is the right position. ' +
    'The point is that the question is answerable and nobody has asked it.'
  );
}

/* ============================ 9. WHAT IS AT STAKE ============================ */
{
  const s = lightSlide('Two risks, pointing opposite ways', 'Why it matters');

  const risks = [
    { t: 'If we over-read it', d: 'We treat routine, automated activity as a warning of war, and punish something that meant nothing. Given how tangled cyber, space and nuclear systems are, a limited response can run far past what anyone intended.', c: AMBER },
    { t: 'If we under-read it', d: 'Real preparation for an attack gets handed to network engineers and filed as a maintenance problem. The difference between how Volt Typhoon and Salt Typhoon were answered suggests this may already be happening.', c: NAVY },
  ];
  risks.forEach((r, i) => {
    const y = 1.72 + i * 1.95;
    card(s, M, y, 11.9, 1.72, i === 0 ? 'FDF6EA' : 'F4F6FB');
    s.addText(r.t, { x: M + 0.42, y: y + 0.22, w: 3.5, h: 0.45, margin: 0,
      fontFace: H, fontSize: 21, bold: true, color: r.c });
    s.addText(r.d, { x: M + 4.1, y: y + 0.22, w: 7.4, h: 1.3, margin: 0,
      fontFace: B, fontSize: 14, color: INK, lineSpacing: 20 });
  });

  s.addText('Getting this wrong is expensive in both directions. That is why the question deserves an answer.', {
    x: M, y: 5.85, w: 11.9, h: 0.45, margin: 0,
    fontFace: H, fontSize: 17, italic: true, color: NAVY,
  });

  s.addNotes(
    'Two risks, opposite directions, both live. Over-reading risks escalating over nothing. ' +
    'Under-reading risks missing the real thing. ' +
    'Stress that these are not alternatives to pick between; they are the two ways the same weak signal fails.'
  );
}

/* ============================ 10. CLOSE ============================ */
{
  const s = darkSlide();
  s.addShape(p.ShapeType.ellipse, { x: -1.8, y: 4.2, w: 5.0, h: 5.0, fill: { color: DEEP } });
  s.addShape(p.ShapeType.ellipse, { x: 11.9, y: -1.2, w: 3.6, h: 3.6, fill: { color: DEEP } });

  s.addText('What this study adds', {
    x: M, y: 0.85, w: 11.9, h: 0.6, margin: 0,
    fontFace: H, fontSize: 34, bold: true, color: WHITE,
  });

  const adds = [
    'It puts two findings side by side that nobody had joined: what analysts say this activity means, and how governments actually respond to it.',
    'It questions the assumption underneath the standard reading, that staying hidden is expensive, and asks what AI does to it.',
    'It records a fact the field has not faced. There is no case where this led to a successful attack.',
  ];
  adds.forEach((t, i) => {
    const y = 1.85 + i * 1.08;
    badge(s, i + 1, M, y, 0.58, AMBER, DEEP);
    s.addText(t, { x: M + 0.88, y: y - 0.05, w: 11.0, h: 0.85, margin: 0,
      fontFace: B, fontSize: 15, color: ICE, lineSpacing: 21 });
  });

  s.addShape(p.ShapeType.rect, { x: M, y: 5.4, w: 1.1, h: 0.035, fill: { color: AMBER } });
  s.addText('We have been reading a message that may never have been sent.', {
    x: M, y: 5.7, w: 11.9, h: 0.55, margin: 0,
    fontFace: H, fontSize: 22, italic: true, color: WHITE,
  });
  s.addText('Thank you. Questions welcome.', {
    x: M, y: 6.4, w: 11.9, h: 0.35, margin: 0,
    fontFace: B, fontSize: 14, color: 'A9B6DC',
  });

  s.addNotes(
    'Close on the three contributions, briefly. Then the last line, slowly. ' +
    'That single sentence is what you want them to remember. Stop there and take questions.'
  );
}

p.writeFile({ fileName: '/home/user/Claude/deck/price-of-patience.pptx' })
 .then(f => console.log('written:', f));
