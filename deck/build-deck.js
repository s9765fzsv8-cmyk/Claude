const pptxgen = require('pptxgenjs');
const p = new pptxgen();
p.layout = 'LAYOUT_WIDE';               // 13.3 x 7.5
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
  s.addText(t, { x: M, y: 6.92, w: W - 2 * M, h: 0.3, margin: 0,
    fontFace: B, fontSize: 10.5, color: GREY });
}

/* ===================== 1. TITLE ===================== */
{
  const s = darkSlide();
  s.addShape(p.ShapeType.ellipse, { x: 10.2, y: -1.7, w: 5.4, h: 5.4, fill: { color: DEEP } });
  s.addShape(p.ShapeType.ellipse, { x: 11.7, y: 4.9, w: 3.2, h: 3.2, fill: { color: DEEP } });

  s.addText('FUTURE OF CYBER OPERATIONS', {
    x: M, y: 1.85, w: 9.6, h: 0.75, margin: 0,
    fontFace: H, fontSize: 40, bold: true, color: WHITE });
  s.addText('Vulnerabilities of Critical National Infrastructure', {
    x: M, y: 2.68, w: 9.6, h: 0.5, margin: 0,
    fontFace: H, fontSize: 24, color: ICE });

  s.addShape(p.ShapeType.rect, { x: M, y: 3.5, w: 1.1, h: 0.035, fill: { color: AMBER } });

  s.addText('The Price of Patience: what foreign code inside our infrastructure\nreally tells us, and what artificial intelligence does to that message', {
    x: M, y: 3.85, w: 9.6, h: 0.95, margin: 0,
    fontFace: B, fontSize: 16, color: 'C3CEEC', lineSpacing: 24 });
  s.addText('Based on sixteen studies of cyber conflict, 2018 to 2026', {
    x: M, y: 5.05, w: 9.6, h: 0.3, margin: 0,
    fontFace: B, fontSize: 13.5, color: 'A9B6DC' });

  s.addNotes('Open by naming the object of the talk: software left sitting inside civilian infrastructure. ' +
    'Say the question up front. When we find it, what does it actually tell us, and does AI change the answer. About one minute.');
}

/* ===================== 2. WHY INFRASTRUCTURE ===================== */
{
  const s = lightSlide('Why critical infrastructure became the target', 'The ground we are defending');

  s.addText('Modern militaries run on civilian systems. Power, water, telecommunications and transport are not separate from defence. They are what defence depends on.',
    { x: M, y: 1.42, w: 11.9, h: 0.62, margin: 0, fontFace: H, fontSize: 17, italic: true, color: NAVY, lineSpacing: 24 });

  const sectors = [
    ['Energy', 'Power generation and distribution'],
    ['Water', 'Supply and treatment systems'],
    ['Communications', 'Telecom networks and undersea links'],
    ['Transport', 'Ports, rail and logistics hubs'],
  ];
  sectors.forEach((c, i) => {
    const x = M + i * 3.02;
    card(s, x, 2.22, 2.8, 1.28);
    s.addText(c[0], { x: x + 0.25, y: 2.38, w: 2.3, h: 0.34, margin: 0,
      fontFace: H, fontSize: 16.5, bold: true, color: NAVY });
    s.addText(c[1], { x: x + 0.25, y: 2.74, w: 2.35, h: 0.62, margin: 0,
      fontFace: B, fontSize: 12.5, color: INK, lineSpacing: 17 });
  });

  card(s, M, 3.72, 11.9, 1.55, WARM);
  s.addText('The clearest example: Guam', { x: M + 0.4, y: 3.9, w: 4.0, h: 0.36, margin: 0,
    fontFace: H, fontSize: 18, bold: true, color: AMBER });
  s.addText('Chinese operators were found in systems supporting American military operations on Guam, the logistics hub for any Pacific crisis. A target whose value is tied to one specific scenario, a conflict over Taiwan, tells you more about intent than a target chosen at random.',
    { x: M + 4.6, y: 3.9, w: 6.9, h: 1.2, margin: 0, fontFace: B, fontSize: 13.5, color: INK, lineSpacing: 19 });

  s.addText('The point: an attacker who reaches these systems does not need to defeat the armed forces. They can slow them down from inside the country that fields them.',
    { x: M, y: 5.48, w: 11.9, h: 0.62, margin: 0, fontFace: B, fontSize: 15, bold: true, color: NAVY, lineSpacing: 21 });

  footNote(s, 'Sectors and the Guam case as recorded in Guttieri (2025), Codreanu (2025) and Dimitrov and Andreev (2025).');
  s.addNotes('Establish why infrastructure matters strategically before getting to the puzzle. ' +
    'The civil and military worlds are not separate any more. Guam is the sharpest illustration: it is not a random target, ' +
    'it is the base you would need for a Taiwan contingency. Keep this to a minute.');
}

/* ===================== 3. THE PUZZLE ===================== */
{
  const s = lightSlide('An intrusion that made no sense as spying', 'The puzzle');

  s.addText([
    { text: 'May 2023.', options: { bold: true } },
    { text: ' The United States and its Five Eyes partners named China as the source of a campaign called ' },
    { text: 'Volt Typhoon', options: { bold: true } },
    { text: '. Operators had been living inside American energy, water, communications and transport networks for an extended period.' },
  ], { x: M, y: 1.42, w: 6.6, h: 1.35, margin: 0, fontFace: B, fontSize: 15.5, color: INK, lineSpacing: 22 });

  s.addText('They took almost nothing.', { x: M, y: 2.92, w: 6.6, h: 0.4, margin: 0,
    fontFace: H, fontSize: 22, bold: true, color: NAVY });
  s.addText('That is the puzzle. A spy steals and leaves. These operators arrived, settled in, and waited.',
    { x: M, y: 3.36, w: 6.6, h: 0.7, margin: 0, fontFace: B, fontSize: 14.5, color: GREY, lineSpacing: 20 });

  card(s, M, 4.22, 6.6, 1.5, WARM);
  s.addText('American officials said the campaign "did not fit the pattern of a traditional cyber espionage campaign."',
    { x: M + 0.35, y: 4.42, w: 5.95, h: 1.1, margin: 0, fontFace: B, fontSize: 14, italic: true, color: INK, lineSpacing: 20 });

  card(s, 7.75, 1.42, 4.85, 4.3, CARD);
  s.addText('“', { x: 7.95, y: 1.4, w: 0.9, h: 1.05, margin: 0,
    fontFace: H, fontSize: 58, bold: true, color: ICE });
  s.addText('There is absolutely no intelligence to be gathered by putting malicious code in critical infrastructure networks.',
    { x: 8.05, y: 2.15, w: 4.25, h: 1.9, margin: 0, fontFace: H, fontSize: 16.5, italic: true, color: NAVY, lineSpacing: 25 });
  s.addText('General Paul Nakasone', { x: 8.05, y: 4.25, w: 4.25, h: 0.28, margin: 0,
    fontFace: B, fontSize: 13, bold: true, color: INK });
  s.addText('Then head of US Cyber Command', { x: 8.05, y: 4.52, w: 4.25, h: 0.28, margin: 0,
    fontFace: B, fontSize: 12, color: GREY });

  s.addNotes('The striking thing is what did not happen. No theft worth the effort. ' +
    'Nakasone is saying, in effect, nobody puts code in a power station to read your email. Use the quote and move on.');
}

/* ===================== 4. HOW THEY STAY HIDDEN ===================== */
{
  const s = lightSlide('How an intruder stays inside for years', 'The vulnerability');

  const facts = [
    ['They use your own tools', 'Rather than installing malware that security software would spot, the operators use the system’s own built-in utilities. Nothing looks out of place, because nothing foreign is running.'],
    ['Detection takes about six months', 'Across nation-state intrusions coded from 2020 to 2024, the average time between break-in and discovery was 197 days. In the Volt Typhoon case, access is described as lasting up to five years.'],
    ['Victims usually are not the ones who notice', 'Roughly three quarters of these intrusions were first spotted by someone other than the victim: a government agency, a security vendor, or a partner organisation.'],
  ];
  facts.forEach((f, i) => {
    const y = 1.42 + i * 1.32;
    badge(s, i + 1, M, y + 0.04, 0.55);
    s.addText(f[0], { x: M + 0.85, y: y, w: 11.05, h: 0.36, margin: 0,
      fontFace: H, fontSize: 17.5, bold: true, color: NAVY });
    s.addText(f[1], { x: M + 0.85, y: y + 0.38, w: 11.05, h: 0.82, margin: 0,
      fontFace: B, fontSize: 14, color: INK, lineSpacing: 20 });
  });

  card(s, M, 5.5, 11.9, 1.2, WARM);
  s.addText('What that access buys', { x: M + 0.4, y: 5.62, w: 3.3, h: 0.32, margin: 0,
    fontFace: H, fontSize: 15.5, bold: true, color: AMBER });
  s.addText('An intruder who sits quietly builds what one author calls a portfolio of future options: escalate, disrupt, keep watching, or withdraw. Over time they accumulate real power on that network without ever using it.',
    { x: M + 0.4, y: 5.96, w: 11.1, h: 0.62, margin: 0, fontFace: B, fontSize: 13.5, color: INK, lineSpacing: 19 });

  footNote(s, 'Dwell time and detection figures from Kabir et al. (2026); the portfolio of options from Guttieri (2025).');
  s.addNotes('This slide answers the obvious question: how does anyone stay inside for years without being caught. ' +
    'The 197 days and the three quarters figure are the two numbers worth saying out loud. ' +
    'They also matter later, on the AI slide, so plant them now.');
}

/* ===================== 5. THE ASSUMPTION ===================== */
{
  const s = lightSlide('So analysts read it as a warning', 'The standard reading');

  s.addText('If access gives you little to read but great power in a crisis, then the reason for being there is the crisis.',
    { x: M, y: 1.42, w: 11.9, h: 0.85, margin: 0, fontFace: H, fontSize: 19.5, italic: true, color: NAVY, lineSpacing: 27 });

  const steps = [
    ['Staying hidden is hard', 'Years inside a defended network takes skill and patience. It is not cheap and it is not easy.'],
    ['So the act carries meaning', 'People do not pay a high price for nothing. The effort itself is the message being sent.'],
    ['Therefore: preparation', 'The intrusion is read as a state getting ready for a fight it expects to have.'],
  ];
  steps.forEach((st, i) => {
    const x = M + i * 4.03;
    card(s, x, 2.42, 3.75, 2.5);
    badge(s, i + 1, x + 0.28, 2.7, 0.55);
    s.addText(st[0], { x: x + 0.28, y: 3.42, w: 3.2, h: 0.4, margin: 0,
      fontFace: H, fontSize: 17, bold: true, color: NAVY });
    s.addText(st[1], { x: x + 0.28, y: 3.85, w: 3.2, h: 1.0, margin: 0,
      fontFace: B, fontSize: 13.5, color: INK, lineSpacing: 19 });
  });

  card(s, M, 5.2, 11.9, 1.1, WARM);
  s.addText('This whole reading rests on one word: expensive. Take that away and the reasoning has nothing left to stand on.',
    { x: M + 0.4, y: 5.34, w: 11.1, h: 0.85, margin: 0, valign: 'middle',
      fontFace: H, fontSize: 17, bold: true, color: AMBER, lineSpacing: 23 });

  s.addNotes('This is the logic the whole field runs on, put plainly. Walk the three boxes left to right. ' +
    'Land hard on the amber box. Tell the audience to hold on to the word expensive, because the next slides test it.');
}

/* ===================== 6. THE CENTRAL FINDING ===================== */
{
  const s = lightSlide('But governments do not act as if they believe it', 'The central finding');

  const cols = [
    { t: 'Volt Typhoon', sub: 'Code left inside power, water,\ncommunications and transport',
      res: 'A technical advisory', tag: 'No sanctions. No allied statement.\nGuidance written for network engineers.', c: AMBER, bg: WARM },
    { t: 'Salt Typhoon', sub: 'Spying on phone companies, call\nrecords and surveillance systems',
      res: 'Treasury sanctions', tag: 'Named entities. Real financial\npenalties. A political response.', c: NAVY, bg: CARD },
  ];
  cols.forEach((c, i) => {
    const x = M + i * 6.15;
    card(s, x, 1.42, 5.85, 3.75, c.bg);
    s.addText(c.t, { x: x + 0.35, y: 1.66, w: 5.1, h: 0.45, margin: 0,
      fontFace: H, fontSize: 24, bold: true, color: c.c });
    s.addText(c.sub, { x: x + 0.35, y: 2.13, w: 5.1, h: 0.65, margin: 0,
      fontFace: B, fontSize: 13.5, color: GREY, lineSpacing: 19 });
    s.addText('WHAT THE UNITED STATES DID', { x: x + 0.35, y: 2.88, w: 5.1, h: 0.26, margin: 0,
      fontFace: B, fontSize: 11, bold: true, color: GREY, charSpacing: 1 });
    s.addText(c.res, { x: x + 0.35, y: 3.16, w: 5.1, h: 0.45, margin: 0,
      fontFace: H, fontSize: 21, bold: true, color: c.c });
    s.addText(c.tag, { x: x + 0.35, y: 3.68, w: 5.1, h: 0.9, margin: 0,
      fontFace: B, fontSize: 13.5, color: INK, lineSpacing: 19 });
  });

  s.addText('Same country. Same period. Same victim. The lesser act was punished; the graver one was not.',
    { x: M, y: 5.34, w: 11.9, h: 0.72, margin: 0, fontFace: H, fontSize: 19, bold: true, color: NAVY, lineSpacing: 25 });
  s.addText('Governments appear to respond to what is easy to explain and what fits past practice, not to what is actually dangerous.',
    { x: M, y: 6.06, w: 11.9, h: 0.62, margin: 0, fontFace: B, fontSize: 14.5, color: INK, lineSpacing: 20 });

  footNote(s, 'Volt Typhoon response coded in Baram (2026) from twenty joint attribution cases; Salt Typhoon sanctions recorded in Urbanczyk et al. (2025).');
  s.addNotes('This is the heart of the talk. Slow right down. Read the two columns across, then deliver the bottom line. ' +
    'Weapons in the water supply got a memo. Stolen call records got sanctions. ' +
    'Let the room sit with how strange that ordering is. Give this a minute and a half.');
}

/* ===================== 7. WHY THE MESSAGE FAILS ===================== */
{
  const s = lightSlide('Three reasons the warning never lands', 'Why the message fails');

  const rows = [
    ['Nobody notices', 'These operations leave no wreckage and no photographs. There is no burning building, so no public pressure and no political demand for a response.'],
    ['The sender denies it', 'China calls the accusation disinformation and makes counter-accusations of its own. A warning nobody admits sending is very hard to receive.'],
    ['It reaches the wrong desk', 'The response is a technical advisory. Its audience is network defenders, not the ministers and commanders who decide on war and peace.'],
  ];
  rows.forEach((r, i) => {
    const y = 1.45 + i * 1.42;
    badge(s, i + 1, M, y + 0.04, 0.58);
    s.addText(r[0], { x: M + 0.9, y: y, w: 3.9, h: 0.38, margin: 0,
      fontFace: H, fontSize: 19, bold: true, color: NAVY });
    s.addText(r[1], { x: M + 4.9, y: y, w: 7.0, h: 1.0, margin: 0,
      fontFace: B, fontSize: 14, color: INK, lineSpacing: 20 });
  });

  card(s, M, 5.82, 11.9, 1.0, CARD);
  s.addText('A threat only works if it is seen, believed, and read by the right people. This one fails all three tests.',
    { x: M + 0.4, y: 5.94, w: 11.1, h: 0.78, margin: 0, valign: 'middle',
      fontFace: H, fontSize: 17.5, italic: true, color: NAVY });

  footNote(s, 'Salience from Sullivan (2025); denial from Singh, Jash and Nanjappa (2025) and Codreanu (2025); audience from Baram (2026).');
  s.addNotes('Three short beats, one each, do not over-explain. The closing line is the point. ' +
    'For something to function as a warning it must be seen, believed, and land on the right desk. This fails on all three.');
}

/* ===================== 8. THE RECORD ===================== */
{
  const s = lightSlide('And it has never actually led anywhere', 'The record');

  const cases = [
    ['Russia inside US infrastructure', '2018 to today', 'Found in nuclear, energy, aviation and water systems. Still there. Seven years, never used.'],
    ['Volt Typhoon', '2023 to today', 'Found across four infrastructure sectors. Still there. Never used.'],
    ['Russia inside Ukraine', '2021 to 2022', 'Used in April 2022. It would have cut power to two million people. Ukrainian defenders stopped it.'],
  ];
  cases.forEach((c, i) => {
    const y = 1.42 + i * 1.28;
    card(s, M, y, 7.9, 1.15, CARD);
    s.addText(c[0], { x: M + 0.3, y: y + 0.14, w: 4.4, h: 0.34, margin: 0,
      fontFace: H, fontSize: 16, bold: true, color: NAVY });
    s.addText(c[1], { x: M + 0.3, y: y + 0.5, w: 4.4, h: 0.3, margin: 0,
      fontFace: B, fontSize: 12.5, color: GREY });
    s.addText(c[2], { x: M + 4.85, y: y + 0.14, w: 2.9, h: 0.92, margin: 0,
      fontFace: B, fontSize: 12.5, color: INK, lineSpacing: 17 });
  });

  card(s, 8.95, 1.42, 3.65, 3.85, WARM);
  s.addText('0', { x: 9.15, y: 1.72, w: 3.25, h: 1.55, margin: 0,
    align: 'center', fontFace: H, fontSize: 80, bold: true, color: AMBER });
  s.addText('cases where this led\nto a successful attack', { x: 9.15, y: 3.32, w: 3.25, h: 0.7, margin: 0,
    align: 'center', fontFace: B, fontSize: 15, color: INK, lineSpacing: 21 });
  s.addText('Three chances to observe\nwhat it means. Not one\nsuccessful example.', { x: 9.15, y: 4.15, w: 3.25, h: 0.85, margin: 0,
    align: 'center', fontFace: B, fontSize: 12.5, italic: true, color: GREY, lineSpacing: 18 });

  s.addText('Everything the field says about what this activity means rests on no successful examples.',
    { x: M, y: 5.45, w: 11.9, h: 0.42, margin: 0, fontFace: H, fontSize: 18.5, bold: true, color: NAVY });
  s.addText('Two intrusions have simply sat there for years. The one attempt was defeated by the defender.',
    { x: M, y: 5.9, w: 11.9, h: 0.42, margin: 0, fontFace: B, fontSize: 14.5, color: INK });

  footNote(s, 'Russian access reported in Codreanu (2025); the Ukrainian attempt and its defeat in Willett (2022).');
  s.addNotes('Three cases is the entire record. Two are still sitting there doing nothing. ' +
    'One was tried and stopped. The zero is the number to leave in the room. Pause after saying it.');
}

/* ===================== 9. AI AND THE BALANCE ===================== */
{
  const s = lightSlide('Does AI favour the attacker? Probably not yet', 'The technology');

  const pts = [
    ['Attack tools are assisted, not automatic', 'AI helps with scouting targets, finding weaknesses and adapting tools. Fully automatic attack systems remain, in the words of the literature itself, largely theoretical.'],
    ['Almost all the published AI work is defensive', 'The research is overwhelmingly about spotting intruders faster and responding automatically, not about replacing the attacker.'],
    ['Defenders currently cannot see, and that is the gap AI closes', 'Remember the numbers: 197 days to notice, and three quarters of intrusions found by outsiders. Intruders survive partly because detection is poor. Better automatic detection makes hiding harder, not easier.'],
  ];
  pts.forEach((r, i) => {
    const y = 1.42 + i * 1.4;
    badge(s, i + 1, M, y + 0.04, 0.55);
    s.addText(r[0], { x: M + 0.85, y: y, w: 11.05, h: 0.36, margin: 0,
      fontFace: H, fontSize: 17, bold: true, color: NAVY });
    s.addText(r[1], { x: M + 0.85, y: y + 0.38, w: 11.05, h: 0.9, margin: 0,
      fontFace: B, fontSize: 13.5, color: INK, lineSpacing: 19 });
  });

  card(s, M, 5.72, 11.9, 1.1, CARD);
  s.addText([
    { text: 'In the one real war we can study, ', options: { color: INK } },
    { text: 'defence held most of the time', options: { bold: true, color: NAVY } },
    { text: '. But Ukraine was backed by Western agencies and by Microsoft, Google and Cisco. A poorer defender would give a different answer, so the real question is not whether AI helps attackers. It is which side can absorb it better.', options: { color: INK } },
  ], { x: M + 0.4, y: 5.84, w: 11.1, h: 0.88, margin: 0, valign: 'middle',
       fontFace: B, fontSize: 13.5, lineSpacing: 19 });

  footNote(s, 'Capability assessment from Butt and Ulina (2026) and Yigit et al. (2025); the wartime judgement from Willett (2022).');
  s.addNotes('Push back on the room’s instinct that AI obviously helps attackers. The evidence points the other way for now. ' +
    'The bottom box is the qualifier that matters: who wins depends on who is fighting whom.');
}

/* ===================== 10. WHY IT IS DANGEROUS ===================== */
{
  const s = lightSlide('Why this is dangerous even without an attack', 'Escalation');

  const items = [
    ['These systems are tangled together', 'Cyber, space and nuclear command systems are deeply connected. A limited action against infrastructure can spread far beyond what anyone intended.'],
    ['The threshold is unclear and both sides know it', 'NATO judges each case on its merits and has said it could treat an accumulation of small attacks as crossing the line. Nobody knows exactly where the line sits.'],
    ['Which invites probing', 'After the 2007 attacks on Estonia, Russia learned what kind of operation the Alliance would not treat as an armed attack. Testing the boundary is itself a strategy.'],
  ];
  items.forEach((r, i) => {
    const y = 1.42 + i * 1.36;
    badge(s, i + 1, M, y + 0.04, 0.55);
    s.addText(r[0], { x: M + 0.85, y: y, w: 11.05, h: 0.36, margin: 0,
      fontFace: H, fontSize: 17, bold: true, color: NAVY });
    s.addText(r[1], { x: M + 0.85, y: y + 0.38, w: 11.05, h: 0.85, margin: 0,
      fontFace: B, fontSize: 13.5, color: INK, lineSpacing: 19 });
  });

  card(s, M, 5.62, 11.9, 1.15, WARM);
  s.addText('President Biden named a cyber breach as the most likely route to the United States finding itself in, as he put it, a real shooting war with a major power.',
    { x: M + 0.4, y: 5.76, w: 11.1, h: 0.88, margin: 0, valign: 'middle',
      fontFace: H, fontSize: 16, italic: true, color: NAVY, lineSpacing: 22 });

  footNote(s, 'Entanglement from Guttieri (2025); NATO thresholds, Estonia and the Biden remark from Willett (2022).');
  s.addNotes('This slide explains why the question is not academic. Even with no attack, the ambiguity is dangerous. ' +
    'The Estonia point is worth dwelling on: probing to find the limit is itself a use of these operations. ' +
    'Finish on the Biden line.');
}

/* ===================== 11. TWO EXPLANATIONS ===================== */
{
  const s = lightSlide('So which is it?', 'Two explanations');

  const opts = [
    { n: 'A', t: 'The warning is fading',
      d: 'It did mean something once, because staying hidden was genuinely expensive. As AI takes over the work, it gets cheaper, and the meaning drains out of the act.',
      f: 'If this is right, the gap between what we say and what we do should keep widening as automation spreads.', c: NAVY, bg: CARD },
    { n: 'B', t: 'There never was a warning',
      d: 'It was never meant to say anything at all. Staying quiet, and keeping effects below the level that triggers a response, was always the whole point.',
      f: 'If this is right, the gap stays roughly constant, because it was never about cost in the first place.', c: AMBER, bg: WARM },
  ];
  opts.forEach((o, i) => {
    const x = M + i * 6.15;
    card(s, x, 1.42, 5.85, 4.05, o.bg);
    badge(s, o.n, x + 0.35, 1.68, 0.6, o.c);
    s.addText(o.t, { x: x + 1.12, y: 1.75, w: 4.45, h: 0.45, margin: 0,
      fontFace: H, fontSize: 20, bold: true, color: o.c });
    s.addText(o.d, { x: x + 0.35, y: 2.5, w: 5.15, h: 1.35, margin: 0,
      fontFace: B, fontSize: 13.5, color: INK, lineSpacing: 19 });
    s.addText(o.f, { x: x + 0.35, y: 3.95, w: 5.15, h: 1.15, margin: 0,
      fontFace: B, fontSize: 13, italic: true, color: GREY, lineSpacing: 18 });
  });

  s.addText('The evidence so far fits B at least as well as A. That is uncomfortable, because our doctrine assumes A.',
    { x: M, y: 5.62, w: 11.9, h: 0.72, margin: 0, fontFace: H, fontSize: 18, bold: true, color: NAVY, lineSpacing: 24 });
  s.addText('This study does not settle the question. It shows the question is answerable and that nobody has asked it.',
    { x: M, y: 6.34, w: 11.9, h: 0.55, margin: 0, fontFace: B, fontSize: 14, color: INK });

  s.addNotes('Present both fairly, then give the verdict. Years of sitting still, no punishment, effects kept carefully small: that fits B. ' +
    'Be honest that the paper does not decide. Saying so is a strength, not a weakness.');
}

/* ===================== 12. CLOSE ===================== */
{
  const s = darkSlide();
  s.addShape(p.ShapeType.ellipse, { x: -1.9, y: 4.3, w: 5.0, h: 5.0, fill: { color: DEEP } });
  s.addShape(p.ShapeType.ellipse, { x: 12.0, y: -1.3, w: 3.6, h: 3.6, fill: { color: DEEP } });

  s.addText('What this means', { x: M, y: 0.62, w: 11.9, h: 0.6, margin: 0,
    fontFace: H, fontSize: 32, bold: true, color: WHITE });

  const adds = [
    ['For scholarship', 'It joins two findings nobody had put together: what analysts say this activity means, and how governments actually respond to it.'],
    ['For the argument', 'It questions the assumption underneath the standard reading, that staying hidden is expensive, and asks what AI does to it.'],
    ['For the record', 'It states a fact the field has not faced. There is no case where this led to a successful attack.'],
    ['For policy', 'Over-read it and we may escalate over nothing. Under-read it and we may file real preparation as a maintenance job. Both errors come from the same weak signal.'],
  ];
  adds.forEach((t, i) => {
    const y = 1.45 + i * 1.08;
    badge(s, i + 1, M, y, 0.55, AMBER, DEEP);
    s.addText(t[0], { x: M + 0.85, y: y - 0.02, w: 2.5, h: 0.35, margin: 0,
      fontFace: H, fontSize: 15.5, bold: true, color: WHITE });
    s.addText(t[1], { x: M + 3.5, y: y - 0.02, w: 8.4, h: 0.9, margin: 0,
      fontFace: B, fontSize: 13.5, color: ICE, lineSpacing: 19 });
  });

  s.addShape(p.ShapeType.rect, { x: M, y: 5.98, w: 1.1, h: 0.035, fill: { color: AMBER } });
  s.addText('We have been reading a message that may never have been sent.',
    { x: M, y: 6.25, w: 11.9, h: 0.5, margin: 0, fontFace: H, fontSize: 21, italic: true, color: WHITE });
  s.addText('Thank you. Questions welcome.', { x: M, y: 6.85, w: 11.9, h: 0.35, margin: 0,
    fontFace: B, fontSize: 13.5, color: 'A9B6DC' });

  s.addNotes('Close on the four points, briefly, then the last line slowly. ' +
    'That sentence is what you want them to remember. Stop there and take questions.');
}

p.writeFile({ fileName: '/home/user/Claude/deck/price-of-patience.pptx' })
 .then(f => console.log('written:', f));
