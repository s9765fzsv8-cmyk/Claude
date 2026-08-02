# Extraction 08 — Yigit et al. (2025) ★ AI-SIDE ANCHOR

## Full citation (APA 7)
Yigit, Y., Ferrag, M. A., Ghanem, M. C., Sarker, I. H., Maglaras, L. A., Chrysoulas, C.,
Moradpoor, N., Tihanyi, N., & Janicke, H. (2025). Generative AI and LLMs for critical
infrastructure protection: Evaluation benchmarks, agentic AI, challenges, and
opportunities. *Sensors, 25*(6), 1666. https://doi.org/10.3390/s25061666

Affiliations include Edinburgh Napier University, University of Liverpool Cybersecurity
Institute, and Edith Cowan University. **Credible, established cybersecurity research
group** — Ferrag, Maglaras and Janicke are widely cited in the field.

## Research objective
To survey generative AI and LLM applications for critical infrastructure protection,
review evaluation benchmarks, and assess agentic AI's role.

## Theoretical framework
None (technical survey). **No strategic, IR, or security-studies theory.**

## Methodology
Structured literature survey and benchmark review, with the authors' own comparative
benchmarking commentary.

## ★★ DEFINITION OF AGENTIC AI (the corpus's only one)
> "**Agentic AI describes a sophisticated AI system capable of autonomous action,
> real-time adaptation, and multi-step problem-solving aligned with specific contexts
> and objectives.** Agentic AI offers a transformative framework for CIP in an era of
> sophisticated cyber-physical threats and evolving operational complexities…
> Specifically, Agentic AI enables proactive defence and resilience in real time by
> **autonomously learning, adapting, and orchestrating multi-step mitigation
> strategies**…"

> "While Generative AI provides significant advantages in threat analysis and response,
> **Agentic AI introduces more autonomous decision-making capabilities.**"

This is the definitional anchor the RQ requires. The dissertation should adopt it
explicitly rather than coining its own.

## ★★ CYBERSECEVAL 3 — A MEASUREMENT INSTRUMENT FOR OFFENSIVE AUTONOMY
> "CYBERSECEVAL 3 … assesses eight distinct risks… This iteration expands on prior
> benchmarks by incorporating **offensive security capabilities, such as automated
> social engineering, scaling manual offensive operations, and autonomous offensive
> strategies.** The dataset has been applied to Llama 3 and other cutting-edge LLMs,
> offering insights into their performance with and without mitigation measures."

Elsewhere described as covering "automated social engineering, scaling manual offensive
cyber operations, and **autonomous offensive cyber operations**."

**This is the single most methodologically valuable find on the AI side.** The RQ asks
"how fast and how far" — CYBERSECEVAL 3 is a published, versioned benchmark that
measures exactly the offensive-autonomy capability in question. **Benchmark scores over
successive model generations constitute a citable time-series for the pace variable**,
replacing speculation with measurement.

## Authors' own capability caveats
> "refs. [50,51] observed **limitations in zero-shot LLMs for adversarial attack
> detection, a trend that we also confirmed.** Additionally, ref. [52] identified
> dataset constraints in evaluating AI-driven cybersecurity tools, which our
> benchmarking process also highlighted."

Corroborates Butt & Ulina's (2026) conservative reading: capability is real but bounded,
and evaluation itself is dataset-constrained.

## RELEVANCE TO RQ — critical assessment

**Term counts (verified):** `agentic` **25** | `autonom*` 14 | `adversar*` 16 |
`offensive` 7 | `strategic` 6 | `escalat*` 2 | `signal` 1 |
`Volt Typhoon` **0** | `offense-defense` **0** | `deterren*` **0**

**★ Eight for eight — and this one closes the argument from the opposite direction.**

Extractions 01–07 showed strategists ignoring AI. This paper is the mirror image: the
corpus's most substantive treatment of agentic AI, from a credible research group,
containing **zero** mentions of Volt Typhoon, deterrence, or the offence–defence
balance, and only two of escalation.

**The gap is now demonstrated bilaterally.** The strategic literature does not reach
AI; the AI literature does not reach strategy. Neither side is looking at the other.
That is a substantially stronger claim than "nobody has written about X," and it is
evidenced across nine journals spanning both fields.

### What it contributes to the dissertation
1. **A definition of agentic AI** to adopt — autonomous action, real-time adaptation,
   multi-step problem-solving.
2. **A pace metric.** CYBERSECEVAL 3 scores across model generations, giving the "how
   fast" clause an empirical instrument rather than an assertion.
3. **A defensive-autonomy baseline.** Agentic AI is framed here almost entirely as
   *defensive* — "proactive defence and resilience," "autonomously… orchestrating
   multi-step mitigation."

### ★ Analytical consequence (my synthesis)
The corpus's agentic AI literature is overwhelmingly **defence-facing**, while its
one offensive-autonomy discussion (Butt & Ulina, 2026) calls fully autonomous offence
"largely theoretical." Taken together, the corpus suggests autonomy is arriving
**faster on defence than on offence** — the opposite of the offence-dominance
assumption that Butt & Ulina assert and that Guttieri's threat framing implies.

If that asymmetry holds, it cuts directly against the intuition that AI favours the
attacker, and it interacts with Kabir et al.'s (2026) finding that 73.6% of intrusions
are currently detected by third parties rather than victims: **improving autonomous
detection would raise persistence cost, not lower it.**

**This is a genuine counter-argument to the working thesis and must be engaged in the
paper, not suppressed.** The honest formulation is that the *direction* of the shift is
indeterminate on current evidence — which is precisely why the RQ's "how fast and how
far" remains, in the author's own word, unresolved.

**Onward citations needed (not in corpus):** CYBERSECEVAL 3 benchmark paper (ref. [49]);
the agentic AI reference (ref. [104]).
