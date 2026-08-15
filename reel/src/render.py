"""Render the 70-second vertical reel frame by frame."""
import json, os, sys, math
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

from design import *
import timing

FPS      = 30
DUR      = 70.0
NFRAMES  = int(round(FPS * DUR))
OUT      = "frames"

# ---------------------------------------------------------------- timing
_marks = json.load(open("vo.json"))
K = DUR / _marks[-1]["end"]                      # audio is nudged to exactly 70.0s
SEG = {m["name"]: (m["start"] * K, m["end"] * K) for m in _marks}

_segments = timing.word_times()
for s in _segments:
    s["start"] *= K; s["end"] *= K
    for w in s["words"]:
        w["s"] *= K; w["e"] *= K
CARDS = timing.cards(_segments)
timing.srt(CARDS)

WT = {}
for s in _segments:
    for w in s["words"]:
        WT.setdefault((s["name"], w["w"]), w["s"])
def at(seg, word, dflt=0.0):
    return WT.get((seg, word), dflt)

# ---------------------------------------------------------------- assets
print("building plates …")
import plate, dress
BG_BIG = plate.library_bg(int(W * 1.18), int(H * 1.18))

_sub = Image.open("cut.png")
_rec, _mj = plate.recolour_jacket(_sub)
_lit = plate.relight(_rec, _mj)
SUBJ = dress.build(_lit, _sub)

# de-fringe: the original matte carried a bright halo from the pale wall behind him
_al = SUBJ.split()[3]
_er = _al.filter(ImageFilter.MinFilter(7)).filter(ImageFilter.GaussianBlur(1.6))
_np_a = np.asarray(SUBJ).astype(np.float32)
_edge = (np.asarray(_al).astype(np.float32) - np.asarray(_er).astype(np.float32)) / 255.0
_np_a[..., :3] *= (1.0 - 0.82 * np.clip(_edge * 1.4, 0, 1))[..., None]
SUBJ = Image.fromarray(np.clip(_np_a, 0, 255).astype(np.uint8))
SUBJ.putalpha(_er)

# final grade on the presenter so he reads clearly against the room
_a = np.asarray(SUBJ).astype(np.float32) / 255.0
_a[..., :3] = np.clip(_a[..., :3] * 1.09 + 0.014, 0, 1) ** 0.96
_a[..., :3] = np.clip((_a[..., :3] - 0.5) * 1.10 + 0.5, 0, 1)
_lum = _a[..., :3].mean(2, keepdims=True)
_a[..., :3] = np.clip(_lum + (_a[..., :3] - _lum) * 1.18, 0, 1)      # richer colour
_a[..., 0] = np.clip(_a[..., 0] * 1.035, 0, 1)                       # warm the skin
_a[..., 2] = np.clip(_a[..., 2] * 0.975, 0, 1)
SUBJ = Image.fromarray((_a * 255).astype(np.uint8))

SCALE   = 0.94
SUBJ    = SUBJ.resize((int(SUBJ.width * SCALE), int(SUBJ.height * SCALE)), Image.LANCZOS)
SUB_X, SUB_Y = 40, 644

# contact shadow so he sits in the room rather than on top of it
_sh = Image.new("L", (W, H), 0)
_sh.paste(SUBJ.split()[3], (SUB_X + 26, SUB_Y + 30))
SHADOW = Image.new("RGBA", (W, H), (0, 0, 0, 0))
SHADOW.putalpha(_sh.filter(ImageFilter.GaussianBlur(38)).point(lambda v: int(v * 0.55)))

# warm separation glow behind the presenter's head and shoulders
HALO = Image.new("RGBA", (W, H), (0, 0, 0, 0))
_hd = ImageDraw.Draw(HALO)
for _k in range(30, 0, -1):
    _f = _k / 30
    _al = int(30 * (1 - _f) ** 1.5)
    _hd.ellipse([540 - 540 * _f, 1120 - 600 * _f, 540 + 540 * _f, 1120 + 600 * _f],
                fill=(232, 178, 104, _al))
HALO = HALO.filter(ImageFilter.GaussianBlur(95))

SCRIM_BOT = scrim((W, H), 1210, 1860, 0.74, 1.4)
SCRIM_TOP = scrim((W, H), 980, 20, 0.58, 1.9)
GRAIN = grain_tiles(8)

VIGN = None
def _vign():
    global VIGN
    yy, xx = np.mgrid[0:H, 0:W]
    r = np.sqrt(((xx - W / 2) / (W * 0.82)) ** 2 + ((yy - H * 0.44) / (H * 0.70)) ** 2)
    VIGN = np.clip(1.09 - 0.34 * r ** 2.1, 0.52, 1.0)[..., None].astype(np.float32)
_vign()


# ---------------------------------------------------------------- helpers
def win(t, a, b, fi=0.45, fo=0.45):
    """0→1 envelope for an element live between a and b."""
    if t < a - fi or t > b + fo:
        return 0.0
    if t < a:
        return ease_io((t - (a - fi)) / fi)
    if t > b:
        return 1 - ease_io((t - b) / fo)
    return 1.0


def panel(d, box, a, tint=(12, 14, 19), border=AMBER, bw=2, radius=10):
    x0, y0, x1, y1 = box
    d.rounded_rectangle(box, radius=radius, fill=tint + (int(214 * a),))
    d.rounded_rectangle(box, radius=radius, outline=border + (int(150 * a),), width=bw)
    d.rectangle([x0 + 0, y0 + radius, x0 + 5, y1 - radius], fill=border + (int(235 * a),))


def kicker(d, x, y, txt, a, col=AMBER, size=25, track=5.2):
    if a <= 0.01:
        return
    d.rectangle([x, y + 6, x + 26, y + 10], fill=col + (int(255 * a),))
    text_tracked(d, (x + 42, y - 5), txt.upper(), MONO(size), col + (int(245 * a),), track)


def strike(d, x0, x1, y, p, col, w=4):
    if p <= 0:
        return
    d.line([(x0, y), (x0 + (x1 - x0) * ease_io(p), y)], fill=col + (235,), width=w)


# ---------------------------------------------------------------- overlays
def draw_title(lay, t):
    a = win(t, 0.35, 3.5, 0.5, 0.9)
    if a <= 0.01:
        return
    d = ImageDraw.Draw(lay)
    cx = W // 2
    rise = (1 - ease(min(1, (t - 0.35) / 1.0), 3)) * 26

    kx = cx - int(tw(d, "GEOPOLITICS BRIEF", MONO(26), 6.5) / 2) - 34
    kicker(d, kx, 690 + rise, "GEOPOLITICS BRIEF", a, AMBER, 26, 6.5)

    lines = ["WHEN THE DATA", "STOPPED FLOWING"]
    y = 762 + rise
    for i, ln in enumerate(lines):
        f = SERIF(92)
        la = win(t, 0.55 + i * 0.16, 3.5, 0.5, 0.9)
        x = cx - tw(d, ln, f) / 2
        shadow_text(lay, (x, y), ln, f, PAPER + (int(255 * la),), blur=14, alpha=int(170 * la))
        y += 108
    d = ImageDraw.Draw(lay)
    d.line([(cx - 90, y + 22), (cx + 90, y + 22)], fill=AMBER + (int(220 * a),), width=3)
    sub = "THE INDUS TREATY CRISIS, EXPLAINED"
    f2 = MONO(27)
    sa = win(t, 1.15, 3.5, 0.5, 0.9)
    text_tracked(d, (cx - tw(d, sub, f2, 4.4) / 2, y + 56), sub, f2, MUTED + (int(235 * sa),), 4.4)


def draw_brand(lay, t):
    a = win(t, 4.3, DUR, 0.7, 0.0)
    if a <= 0.01:
        return
    d = ImageDraw.Draw(lay)
    d.rectangle([64, 104, 70, 148], fill=AMBER + (int(255 * a),))
    text_tracked(d, (88, 104), "SAYED ZEESHAN HAIDER", MONO(27), PAPER + (int(242 * a),), 3.0)
    text_tracked(d, (88, 141), "GEOPOLITICS BRIEF", MONO_R(21), MUTED + (int(215 * a),), 3.6)
    d.line([(64, 182), (W - 64, 182)], fill=(255, 255, 255, int(34 * a)), width=2)

    # progress
    p = min(1.0, t / DUR)
    d.line([(64, 1852), (W - 64, 1852)], fill=(255, 255, 255, int(40 * a)), width=3)
    d.line([(64, 1852), (64 + (W - 128) * p, 1852)], fill=AMBER + (int(230 * a),), width=3)


KICKERS = [
    ("CONTEXT",        "23 APRIL 2025 · TREATY IN ABEYANCE"),
    ("CORE ANALYSIS",  "WHAT INDIA CAN ACTUALLY DO"),
    ("EVIDENCE",       "THE NUMBERS AND THE LAW"),
    ("WHY IT MATTERS", "WHY IT MATTERS"),
    ("CONCLUSION",     "THE BOTTOM LINE"),
]


def draw_kicker(lay, t):
    d = ImageDraw.Draw(lay)
    for name, txt in KICKERS:
        s, e = SEG[name]
        a = win(t, s + 0.15, e - 0.15, 0.4, 0.4)
        if a > 0.01:
            sl = (1 - ease(min(1, (t - s) / 0.8), 3)) * 20
            kicker(d, 64 - sl, 228, txt, a, AMBER, 25, 4.6)


# ---- CONTEXT: six rivers ------------------------------------------------
RIVERS_W = ["INDUS", "JHELUM", "CHENAB"]
RIVERS_E = ["RAVI", "BEAS", "SUTLEJ"]


def draw_rivers(lay, t):
    s0, s1 = 10.9 * K, 19.4 * K
    a = win(t, s0, s1, 0.5, 0.5)
    if a <= 0.01:
        return
    d = ImageDraw.Draw(lay)
    box = (64, 300, W - 64, 592)
    panel(d, box, a)
    text_tracked(d, (94, 322), "SIX RIVERS · TREATY OF 1960", MONO(24), AMBER + (int(240 * a),), 3.4)

    mid = W // 2
    for col, (title, names, side) in enumerate(
            [("WESTERN → PAKISTAN", RIVERS_W, -1), ("EASTERN → INDIA", RIVERS_E, 1)]):
        x = 100 if col == 0 else mid + 46
        text_tracked(d, (x, 380), title, MONO_R(20), MUTED + (int(220 * a),), 2.2)
        for i, nm in enumerate(names):
            ia = win(t, s0 + 0.5 + col * 0.35 + i * 0.28, s1, 0.35, 0.4)
            y = 424 + i * 46
            c = RIVER if col == 0 else (206, 182, 142)
            gw = ease(min(1, max(0, (t - (s0 + 0.5 + col * 0.35 + i * 0.28)) / 0.7)))
            d.ellipse([x, y + 12, x + 11, y + 23], fill=c + (int(235 * ia),))
            d.text((x + 26, y), nm, font=SANS(28), fill=PAPER + (int(242 * ia),))
            uw = tw(d, nm, SANS(28))
            d.line([(x + 26, y + 40), (x + 26 + uw * gw, y + 40)], fill=c + (int(110 * ia),), width=3)
    d.line([(mid + 8, 372), (mid + 8, 566)], fill=(255, 255, 255, int(46 * a)), width=2)


def draw_abeyance(lay, t):
    s0, s1 = 19.9 * K, 23.0 * K
    a = win(t, s0, s1, 0.35, 0.45)
    if a <= 0.01:
        return
    d = ImageDraw.Draw(lay)
    box = (64, 300, W - 64, 592)
    panel(d, box, a, tint=(26, 12, 12), border=ALERT)
    pop = 1 + 0.05 * (1 - ease(min(1, (t - s0) / 0.35), 3))
    f = SERIF(int(74 * pop))
    txt = "IN ABEYANCE"
    shadow_text(lay, ((W - tw(d, txt, f)) / 2, 372), txt, f, ALERT + (int(255 * a),), blur=12, alpha=int(150 * a))
    d = ImageDraw.Draw(lay)
    sub = "23 APRIL 2025 · ONE DAY AFTER PAHALGAM"
    text_tracked(d, ((W - tw(d, sub, MONO(24), 3.2)) / 2, 476), sub, MONO(24), PAPER + (int(230 * a),), 3.2)
    sub2 = "PAKISTAN: THE MOVE IS ILLEGAL"
    ab = win(t, 21.0 * K, s1, 0.35, 0.45)
    text_tracked(d, ((W - tw(d, sub2, MONO_R(22), 3.0)) / 2, 524), sub2, MONO_R(22), MUTED + (int(225 * ab),), 3.0)


# ---- CORE: what India cannot / can do -----------------------------------
def draw_cannot(lay, t):
    s0, s1 = 25.3 * K, 33.0 * K
    a = win(t, s0, s1, 0.45, 0.45)
    if a <= 0.01:
        return
    d = ImageDraw.Draw(lay)
    box = (64, 300, W - 64, 592)
    panel(d, box, a)
    text_tracked(d, (94, 322), "WHAT INDIA CANNOT DO", MONO(24), AMBER + (int(240 * a),), 3.4)
    f = SANS(44)
    d.text((100, 386), "Switch off the water", font=f, fill=PAPER + (int(244 * a),))
    p = min(1, max(0, (t - 26.3 * K) / 0.85))
    strike(d, 100, 100 + tw(d, "Switch off the water", f), 410, p, ALERT, 5)
    note = "The treaty itself barred India from building"
    note2 = "the large storage dams that would make it possible."
    na = win(t, 28.6 * K, s1, 0.45, 0.45)
    d.text((100, 466), note, font=SANS_R(29), fill=MUTED + (int(232 * na),))
    d.text((100, 508), note2, font=SANS_R(29), fill=MUTED + (int(232 * na),))


DATA_ROWS = [("River-flow data", 36.3), ("Reservoir readings", 37.3), ("Flood warnings", 38.1)]


def draw_data(lay, t):
    s0, s1 = 34.6 * K, 40.3 * K
    a = win(t, s0, s1, 0.4, 0.5)
    if a <= 0.01:
        return
    d = ImageDraw.Draw(lay)
    box = (64, 300, W - 64, 592)
    panel(d, box, a)
    text_tracked(d, (94, 322), "WHAT INDIA CAN DO IMMEDIATELY · STOP TALKING", MONO(22), AMBER + (int(240 * a),), 2.6)
    f = SANS(38)
    for i, (nm, tt) in enumerate(DATA_ROWS):
        y = 384 + i * 60
        ra = win(t, s0 + 0.25 + i * 0.2, s1, 0.3, 0.5)
        d.ellipse([100, y + 12, 118, y + 30], outline=RIVER + (int(200 * ra),), width=3)
        d.text((138, y), nm, font=f, fill=PAPER + (int(242 * ra),))
        p = min(1, max(0, (t - tt * K) / 0.5))
        strike(d, 138, 138 + tw(d, nm, f), y + 22, p, ALERT, 4)
        if p > 0.9:
            d.line([(103, y + 20), (109, y + 27), (116, y + 15)], fill=ALERT + (230,), width=3)
    ea = win(t, 39.5 * K, s1, 0.3, 0.5)
    if ea > 0.01:
        txt = "THAT EXCHANGE HAS ENDED"
        text_tracked(d, (W - 94 - tw(d, txt, MONO(25), 3.0), 552 - 14), txt, MONO(25), ALERT + (int(245 * ea),), 3.0)


# ---- EVIDENCE: the 80% stat --------------------------------------------
def draw_stat(lay, t):
    s0, s1 = 40.9 * K, 47.9 * K
    a = win(t, s0, s1, 0.45, 0.45)
    if a <= 0.01:
        return
    d = ImageDraw.Draw(lay)
    box = (64, 288, W - 64, 604)
    panel(d, box, a)
    p = ease(min(1, max(0, (t - s0 - 0.15) / 1.15)), 2.4)
    val = int(80 * p)
    f = SERIF(126)
    num = f"{val}%"
    shadow_text(lay, (100, 330), num, f, AMBER + (int(255 * a),), blur=14, alpha=int(150 * a))
    d = ImageDraw.Draw(lay)
    tx = 100 + tw(d, num, f) + 34
    d.text((tx, 356), "of Pakistan's irrigated", font=SANS(33), fill=PAPER + (int(244 * a),))
    d.text((tx, 398), "agriculture depends on", font=SANS(33), fill=PAPER + (int(244 * a),))
    d.text((tx, 440), "these rivers", font=SANS(33), fill=PAPER + (int(244 * a),))
    # meter
    bx0, bx1, by = 100, W - 100, 512
    d.rectangle([bx0, by, bx1, by + 16], fill=(255, 255, 255, int(38 * a)))
    d.rectangle([bx0, by, bx0 + (bx1 - bx0) * 0.8 * p, by + 16], fill=AMBER + (int(240 * a),))
    ga = win(t, 45.2 * K, s1, 0.4, 0.45)
    text_tracked(d, (bx0, by + 34), "A SECTOR WORTH ABOUT A QUARTER OF GDP", MONO(23),
                 MUTED + (int(232 * ga),), 3.0)


def draw_court(lay, t):
    s0, s1 = 48.2 * K, 55.4 * K
    a = win(t, s0, s1, 0.45, 0.5)
    if a <= 0.01:
        return
    d = ImageDraw.Draw(lay)
    box = (64, 288, W - 64, 604)
    panel(d, box, a)
    text_tracked(d, (94, 312), "PERMANENT COURT OF ARBITRATION", MONO(24), AMBER + (int(240 * a),), 3.0)
    f = SANS(40)
    for i, ln in enumerate(["The treaty permits", "no unilateral suspension."]):
        la = win(t, 49.4 * K + i * 0.35, s1, 0.4, 0.5)
        d.text((100, 372 + i * 52), ln, font=f, fill=PAPER + (int(246 * la),))
    ra = win(t, 53.2 * K, s1, 0.35, 0.5)
    if ra > 0.01:
        d.rounded_rectangle([100, 494, 100 + 424, 566], radius=8,
                            fill=(40, 16, 14, int(200 * ra)), outline=ALERT + (int(180 * ra),), width=2)
        text_tracked(d, (124, 516), "INDIA REJECTS THE COURT", MONO(24), ALERT + (int(248 * ra),), 2.6)


# ---- WHY IT MATTERS: the broken link ------------------------------------
def draw_link(lay, t):
    s0, s1 = 56.3 * K, 64.5 * K
    a = win(t, s0, s1, 0.45, 0.5)
    if a <= 0.01:
        return
    d = ImageDraw.Draw(lay)
    box = (64, 288, W - 64, 604)
    panel(d, box, a)
    text_tracked(d, (94, 312), "TWO NUCLEAR-ARMED NEIGHBOURS", MONO(24), AMBER + (int(240 * a),), 3.0)

    cy = 438
    for nm, cx in (("INDIA", 236), ("PAKISTAN", W - 236)):
        d.ellipse([cx - 78, cy - 78, cx + 78, cy + 78], outline=PAPER + (int(150 * a),), width=3)
        d.ellipse([cx - 78, cy - 78, cx + 78, cy + 78], fill=(255, 255, 255, int(14 * a)))
        f = SANS(27)
        d.text((cx - tw(d, nm, f) / 2, cy - 16), nm, font=f, fill=PAPER + (int(246 * a),))

    # dashed link that snaps
    br = ease(min(1, max(0, (t - 58.4 * K) / 0.9)))
    gap = 20 + 84 * br
    x0, x1 = 236 + 86, W - 236 - 86
    mid = (x0 + x1) / 2
    for seg_x in (np.arange(x0, mid - gap / 2, 22), np.arange(mid + gap / 2, x1, 22)):
        for sx in seg_x:
            d.line([(sx, cy), (min(sx + 12, x1), cy)], fill=RIVER + (int(200 * a * (1 - 0.45 * br)),), width=6)
    if br > 0.25:
        d.line([(mid - 16, cy - 26), (mid + 16, cy + 26)], fill=ALERT + (int(235 * a),), width=6)
        d.line([(mid + 16, cy - 26), (mid - 16, cy + 26)], fill=ALERT + (int(235 * a),), width=6)
    lbl = "SHARED RIVER DATA"
    text_tracked(d, (mid - tw(d, lbl, MONO_R(21), 2.6) / 2, cy + 62), lbl, MONO_R(21),
                 MUTED + (int(220 * a),), 2.6)

    ga = win(t, 62.4 * K, s1, 0.4, 0.5)
    if ga > 0.01:
        txt = "EVERY MONSOON BECOMES A GUESS"
        text_tracked(d, ((W - tw(d, txt, MONO(25), 3.0)) / 2, 552), txt, MONO(25), AMBER + (int(246 * ga),), 3.0)


def draw_sources(lay, t):
    a = win(t, 65.6 * K, DUR, 0.6, 0.0)
    if a <= 0.01:
        return
    d = ImageDraw.Draw(lay)
    box = (64, 300, W - 64, 592)
    panel(d, box, a)
    text_tracked(d, (94, 326), "SOURCES", MONO(24), AMBER + (int(240 * a),), 3.4)
    rows = ["Chatham House", "CSIS", "Permanent Court of Arbitration",
            "India MEA / Permanent Mission to the UN", "NUS Institute of South Asian Studies"]
    for i, r in enumerate(rows):
        ra = win(t, 65.9 * K + i * 0.14, DUR, 0.35, 0.0)
        y = 382 + i * 42
        d.rectangle([100, y + 14, 112, y + 18], fill=RIVER + (int(210 * ra),))
        d.text((128, y), r, font=SANS_R(28), fill=PAPER + (int(232 * ra),))


# ---------------------------------------------------------------- captions
def draw_caption(lay, t):
    cur = None
    for c in CARDS:
        if c["s"] - 0.14 <= t <= c["e"] + 0.10:
            cur = c
    if cur is None:
        return
    d = ImageDraw.Draw(lay)
    a = win(t, cur["s"], cur["e"], 0.14, 0.12)
    txt = " ".join(w["w"] for w in cur["words"])
    f = SANS(58)
    lines = wrap(d, txt, f, W - 190)
    total_h = len(lines) * 74
    y = 1560 - total_h / 2
    rise = (1 - ease(min(1, (t - cur["s"] + 0.14) / 0.24), 3)) * 12

    idx = 0
    for ln in lines:
        lw = tw(d, ln, f)
        x = (W - lw) / 2
        for word in ln.split():
            wd = cur["words"][min(idx, len(cur["words"]) - 1)]
            live = wd["s"] - 0.05 <= t
            col = PAPER
            key = timing.EMPH.get(wd["w"].strip(".,;:"), None) or timing.EMPH.get(wd["w"], None)
            if key == "amber":
                col = AMBER
            elif key == "river":
                col = RIVER
            elif key == "alert":
                col = ALERT
            alpha = int(255 * a * (1.0 if live else 0.34))
            shadow_text(lay, (x, y + rise), word, f, col + (alpha,), blur=9, alpha=int(150 * a))
            d = ImageDraw.Draw(lay)
            x += d.textlength(word + " ", font=f)
            idx += 1
        y += 74


# ---------------------------------------------------------------- frame
def frame(i):
    t = i / FPS

    # background: slow push-in + drift
    z = 1.0 + 0.085 * (t / DUR)
    cw = min(int(BG_BIG.width / z), BG_BIG.width)
    ch = min(int(BG_BIG.height / z), BG_BIG.height)
    ox = (BG_BIG.width - cw) / 2 + math.sin(t * 0.16) * 9
    oy = (BG_BIG.height - ch) / 2 + math.cos(t * 0.12) * 7
    bg = BG_BIG.crop((int(ox), int(oy), int(ox) + cw, int(oy) + ch)).resize((W, H), Image.BILINEAR)

    canvas = bg.convert("RGBA")

    # cold-open: darken the room while the title is up
    dark = 0.50 * (1 - ease_io(min(1, max(0, (t - 3.0) / 1.4))))
    if dark > 0.005:
        canvas.alpha_composite(Image.new("RGBA", (W, H), (4, 5, 8, int(255 * dark))))

    # subject
    sa = ease_io(min(1, max(0, (t - 3.3) / 1.3)))
    if sa > 0.004:
        canvas.alpha_composite(HALO if sa >= 1 else
                               Image.merge("RGBA", (*HALO.split()[:3],
                                                    HALO.split()[3].point(lambda v: int(v * sa)))))
    if sa > 0.004:
        bob = math.sin(t * 0.55) * 2.4 + math.sin(t * 0.23) * 1.6
        sway = math.sin(t * 0.31) * 2.0
        sh = SHADOW.copy()
        if sa < 1:
            sh.putalpha(sh.split()[3].point(lambda v: int(v * sa)))
        canvas.alpha_composite(sh)
        s = SUBJ
        if sa < 1:
            s = SUBJ.copy()
            s.putalpha(SUBJ.split()[3].point(lambda v: int(v * sa)))
        canvas.alpha_composite(s, (int(SUB_X + sway), int(SUB_Y + bob)))

    canvas.alpha_composite(SCRIM_TOP)
    canvas.alpha_composite(SCRIM_BOT)

    lay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw_title(lay, t)
    draw_brand(lay, t)
    draw_kicker(lay, t)
    draw_rivers(lay, t)
    draw_abeyance(lay, t)
    draw_cannot(lay, t)
    draw_data(lay, t)
    draw_stat(lay, t)
    draw_court(lay, t)
    draw_link(lay, t)
    draw_sources(lay, t)
    draw_caption(lay, t)
    canvas.alpha_composite(lay)

    a = np.asarray(canvas.convert("RGB")).astype(np.float32)
    a *= VIGN
    a += GRAIN[i % len(GRAIN)]
    # gentle filmic contrast
    a = np.clip(a, 0, 255) / 255.0
    a = np.clip((a - 0.5) * 1.05 + 0.5 + 0.018, 0, 1)
    return Image.fromarray((a * 255).astype(np.uint8))


if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    lo = int(sys.argv[1]) if len(sys.argv) > 1 else 0
    hi = int(sys.argv[2]) if len(sys.argv) > 2 else NFRAMES
    for i in range(lo, hi):
        frame(i).save(f"{OUT}/f{i:05d}.jpg", quality=95, subsampling=0)
        if i % 60 == 0:
            print(f"  frame {i}/{NFRAMES}", flush=True)
    print("done", lo, hi)
