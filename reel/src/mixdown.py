"""VO + a restrained cinematic bed, mixed and levelled for social playback."""
import numpy as np, soundfile as sf, json

SR = 24000
DUR = 70.0
N = int(SR * DUR)
t = np.arange(N) / SR

vo, sr = sf.read("vo.wav")
if vo.ndim > 1:
    vo = vo.mean(1)
assert sr == SR, sr

# nudge the VO to exactly 70.000s (≈0.7% — inaudible)
src = np.linspace(0, len(vo) - 1, N)
vo = np.interp(src, np.arange(len(vo)), vo).astype(np.float32)

marks = json.load(open("vo.json"))
K = DUR / marks[-1]["end"]
SEG = {m["name"]: (m["start"] * K, m["end"] * K) for m in marks}


def env(a, b, fi, fo):
    e = np.zeros(N, np.float32)
    i0, i1 = int(a * SR), int(b * SR)
    e[i0:i1] = 1
    f = int(fi * SR)
    if f:
        e[i0:i0 + f] = np.linspace(0, 1, f)
    f = int(fo * SR)
    if f:
        e[max(i1 - f, 0):i1] = np.linspace(1, 0, min(f, i1))
    return e


# ---- drone: a slow minor-ish pad that sits far under the voice -----------
def pad(freqs, amp, detune=0.35):
    out = np.zeros(N, np.float32)
    for i, f in enumerate(freqs):
        for d in (-detune, 0.0, detune):
            ph = 2 * np.pi * (f + d) * t + i * 1.7
            out += np.sin(ph) * (1.0 / (1 + i * 0.55))
            out += 0.16 * np.sin(2 * ph) / (1 + i * 0.8)
    out /= np.max(np.abs(out)) + 1e-9
    # slow swell
    out *= (0.72 + 0.28 * np.sin(2 * np.pi * t / 23.0 + 1.1))
    return out * amp


A1, C2, E2, G2 = 55.0, 65.41, 82.41, 98.0
bed = pad([A1, E2, A1 * 2], 0.075) + pad([C2, G2], 0.030)

# lift the bed a touch under the title and the closing line
bed *= (0.85 + 0.5 * env(0.0, 5.0, 0.6, 1.6) + 0.42 * env(63.5, 70.0, 1.4, 2.4))

# ---- section markers: a soft low pulse at each new beat ------------------
hits = np.zeros(N, np.float32)
for name in ["CONTEXT", "CORE ANALYSIS", "EVIDENCE", "WHY IT MATTERS", "CONCLUSION"]:
    s = SEG[name][0] - 0.32
    i0 = int(max(s, 0) * SR)
    n = int(1.5 * SR)
    k = np.arange(min(n, N - i0)) / SR
    tone = (np.sin(2 * np.pi * 62 * k) + 0.5 * np.sin(2 * np.pi * 93 * k)) * np.exp(-k * 3.6)
    hits[i0:i0 + len(k)] += tone * 0.085

# ---- gentle page/room air ------------------------------------------------
rng = np.random.default_rng(11)
air = rng.normal(0, 1, N).astype(np.float32)
k = np.exp(-np.arange(700) / 90.0)
air = np.convolve(air, k, "same")
air /= np.max(np.abs(air)) + 1e-9
air *= 0.012

# ---- voice shaping -------------------------------------------------------
def one_pole_hp(x, fc):
    a = np.exp(-2 * np.pi * fc / SR)
    y = np.empty_like(x); acc = 0.0; prev = 0.0
    for i in range(len(x)):                     # vectorised below for speed
        acc = a * (acc + x[i] - prev); prev = x[i]; y[i] = acc
    return y


# cheap high-pass via difference of a smoothed signal (removes rumble)
def hp(x, n=90):
    k = np.ones(n, np.float32) / n
    return x - np.convolve(x, k, "same")


voice = hp(vo, 110)
voice = np.tanh(voice * 1.55) * 0.72            # soft compression / presence
# de-ess-ish: blend back a touch of the unshaped signal
voice = 0.86 * voice + 0.14 * vo

# ---- duck the bed under the voice ---------------------------------------
lvl = np.abs(voice)
w = int(0.05 * SR)
lvl = np.convolve(lvl, np.ones(w) / w, "same")
lvl /= np.percentile(lvl, 99) + 1e-9
duck = 1.0 - 0.62 * np.clip(lvl, 0, 1)
w2 = int(0.22 * SR)
duck = np.convolve(duck, np.ones(w2) / w2, "same")

mix = voice * 1.0 + (bed + hits + air) * duck

# master: limit, then fade the very top and tail
mix = np.tanh(mix * 1.12) * 0.94
mix[:int(0.05 * SR)] *= np.linspace(0, 1, int(0.05 * SR))
mix[-int(0.45 * SR):] *= np.linspace(1, 0, int(0.45 * SR))
mix /= np.max(np.abs(mix)) + 1e-9
mix *= 0.95

sf.write("mix.wav", mix.astype(np.float32), SR)
print(f"mix.wav  {len(mix)/SR:.3f}s  peak {np.max(np.abs(mix)):.3f}")
