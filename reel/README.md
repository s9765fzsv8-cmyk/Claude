# When the Data Stopped Flowing — 70-second reel

A vertical explainer built from Sayed Zeeshan Haider's Week 3 D1 script on the
Indus Waters Treaty suspension.

| | |
|---|---|
| **Runtime** | 70.000 s |
| **Format** | 1080×1920 (9:16), 30 fps, H.264 High + AAC 160 kbps |
| **Size** | 37 MB |

## Files

| File | What it is |
|---|---|
| `when-the-data-stopped-flowing.mp4` | The finished reel |
| `voiceover.wav` | Narration only, 70.000 s, 24 kHz mono |
| `captions.srt` | 51 caption cards, word-timed |
| `script-70s.md` | Timed script, trim log, on-screen graphics cue sheet |
| `production-kit.md` | Prompts and settings for the generative talking-head version |
| `src/` | The full render pipeline |

## How it was made

Everything in the video was generated from the single supplied photograph and the
script — no stock footage, no external assets.

- **Voice** — Kokoro-82M neural TTS, British male, 1.20× rate, synthesised
  per section so the prosody carries across sentences rather than word by word.
- **Presenter plate** — the subject was matted out of the original photo
  (U²-Net human segmentation with alpha matting), his teal blazer hue-shifted to
  a mid business blue, a white dress shirt and navy four-in-hand tie painted into
  the jacket opening, then relit with a warm key from camera left and a cool rim
  from the right to match the set.
- **Set** — the library is procedurally drawn (bookshelf bays, ~1,400 individual
  book spines, gilt bands, warm lamp pools), then defocused and graded. It is
  never in focus, which is how a real f/2 backdrop behaves.
- **Graphics** — six timed panels cut to the narration: the six rivers, the
  abeyance stamp, what India cannot do, the suspended data exchange, the 80%
  figure, the PCA ruling, and the broken India–Pakistan data link.
- **Captions** — word-level timings estimated from syllable weight within each
  section, with key terms tinted amber (claims), blue (hydrology) and red
  (legal/conflict).
- **Audio** — narration high-passed and lightly compressed over a low drone bed
  with section pulses and room air, sidechain-ducked under the voice.

## Rebuilding

```bash
pip install kokoro-onnx soundfile rembg onnxruntime scipy pillow numpy imageio-ffmpeg
# fetch kokoro-v1.0.onnx and voices-v1.0.bin into tts/
python src/make_vo.py bm_george 1.20 vo.wav
python src/mixdown.py
python src/render.py                 # writes frames/
ffmpeg -framerate 30 -i frames/f%05d.jpg -i mix.wav -vf hqdn3d=3:3:9:9 \
  -c:v libx264 -crf 25 -preset slower -pix_fmt yuv420p \
  -c:a aac -b:a 160k -movflags +faststart -shortest reel.mp4
```

## Known limitation

The presenter does not lip-sync and is composited seated rather than genuinely
photographed in a chair — that needs a generative video pass, which the render
pipeline here cannot do. `production-kit.md` has the prompts and settings to
produce that version; the voiceover and captions in this folder drop straight
into it.
