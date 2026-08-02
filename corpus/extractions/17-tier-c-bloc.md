# Extraction 17 — The technical bloc (Tier C), characterised

## What this covers
Roughly 80 of the 105 corpus papers are technical machine-learning work on cyber defence
rather than strategic analysis. The original plan was to characterise them collectively
rather than extract each. This file does that.

## Method, and its limits — READ THIS BEFORE USING THE SECTION

**A quantitative approach was attempted and abandoned.** Google Drive full-text search
was used to count how many corpus papers engage terms like `federated learning`. The
query returned ~68 of 105 papers — including Maschmeyer's *EJIR* subversion article,
which contains no such discussion. **Drive's full-text matching is too loose to support
counting**, and any bloc statistics derived from it would be fabricated. The same caution
already applied to the Tier A triage (Singh et al. was returned by an
`offense-defense balance` search containing zero occurrences of the phrase).

**What was done instead:** three technical papers read in full — Yigit et al. (2025),
Kabir et al. (2026), Ajax (2026) — plus title-level survey of the remainder.
**This is a sample of three. The characterisation below is qualitative and should be
presented as such, not as a claim about all 80.**

---

## Bloc paper read in full — Ajax (2026)

**Citation.** Ajax, R. (2026, June 10). *Autonomous cyber defense architectures for
national security and critical infrastructure protection*. [No venue or affiliation
stated.]

**Content.** Proposes a six-layer autonomous defence architecture: data acquisition;
processing/normalisation; AI decision; autonomous response; threat-intelligence
integration; **human oversight and governance**.

### The one claim relevant to the RQ
> "modern cyberattacks are increasingly automated and occur at speeds that exceed human
> response capabilities… This mismatch between attack speed and defensive response time
> has led to growing interest in autonomous cyber defense systems."

And, on the limit of autonomy:
> "full autonomy in cybersecurity introduces important risks, particularly in areas
> requiring high accountability and human judgment. **A balanced approach combining
> autonomy with human oversight is essential**."

Listed challenges: trust and accountability; risk of false actions; **adversarial AI
attacks**; system complexity; ethical and legal concerns.

### ★★ SERIOUS QUALITY WARNING — do not cite
- **No venue, no affiliation, no peer review.** A bare authored PDF.
- **No empirical content whatsoever** — no data, no evaluation, no case. The
  "methodology" is a thematic literature review; the "findings" are assertions.
- **The reference list does not support the paper.** Of 18 references, several concern
  neural machine translation (Vega-MT; non-autoregressive translation; "Towards making
  the most of ChatGPT for machine translation"), one concerns **mindfulness in the
  chemical industry**, one **"How fair is Fair Trade in fisheries"**, and one
  **curricular infusion in technology management education**. None bears on autonomous
  cyber defence.

Citation lists that do not match their subject matter are a recognised marker of
low-quality or machine-generated output. **This paper should not be cited in any form.**
It is recorded here as evidence about the corpus, not as evidence about the world.

---

## What the bloc collectively establishes (qualitative, sample of three)

1. **Defensive automation is being actively built** across intrusion detection,
   federated threat intelligence, explainable anomaly detection, and automated response
   orchestration. Volume alone establishes direction of effort.
2. **The animating premise is a speed mismatch** — attacks at machine speed against
   human-paced defence (Ajax, 2026; Kabir et al., 2026). This is the bloc's implicit
   theory, and it is asserted rather than demonstrated.
3. **Autonomy is framed almost entirely as defensive.** Even the best bloc paper
   (Yigit et al., 2025) presents agentic AI as "proactive defence and resilience."
4. **Human oversight is retained in every architecture reviewed**, typically as a
   governance layer. No bloc paper proposes removing the human from consequential
   decisions.

## What the bloc does not do

**None of the three papers read in full engages deterrence, signalling, escalation, or
the offence–defence balance.** Yigit et al. (2025) contains zero occurrences of
`Volt Typhoon`, `offense-defense`, or `deterrence` across a substantial survey. The bloc
builds capability without theorising consequence.

## ★ Quality distribution — the finding that matters most for the dissertation

The three papers read span the full quality range:

| Paper | Venue | Assessment |
|---|---|---|
| Yigit et al. (2025) | *Sensors* 25(6), MDPI; established group (Edinburgh Napier, Liverpool) | **Credible and citable** |
| Kabir et al. (2026) | *J. Computer Science & Technology Studies*, unranked | Usable data, **internally contradictory counts** |
| Ajax (2026) | **None** | **Unusable; references unrelated to subject** |

**Implication.** The technical bloc cannot be cited as an undifferentiated body. Each
paper drawn on requires individual quality assessment. A literature review that treats
these ~80 papers as collectively authoritative — or that counts them as evidence of
consensus — would be resting on a base that includes unreviewed and possibly
machine-generated material.

**Recommended treatment in the dissertation.** Cite the bloc for *direction of effort*
("defensive automation is being built at scale"), citing two or three named credible
examples. Do not aggregate it, do not count it, and do not treat its claims about the
speed mismatch as established.
