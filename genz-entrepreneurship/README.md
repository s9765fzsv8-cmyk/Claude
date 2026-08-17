# GEN Z Entrepreneurship Initiative, project submission

Alkhidmat Summer Internship 2026, Community Action and Impact Project.

## What is here

| File | What it is |
|---|---|
| `Thanda-Godam-Pitch.pptx` | The final pitch. 15 slides, speaker notes on every slide. This is the submission. |
| `Thanda-Godam-Pitch.pdf` | Same deck as a PDF, for sharing or printing if the panel asks. |
| `field-research-pack.md` | Interview questions for the primary research, and where each answer goes in the deck. Not for submission. |
| `build-deck.js` | The script that generates the deck. Run `node build-deck.js` after editing to rebuild. |

## The idea in one line

Thanda Godam puts a 5 tonne solar powered cold room inside the village and rents it to small
growers by the crate, by the day, so they can wait for a better price instead of selling
within 48 hours of picking.

## How the deck covers what the guide asked for

| Guide requirement | Slide |
|---|---|
| Project or idea name | 1 |
| Problem identified | 2, 3, 4 |
| Basic market and competitor research | 5, 11 |
| Proposed solution | 6, 7 |
| Target audience and customer | 8 |
| Value proposition | 9 |
| Basic business and sustainability model | 10 |
| Marketing and execution approach | 12 |
| Risks | 13 |
| Key next steps | 14 |
| Sources | 15 |

Steps 1 to 7 of the intern task all appear: problem identification (2, 3), basic research
(5), solution development (6, 7), target audience (8), value and business model (9, 10),
execution and marketing (12), and the final pitch itself.

## Before you submit

1. Slide 1: fill in your name, your team members' names, and the coordinator's name.
2. Slide 5: run the interviews in `field-research-pack.md` and replace the three
   `[your finding]` placeholders with real answers.
3. Slide 8: the pilot catchment is written as Okara and Depalpur. Change it to whichever
   district your team can actually visit.
4. Read the speaker notes. They tell you what to say on each slide and which questions to
   expect.

## Rebuilding the deck

```
npm install pptxgenjs
node build-deck.js
```
