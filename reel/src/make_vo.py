import sys, json, numpy as np, soundfile as sf
from kokoro_onnx import Kokoro
from script import SEGMENTS

VOICE = sys.argv[1] if len(sys.argv) > 1 else "bm_george"
SPEED = float(sys.argv[2]) if len(sys.argv) > 2 else 1.0
OUT   = sys.argv[3] if len(sys.argv) > 3 else "vo.wav"

k = Kokoro("tts/kokoro-v1.0.onnx", "tts/voices-v1.0.bin")

SR = 24000
chunks, marks, t = [], [], 0.0
for name, text, pause in SEGMENTS:
    a, sr = k.create(text, voice=VOICE, speed=SPEED, lang="en-gb" if VOICE[0] == "b" else "en-us")
    a = np.asarray(a, dtype=np.float32)
    dur = len(a) / sr
    marks.append({"name": name, "text": text, "start": t, "end": t + dur})
    chunks.append(a)
    t += dur
    if pause:
        chunks.append(np.zeros(int(sr * pause), dtype=np.float32))
        t += pause
    SR = sr

audio = np.concatenate(chunks)
audio = audio / (np.max(np.abs(audio)) + 1e-9) * 0.92
sf.write(OUT, audio, SR)
json.dump(marks, open(OUT.replace(".wav", ".json"), "w"), indent=1)
print(f"{VOICE} @ {SPEED}x -> {len(audio)/SR:.2f}s  ({OUT})")
for m in marks:
    print(f"   {m['name']:16s} {m['start']:6.2f} -> {m['end']:6.2f}")
