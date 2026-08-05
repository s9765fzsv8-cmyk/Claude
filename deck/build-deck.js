const pptxgen = require('pptxgenjs');
const p = new pptxgen();
p.layout = 'LAYOUT_WIDE';
p.author = 'Strategic Studies';
p.title  = 'Future of Cyber Operations';

const NAVY = '1E2761', DEEP = '141B45', ICE = 'CADCFC', WHITE = 'FFFFFF';
const AMBER = 'D98C1F', INK = '22252E', GREY = '6A6F7D', PAPER = 'FFFFFF';
const CARD = 'F4F6FB', WARM = 'FDF6EA';
const H = 'Cambria', B = 'Calibri';
const W = 13.3, M = 0.7;

function darkSlide() { const s = p.addSlide(); s.background = { color: NAVY }; return s; }
function lightSlide(title, kicker) {
  const s = p.addSlide();
  s.background = { color: PAPER };
  if (kicker) s.addText(kicker.toUpperCase(), {
    x: M, y: 0.36, w: 9, h: 0.28, margin: 0,
    fontFace: B, fontSize: 12, bold: true, color: AMBER, charSpacing: 2 });
  s.addText(title, { x: M, y: 0.66, w: W - 2 * M, h: 0.62, margin: 0,
    fontFace: H, fontSize: 30, bold: true, color: NAVY });
  return s;
}
function badge(s, n, x, y, d, fill, txt) {
  s.addShape(p.ShapeType.ellipse, { x, y, w: d, h: d, fill: { color: fill || NAVY } });
  s.addText(String(n), { x, y, w: d, h: d, margin: 0, align: 'center', valign: 'middle',
    fontFace: H, fontSize: d > 0.58 ? 19 : 13, bold: true, color: txt || WHITE });
}
function card(s, x, y, w, h, fill) {
  s.addShape(p.ShapeType.roundRect, { x, y, w, h, rectRadius: 0.08,
    fill: { color: fill || CARD }, line: { color: 'E2E7F2', width: 0.75 } });
}
function footNote(s, t) {
  s.addText(t, { x: M, y: 6.95, w: W - 2 * M, h: 0.3, margin: 0,
    fontFace: B, fontSize: 10.5, color: GREY });
}

/* ============ 1. TITLE AND HOOK ============ */
{
  const s = darkSlide();
  s.addShape(p.ShapeType.ellipse, { x: 10.3, y: -1.8, w: 5.4, h: 5.4, fill: { color: DEEP } });
  s.addShape(p.ShapeType.ellipse, { x: 11.8, y: 5.1, w: 3.2, h: 3.2, fill: { color: DEEP } });

  s.addText('FUTURE OF CYBER OPERATIONS', { x: M, y: 0.72, w: 11.9, h: 0.6, margin: 0,
    fontFace: H, fontSize: 32, bold: true, color: WHITE });
  s.addText('Vulnerabilities of Critical National Infrastructure', { x: M, y: 1.34, w: 11.9, h: 0.42, margin: 0,
    fontFace: H, fontSize: 20, color: ICE });

  // the hook
  card(s, M, 2.15, 8.0, 2.55, DEEP);
  s.addText('Right now, foreign code is sitting inside American power and water networks.',
    { x: M + 0.45, y: 2.38, w: 7.1, h: 0.75, margin: 0,
      fontFace: H, fontSize: 21, bold: true, color: WHITE, lineSpacing: 27 });
  s.addText('It has been there for years. It has never been used. We call it a warning of coming war.',
    { x: M + 0.45, y: 3.2, w: 7.1, h: 0.75, margin: 0,
      fontFace: B, fontSize: 17, color: ICE, lineSpacing: 24 });
  s.addText('This paper asks whether it is one.', { x: M + 0.45, y: 4.02, w: 7.1, h: 0.42, margin: 0,
    fontFace: H, fontSize: 19, bold: true, color: AMBER });

  s.addShape(p.ShapeType.rect, { x: M, y: 5.05, w: 1.1, h: 0.035, fill: { color: AMBER } });
  s.addText('The Price of Patience: what foreign code inside our infrastructure really tells us,\nand what artificial intelligence does to that message',
    { x: M, y: 5.38, w: 11.0, h: 0.85, margin: 0, fontFace: B, fontSize: 15, color: 'C3CEEC', lineSpacing: 23 });
  s.addText('Based on sixteen studies of cyber conflict, 2018 to 2026', { x: M, y: 6.4, w: 11.0, h: 0.3, margin: 0,
    fontFace: B, fontSize: 13, color: 'A9B6DC' });

  s.addNotes('Open with the hook, slowly, and do not rush to the title. ' +
    'Right now there is foreign code inside American power and water networks. It has been there for years. Nobody has used it. ' +
    'We call it a warning of war. This paper asks whether it actually is one. Then move to the question. About a minute.');
}

/* ============ 2. RESEARCH QUESTION ============ */
{
  const s = lightSlide('What this study asks', 'Research question');

  card(s, M, 1.35, 11.9, 1.6, WARM);
  s.addText('How fast and how far will AI and machine autonomy shift the balance between attack and defence, and when does pre-positioning count as a strategic signal or as a cause of instability?',
    { x: M + 0.45, y: 1.52, w: 11.0, h: 1.3, margin: 0,
      fontFace: H, fontSize: 18.5, italic: true, color: NAVY, lineSpacing: 26 });

  s.addText('In plainer words: when a state leaves code inside another country’s infrastructure, is that a message? And does artificial intelligence change what the message means?',
    { x: M, y: 3.12, w: 11.9, h: 0.6, margin: 0, fontFace: B, fontSize: 15, color: INK, lineSpacing: 21 });

  s.addText('Five objectives', { x: M, y: 3.86, w: 6.0, h: 0.36, margin: 0,
    fontFace: H, fontSize: 18, bold: true, color: NAVY });

  const objs = [
    'To set out how the literature tells spying apart from signalling.',
    'To find the assumptions about cost that this distinction depends on.',
    'To assess where machine autonomy stands now and where it is heading.',
    'To work out what happens to warning, escalation and stability if staying hidden becomes cheap.',
    'To suggest signs by which analysts could spot that change.',
  ];
  objs.forEach((t, i) => {
    const y = 4.3 + i * 0.53;
    badge(s, i + 1, M, y, 0.4);
    s.addText(t, { x: M + 0.62, y: y - 0.02, w: 11.3, h: 0.45, margin: 0,
      fontFace: B, fontSize: 14, color: INK });
  });

  s.addNotes('Read the question once from the slide, then give the plain-language version underneath. ' +
    'Run down the five objectives quickly, do not dwell. The audience only needs to know the shape of the study. ' +
    'Under a minute.');
}

/* ============ 3. THE PUZZLE ============ */
{
  const s = lightSlide('The case that raises the question', 'The evidence');

  s.addText([
    { text: 'May 2023.', options: { bold: true } },
    { text: ' The United States and its Five Eyes partners named China as the source of a campaign called ' },
    { text: 'Volt Typhoon', options: { bold: true } },
    { text: '. Operators had been living inside American energy, water, communications and transport networks, and in systems supporting military operations on Guam.' },
  ], { x: M, y: 1.4, w: 6.6, h: 1.5, margin: 0, fontFace: B, fontSize: 15.5, color: INK, lineSpacing: 22 });

  s.addText('They took almost nothing.', { x: M, y: 3.02, w: 6.6, h: 0.4, margin: 0,
    fontFace: H, fontSize: 22, bold: true, color: NAVY });
  s.addText('A spy steals and leaves. These operators arrived, settled in, and waited.',
    { x: M, y: 3.44, w: 6.6, h: 0.6, margin: 0, fontFace: B, fontSize: 14.5, color: GREY, lineSpacing: 20 });

  card(s, M, 4.05, 6.6, 1.75, WARM);
  s.addText('American officials said the campaign "did not fit the pattern of a traditional cyber espionage campaign."',
    { x: M + 0.35, y: 4.28, w: 5.95, h: 1.3, margin: 0, fontFace: B, fontSize: 14, italic: true, color: INK, lineSpacing: 20 });

  card(s, 7.75, 1.4, 4.85, 4.4, CARD);
  s.addText('“', { x: 7.95, y: 1.38, w: 0.9, h: 1.05, margin: 0,
    fontFace: H, fontSize: 58, bold: true, color: ICE });
  s.addText('There is absolutely no intelligence to be gathered by putting malicious code in critical infrastructure networks.',
    { x: 8.05, y: 2.15, w: 4.25, h: 1.95, margin: 0, fontFace: H, fontSize: 16.5, italic: true, color: NAVY, lineSpacing: 25 });
  s.addText('General Paul Nakasone', { x: 8.05, y: 4.32, w: 4.25, h: 0.28, margin: 0,
    fontFace: B, fontSize: 13, bold: true, color: INK });
  s.addText('Then head of US Cyber Command', { x: 8.05, y: 4.59, w: 4.25, h: 0.28, margin: 0,
    fontFace: B, fontSize: 12, color: GREY });

  s.addText('Guam is the logistics hub for any Pacific crisis. A target tied to one specific scenario says more about intent than a target chosen at random.',
    { x: M, y: 6.05, w: 11.9, h: 0.55, margin: 0, fontFace: B, fontSize: 14, bold: true, color: NAVY, lineSpacing: 20 });

  footNote(s, 'Guttieri (2025); Codreanu (2025); Dimitrov and Andreev (2025).');
  s.addNotes('The striking thing is what did not happen. No theft worth the effort. ' +
    'Nakasone is saying nobody puts code in a power station to read your email. ' +
    'Close with the Guam line: this is not a random target, it is the base you need for a Taiwan contingency.');
}

/* ============ 4. THE STANDARD READING ============ */
{
  const s = lightSlide('Why the field reads this as a warning', 'The assumption');

  s.addText('If access gives you little to read but great power in a crisis, then the reason for being there is the crisis.',
    { x: M, y: 1.38, w: 11.9, h: 0.85, margin: 0, fontFace: H, fontSize: 19.5, italic: true, color: NAVY, lineSpacing: 27 });

  const steps = [
    ['Staying hidden is hard', 'Years inside a defended network takes skill and patience. It is not cheap and it is not easy.'],
    ['So the act carries meaning', 'People do not pay a high price for nothing. The effort itself is the message being sent.'],
    ['Therefore: preparation', 'The intrusion is read as a state getting ready for a fight it expects to have.'],
  ];
  steps.forEach((st, i) => {
    const x = M + i * 4.03;
    card(s, x, 2.38, 3.75, 2.5);
    badge(s, i + 1, x + 0.28, 2.66, 0.55);
    s.addText(st[0], { x: x + 0.28, y: 3.38, w: 3.2, h: 0.4, margin: 0,
      fontFace: H, fontSize: 17, bold: true, color: NAVY });
    s.addText(st[1], { x: x + 0.28, y: 3.81, w: 3.2, h: 1.0, margin: 0,
      fontFace: B, fontSize: 13.5, color: INK, lineSpacing: 19 });
  });

  card(s, M, 5.15, 11.9, 1.15, WARM);
  s.addText('The whole reading rests on one word: expensive. Take that away and the reasoning has nothing left to stand on. That is the assumption this study tests.',
    { x: M + 0.4, y: 5.3, w: 11.1, h: 0.9, margin: 0, valign: 'middle',
      fontFace: H, fontSize: 17, bold: true, color: AMBER, lineSpacing: 23 });

  footNote(s, 'The reading and the quoted rule are from Guttieri (2025).');
  s.addNotes('This is the logic the whole field runs on. Walk the three boxes left to right. ' +
    'Land hard on the amber box, and say plainly that this word, expensive, is what the study is testing.');
}

/* ============ 5. THE CENTRAL FINDING ============ */
{
  const s = lightSlide('Governments do not act as if they believe it', 'Finding one');

  const cols = [
    { t: 'Volt Typhoon', sub: 'Code left inside power, water,\ncommunications and transport',
      res: 'A technical advisory', tag: 'No sanctions. No allied statement.\nGuidance written for engineers.', c: AMBER, bg: WARM },
    { t: 'Salt Typhoon', sub: 'Spying on phone companies, call\nrecords and surveillance systems',
      res: 'Treasury sanctions', tag: 'Named entities. Real financial\npenalties. A political response.', c: NAVY, bg: CARD },
  ];
  cols.forEach((c, i) => {
    const x = M + i * 6.15;
    card(s, x, 1.4, 5.85, 3.8, c.bg);
    s.addText(c.t, { x: x + 0.35, y: 1.64, w: 5.1, h: 0.45, margin: 0,
      fontFace: H, fontSize: 24, bold: true, color: c.c });
    s.addText(c.sub, { x: x + 0.35, y: 2.12, w: 5.1, h: 0.65, margin: 0,
      fontFace: B, fontSize: 13.5, color: GREY, lineSpacing: 19 });
    s.addText('WHAT THE UNITED STATES DID', { x: x + 0.35, y: 2.88, w: 5.1, h: 0.26, margin: 0,
      fontFace: B, fontSize: 11, bold: true, color: GREY, charSpacing: 1 });
    s.addText(c.res, { x: x + 0.35, y: 3.16, w: 5.1, h: 0.45, margin: 0,
      fontFace: H, fontSize: 21, bold: true, color: c.c });
    s.addText(c.tag, { x: x + 0.35, y: 3.68, w: 5.1, h: 0.9, margin: 0,
      fontFace: B, fontSize: 13.5, color: INK, lineSpacing: 19 });
  });

  s.addText('Same country. Same period. Same victim. The lesser act was punished; the graver one was not.',
    { x: M, y: 5.42, w: 11.9, h: 0.72, margin: 0, fontFace: H, fontSize: 19, bold: true, color: NAVY, lineSpacing: 25 });
  s.addText('Governments respond to what is easy to explain and what fits past practice, not to what is actually dangerous.',
    { x: M, y: 6.12, w: 11.9, h: 0.6, margin: 0, fontFace: B, fontSize: 14.5, color: INK });

  footNote(s, 'Volt Typhoon response coded in Baram (2026); Salt Typhoon sanctions in Urbanczyk et al. (2025).');
  s.addNotes('The heart of the talk. Slow right down. Read the two columns across, then the bottom line. ' +
    'Weapons in the water supply got a memo. Stolen call records got sanctions. ' +
    'Let the room sit with how backwards that is. A minute and a half.');
}

/* ============ 6. WHY THE MESSAGE FAILS ============ */
{
  const s = lightSlide('Three reasons the warning never lands', 'Why');

  const rows = [
    ['Nobody notices', 'These operations leave no wreckage and no photographs. There is no burning building, so no public pressure and no political demand for a response.'],
    ['The sender denies it', 'China calls the accusation disinformation and makes counter-accusations of its own. A warning nobody admits sending is very hard to receive.'],
    ['It reaches the wrong desk', 'The response is a technical advisory. Its audience is network defenders, not the ministers and commanders who decide on war and peace.'],
  ];
  rows.forEach((r, i) => {
    const y = 1.42 + i * 1.42;
    badge(s, i + 1, M, y + 0.04, 0.58);
    s.addText(r[0], { x: M + 0.9, y: y, w: 3.9, h: 0.38, margin: 0,
      fontFace: H, fontSize: 19, bold: true, color: NAVY });
    s.addText(r[1], { x: M + 4.9, y: y, w: 7.0, h: 1.0, margin: 0,
      fontFace: B, fontSize: 14, color: INK, lineSpacing: 20 });
  });

  card(s, M, 5.8, 11.9, 1.0, CARD);
  s.addText('A threat only works if it is seen, believed, and read by the right people. This one fails all three tests.',
    { x: M + 0.4, y: 5.92, w: 11.1, h: 0.78, margin: 0, valign: 'middle',
      fontFace: H, fontSize: 17.5, italic: true, color: NAVY });

  footNote(s, 'Sullivan (2025); Singh, Jash and Nanjappa (2025); Codreanu (2025); Baram (2026).');
  s.addNotes('Three short beats, one each. The closing line is the point: seen, believed, right desk. This fails on all three.');
}

/* ============ 7. THE RECORD ============ */
{
  const s = lightSlide('And it has never actually led anywhere', 'Finding two');

  const cases = [
    ['Russia inside US infrastructure', '2018 to today', 'Found in nuclear, energy, aviation and water systems. Still there. Seven years, never used.'],
    ['Volt Typhoon', '2023 to today', 'Found across four infrastructure sectors. Still there. Never used.'],
    ['Russia inside Ukraine', '2021 to 2022', 'Used in April 2022. It would have cut power to two million people. Ukrainian defenders stopped it.'],
  ];
  cases.forEach((c, i) => {
    const y = 1.4 + i * 1.3;
    card(s, M, y, 7.9, 1.16, CARD);
    s.addText(c[0], { x: M + 0.3, y: y + 0.14, w: 4.4, h: 0.34, margin: 0,
      fontFace: H, fontSize: 16, bold: true, color: NAVY });
    s.addText(c[1], { x: M + 0.3, y: y + 0.5, w: 4.4, h: 0.3, margin: 0,
      fontFace: B, fontSize: 12.5, color: GREY });
    s.addText(c[2], { x: M + 4.85, y: y + 0.14, w: 2.9, h: 0.94, margin: 0,
      fontFace: B, fontSize: 12.5, color: INK, lineSpacing: 17 });
  });

  card(s, 8.95, 1.4, 3.65, 3.9, WARM);
  s.addText('0', { x: 9.15, y: 1.7, w: 3.25, h: 1.55, margin: 0,
    align: 'center', fontFace: H, fontSize: 80, bold: true, color: AMBER });
  s.addText('cases where this led\nto a successful attack', { x: 9.15, y: 3.3, w: 3.25, h: 0.7, margin: 0,
    align: 'center', fontFace: B, fontSize: 15, color: INK, lineSpacing: 21 });
  s.addText('Three chances to see what\nit means. Not one\nsuccessful example.', { x: 9.15, y: 4.15, w: 3.25, h: 0.85, margin: 0,
    align: 'center', fontFace: B, fontSize: 12.5, italic: true, color: GREY, lineSpacing: 18 });

  s.addText('Everything the field says about what this activity means rests on no successful examples.',
    { x: M, y: 5.48, w: 11.9, h: 0.45, margin: 0, fontFace: H, fontSize: 18.5, bold: true, color: NAVY });
  s.addText('Two intrusions have simply sat there for years. The one attempt was defeated by the defender.',
    { x: M, y: 5.94, w: 11.9, h: 0.45, margin: 0, fontFace: B, fontSize: 14.5, color: INK });

  footNote(s, 'Russian access reported in Codreanu (2025); the Ukrainian attempt and its defeat in Willett (2022).');
  s.addNotes('Three cases is the entire record. Two are still sitting there. One was tried and stopped. ' +
    'The zero is the number to leave in the room. Pause after saying it.');
}

/* ============ 8. AI AND THE BALANCE ============ */
{
  const s = lightSlide('Does AI favour the attacker? Probably not yet', 'Finding three');

  const pts = [
    ['Attack tools are assisted, not automatic', 'AI helps with scouting targets, finding weaknesses and adapting tools. Fully automatic attack systems remain, in the words of the literature itself, largely theoretical.'],
    ['Almost all the published AI work is defensive', 'The research is overwhelmingly about spotting intruders faster and responding automatically, not about replacing the attacker.'],
    ['Defenders cannot see, and that is the gap AI closes', 'Intrusions go unnoticed for 197 days on average, and roughly three quarters are found by outsiders rather than the victim. Intruders survive partly because detection is poor. Better detection makes hiding harder, not easier.'],
  ];
  pts.forEach((r, i) => {
    const y = 1.4 + i * 1.4;
    badge(s, i + 1, M, y + 0.04, 0.55);
    s.addText(r[0], { x: M + 0.85, y: y, w: 11.05, h: 0.36, margin: 0,
      fontFace: H, fontSize: 17, bold: true, color: NAVY });
    s.addText(r[1], { x: M + 0.85, y: y + 0.38, w: 11.05, h: 0.9, margin: 0,
      fontFace: B, fontSize: 13.5, color: INK, lineSpacing: 19 });
  });

  card(s, M, 5.7, 11.9, 1.1, CARD);
  s.addText([
    { text: 'In the one real war we can study, ', options: { color: INK } },
    { text: 'defence held most of the time', options: { bold: true, color: NAVY } },
    { text: '. But Ukraine was backed by Western agencies and by Microsoft, Google and Cisco. A poorer defender would give a different answer, so the question is not whether AI helps attackers. It is which side can absorb it better.', options: { color: INK } },
  ], { x: M + 0.4, y: 5.82, w: 11.1, h: 0.88, margin: 0, valign: 'middle',
       fontFace: B, fontSize: 13.5, lineSpacing: 19 });

  footNote(s, 'Butt and Ulina (2026); Yigit et al. (2025); Kabir et al. (2026); Willett (2022).');
  s.addNotes('Push back on the instinct that AI obviously helps attackers. The evidence points the other way for now. ' +
    'The bottom box is the qualifier that matters: who wins depends on who is fighting whom.');
}

/* ============ 9. TWO EXPLANATIONS ============ */
{
  const s = lightSlide('So which is it?', 'Two explanations');

  const opts = [
    { n: 'A', t: 'The warning is fading',
      d: 'It did mean something once, because staying hidden was genuinely expensive. As AI takes over the work it gets cheaper, and the meaning drains out of the act.',
      f: 'If this is right, the gap between what we say and what we do should keep widening as automation spreads.', c: NAVY, bg: CARD },
    { n: 'B', t: 'There never was a warning',
      d: 'It was never meant to say anything. Staying quiet, and keeping effects below the level that triggers a response, was always the whole point.',
      f: 'If this is right, the gap stays roughly constant, because it was never about cost in the first place.', c: AMBER, bg: WARM },
  ];
  opts.forEach((o, i) => {
    const x = M + i * 6.15;
    card(s, x, 1.4, 5.85, 4.05, o.bg);
    badge(s, o.n, x + 0.35, 1.66, 0.6, o.c);
    s.addText(o.t, { x: x + 1.12, y: 1.73, w: 4.45, h: 0.45, margin: 0,
      fontFace: H, fontSize: 20, bold: true, color: o.c });
    s.addText(o.d, { x: x + 0.35, y: 2.48, w: 5.15, h: 1.35, margin: 0,
      fontFace: B, fontSize: 13.5, color: INK, lineSpacing: 19 });
    s.addText(o.f, { x: x + 0.35, y: 3.93, w: 5.15, h: 1.15, margin: 0,
      fontFace: B, fontSize: 13, italic: true, color: GREY, lineSpacing: 18 });
  });

  s.addText('The evidence so far fits B at least as well as A. That is uncomfortable, because doctrine assumes A.',
    { x: M, y: 5.65, w: 11.9, h: 0.72, margin: 0, fontFace: H, fontSize: 18, bold: true, color: NAVY, lineSpacing: 24 });
  s.addText('This study does not settle it. It shows the question is answerable and that nobody has asked it.',
    { x: M, y: 6.35, w: 11.9, h: 0.5, margin: 0, fontFace: B, fontSize: 14, color: INK });

  s.addNotes('Present both fairly, then give the verdict. Years of sitting still, no punishment, effects kept small: that fits B. ' +
    'Be honest that the paper does not decide. Saying so is a strength.');
}

/* ============ 10. ANSWER AND CLOSE ============ */
{
  const s = darkSlide();
  s.addShape(p.ShapeType.ellipse, { x: -1.9, y: 4.4, w: 5.0, h: 5.0, fill: { color: DEEP } });
  s.addShape(p.ShapeType.ellipse, { x: 12.1, y: -1.4, w: 3.6, h: 3.6, fill: { color: DEEP } });

  s.addText('Answering the question', { x: M, y: 0.6, w: 11.9, h: 0.55, margin: 0,
    fontFace: H, fontSize: 30, bold: true, color: WHITE });

  const adds = [
    ['Is it a signal?', 'On the evidence, it does not function as one. It is not noticed, it is denied by its sender, and it draws a technical answer rather than a political one.'],
    ['Does AI shift the balance?', 'Not yet in the attacker’s favour. Automatic attack tools are still theoretical, and the AI being built is mostly defensive.'],
    ['When is it destabilising?', 'Not when it is used, but when it is misread. Over-read it and we escalate over nothing. Under-read it and we file real preparation as a maintenance job.'],
    ['What is left to do?', 'Test which of the two explanations holds, by tracking whether the gap between interpretation and response widens as automation spreads.'],
  ];
  adds.forEach((t, i) => {
    const y = 1.4 + i * 1.12;
    badge(s, i + 1, M, y, 0.55, AMBER, DEEP);
    s.addText(t[0], { x: M + 0.85, y: y - 0.02, w: 3.1, h: 0.35, margin: 0,
      fontFace: H, fontSize: 15.5, bold: true, color: WHITE });
    s.addText(t[1], { x: M + 4.1, y: y - 0.02, w: 7.8, h: 0.95, margin: 0,
      fontFace: B, fontSize: 13.5, color: ICE, lineSpacing: 19 });
  });

  s.addShape(p.ShapeType.rect, { x: M, y: 6.05, w: 1.1, h: 0.035, fill: { color: AMBER } });
  s.addText('We have been reading a message that may never have been sent.',
    { x: M, y: 6.32, w: 11.9, h: 0.5, margin: 0, fontFace: H, fontSize: 21, italic: true, color: WHITE });
  s.addText('Thank you. Questions welcome.', { x: M, y: 6.92, w: 11.9, h: 0.35, margin: 0,
    fontFace: B, fontSize: 13.5, color: 'A9B6DC' });

  s.addNotes('Answer the research question directly, point by point, so the talk closes where it opened. ' +
    'Then the last line, slowly. That sentence is what you want them to remember. Stop and take questions.');
}

p.writeFile({ fileName: '/home/user/Claude/deck/price-of-patience.pptx' })
 .then(f => console.log('written:', f));
