# Production kit — talking-head version

The delivered `when-the-data-stopped-flowing.mp4` was built entirely from the
supplied photograph: the subject was cut out, his blazer recoloured to mid blue,
a white shirt and navy tie painted into the jacket opening, and the whole plate
relit and composited into a defocused library set with motion graphics and
synchronised captions.

What that pipeline **cannot** produce is a real performance — his lips do not move
and he is not genuinely seated in a chair. Producing that requires a generative
video model. Everything below is ready to paste into one, and the finished
narration (`voiceover.wav`) and captions (`captions.srt`) drop straight in.

## Route A — avatar lip-sync (fastest, most controllable)

Tools: HeyGen, Synthesia, D-ID, Argil.

1. **Build the still first.** Feed the source photo plus this prompt to a
   photo-editing model (Nano Banana / Gemini 2.5 Flash Image, Seedream,
   Flux Kontext, Qwen-Image-Edit):

   > Keep this man's face, hairstyle, beard and skin tone exactly as they are —
   > same identity, no change to facial features. Re-dress him in a mid-blue
   > single-breasted wool suit jacket over a crisp white dress shirt and a plain
   > navy silk tie with a neat four-in-hand knot. He is seated upright in a
   > dark leather armchair, angled slightly to camera, shoulders square, hands
   > resting loosely, looking directly at the lens with a calm, authoritative
   > expression. Setting: a warm wood-panelled library, tall bookshelves filled
   > with old bound volumes behind him, a brass reading lamp glowing off to one
   > side. Shallow depth of field — the shelves fall softly out of focus.
   > Cinematic three-point lighting, warm key from camera left, cool rim from
   > camera right. Shot on an 85 mm lens at f/2, medium close-up from mid-chest
   > up, vertical 9:16 framing, photorealistic, natural skin texture.

   Generate 3–4 variants and keep the one whose face matches best.

2. **Upload that still as a photo avatar**, upload `voiceover.wav` as the audio
   track, and render at 1080×1920. Do not let the tool re-generate the voice.

3. **Re-add the graphics.** The avatar render replaces only the presenter plate;
   the title card, kickers, data panels and captions still need to sit on top.
   Import the avatar clip into CapCut / Premiere / Resolve, drop `captions.srt`
   on the timeline, and rebuild the panels from the cue sheet in `script-70s.md`.

## Route B — image-to-video (most cinematic, least controllable)

Tools: Veo 3, Kling 2.5, Runway Gen-4, Hailuo.

Use the still from step 1 above as the first frame, then:

> The seated man speaks directly to camera with measured, confident delivery —
> natural lip movement, small head nods on emphasis, occasional blinks, subtle
> shoulder movement. The camera holds a slow, almost imperceptible push-in. The
> library behind him stays softly out of focus. No cuts, no camera shake, no
> other people entering frame.

Most of these models cap at 5–10 seconds, so render **eight to ten clips** and cut
them together against the voiceover. Keep the same first-frame still for every
clip so his position and wardrobe stay continuous, and hide the joins on the
beat changes listed in `script-70s.md` — the six section boundaries are the
natural cut points.

If the model supports native audio (Veo 3), still mute it and lay `voiceover.wav`
underneath — a consistent voice across ten clips matters more than lip-sync
precision at reel scale.

## Voice

The delivered narration is a British male neural voice at 1.20× rate, mixed with
a low drone bed, section pulses, and sidechain ducking. To re-record it with a
commercial voice instead:

| Setting | Value |
|---|---|
| Suggested voices | ElevenLabs *George* or *Daniel*; PlayHT *Oliver*; Azure *en-GB-RyanNeural* |
| Style | Documentary / news analysis — measured, not urgent |
| Stability | 0.45–0.55 (enough variation to sound human) |
| Similarity | 0.75 |
| Speed | ~165 words/min — the script is 182 words for 70 s including beats |
| Pauses | ~0.45 s between the six sections; no pause inside them |

The read must land at **70.0 s**. If a re-recording comes in long, cut from
Context and Evidence first — those beats carry the most on-screen redundancy.

## Files

| File | What it is |
|---|---|
| `when-the-data-stopped-flowing.mp4` | The finished 70 s reel, 1080×1920, H.264 + AAC |
| `voiceover.wav` | Narration only, 70.000 s, 24 kHz mono — drop into any avatar tool |
| `captions.srt` | 51 caption cards, word-timed to the narration |
| `script-70s.md` | Timed script, trim log, and the on-screen graphics cue sheet |
