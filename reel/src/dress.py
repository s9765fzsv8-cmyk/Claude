"""Final wardrobe pass: white dress shirt, spread collar, four-in-hand navy tie."""
import numpy as np
from PIL import Image, ImageDraw, ImageFilter
from attire import collar_region, _column


def build(subject_lit, orig_rgba, y_lo=548, y_hi=1320, tie_rgb=(0.12, 0.17, 0.35)):
    hard, soft = collar_region(orig_rgba, y_lo=y_lo, y_hi=y_hi)
    # trim the top few rows so nothing creeps onto the jaw / neck
    ys = np.where(hard.any(1))[0]
    if len(ys):
        hard[: ys[0] + 14] = 0
        soft[: ys[0] + 14] = 0

    a = np.asarray(subject_lit).astype(np.float32) / 255.0
    rgb, al = a[..., :3], a[..., 3]
    H, W = al.shape
    yy, xx = np.mgrid[0:H, 0:W]
    rows = _column(hard)
    if len(rows) < 40:
        return subject_lit
    keys = sorted(rows); y0, y1 = keys[0], keys[-1]

    ks = np.array(keys, float)
    A = np.polyfit(ks, np.array([rows[k][0] for k in keys]), 1)
    Hw = np.polyfit(ks, np.array([rows[k][1] for k in keys]), 1)
    axis = lambda y: A[0] * y + A[1]
    halfw = lambda y: max(float(np.polyval(Hw, y)), 6.0)

    # ---------------- shirt: clean cotton, soft folds only ----------------
    lum = rgb.mean(2)
    sm_lum = np.asarray(Image.fromarray((np.clip(lum, 0, 1) * 255).astype(np.uint8))
                        .filter(ImageFilter.GaussianBlur(9))).astype(np.float32) / 255.0
    sel = hard > 0.5
    lo, hi = np.percentile(sm_lum[sel], [12, 88])
    norm = np.clip((sm_lum - lo) / max(hi - lo, 1e-3), 0, 1)
    depth = np.clip(1.0 - (yy - y0) / max((y1 - y0) * 2.1, 1), 0.50, 1.0)
    side = np.clip(1.06 - np.abs(xx - axis(yy)) / max(halfw(y0) * 3.2, 1) * 0.55, 0.55, 1.06)
    shade = (0.68 + 0.26 * norm) * depth * side
    shirt = np.stack([shade * 0.975, shade * 0.980, shade * 1.0], -1)
    out = rgb * (1 - soft[..., None]) + shirt * soft[..., None]

    # ---------------- tie ----------------
    knot_top = y0 + int((y1 - y0) * 0.055)
    kw = halfw(knot_top) * 0.62
    knot_h = kw * 2.05
    knot_bot = knot_top + knot_h

    tie = Image.new("L", (W, H), 0); td = ImageDraw.Draw(tie)
    # knot: slight trapezoid, wider at the bottom
    td.polygon([(axis(knot_top) - kw * 0.80, knot_top), (axis(knot_top) + kw * 0.80, knot_top),
                (axis(knot_bot) + kw * 1.00, knot_bot), (axis(knot_bot) - kw * 1.00, knot_bot)],
               fill=255)
    # blade
    L, R = [], []
    for y in range(int(knot_bot), y1 + 1):
        u = max((y - knot_bot) / max(y1 - knot_bot, 1), 0.0)
        wdt = min(kw * (0.74 + 0.66 * u ** 1.05), halfw(y) * 0.80)
        L.append((axis(y) - wdt, y)); R.append((axis(y) + wdt, y))
    if len(L) > 4:
        td.polygon(L + R[::-1], fill=255)
    tm = np.asarray(tie.filter(ImageFilter.GaussianBlur(1.3))).astype(np.float32) / 255.0 * (hard > 0.5)

    base = np.array(tie_rgb)
    weave = 0.5 + 0.5 * np.sin((xx * 1.8 + yy * 1.8) * 0.38)
    body = base[None, None, :] * (0.86 + 0.26 * weave[..., None])
    # knot volume: bright across the middle, dark at its lower edge
    kb = np.clip(1 - np.abs(yy - (knot_top + knot_h * 0.42)) / max(knot_h * 0.55, 1), 0, 1)
    kx = np.clip(1 - np.abs(xx - axis(yy)) / max(kw * 1.1, 1), 0, 1)
    body += 0.30 * (kb * kx)[..., None]
    body *= (1 - 0.42 * np.clip(1 - np.abs(yy - knot_bot) / max(knot_h * 0.30, 1), 0, 1))[..., None]
    # dimple under the knot centre
    body *= (1 - 0.30 * (np.clip(1 - np.abs(yy - (knot_top + knot_h * 0.72)) / max(knot_h * 0.22, 1), 0, 1) *
                         np.clip(1 - np.abs(xx - axis(yy)) / max(kw * 0.30, 1), 0, 1)))[..., None]
    # blade falls into shadow lower down
    body *= (0.86 + 0.22 * np.clip(1 - (yy - knot_bot) / max((y1 - knot_bot) * 1.8, 1), 0, 1))[..., None]
    # left edge catches the key light
    body += 0.10 * np.clip(1 - np.abs(xx - (axis(yy) - kw * 0.55)) / max(kw * 0.30, 1), 0, 1)[..., None]
    out = out * (1 - tm[..., None]) + np.clip(body, 0, 1) * tm[..., None]

    # ---------------- spread collar ----------------
    ctop, cbot = y0 + 2, y0 + int((y1 - y0) * 0.36)
    col = Image.new("L", (W, H), 0); cd = ImageDraw.Draw(col)
    for sgn in (-1, 1):
        cd.polygon([(axis(ctop) + sgn * halfw(ctop) * 1.00, ctop),
                    (axis(ctop) + sgn * halfw(ctop) * 0.12, ctop + 4),
                    (axis(cbot) + sgn * halfw(cbot) * 0.30, cbot),
                    (axis(cbot) + sgn * halfw(cbot) * 0.98, cbot - int((cbot - ctop) * 0.42))],
                   fill=255)
    cm = np.asarray(col.filter(ImageFilter.GaussianBlur(1.8))).astype(np.float32) / 255.0
    cm *= (hard > 0.5) * (1 - tm)
    cshade = 0.90 + 0.10 * np.clip(1 - np.abs(xx - axis(yy)) / max(halfw(y0) * 2.0, 1), 0, 1)
    colr = np.stack([cshade * 0.965, cshade * 0.972, cshade * 0.99], -1)
    out = out * (1 - cm[..., None] * 0.96) + colr * (cm[..., None] * 0.96)
    # collar edge shadow where it meets the shirt
    edge = np.asarray(Image.fromarray((cm * 255).astype(np.uint8)).filter(ImageFilter.FIND_EDGES)
                      .filter(ImageFilter.GaussianBlur(2.0))).astype(np.float32) / 255.0
    out *= (1 - 0.32 * np.clip(edge * 2.2, 0, 1) * (hard > 0.5))[..., None]

    return Image.fromarray((np.clip(np.concatenate([out, al[..., None]], -1), 0, 1) * 255).astype(np.uint8))
