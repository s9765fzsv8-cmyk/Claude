# Extraction 07 — Kabir, Siddike, Razib & Uddin (2026)

## Full citation (APA 7)
Kabir, M. H., Siddike, M. A. M., Razib, M. D., & Uddin, M. R. (2026). A national-scale
AI-driven cyber defense framework for protecting U.S. critical infrastructure against
nation-state attacks. *Journal of Computer Science and Technology Studies, 8*(6), 94–107.

## Research objective
To propose and evaluate the National-Scale AI-Driven Cyber Defense Framework (NAICDF):
ML threat detection + federated learning + Zero Trust Architecture + automated response.

## Theoretical framework
**None.** Engineering/systems paper.

## Methodology
Framework proposal + evaluation. Coding of nation-state intrusion incidents
(Jan 2020 – Dec 2024) from CISA bulletins, FBI Flash, NSA technical reports, and OSINT
(VirusTotal, Shodan, AlienVault OTX). Each incident coded on seven factors including
**dwell time** and method of detection. Simulation against CISA National Cyber Exercise
Program data.

## ★ EMPIRICALLY USEFUL DATA FOR THE RQ

**Volt Typhoon characterised in Table 1:**
> "Volt Typhoon | China (PLA) | 2023–24 | Energy, Water, Communications, Transport |
> Living-off-the-Land (LotL) | **Up to 5 years** | **Pre-positioned for destructive
> action**; communications infrastructure mapped"

**Dwell time — the persistence-cost proxy:**
> "The average dwell time — the time from initial compromise to detection — was
> **197 days** across sectors."

**Detection failure:**
> "Crucially, **73.6% of events were first discovered by entities other than the
> victim organisation's security teams** (government agencies, third party security
> vendors, partner organisations), reinforcing the fact that the detection systems of
> many organisations are not adequate."

**Claimed defensive automation performance:**
94.3% intrusion detection accuracy, 2.1% false positives, **67% reduction in mean time
to respond (MTTR)** versus conventional SOC.

**Attack vectors:** spear phishing/credential compromise 43.2%; public-facing
applications 31.7%; supply chain 14.6%; trusted relationship 10.5%.

## RELEVANCE TO RQ — critical assessment

**Term counts (verified):** `Volt Typhoon` 2 | `escalat*` 8 | `pre-position` 1 |
`agentic` **1 — bibliography entry only** | `autonom*` 1 (their own "autonomous
response orchestrator") | `offense-defense` **0** | `strategic stability` **0**

**Seven for seven.** This paper was the strongest candidate to break the pattern — it
was the only corpus item returned by *both* the `Volt Typhoon` and `agentic` searches.
It does not break it. The single `agentic` occurrence is a reference to Yigit et al.
(2025), *Sensors* 25(6) 1666 — **which is itself in this corpus** (`sensors-25-01666-v3.pdf`)
and is the next extraction target.

### What it contributes
1. **A persistence-cost proxy with numbers.** The methodology proposed in §8 requires
   proxying persistence cost; this paper supplies dwell time as a coded variable, with
   a 197-day sector average and a Volt Typhoon figure of "up to 5 years." That is the
   quantitative anchor the argument lacked.
2. **A defender-capability baseline.** 73.6% of intrusions discovered by third parties
   rather than the victim. This qualifies the cost argument in an important way:
   persistence is currently sustained not only by attacker skill but by **defender
   blindness**. If AI-driven detection closes that gap, persistence cost *rises* — a
   counter-pressure the thesis must acknowledge rather than assume away.
3. **A quantified claim about defensive automation speed** (67% MTTR reduction), which
   is directly relevant to the "how fast/how far" clause — on the *defensive* side.

### ★ Serious data-integrity problem — do not cite the incident counts
The abstract reports "**847** confirmed nation-state intrusions in 11 critical
infrastructure sectors (2020–2024)." The results section instead reports "187% more
nation state attempted invasions, **89** confirmed attacks, and **253** confirmed
events." **These figures do not reconcile with each other or with the abstract.** No
reconciliation is offered.

The 94.3%/67% performance figures derive from simulation against exercise data, not
operational deployment, and no baseline SOC configuration is specified.

### Venue and authorship caution
*Journal of Computer Science and Technology Studies* (Al-Kindi Center) is an
unranked, APC-driven venue. Author affiliations are master's programmes (Westcliff,
Trine). **Cite the dwell-time and detection-source figures with attribution and
caution; do not rely on the framework evaluation.** The dwell-time figures are
corroborable against independent sources (e.g. Mandiant M-Trends), and the
dissertation should corroborate rather than cite this paper alone.

### Net assessment
Useful as a *data* source with declared reservations, not as an analytical source.
It confirms rather than complicates the central finding: even a paper explicitly
about national-scale AI cyber defence, which names Volt Typhoon and cites agentic AI
work, contains **no discussion of what any of this does to signalling, escalation, or
the offence–defence balance.**
