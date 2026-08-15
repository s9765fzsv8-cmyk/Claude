"""Replace the dark kurta visible between the lapels with a dress shirt + tie."""
import numpy as np
from PIL import Image, ImageDraw, ImageFilter
from scipy import ndimage as ndi


def _hsv(rgb):
    mx = rgb.max(2); mn = rgb.min(2); df = mx - mn + 1e-8
    s = df / (mx + 1e-8)
    h = np.zeros_like(mx)
    r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    for c, e in ((mx == r, lambda: ((g - b) / df) % 6),
                 (mx == g, lambda: (b - r) / df + 2),
                 (mx == b, lambda: (r - g) / df + 4)):
        h[c] = e()[c]
    return h * 60, s, mx


def collar_region(orig_rgba, y_lo=495, y_hi=1320):
    """Smooth mask of the shirt visible in the jacket opening (on the ORIGINAL art)."""
    a = np.asarray(orig_rgba).astype(np.float32) / 255.0
    rgb, al = a[..., :3], a[..., 3]
    h, s, v = _hsv(rgb)
    H, W = al.shape
    yy, xx = np.mgrid[0:H, 0:W]

    teal = (h > 150) & (h < 232) & (s > 0.13) & (v > 0.12)
    dark = (al > 0.7) & (yy > y_lo) & (yy < y_hi) & ((v < 0.115) | ((v < 0.27) & ~teal))
    dark = ndi.binary_closing(dark, np.ones((25, 25)))
    dark = ndi.binary_opening(dark, np.ones((9, 9)))
    dark = ndi.binary_fill_holes(dark)

    # keep only blobs sitting in the middle of the torso
    lab, n = ndi.label(dark)
    keep = np.zeros_like(dark)
    body_x = [np.where(al[y] > 0.5)[0] for y in range(y_lo, min(y_hi, H))]
    body_x = np.concatenate([b for b in body_x if len(b)])
    cx_lo, cx_hi = np.percentile(body_x, [18, 62])
    for i in range(1, n + 1):
        ys, xs = np.where(lab == i)
        if len(xs) < 2500:
            continue
        if cx_lo <= xs.mean() <= cx_hi and ys.min() < y_lo + 320:
            keep |= (lab == i)

    m = Image.fromarray((keep * 255).astype(np.uint8))
    m = m.filter(ImageFilter.MaxFilter(9)).filter(ImageFilter.GaussianBlur(7))
    m = np.asarray(m).astype(np.float32) / 255.0
    return (m > 0.45).astype(np.float32), m


def _column(mask):
    """Per-row centre / half-width of the widest run."""
    rows = {}
    for y in np.where(mask.any(1))[0]:
        xs = np.where(mask[y] > 0.5)[0]
        if len(xs) < 10:
            continue
        sp = np.where(np.diff(xs) > 10)[0]
        run = max(np.split(xs, sp + 1), key=len)
        if len(run) < 10:
            continue
        rows[int(y)] = (float(run.mean()), len(run) / 2.0)
    return rows


def dress(img, hard, soft, tie_rgb=(34, 48, 92)):
    """Paint shirt + collar + tie into the opening. img is the graded RGBA subject."""
    a = np.asarray(img).astype(np.float32) / 255.0
    rgb, al = a[..., :3], a[..., 3]
    H, W = al.shape
    yy, xx = np.mgrid[0:H, 0:W]
    rows = _column(hard)
    if len(rows) < 40:
        return img
    keys = sorted(rows)
    y0, y1 = keys[0], keys[-1]

    # ---------- 1. white shirt, keeping the original folds ----------
    lum = rgb.mean(2)
    sel = hard > 0.5
    lo, hi = np.percentile(lum[sel], [10, 90])
    norm = np.clip((lum - lo) / max(hi - lo, 1e-3), 0, 1)
    # vertical falloff: shirt is shadowed deeper inside the jacket
    depth = np.clip(1.0 - (yy - y0) / max((y1 - y0) * 1.7, 1), 0.42, 1.0)
    shade = (0.60 + 0.34 * norm ** 0.8) * depth
    shirt = np.stack([shade * 0.97, shade * 0.975, shade * 1.0], -1)
    m = soft[..., None]
    out = rgb * (1 - m) + shirt * m

    # ---------- 2. collar: two clean planes at the top ----------
    col = Image.new("L", (W, H), 0)
    cd = ImageDraw.Draw(col)
    cy = y0 + int((y1 - y0) * 0.30)
    top_c, top_w = rows[keys[max(0, int(len(keys) * 0.02))]]
    mid_c, mid_w = rows[min(cy, keys[-1])] if min(cy, keys[-1]) in rows else (top_c, top_w)
    cd.polygon([(top_c - top_w * 1.15, y0 - 6), (top_c - top_w * 0.10, y0 - 6),
                (mid_c - mid_w * 0.28, cy), (top_c - top_w * 1.25, cy - int((cy - y0) * 0.45))],
               fill=255)
    cd.polygon([(top_c + top_w * 1.15, y0 - 6), (top_c + top_w * 0.10, y0 - 6),
                (mid_c + mid_w * 0.28, cy), (top_c + top_w * 1.25, cy - int((cy - y0) * 0.45))],
               fill=255)
    cm = np.asarray(col.filter(ImageFilter.GaussianBlur(2.2))).astype(np.float32) / 255.0
    cm *= (soft > 0.25)
    out = out * (1 - cm[..., None] * 0.92) + np.array([0.93, 0.94, 0.965])[None, None, :] * (cm[..., None] * 0.92)

    # ---------- 3. tie ----------
    ky = keys[max(0, int(len(keys) * 0.16))]
    kc, kw_half = rows[ky]
    kw = max(12.0, kw_half * 0.72)
    tie = Image.new("L", (W, H), 0)
    td = ImageDraw.Draw(tie)
    L, R = [], []
    for y in keys:
        if y < ky:
            continue
        c, hw = rows[y]
        t = (y - ky) / max(y1 - ky, 1)
        if t < 0.16:                      # knot
            u = t / 0.16
            wdt = kw * (0.92 + 0.16 * np.sin(u * np.pi) - 0.30 * u)
        else:                             # blade
            u = (t - 0.16) / 0.84
            wdt = kw * (0.62 + 0.80 * u ** 1.15)
        wdt = min(wdt, hw * 0.88)
        L.append((c - wdt, y)); R.append((c + wdt, y))
    td.polygon(L + R[::-1], fill=255)
    tm = np.asarray(tie.filter(ImageFilter.GaussianBlur(1.6))).astype(np.float32) / 255.0
    tm *= (soft > 0.35)

    base = np.asarray(tie_rgb, np.float32) / 255.0
    weave = 0.5 + 0.5 * np.sin((xx * 1.6 + yy * 1.6) * 0.42)
    body = base[None, None, :] * (0.88 + 0.22 * weave[..., None])
    knot_sh = np.clip(1 - np.abs(yy - (ky + kw * 1.35)) / max(kw * 1.1, 1), 0, 1)
    body = body * (1 - 0.34 * knot_sh[..., None])
    hi_lite = np.clip(1 - np.abs(yy - (ky + kw * 0.30)) / max(kw * 0.75, 1), 0, 1) * \
              np.clip(1 - np.abs(xx - kc) / max(kw * 1.1, 1), 0, 1)
    body = body + 0.26 * hi_lite[..., None]
    body = body * (0.80 + 0.30 * np.clip(1 - (yy - ky) / max((y1 - ky) * 1.6, 1), 0, 1))[..., None]
    out = out * (1 - tm[..., None]) + np.clip(body, 0, 1) * tm[..., None]

    return Image.fromarray((np.clip(np.concatenate([out, al[..., None]], -1), 0, 1) * 255).astype(np.uint8))
