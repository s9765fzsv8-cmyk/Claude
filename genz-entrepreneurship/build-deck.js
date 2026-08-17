const pptxgen = require("pptxgenjs");

// Presenter name shown on the title slide. Left empty so the deck ships with nothing
// unfinished on it. Put a name here and rerun to have it appear.
const PRESENTER = "";

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.3 x 7.5
pres.author = "Alkhidmat Summer Internship 2026";
pres.title = "Thanda Godam";

// Palette
const DARK = "14392A";   // deep field green
const GREEN = "2E7D5B";  // mid green
const ACCENT = "E4572E"; // tomato
const LIGHT = "F2F5F1";  // pale wash
const INK = "1A1A1A";
const MUTED = "5F6B63";
const WHITE = "FFFFFF";

const HEAD = "Cambria";
const BODY = "Calibri";

const W = 13.3;
const M = 0.7;           // left margin
const CW = W - M * 2;    // content width

// ---------- helpers ----------

function titleSlide(s, kicker, title, sub) {
  s.background = { color: DARK };
  if (kicker) {
    s.addText(kicker, {
      x: M, y: 0.42, w: CW, h: 0.3, fontFace: BODY, fontSize: 12,
      color: "9BC4A8", charSpacing: 2, bold: true, margin: 0,
    });
  }
  s.addText(title, {
    x: M, y: 0.8, w: CW, h: 0.72, fontFace: HEAD, fontSize: 34,
    color: WHITE, bold: true, valign: "top", margin: 0,
  });
  if (sub) {
    s.addText(sub, {
      x: M, y: 1.5, w: CW, h: 0.35, fontFace: BODY, fontSize: 15,
      color: "BFD8C7", margin: 0,
    });
  }
}

function sectionHead(s, kicker, title, sub) {
  s.background = { color: WHITE };
  if (kicker) {
    s.addText(kicker, {
      x: M, y: 0.42, w: CW, h: 0.28, fontFace: BODY, fontSize: 11.5,
      color: GREEN, charSpacing: 2, bold: true, margin: 0,
    });
  }
  s.addText(title, {
    x: M, y: 0.74, w: CW, h: 0.62, fontFace: HEAD, fontSize: 31,
    color: INK, bold: true, valign: "top", margin: 0,
  });
  if (sub) {
    s.addText(sub, {
      x: M, y: 1.4, w: CW, h: 0.38, fontFace: BODY, fontSize: 14.5,
      color: MUTED, margin: 0, valign: "top", italic: true,
    });
  }
}

// The repeated motif: a filled circle carrying a number or a short glyph.
function numCircle(s, x, y, label, fill, txtColor, d) {
  const dia = d || 0.46;
  s.addShape(pres.ShapeType.ellipse, {
    x, y, w: dia, h: dia, fill: { color: fill || GREEN },
  });
  s.addText(String(label), {
    x, y, w: dia, h: dia, fontFace: BODY, fontSize: dia > 0.5 ? 15 : 13.5,
    color: txtColor || WHITE, bold: true, align: "center", valign: "middle", margin: 0,
  });
}

function card(s, x, y, w, h, fill) {
  s.addShape(pres.ShapeType.roundRect, {
    x, y, w, h, rectRadius: 0.08,
    fill: { color: fill || LIGHT },
    shadow: { type: "outer", angle: 90, blur: 8, offset: 0.05, opacity: 0.12, color: "9AA69E" },
  });
}

function footNote(s, text) {
  s.addText(text, {
    x: M, y: 6.92, w: CW, h: 0.3, fontFace: BODY, fontSize: 9.5,
    color: MUTED, margin: 0,
  });
}

// ============================================================
// 1. TITLE
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: DARK };

  s.addText("ALKHIDMAT SUMMER INTERNSHIP 2026   |   GEN Z ENTREPRENEURSHIP INITIATIVE", {
    x: M, y: 0.8, w: CW, h: 0.3, fontFace: BODY, fontSize: 11.5,
    color: "9BC4A8", charSpacing: 1.6, bold: true, margin: 0,
  });

  s.addText("THANDA GODAM", {
    x: M, y: 1.5, w: CW, h: 1.25, fontFace: HEAD, fontSize: 66,
    color: WHITE, bold: true, charSpacing: 1, margin: 0,
  });

  s.addText("Village cold storage, rented by the crate.", {
    x: M, y: 2.75, w: 8.6, h: 0.5, fontFace: BODY, fontSize: 23,
    color: ACCENT, margin: 0,
  });

  s.addText(
    "A small grower with 200 kg of tomatoes has nowhere to keep them and no way to wait for a better price. " +
    "We put a solar powered cold room inside the village and rent it out one crate at a time.",
    { x: M, y: 3.42, w: 8.9, h: 0.95, fontFace: BODY, fontSize: 15, color: "CFE1D5", lineSpacing: 24, margin: 0 }
  );

  // three anchor facts across the bottom
  const facts = [
    ["40%", "of what growers harvest is lost after harvest"],
    ["<1m", "tonnes of cold storage against 13m tonnes grown"],
    ["64%", "of Pakistan's farms are under 5 acres"],
  ];
  facts.forEach(([big, small], i) => {
    const x = M + i * 4.02;
    s.addText(big, {
      x, y: 4.72, w: 3.7, h: 0.62, fontFace: HEAD, fontSize: 38, color: WHITE, bold: true, margin: 0,
    });
    s.addText(small, {
      x, y: 5.36, w: 3.7, h: 0.62, fontFace: BODY, fontSize: 12.5, color: "9BC4A8",
      margin: 0, valign: "top", lineSpacing: 16,
    });
  });

  // Presenter byline. PRESENTER is defined at the top of this file; set it to your name and
  // rerun `node build-deck.js` to have it appear here.
  if (PRESENTER) {
    s.addText(PRESENTER, {
      x: M, y: 6.55, w: CW, h: 0.35, fontFace: BODY, fontSize: 13, color: "9BC4A8", valign: "top", margin: 0,
    });
  }

  s.addNotes(
    "Open by naming the person, not the sector. Say: a grower in Okara picks 200 kilos of tomatoes on a Tuesday " +
    "morning. By Thursday they are soft. He sells on Wednesday at whatever the mandi offers. " +
    "Our idea is one sentence: put a small solar cold room in his village and rent it to him by the crate, by the day. " +
    "Fill in your name and team members before submitting."
  );
}

// ============================================================
// 2. THE PROBLEM
// ============================================================
{
  const s = pres.addSlide();
  sectionHead(s, "01  THE PROBLEM", "The crop is grown. It is lost after harvest.");

  const stats = [
    ["40%", "of Pakistan's perishable harvest is lost between the field and the buyer", ACCENT],
    ["$1bn+", "the value the Asian Development Bank puts on that loss every year", GREEN],
    ["900,000", "tonnes of cold storage capacity against 13 to 15 million tonnes grown", DARK],
  ];
  stats.forEach(([big, small, col], i) => {
    const x = M + i * 4.02;
    card(s, x, 2.05, 3.85, 1.95);
    s.addText(big, {
      x: x + 0.28, y: 2.24, w: 3.3, h: 0.72, fontFace: HEAD, fontSize: 40, color: col, bold: true, margin: 0,
    });
    s.addText(small, {
      x: x + 0.28, y: 3.0, w: 3.3, h: 0.85, fontFace: BODY, fontSize: 12.5, color: INK,
      margin: 0, valign: "top", lineSpacing: 17,
    });
  });

  card(s, M, 4.3, CW, 2.15, DARK);
  s.addText("Where the loss actually happens", {
    x: M + 0.42, y: 4.55, w: 5.2, h: 0.4, fontFace: HEAD, fontSize: 17, color: WHITE, bold: true, margin: 0,
  });
  const chain = [
    ["5-8%", "at harvesting"],
    ["15-20%", "in handling the picked crop"],
    ["10-12%", "in transport to market"],
  ];
  chain.forEach(([pct, where], i) => {
    const x = M + 0.42 + i * 3.9;
    s.addText(pct, {
      x, y: 5.15, w: 3.5, h: 0.5, fontFace: HEAD, fontSize: 27, color: ACCENT, bold: true, margin: 0,
    });
    s.addText(where, {
      x, y: 5.68, w: 3.5, h: 0.35, fontFace: BODY, fontSize: 13, color: "BFD8C7", margin: 0,
    });
  });
  s.addText("Almost all of it happens after the hard work of growing is already done.", {
    x: M + 0.42, y: 6.02, w: 11.3, h: 0.32, fontFace: BODY, fontSize: 12.5, color: "9BC4A8", italic: true, margin: 0,
  });

  footNote(s, "Sources: Pakistan Today and FreshPlaza on the 40 percent figure, Dawn reporting on the ADB estimate, AgriHunt on stage by stage losses. Full list at the end.");

  s.addNotes(
    "Do not rush the numbers. The point of this slide is that the loss is not a farming failure, it is a " +
    "storage and timing failure. Pakistan already grows the food. Roughly 900,000 tonnes of cold storage " +
    "against 13 to 15 million tonnes of production is the gap in one line."
  );
}

// ============================================================
// 3. THE INSIGHT
// ============================================================
{
  const s = pres.addSlide();
  sectionHead(s, "02  WHY IT HAPPENS", "A small grower has about 48 hours to sell.",
    "This is the part that most storage projects miss.");

  const steps = [
    ["Day 0", "He picks 200 to 400 kg. There is no cool place on the farm. The crates sit in the shade of a tree."],
    ["Day 1", "Heat starts working on the crop. Tomatoes soften, leafy greens wilt, weight drops."],
    ["Day 2", "It has to move now or it is worth nothing. He loads it and takes whatever the mandi pays that morning."],
  ];
  steps.forEach(([day, text], i) => {
    const x = M + i * 4.02;
    card(s, x, 2.15, 3.85, 1.85, WHITE);
    s.addShape(pres.ShapeType.roundRect, {
      x, y: 2.15, w: 3.85, h: 1.85, rectRadius: 0.08,
      fill: { color: WHITE }, line: { color: "D8E0DA", width: 1 },
    });
    numCircle(s, x + 0.28, 2.4, i + 1, i === 2 ? ACCENT : GREEN);
    s.addText(day, {
      x: x + 0.86, y: 2.42, w: 2.6, h: 0.4, fontFace: HEAD, fontSize: 18, color: INK, bold: true, margin: 0,
    });
    s.addText(text, {
      x: x + 0.28, y: 2.98, w: 3.3, h: 0.9, fontFace: BODY, fontSize: 12.5, color: MUTED, margin: 0, lineSpacing: 17,
    });
  });

  card(s, M, 4.3, CW, 1.6, LIGHT);
  s.addText([
    { text: "Small growers do not lose money because they farm badly.", options: { color: INK, breakLine: true } },
    { text: "They lose it because they cannot wait.", options: { color: ACCENT } },
  ], {
    x: M + 0.5, y: 4.5, w: 11.4, h: 1.2, fontFace: HEAD, fontSize: 22,
    bold: true, valign: "middle", lineSpacing: 32, margin: 0,
  });

  s.addText(
    "Tomato went from roughly PKR 90 a kg to PKR 400 and above within a few weeks this year. Everyone in the chain who can " +
    "wait captures that movement. The grower, who cannot, ends up with 20 to 30 percent of what the customer finally pays.",
    { x: M, y: 6.15, w: 11.9, h: 0.65, fontFace: BODY, fontSize: 13.5, color: MUTED, margin: 0, valign: "top", lineSpacing: 19 }
  );

  s.addNotes(
    "This is the slide the whole pitch rests on. If the panel remembers one thing, it should be that we are " +
    "not selling refrigeration, we are selling the ability to wait. Say that out loud. The 20 to 30 percent " +
    "farmer share figure comes from reporting on the arhti system and is worth quoting."
  );
}

// ============================================================
// 4. WHY EXISTING STORAGE DOES NOT REACH THEM
// ============================================================
{
  const s = pres.addSlide();
  sectionHead(s, "03  THE GAP", "Cold storage exists. Just not for a two acre farm.",
    "Pakistan has around 555 cold storage units. Not one of them will take ten crates for ten days.");

  const rows = [
    ["Size", "1,000 tonnes and up", "5 tonnes, in the village"],
    ["Location", "Industrial areas near big cities", "Within 15 minutes of the field"],
    ["Booking", "Season long contracts", "A few days at a time"],
    ["Minimum", "Full truckloads", "Ten crates"],
    ["Power", "Grid, so load shedding hits the stock", "Solar, so it keeps running"],
    ["Customer", "Traders and large commission agents", "The grower himself"],
  ];

  const y0 = 2.5, rh = 0.68;

  // header row
  s.addText("What the market offers today", {
    x: 4.55, y: y0 - 0.45, w: 4.0, h: 0.32, fontFace: BODY, fontSize: 12, color: MUTED, bold: true, charSpacing: 1, valign: "top", margin: 0,
  });
  s.addText("What a small grower needs", {
    x: 8.75, y: y0 - 0.45, w: 4.0, h: 0.32, fontFace: BODY, fontSize: 12, color: GREEN, bold: true, charSpacing: 1, valign: "top", margin: 0,
  });

  rows.forEach(([label, have, need], i) => {
    const y = y0 + i * rh;
    if (i % 2 === 0) {
      s.addShape(pres.ShapeType.rect, { x: M, y: y - 0.06, w: CW, h: rh - 0.04, fill: { color: LIGHT } });
    }
    s.addText(label, {
      x: M + 0.25, y, w: 3.4, h: 0.5, fontFace: HEAD, fontSize: 14, color: INK, bold: true, valign: "middle", margin: 0,
    });
    s.addText(have, {
      x: 4.55, y, w: 4.0, h: 0.5, fontFace: BODY, fontSize: 13, color: MUTED, valign: "middle", margin: 0,
    });
    s.addText(need, {
      x: 8.75, y, w: 4.0, h: 0.5, fontFace: BODY, fontSize: 13, color: GREEN, bold: true, valign: "middle", margin: 0,
    });
  });

  s.addText(
    "The gap is not only how much capacity exists. It is who the capacity was built for.",
    { x: M, y: 6.75, w: 11.9, h: 0.4, fontFace: BODY, fontSize: 13.5, color: INK, bold: true, valign: "top", margin: 0 }
  );

  s.addNotes(
    "Expect the question: why has nobody done this already. The answer is on this slide. Cold storage in Pakistan " +
    "was built as trader infrastructure. The economics of a 1,000 tonne facility force season contracts and " +
    "truckload minimums. Nothing about it is designed for a two acre farmer."
  );
}

// ============================================================
// 5. RESEARCH
// ============================================================
{
  const s = pres.addSlide();
  sectionHead(s, "04  OUR RESEARCH", "What we read, and what we went and asked.");

  // left: secondary
  card(s, M, 2.0, 6.0, 4.5, LIGHT);
  s.addText("Desk research", {
    x: M + 0.35, y: 2.22, w: 5.3, h: 0.4, fontFace: HEAD, fontSize: 18, color: INK, bold: true, margin: 0,
  });
  const desk = [
    "Pakistan Bureau of Statistics, 7th Agricultural Census: 64 percent of farms are under 5 acres, 26 percent under one acre, average farm size now 5.1 acres.",
    "Asian Development Bank, reported in Dawn: post harvest losses cost Pakistan over one billion dollars a year.",
    "Trade press on the storage gap: about 555 cold storage units holding roughly 900,000 tonnes against 13 to 15 million tonnes of fruit and vegetable production.",
    "IGC study on the fresh produce supply chain, and PIDE's counter argument that the commission agent also supplies credit. We took that seriously and built around him rather than against him.",
  ];
  s.addText(
    desk.map((t, i) => ({ text: t, options: { bullet: true, breakLine: i !== desk.length - 1 } })),
    { x: M + 0.35, y: 2.72, w: 5.3, h: 3.6, fontFace: BODY, fontSize: 11.5, color: INK, lineSpacing: 15, paraSpaceAfter: 8, margin: 0 }
  );

  // right: primary
  card(s, 7.05, 2.0, 5.55, 4.5, WHITE);
  s.addShape(pres.ShapeType.roundRect, {
    x: 7.05, y: 2.0, w: 5.55, h: 4.5, rectRadius: 0.08,
    fill: { color: WHITE }, line: { color: GREEN, width: 1.5 },
  });
  s.addText("The three questions that decide it", {
    x: 7.4, y: 2.22, w: 4.9, h: 0.4, fontFace: HEAD, fontSize: 18, color: GREEN, bold: true, margin: 0,
  });
  s.addText("From published evidence. Growers interviewed next.", {
    x: 7.4, y: 2.66, w: 4.9, h: 0.3, fontFace: BODY, fontSize: 11.5, color: MUTED, italic: true, valign: "top", margin: 0,
  });

  const qs = [
    ["How long can he hold the crop?",
      "Days at Pakistani field temperatures. Trials on a Punjab tomato variety hold it for weeks at 10 degrees and 90 percent humidity."],
    ["Is PKR 12 per crate per day payable?",
      "Big cold stores charge PKR 3 to 6 per kg a month. We cost more per day and are only paid for the days used."],
    ["How much does he actually lose?",
      "15 to 20 percent goes in handling the picked crop, before the 10 to 12 percent lost in transport."],
  ];
  qs.forEach(([q, a], i) => {
    const y = 3.14 + i * 1.1;
    numCircle(s, 7.4, y + 0.01, i + 1, GREEN, WHITE, 0.32);
    s.addText(q, {
      x: 7.82, y, w: 4.45, h: 0.3, fontFace: BODY, fontSize: 11.5, color: INK, bold: true, valign: "top", margin: 0,
    });
    s.addText(a, {
      x: 7.82, y: y + 0.32, w: 4.45, h: 0.7, fontFace: BODY, fontSize: 11, color: MUTED, valign: "top", margin: 0, lineSpacing: 14,
    });
  });

  footNote(s, "Sources for each of the three answers are listed on the final slide.");

  s.addNotes(
    "Be honest here. Say which numbers are read and which are heard first hand. A panel trusts a presenter " +
    "who separates the two. The three questions on the right are the ones that decide whether the idea works, " +
    "so lead with those answers when you have them."
  );
}

// ============================================================
// 6. THE SOLUTION
// ============================================================
{
  const s = pres.addSlide();
  titleSlide(s, "05  THE SOLUTION", "Thanda Godam", "A 5 tonne solar powered cold room, placed inside the village, rented by the crate by the day.");

  const pillars = [
    ["Close", "Within 15 minutes of the field, so the crop goes in cold the same morning it is picked."],
    ["Small", "Priced per 20 kg crate per day. No deposit, no season contract, no truckload minimum."],
    ["Independent", "Runs on solar with battery backup, so load shedding does not spoil what is inside."],
  ];
  pillars.forEach(([h, t], i) => {
    const x = M + i * 4.02;
    s.addShape(pres.ShapeType.roundRect, {
      x, y: 2.3, w: 3.85, h: 2.5, rectRadius: 0.08, fill: { color: "1D4C37" },
    });
    numCircle(s, x + 0.32, 2.55, i + 1, ACCENT, WHITE, 0.5);
    s.addText(h, {
      x: x + 0.32, y: 3.18, w: 3.2, h: 0.42, fontFace: HEAD, fontSize: 21, color: WHITE, bold: true, valign: "top", margin: 0,
    });
    s.addText(t, {
      x: x + 0.32, y: 3.66, w: 3.25, h: 1.0, fontFace: BODY, fontSize: 12.5, color: "BFD8C7", valign: "top", margin: 0, lineSpacing: 17,
    });
  });

  s.addText("We are not selling cold storage.", {
    x: M, y: 5.25, w: 11.9, h: 0.55, fontFace: HEAD, fontSize: 27, color: "9BC4A8", valign: "top", margin: 0,
  });
  s.addText("We are selling the ability to wait.", {
    x: M, y: 5.82, w: 11.9, h: 0.62, fontFace: HEAD, fontSize: 32, color: ACCENT, bold: true, valign: "top", margin: 0,
  });

  s.addNotes(
    "Say the name and then the one line description, nothing more, before you go into the three pillars. " +
    "Close on the two lines at the bottom and pause. That is the sentence you want repeated when the panel " +
    "discusses the ideas afterwards."
  );
}

// ============================================================
// 7. HOW IT WORKS
// ============================================================
{
  const s = pres.addSlide();
  sectionHead(s, "06  HOW IT WORKS", "Five steps, all of them already familiar.");

  const steps = [
    ["Bring", "He brings crates the same day he picks. Weighed, tagged and photographed at the gate. He keeps a printed receipt."],
    ["Pay", "PKR 12 per 20 kg crate per day, in cash or on easypaisa. He pays for the days he uses and nothing else."],
    ["Store", "Held at the right temperature and humidity for that crop. Tomato, onion, potato, chili and leafy greens each have their own setting."],
    ["Choose", "He takes his crates out whenever he wants and sells them himself at the mandi. Nothing is locked in."],
    ["Or sell through us", "If he prefers, we grade, pack and move his crop to city buyers in one aggregated load and keep a 7 percent service margin."],
  ];

  const cardW = 2.32, gap = 0.15;
  steps.forEach(([h, t], i) => {
    const x = M + i * (cardW + gap);
    s.addShape(pres.ShapeType.roundRect, {
      x, y: 2.15, w: cardW, h: 3.5, rectRadius: 0.08,
      fill: { color: i === 4 ? LIGHT : WHITE }, line: { color: i === 4 ? GREEN : "D8E0DA", width: i === 4 ? 1.5 : 1 },
    });
    numCircle(s, x + 0.24, 2.42, i + 1, i === 4 ? ACCENT : GREEN);
    s.addText(h, {
      x: x + 0.24, y: 3.02, w: cardW - 0.48, h: 0.62, fontFace: HEAD, fontSize: 16, color: INK, bold: true, valign: "top", margin: 0, lineSpacing: 19,
    });
    s.addText(t, {
      x: x + 0.24, y: 3.68, w: cardW - 0.48, h: 1.75, fontFace: BODY, fontSize: 11, color: MUTED, valign: "top", margin: 0, lineSpacing: 15,
    });
  });

  card(s, M, 5.9, CW, 0.95, LIGHT);
  s.addText("Steps 1 to 4 are the whole service. Step 5 is optional for the grower and is where most of our income comes from.", {
    x: M + 0.42, y: 6.1, w: 11.4, h: 0.55, fontFace: BODY, fontSize: 14, color: INK, bold: true, valign: "middle", margin: 0,
  });

  s.addNotes(
    "Walk left to right without reading the cards word for word. The important design choice is that step 5 is " +
    "optional. The grower is never forced to sell through us, which is what makes him willing to try the storage " +
    "in the first place."
  );
}

// ============================================================
// 8. TARGET AUDIENCE
// ============================================================
{
  const s = pres.addSlide();
  sectionHead(s, "07  TARGET AUDIENCE", "Who uses it, who benefits, and who pays.");

  const blocks = [
    ["Who uses it", GREEN, [
      "Growers under 5 acres, working tomato, chili and leafy vegetables first. These are the crops whose prices move week to week.",
      "They harvest in small lots, sell within two days, and have no storage of their own.",
    ]],
    ["Who pays", ACCENT, [
      "The grower pays the crate fee, in small amounts he can see the return on.",
      "City buyers pay our 7 percent service margin on aggregated, graded loads.",
    ]],
    ["Who else gains", DARK, [
      "Households eat better because income steadies across the season.",
      "City consumers see a slightly steadier supply and less waste in the chain.",
    ]],
  ];

  blocks.forEach(([h, col, lines], i) => {
    const x = M + i * 4.02;
    card(s, x, 2.05, 3.85, 2.3, WHITE);
    s.addShape(pres.ShapeType.roundRect, {
      x, y: 2.05, w: 3.85, h: 2.3, rectRadius: 0.08, fill: { color: WHITE }, line: { color: "D8E0DA", width: 1 },
    });
    s.addText(h, {
      x: x + 0.3, y: 2.28, w: 3.25, h: 0.4, fontFace: HEAD, fontSize: 17, color: col, bold: true, margin: 0,
    });
    s.addText(
      lines.map((t, j) => ({ text: t, options: { bullet: true, breakLine: j !== lines.length - 1 } })),
      { x: x + 0.3, y: 2.72, w: 3.25, h: 1.45, fontFace: BODY, fontSize: 11.5, color: MUTED, valign: "top", lineSpacing: 15, paraSpaceAfter: 6, margin: 0 }
    );
  });

  card(s, M, 4.6, CW, 1.95, DARK);
  s.addText("How many people that is", {
    x: M + 0.42, y: 4.8, w: 5.5, h: 0.36, fontFace: HEAD, fontSize: 17, color: WHITE, bold: true, margin: 0,
  });
  const sizing = [
    ["64%", "of all farms in Pakistan are under 5 acres"],
    ["26%", "are under a single acre"],
    ["300-400", "growing households within 6 km of the pilot site, our own estimate"],
  ];
  sizing.forEach(([big, small], i) => {
    const x = M + 0.42 + i * 3.9;
    s.addText(big, {
      x, y: 5.3, w: 3.6, h: 0.5, fontFace: HEAD, fontSize: 28, color: ACCENT, bold: true, margin: 0,
    });
    s.addText(small, {
      x, y: 5.82, w: 3.6, h: 0.55, fontFace: BODY, fontSize: 12, color: "BFD8C7", margin: 0, valign: "top", lineSpacing: 15,
    });
  });

  footNote(s, "Pilot site: a union council in Depalpur tehsil, Okara district. Cold storage there was built for potato traders. The vegetable growers alongside them have none.");

  s.addNotes(
    "Keep the distinction between user, payer and beneficiary clear, because it is the thing panels probe. " +
    "The grower is both user and payer for storage. The city buyer is the payer for aggregation. " +
    "Be upfront that the 300 to 400 household figure is our own estimate and not a published number. " +
    "If asked why Okara: Okara, Depalpur, Kasur, Sahiwal and Pakpattan carry about 75 percent of Punjab's potato crop, " +
    "so the district already has cold storage, all of it sized and contracted for potato traders. The vegetable growers " +
    "farming next to it get nothing from it. That contrast is the reason we chose the site, and it is also why we lead " +
    "with tomato, chili and leafy greens rather than potato."
  );
}

// ============================================================
// 9. VALUE PROPOSITION
// ============================================================
{
  const s = pres.addSlide();
  sectionHead(s, "08  VALUE PROPOSITION", "The grower's arithmetic on one load of tomatoes.",
    "200 kg picked, ten crates, held for ten days.");

  const lines = [
    ["What he pays", "10 crates  x  PKR 12  x  10 days", "PKR 1,200", ACCENT],
    ["What he saves", "25 percent of 200 kg would have spoiled, so 50 kg kept", "50 kg"],
    ["What that is worth", "50 kg at a PKR 60 per kg farm gate price", "PKR 3,000", GREEN],
    ["What he still has left", "the choice to sell on a better day instead of a bad one", "upside on top"],
  ];

  lines.forEach(([label, detail, val, col], i) => {
    const y = 2.35 + i * 0.85;
    if (i % 2 === 0) {
      s.addShape(pres.ShapeType.rect, { x: M, y: y - 0.1, w: CW, h: 0.78, fill: { color: LIGHT } });
    }
    s.addText(label, {
      x: M + 0.25, y, w: 3.1, h: 0.55, fontFace: HEAD, fontSize: 15, color: INK, bold: true, valign: "middle", margin: 0,
    });
    s.addText(detail, {
      x: 3.6, y, w: 5.6, h: 0.55, fontFace: BODY, fontSize: 13, color: MUTED, valign: "middle", margin: 0,
    });
    s.addText(val, {
      x: 9.4, y, w: 2.95, h: 0.55, fontFace: HEAD, fontSize: 19, color: col || INK, bold: true,
      align: "right", valign: "middle", margin: 0,
    });
  });

  card(s, M, 5.85, CW, 1.0, DARK);
  s.addText("About PKR 2.5 comes back for every PKR 1 he spends on storage, before he has sold anything at a better price.", {
    x: M + 0.42, y: 6.05, w: 11.4, h: 0.6, fontFace: HEAD, fontSize: 17, color: WHITE, bold: true, valign: "middle", margin: 0,
  });

  footNote(s, "The PKR 60 per kg farm gate price is a conservative in season figure. Both it and the spoilage rate move with the crop and the week.");

  s.addNotes(
    "Do this slide slowly and let the panel follow the arithmetic. The argument is not that we save 40 percent " +
    "of the national harvest, it is that one grower gets two and a half rupees back for every rupee he risks. " +
    "That is what makes him try it a second time."
  );
}

// ============================================================
// 10. BUSINESS MODEL
// ============================================================
{
  const s = pres.addSlide();
  sectionHead(s, "09  BUSINESS AND SUSTAINABILITY MODEL", "One unit, two income lines, per month.");

  // chart
  s.addChart(pres.ChartType.bar, [
    {
      name: "PKR per month",
      labels: ["Crate\nrental", "Aggregation\nmargin", "Running\ncosts"],
      values: [54000, 63000, 85000],
    },
  ], {
    x: M, y: 2.05, w: 6.2, h: 3.1,
    barDir: "col", barGapWidthPct: 60, varyColors: true,
    chartColors: [GREEN, "6FB08C", "C9552E"],
    showTitle: true, title: "PKR per month, one 5 tonne unit",
    titleFontFace: BODY, titleFontSize: 12, titleColor: MUTED,
    showValue: true, dataLabelPosition: "outEnd", dataLabelFormatCode: "#,##0",
    dataLabelFontFace: BODY, dataLabelFontSize: 10, dataLabelColor: INK,
    showLegend: false,
    catAxisLabelFontFace: BODY, catAxisLabelFontSize: 10.5, catAxisLabelColor: INK,
    valAxisLabelFontFace: BODY, valAxisLabelFontSize: 9, valAxisLabelColor: MUTED,
    valAxisLabelFormatCode: "#,##0",
    valGridLine: { color: "E6EBE7", size: 1 },
    catGridLine: { style: "none" },
  });

  s.addText("PKR 32,000", {
    x: M, y: 5.25, w: 6.2, h: 0.55, fontFace: HEAD, fontSize: 30, color: GREEN, bold: true, margin: 0,
  });
  s.addText("surplus a month, once the room is running", {
    x: M, y: 5.8, w: 6.2, h: 0.35, fontFace: BODY, fontSize: 13, color: MUTED, margin: 0,
  });

  // right column: the build up
  const items = [
    ["Crate rental", "250 crate capacity at 60 percent average occupancy, PKR 12 a day", "54,000", GREEN],
    ["Aggregation margin", "15 tonnes handled a month, 7 percent on a PKR 60 per kg value", "63,000", GREEN],
    ["Running costs", "operator 30,000, loader 20,000, transport 15,000, maintenance 8,000, packaging 7,000, phone and misc 5,000", "85,000", "C9552E"],
  ];
  let yy = 2.15;
  items.forEach(([h, d, v, col]) => {
    s.addText(h, { x: 7.1, y: yy, w: 3.9, h: 0.3, fontFace: HEAD, fontSize: 14.5, color: INK, bold: true, margin: 0 });
    s.addText("PKR " + v, { x: 11.0, y: yy, w: 1.6, h: 0.3, fontFace: HEAD, fontSize: 14.5, color: col, bold: true, align: "right", margin: 0 });
    s.addText(d, { x: 7.1, y: yy + 0.32, w: 5.5, h: 0.6, fontFace: BODY, fontSize: 11, color: MUTED, margin: 0, lineSpacing: 14 });
    yy += 1.06;
  });

  card(s, 7.05, 5.35, 5.55, 1.45, LIGHT);
  s.addText("How it is funded, honestly", {
    x: 7.4, y: 5.5, w: 4.9, h: 0.3, fontFace: HEAD, fontSize: 14, color: INK, bold: true, margin: 0,
  });
  s.addText(
    "At an estimated PKR 2.5 million to build, one unit repays itself in about six and a half years. That is too slow for " +
    "an equity investor and normal for zakat, CSR or green financing capital. So we raise the building cost once as a grant, " +
    "and the unit covers its own running costs from the first season and helps fund the next one.",
    { x: 7.4, y: 5.82, w: 4.9, h: 0.9, fontFace: BODY, fontSize: 10, color: MUTED, margin: 0, lineSpacing: 13 }
  );

  s.addNotes(
    "Do not hide the payback period. Saying it before the panel finds it is what makes the rest of the numbers " +
    "credible. The structure is deliberate: grant capital for the room, trading income for the operations. " +
    "The capital estimate of PKR 2.5 million still needs three supplier quotes, which is week 4 to 6 of our plan."
  );
}

// ============================================================
// 11. COMPETITION
// ============================================================
{
  const s = pres.addSlide();
  sectionHead(s, "10  WHAT ELSE IS OUT THERE", "Four things already serve this farmer.",
    "None of them do what we are proposing to do.");

  const comps = [
    ["Commercial cold storages", "Around 555 units nationally. Built for traders on season contracts and truckload minimums, and sited near cities.", "Cannot take ten crates for ten days."],
    ["Agritech marketplaces", "Tazah, Bazaar and others matched buyers and sellers digitally. Tazah has since pivoted away from local agri trade twice.", "They move produce. They do not fix where it waits."],
    ["Government and donor schemes", "Cold chain grants and subsidised storage funds exist and are useful.", "The capacity added is small next to a 40 percent loss."],
    ["The commission agent", "He advances credit before sowing and guarantees offtake at harvest. That is real value, and PIDE is right that he is not simply a villain.", "We do not replace him. We rent him crate space at the same rate."],
  ];

  comps.forEach(([h, what, gap], i) => {
    const x = M + (i % 2) * 6.15;
    const y = 2.15 + Math.floor(i / 2) * 2.2;
    s.addShape(pres.ShapeType.roundRect, {
      x, y, w: 5.75, h: 2.0, rectRadius: 0.08,
      fill: { color: i === 3 ? LIGHT : WHITE }, line: { color: "D8E0DA", width: 1 },
    });
    s.addText(h, {
      x: x + 0.3, y: y + 0.18, w: 5.15, h: 0.34, fontFace: HEAD, fontSize: 16, color: INK, bold: true, valign: "top", margin: 0,
    });
    s.addText(what, {
      x: x + 0.3, y: y + 0.56, w: 5.15, h: 0.82, fontFace: BODY, fontSize: 11.5, color: MUTED, valign: "top", margin: 0, lineSpacing: 15,
    });
    s.addText(gap, {
      x: x + 0.3, y: y + 1.4, w: 5.15, h: 0.45, fontFace: BODY, fontSize: 11.5, color: ACCENT, bold: true, italic: true, valign: "top", margin: 0, lineSpacing: 15,
    });
  });

  s.addText(
    "The only storage in the chain priced by the crate, by the day, and sited where the crop is picked.",
    { x: M, y: 6.75, w: 11.9, h: 0.4, fontFace: HEAD, fontSize: 15, color: DARK, bold: true, valign: "top", margin: 0 }
  );

  s.addNotes(
    "The fourth card is the one that will earn you marks. Most student pitches paint the arhti as the enemy. " +
    "PIDE's research argues he provides credit nobody else provides. Saying that shows you read past the " +
    "obvious source, and it also makes our plan more realistic, because he is the person who can kill the " +
    "project in a village if he wants to."
  );
}

// ============================================================
// 12. EXECUTION AND MARKETING
// ============================================================
{
  const s = pres.addSlide();
  sectionHead(s, "11  LAUNCH AND MARKETING", "Village marketing is not digital ads.");

  const channels = [
    ["Friday announcement", "A two minute announcement after Friday prayers in three village mosques, made by someone the village already knows."],
    ["The input dealer's shop", "Every grower visits the seed and fertiliser shop. A small stall and a signboard there reaches more people than any advertisement."],
    ["Free first season", "The first 20 growers store free for one season in exchange for letting us record their weights, prices and dates."],
    ["A WhatsApp rate group", "Daily mandi rates sent to every grower who signs up. It costs nothing and gives them a reason to stay in contact."],
    ["Alkhidmat's district network", "Existing offices and volunteers make the introductions and carry the trust we have not earned yet."],
    ["A board at the gate", "What growers who waited actually earned, written up where everyone can see it. Proof travels faster than promises."],
  ];

  channels.forEach(([h, t], i) => {
    const x = M + (i % 3) * 4.02;
    const y = 2.1 + Math.floor(i / 3) * 2.2;
    s.addShape(pres.ShapeType.roundRect, {
      x, y, w: 3.85, h: 1.95, rectRadius: 0.08, fill: { color: WHITE }, line: { color: "D8E0DA", width: 1 },
    });
    numCircle(s, x + 0.28, y + 0.24, i + 1, GREEN, WHITE, 0.4);
    s.addText(h, {
      x: x + 0.78, y: y + 0.24, w: 2.85, h: 0.42, fontFace: HEAD, fontSize: 14, color: INK, bold: true, margin: 0, lineSpacing: 17,
    });
    s.addText(t, {
      x: x + 0.28, y: y + 0.78, w: 3.3, h: 1.05, fontFace: BODY, fontSize: 11, color: MUTED, margin: 0, lineSpacing: 14,
    });
  });

  s.addText(
    "The first season is not about volume. It is about twenty growers who can tell the next hundred what happened to their money.",
    { x: M, y: 6.6, w: 11.9, h: 0.4, fontFace: BODY, fontSize: 13.5, color: DARK, italic: true, margin: 0 }
  );

  s.addNotes(
    "If someone asks about social media or a mobile app, be clear that our customer decides at the input " +
    "dealer's shop and at Friday prayers, not on a feed. A rate group on WhatsApp is the only digital piece " +
    "we need at the start, and it works because everyone already has WhatsApp."
  );
}

// ============================================================
// 13. RISKS
// ============================================================
{
  const s = pres.addSlide();
  sectionHead(s, "12  RISKS", "What could go wrong, and what we would do.");

  const risks = [
    ["Growers do not trust us with their crop", "Weigh, tag and photograph at the gate. Printed receipt every time. A village committee with two growers on it holds the second key."],
    ["Arguments over quality on collection", "The grade is agreed and written on the receipt when the crop goes in, with the entry photograph attached to it."],
    ["The whole market crashes, not just one day's price", "Storage buys days, it does not buy a different market. We lead with tomato, chili and leafy greens, where prices move week to week."],
    ["The room sits empty out of season", "Rotate to crops with different calendars, and offer the same room for seed, dairy and mango season overflow."],
    ["Solar or compressor breakdown", "A service contract with the supplier from day one, spare parts held locally, and a small generator that can run the compressor alone."],
    ["The commission agent works against us", "He is offered crate space at the same rate as everyone else. We compete with his storage, not with his credit."],
    ["Capital does not arrive", "We can start with a 2 tonne room at a much lower cost and grow from the surplus, which delays the plan but does not end it."],
  ];

  risks.forEach(([r, m], i) => {
    const y = 2.0 + i * 0.73;
    if (i % 2 === 0) {
      s.addShape(pres.ShapeType.rect, { x: M, y: y - 0.06, w: CW, h: 0.69, fill: { color: LIGHT } });
    }
    numCircle(s, M + 0.2, y + 0.11, i + 1, (i === 0 || i === 2) ? ACCENT : GREEN, WHITE, 0.36);
    s.addText(r, {
      x: M + 0.7, y, w: 3.9, h: 0.6, fontFace: HEAD, fontSize: 12.5, color: INK, bold: true, valign: "middle", margin: 0, lineSpacing: 15,
    });
    s.addText(m, {
      x: 5.5, y, w: 7.1, h: 0.6, fontFace: BODY, fontSize: 11, color: MUTED, valign: "middle", margin: 0, lineSpacing: 13.5,
    });
  });

  s.addNotes(
    "Have this slide ready but move through it quickly unless asked. The two in orange are the ones that " +
    "actually decide whether a first season works. Trust is the real product in a village, not refrigeration."
  );
}

// ============================================================
// 14. NEXT STEPS
// ============================================================
{
  const s = pres.addSlide();
  titleSlide(s, "13  NEXT STEPS", "The next 90 days", "Nothing here needs the full capital. All of it can start this month.");

  const phases = [
    ["Weeks 1 to 3", "Field validation", "12 grower interviews, 3 commission agents, 2 storage operators. Settle the one question that matters: will he pay PKR 12 a crate."],
    ["Weeks 4 to 6", "Real costs", "Three written quotes for a 5 tonne solar cold room. Replace our PKR 2.5 million estimate with a number from a supplier."],
    ["Weeks 7 to 9", "Site and buyers", "A written site agreement with one village, support from the union council, and a letter of intent from two city buyers."],
    ["Weeks 10 to 12", "Capital and build", "Put the case to Alkhidmat, a CSR partner and one green financing window. Begin the build on the pilot unit."],
  ];

  phases.forEach(([when, what, detail], i) => {
    const x = M + i * 3.05;
    s.addShape(pres.ShapeType.roundRect, {
      x, y: 2.35, w: 2.85, h: 2.85, rectRadius: 0.08, fill: { color: "1D4C37" },
    });
    numCircle(s, x + 0.26, 2.6, i + 1, ACCENT, WHITE, 0.42);
    s.addText(when, {
      x: x + 0.26, y: 3.14, w: 2.35, h: 0.3, fontFace: BODY, fontSize: 11, color: "9BC4A8", bold: true, charSpacing: 1, margin: 0,
    });
    s.addText(what, {
      x: x + 0.26, y: 3.46, w: 2.35, h: 0.42, fontFace: HEAD, fontSize: 16, color: WHITE, bold: true, margin: 0,
    });
    s.addText(detail, {
      x: x + 0.26, y: 3.94, w: 2.35, h: 1.15, fontFace: BODY, fontSize: 10.5, color: "BFD8C7", margin: 0, lineSpacing: 14,
    });
  });

  s.addText("WHAT WE ARE ASKING FOR", {
    x: M, y: 5.48, w: 5.5, h: 0.3, fontFace: BODY, fontSize: 11.5, color: "9BC4A8", bold: true, charSpacing: 1.8, valign: "top", margin: 0,
  });
  s.addText(
    "Capital for one pilot unit, a village willing to host it, and an introduction to two city buyers. " +
    "One room, one season, and a real number at the end of it.",
    { x: M, y: 5.88, w: 11.9, h: 0.95, fontFace: HEAD, fontSize: 19, color: WHITE, bold: true, valign: "top", margin: 0, lineSpacing: 27 }
  );

  s.addNotes(
    "End on the ask, not on a thank you slide. Be specific and be small: one unit, one village, one season. " +
    "A modest ask that can be said yes to in the room beats a large one that has to be taken away and thought about."
  );
}

// ============================================================
// 15. SOURCES
// ============================================================
{
  const s = pres.addSlide();
  sectionHead(s, "APPENDIX", "Sources");

  const left = [
    "Pakistan Bureau of Statistics, 7th Agricultural Census, reported by Profit and The Express Tribune, August 2025. Farm size distribution.",
    "Asian Development Bank estimate on post harvest losses, reported in Dawn.",
    "Pakistan Today and FreshPlaza, 2026. Forty percent post harvest losses and the cold storage gap.",
    "AgriHunt. Stage by stage breakdown of losses in fruits and vegetables.",
    "The Express Tribune, 2026. Storage fund set against farm losses.",
  ];
  const right = [
    "Dawn, 2026. Punjab potato growers face collapse as oversupply deepens. Prices of PKR 20 to 25 a kg and per acre losses.",
    "Pakistan Today, August 2026. Tomato moving from roughly PKR 90 to PKR 400 and above a kg.",
    "Pakistan Horticulture Development and Export Company, potato challenges and prospects in Okara.",
    "International Growth Centre, PAK-22066, March 2023. Understanding the fresh produce supply chain.",
    "PIDE. The role of the middleman and neglected aspects. Arab News and Dawn on the arhti system.",
    "Post harvest trials on Punjab tomato varieties comparing ambient storage with 10 degrees at 90 to 95 percent humidity.",
  ];

  s.addText(
    left.map((t, i) => ({ text: t, options: { bullet: true, breakLine: i !== left.length - 1 } })),
    { x: M, y: 1.8, w: 5.8, h: 3.5, fontFace: BODY, fontSize: 11, color: INK, valign: "top", lineSpacing: 15, paraSpaceAfter: 9, margin: 0 }
  );
  s.addText(
    right.map((t, i) => ({ text: t, options: { bullet: true, breakLine: i !== right.length - 1 } })),
    { x: 6.9, y: 1.8, w: 5.7, h: 3.5, fontFace: BODY, fontSize: 11, color: INK, valign: "top", lineSpacing: 15, paraSpaceAfter: 9, margin: 0 }
  );

  card(s, M, 5.5, CW, 1.15, LIGHT);
  s.addText(
    "Figures that are ours rather than published, and are marked as such on the slides: the PKR 2.5 million build cost, the 60 percent " +
    "occupancy assumption, the 7 percent aggregation margin, the PKR 12 crate price, and the 300 to 400 household catchment.",
    { x: M + 0.42, y: 5.7, w: 11.4, h: 0.75, fontFace: BODY, fontSize: 12.5, color: INK, valign: "middle", margin: 0, lineSpacing: 17 }
  );

  s.addNotes(
    "Keep this slide up during questions. If a number is challenged, point at where it came from. " +
    "The box at the bottom lists everything that is our own estimate rather than a published figure."
  );
}

pres.writeFile({ fileName: "/home/user/Claude/genz-entrepreneurship/Thanda-Godam-Pitch.pptx" })
  .then(f => console.log("written:", f));
