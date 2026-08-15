"""Type, colour and drawing helpers for the reel."""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import numpy as np

FDIR = "/mnt/skills/examples/canvas-design/canvas-fonts/"
W, H = 1080, 1920

INK    = (9, 11, 15)
PAPER  = (246, 245, 241)
AMBER  = (226, 170, 62)
RIVER  = (96, 176, 219)
ALERT  = (212, 88, 74)
MUTED  = (168, 164, 156)

_cache = {}


def font(name, size):
    k = (name, size)
    if k not in _cache:
        _cache[k] = ImageFont.truetype(FDIR + name, size)
    return _cache[k]


SERIF   = lambda s: font("IBMPlexSerif-Bold.ttf", s)
SERIF_R = lambda s: font("IBMPlexSerif-Regular.ttf", s)
SANS    = lambda s: font("WorkSans-Bold.ttf", s)
SANS_R  = lambda s: font("WorkSans-Regular.ttf", s)
MONO    = lambda s: font("IBMPlexMono-Bold.ttf", s)
MONO_R  = lambda s: font("IBMPlexMono-Regular.ttf", s)


def ease(t, k=3.0):
    t = max(0.0, min(1.0, t))
    return 1 - (1 - t) ** k


def ease_io(t):
    t = max(0.0, min(1.0, t))
    return t * t * (3 - 2 * t)


def tw(d, txt, f, track=0):
    """Text width with optional letter-spacing."""
    if not track:
        return d.textlength(txt, font=f)
    return sum(d.textlength(c, font=f) + track for c in txt) - track


def text_tracked(d, xy, txt, f, fill, track=0, anchor_left=True):
    x, y = xy
    if not track:
        d.text((x, y), txt, font=f, fill=fill)
        return d.textlength(txt, font=f)
    for c in txt:
        d.text((x, y), c, font=f, fill=fill)
        x += d.textlength(c, font=f) + track
    return x - xy[0]


def wrap(d, txt, f, maxw, track=0):
    words, lines, cur = txt.split(), [], ""
    for w_ in words:
        t = (cur + " " + w_).strip()
        if tw(d, t, f, track) <= maxw or not cur:
            cur = t
        else:
            lines.append(cur); cur = w_
    if cur:
        lines.append(cur)
    return lines


def rrect(d, box, r, fill=None, outline=None, width=2):
    d.rounded_rectangle(box, radius=r, fill=fill, outline=outline, width=width)


def scrim(size, top, bottom, strength=0.92, power=1.6):
    """Vertical black gradient, transparent above `top`, `strength` at `bottom`."""
    w, h = size
    a = np.zeros((h, w), np.float32)
    ys = np.arange(h, dtype=np.float32)
    denom = (bottom - top) or 1.0          # may be negative for a top-down scrim
    t = np.clip((ys - top) / denom, 0, 1) ** power
    a[:] = t[:, None] * strength
    img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    img.putalpha(Image.fromarray((a * 255).astype(np.uint8)))
    return img


def shadow_text(base, xy, txt, f, fill, track=0, blur=8, alpha=150, off=(0, 3)):
    """Draw text with a soft drop shadow onto an RGBA layer."""
    lay = Image.new("RGBA", base.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(lay)
    text_tracked(d, (xy[0] + off[0], xy[1] + off[1]), txt, f, (0, 0, 0, alpha), track)
    lay = lay.filter(ImageFilter.GaussianBlur(blur))
    base.alpha_composite(lay)
    d2 = ImageDraw.Draw(base)
    return text_tracked(d2, xy, txt, f, fill + (255,) if len(fill) == 3 else fill, track)


def grain_tiles(n=6, size=(W, H), amt=7.0, seed=3):
    rng = np.random.default_rng(seed)
    out = []
    for _ in range(n):
        g = rng.normal(0, amt, (size[1] // 2, size[0] // 2)).astype(np.float32)
        g = np.asarray(Image.fromarray((g + 128).clip(0, 255).astype(np.uint8))
                       .resize(size, Image.BILINEAR)).astype(np.float32) - 128
        out.append(g[..., None])
    return out
