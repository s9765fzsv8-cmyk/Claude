"""Build the presenter plate: defocused library backdrop + recoloured, relit subject."""
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageChops, ImageEnhance
import colorsys, random

W, H = 1080, 1920


# ---------------------------------------------------------------- library bg
def library_bg(w=W, h=H, seed=7):
    rnd = random.Random(seed)
    sw, sh = w // 2, h // 2          # render at half res, we blur heavily anyway
    im = Image.new("RGB", (sw, sh), (26, 20, 16))
    d = ImageDraw.Draw(im)

    # warm base wash
    for y in range(sh):
        t = y / sh
        d.line([(0, y), (sw, y)],
               fill=(int(30 + 26 * (1 - t)), int(22 + 18 * (1 - t)), int(17 + 12 * (1 - t))))

    # --- bookshelf bays -----------------------------------------------------
    bay_w = sw // 4
    for bx in range(0, sw + bay_w, bay_w):
        # dark wood pilaster between bays
        d.rectangle([bx - 10, 0, bx + 10, sh], fill=(46, 30, 20))

        shelf_h = sh // 9
        for row in range(10):
            y0 = row * shelf_h
            y1 = y0 + shelf_h - 12
            # shelf cavity (darker)
            d.rectangle([bx + 10, y0, bx + bay_w - 10, y1], fill=(22, 15, 11))
            # book spines
            x = bx + 14
            while x < bx + bay_w - 16:
                bwd = rnd.randint(6, 17)
                lean = rnd.random() < 0.08
                top = y0 + rnd.randint(2, 10)
                pal = [(122, 44, 38), (150, 92, 40), (58, 74, 52), (36, 48, 78),
                       (128, 108, 74), (92, 40, 52), (154, 128, 88), (44, 40, 44),
                       (168, 118, 60), (78, 58, 44)]
                c = pal[rnd.randrange(len(pal))]
                j = rnd.randint(-14, 14)
                c = tuple(max(0, min(255, v + j)) for v in c)
                if lean:
                    d.polygon([(x, y1), (x + bwd, y1), (x + bwd + 7, top), (x + 7, top)], fill=c)
                else:
                    d.rectangle([x, top, x + bwd, y1], fill=c)
                    # gilt band
                    if rnd.random() < 0.35:
                        yy = top + (y1 - top) * rnd.uniform(0.15, 0.3)
                        d.rectangle([x + 1, yy, x + bwd - 1, yy + 2], fill=(186, 152, 84))
                x += bwd + rnd.randint(1, 3)
            # shelf board
            d.rectangle([bx + 8, y1, bx + bay_w - 8, y1 + 11], fill=(62, 41, 26))

    # --- warm practicals (lamp pools) --------------------------------------
    glow = Image.new("RGB", (sw, sh), (0, 0, 0))
    gd = ImageDraw.Draw(glow)
    for (gx, gy, gr, gi) in [(0.13, 0.30, 0.30, 1.00), (0.86, 0.22, 0.26, 0.85),
                             (0.50, 0.07, 0.34, 0.55), (0.30, 0.72, 0.24, 0.45),
                             (0.78, 0.66, 0.20, 0.40)]:
        cx, cy, r = gx * sw, gy * sh, gr * sw
        for k in range(26, 0, -1):
            f = k / 26
            a = int(150 * gi * (1 - f) ** 1.7)
            gd.ellipse([cx - r * f, cy - r * f, cx + r * f, cy + r * f],
                       fill=(a, int(a * 0.74), int(a * 0.40)))
    glow = glow.filter(ImageFilter.GaussianBlur(38))
    im = ImageChops.add(im, glow)

    # --- defocus ------------------------------------------------------------
    im = im.resize((w, h), Image.LANCZOS).filter(ImageFilter.GaussianBlur(26))

    # bokeh discs
    bok = Image.new("RGB", (w, h), (0, 0, 0))
    bd = ImageDraw.Draw(bok)
    for _ in range(30):
        cx, cy = rnd.uniform(0, w), rnd.uniform(0, h * 0.8)
        r = rnd.uniform(18, 62)
        a = rnd.randint(14, 46)
        bd.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(a, int(a * 0.76), int(a * 0.44)))
    im = ImageChops.add(im, bok.filter(ImageFilter.GaussianBlur(22)))

    # --- grade: crush + cool the shadows, keep highlights amber -------------
    a = np.asarray(im).astype(np.float32) / 255.0
    a = np.clip((a - 0.030) * 1.16, 0, 1) ** 0.98
    lum = a.mean(2, keepdims=True)
    shadow = np.clip(1.0 - lum * 2.4, 0, 1)
    a[..., 2] += shadow[..., 0] * 0.018          # teal-ish shadows
    a[..., 0] += (1 - shadow[..., 0]) * 0.030
    a[..., 1] += (1 - shadow[..., 0]) * 0.010
    a = np.clip(a, 0, 1)

    # vignette
    yy, xx = np.mgrid[0:h, 0:w]
    r = np.sqrt(((xx - w / 2) / (w * 0.72)) ** 2 + ((yy - h * 0.42) / (h * 0.62)) ** 2)
    a *= np.clip(1.20 - 0.58 * r ** 1.9, 0.30, 1)[..., None]

    return Image.fromarray((np.clip(a, 0, 1) * 255).astype(np.uint8))


# ------------------------------------------------------- blazer teal -> blue
def recolour_jacket(img):
    """Shift the teal jacket to a mid business blue, leave skin/hair/shirt alone."""
    rgba = np.asarray(img).astype(np.float32) / 255.0
    rgb, alpha = rgba[..., :3], rgba[..., 3]

    mx = rgb.max(2); mn = rgb.min(2); df = mx - mn + 1e-8
    v = mx
    s = df / (mx + 1e-8)
    hue = np.zeros_like(mx)
    r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    m = (mx == r); hue[m] = ((g - b) / df)[m] % 6
    m = (mx == g); hue[m] = ((b - r) / df + 2)[m]
    m = (mx == b); hue[m] = ((r - g) / df + 4)[m]
    hue *= 60.0

    # teal / cyan-blue garment: hue 165-235, with real saturation and some light
    mask = ((hue > 162) & (hue < 240) & (s > 0.16) & (v > 0.09) & (alpha > 0.35)).astype(np.float32)
    mask = np.asarray(Image.fromarray((mask * 255).astype(np.uint8))
                      .filter(ImageFilter.GaussianBlur(2.5))).astype(np.float32) / 255.0

    hsv = np.stack([hue / 360.0, s, v], -1)
    tgt = 218.0 / 360.0                                   # mid business blue
    newh = hsv[..., 0] * (1 - mask) + (hsv[..., 0] * 0.22 + tgt * 0.78) * mask
    news = hsv[..., 1] * (1 - mask) + np.clip(hsv[..., 1] * 1.16 + 0.06, 0, 1) * mask
    newv = hsv[..., 2] * (1 - mask) + np.clip(hsv[..., 2] * 1.10 + 0.03, 0, 1) * mask

    i = np.floor(newh * 6).astype(int) % 6
    f = newh * 6 - np.floor(newh * 6)
    p = newv * (1 - news); q = newv * (1 - f * news); t = newv * (1 - (1 - f) * news)
    out = np.zeros_like(rgb)
    for k, (rr, gg, bb) in enumerate([(newv, t, p), (q, newv, p), (p, newv, t),
                                      (p, q, newv), (t, p, newv), (newv, p, q)]):
        sel = (i == k)
        out[..., 0][sel] = rr[sel]; out[..., 1][sel] = gg[sel]; out[..., 2][sel] = bb[sel]

    res = np.concatenate([np.clip(out, 0, 1), alpha[..., None]], -1)
    return Image.fromarray((res * 255).astype(np.uint8)), mask


# ------------------------------------------------------------------ relight
def relight(img, mask_jacket):
    """Key from camera left, cool rim from right — matches the library practicals."""
    a = np.asarray(img).astype(np.float32) / 255.0
    rgb, al = a[..., :3], a[..., 3]
    h, w = al.shape
    yy, xx = np.mgrid[0:h, 0:w]

    key = np.clip(1.25 - np.sqrt(((xx - w * 0.20) / (w * 1.05)) ** 2 +
                                 ((yy - h * 0.16) / (h * 0.95)) ** 2), 0, 1.25)
    rgb *= (1.00 + 0.38 * key)[..., None]
    rgb[..., 0] *= 1 + 0.055 * key
    rgb[..., 2] *= 1 - 0.030 * key

    # rim: alpha edge on the right side
    edge = np.asarray(Image.fromarray((al * 255).astype(np.uint8))
                      .filter(ImageFilter.FIND_EDGES)
                      .filter(ImageFilter.GaussianBlur(5))).astype(np.float32) / 255.0
    rimside = np.clip((xx - w * 0.52) / (w * 0.48), 0, 1)
    rim = np.clip(edge * 3.4, 0, 1) * rimside * np.clip(1.15 - yy / h, 0, 1)
    rgb[..., 0] += rim * 0.30; rgb[..., 1] += rim * 0.36; rgb[..., 2] += rim * 0.46

    rgb = np.clip(rgb, 0, 1) ** 0.92
    rgb = np.clip((rgb - 0.5) * 1.10 + 0.53, 0, 1)
    return Image.fromarray((np.concatenate([rgb, al[..., None]], -1) * 255).astype(np.uint8))
