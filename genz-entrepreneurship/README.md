# GEN Z Entrepreneurship Initiative, project submission

Alkhidmat Summer Internship 2026, Community Action and Impact Project.

## What is here

| File | What it is |
|---|---|
| `Thanda-Godam-Pitch.pptx` | The final pitch. 15 slides, speaker notes on every slide. This is the submission. |
| `Thanda-Godam-Pitch.pdf` | Same deck as a PDF, for sharing or printing if the panel asks. |
| `field-research-pack.md` | Interview scripts to upgrade the slide 5 answers from published to local, plus the two hardest questions a panel can ask and how to answer them. Not for submission. |
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

## Status

Ready to submit as it is. Every slide is finished, every figure is either cited or openly
marked as an estimate, and there are no blanks, placeholders or notes to self anywhere in the
file.

The title slide footer is built from four constants at the top of `build-deck.js`:
`PRESENTER`, `DATES`, `VENUE` and `TIMINGS`. `DATES` is set to the programme weekend of
15 and 16 August 2026. The other three are empty, and any empty field is skipped rather than
printed, so the slide never shows a gap. Venue and timings were only ever announced in the
project group, so they are left blank instead of guessed.

Written for a solo submission. No slide or note assumes a team.

Speaker notes are on all fifteen slides. The notes on slides 3, 10 and 11 are the ones worth
reading twice: the core argument, the payback period, and why we work with the commission
agent rather than against him.

`field-research-pack.md` is optional extra credit, not a prerequisite. Part 6 of it has the
two hardest questions a panel can ask and how to answer both.

## Rebuilding the deck

```
npm install pptxgenjs
node build-deck.js
```
