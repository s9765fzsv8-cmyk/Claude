# The New Resource Order

**Critical Minerals and the Geopolitics of the Energy Transition**

A 22-slide research presentation prepared for the IIRIS International Presentation Series.

- Deck: `the-new-resource-order.pptx`
- Generator: `build-deck.js` (pptxgenjs)
- Speaker notes are embedded in every slide (presenter view in PowerPoint / Keynote).

## Building

`pptxgenjs` lives in the sibling `deck/` directory, so point Node at it:

```bash
cd presentation
NODE_PATH=../deck/node_modules node build-deck.js
```

To credit a presenter on the title slide, set the `PRESENTER` constant at the top of
`build-deck.js` and rebuild. An empty string ships the deck with the institutional
byline only.

## Argument

Decarbonisation has become the most concentrated supply-chain dependency in the world
economy. The scarcity is not geological — deposits are spread across dozens of states —
it sits in the **midstream**, where a single supplier now averages roughly 70% of global
refining capacity. That relocation turns climate policy into security policy, and the
workable answer is redundancy plus rules rather than national self-sufficiency.

## Structure

| # | Slide | Function |
|---|-------|----------|
| 1 | The New Resource Order | Title and hook |
| 2 | The argument in one slide | Thesis and roadmap |
| 3 | How a climate question became a strategic one | Introduction and background |
| 4 | What actually makes a mineral "critical" | Definition and scope |
| 5 | Four moments that built the present system | Historical and international context |
| 6 | One supplier, most of the world's capacity | Current global situation (chart) |
| 7 | The chokepoint is the midstream, not the mine | Core analysis |
| 8 | Who sits at the table — and who does not | Actors and stakeholders |
| 9 | Six structural obstacles | Key challenges |
| 10 | Demand is rising while investment falls | Statistics and data (chart) |
| 11 | Case study I · Cobalt in the DR Congo | Real-world evidence |
| 12 | Case study II · Indonesia and the nickel ban | Real-world evidence |
| 13 | From restriction to architecture | Economic statecraft |
| 14 | How the pressure lands, region by region | Regional and international implications |
| 15 | Four ways to read the same facts | Different perspectives |
| 16 | What the institutions can and cannot do | Role of international organisations |
| 17 | The price of being upstream | Impact on developing countries / Global South |
| 18 | A three-layer response | Possible solutions |
| 19 | Six recommendations, by actor | Policy recommendations |
| 20 | Three futures for the mineral system | Future outlook to 2035 (chart) |
| 21 | What this decade decides | Conclusion |
| 22 | References and sources | Evidence base |

## Design system

| Element | Value |
|---|---|
| Palette | Graphite `15191F` / slate `222B36` / copper `BE5F26` / amber `E39A5C` / teal `2C7A72` / stone `F1F3F5` |
| Type | Cambria headings, Calibri body |
| Motif | Squared "ore block" badges carrying step numbers, repeated on every content slide |
| Rhythm | Dark title → light content → dark section markers (5, 13) → dark conclusion |
| Grid | 0.7" margins; 2-, 3- and 4-column grids that land flush on both margins |

Charts are native PowerPoint objects, not images, so they remain editable.

## Sourcing

Every figure is cited on the slide where it appears and consolidated on slide 22.
Principal sources: IEA *Global Critical Minerals Outlook 2026* and *2025*, USGS *Mineral
Commodity Summaries 2025*, World Bank, the EU Critical Raw Materials Act and European
Court of Auditors, WTO DS592, China MOFCOM export-control announcements, the US
Department of State on the DRC–Rwanda Washington Accords, the African Union's *Africa's
Green Minerals Strategy*, the UN Secretary-General's Panel on Critical Energy Transition
Minerals, AfDB, UNECA, OECD and CSIS.

The scenario chart on slide 20 is the author's own illustrative framing, labelled as such
on the slide. All analysis and wording are original.

## QA performed

- `validate.py` — schema, relationships, content types, charts: passing
- Full visual render of all 22 slides, inspected for overflow, collisions, margins and contrast
- Content dump checked for placeholder text; speaker notes present on all 22 slides
