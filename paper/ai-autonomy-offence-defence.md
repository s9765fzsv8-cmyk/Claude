# The Price of Patience: AI Autonomy, Costly Signalling, and the Strategic Meaning of Cyber Pre-Positioning

**Working paper — literature foundation and research design**

---

## Abstract

Persistent adversary access to civilian critical infrastructure — "pre-positioning" — is
widely read as strategic warning. That reading rests on a premise its proponents state
but do not examine: that persistence is expensive, and therefore signals deliberate
intent. This paper interrogates the premise, and asks what AI-enabled autonomy does to it.

Drawing on a corpus of 105 papers, of which sixteen are extracted in full depth, it
establishes three findings. First, the interpretive claim and the behavioural record do
not match: pre-positioning is read as preparation for conflict, yet Volt Typhoon drew
only a joint technical advisory while the contemporaneous Salt Typhoon espionage campaign
drew Treasury sanctions. Second, the corpus contains three cases of pre-positioning, one
attempted use, and no case of pre-positioning followed by successful strategic effect —
so every inference about what pre-positioning portends rests on zero positive instances.
Third, the offence–defence balance in cyberspace is a property of the dyad rather than of
the technology, which makes "does autonomy favour offence?" the wrong question and "which
side better absorbs autonomy?" the answerable one.

Two rival hypotheses are specified and a research design proposed to discriminate between
them: that autonomy degrades an existing signalling channel, or that pre-positioning was
never a signal, being calibrated precisely to remain below response thresholds. The
paper does not adjudicate between them; it establishes that the question is open, that
the literature has named it without investigating it, and that the evidence currently
leans toward the second.

**Keywords:** offence–defence balance; cyber pre-positioning; costly signalling;
AI autonomy; Volt Typhoon; critical infrastructure; escalation

---

## Note on the evidence base

This paper is built on a corpus of **105 PDFs** supplied by the author. **Nine papers**
have been extracted in full depth; all 105 have been triaged by full-text term search.
Every substantive claim below is cited to a paper in that corpus, or explicitly
labelled as (a) my analytical synthesis or (b) supplementary literature outside the
corpus. Where the corpus cannot support a claim, this is stated rather than finessed.

Full-depth extractions: Maschmeyer (2023); Singh, Jash & Nanjappa (2025);
Butt & Ulina (2026); Guttieri (2025); Sullivan (2025); Baram (2026); Kabir et al.
(2026); Yigit et al. (2025); Melella (PhD); Pokorny (2026); Codreanu (2025). Extraction files are in
`corpus/extractions/`.

**Revision note.** Extractions 05 (Sullivan) and 06 (Baram) materially changed the
argument advanced in the first draft; extraction 09 (Melella) **falsified a claim made
in the second draft**. Both changes are documented in §4.1 and §4.3 rather than
silently absorbed.

---

## 1. Evidence Matrix

| | **Maschmeyer (2023)** | **Singh, Jash & Nanjappa (2025)** | **Butt & Ulina (2026)** | **Guttieri (2025)** |
|---|---|---|---|---|
| **Venue** | *European Journal of International Relations* 29(1) | *Cogent Social Sciences* 11(1) | *Critical Review of Social Sciences Studies* 4(1) | *The Cyber Defense Review* 10(1) |
| **Objective** | Theorise subversion as reverse structural power | Explain US–China cyber strategic competition | Review cyber warfare trends 2022–2026 | Reframe cyber resilience for power projection |
| **Research question** | Not formal. Puzzle: why are the most capable actors also the most vulnerable? | Hypothesis: competition driven by geopolitical, military, technological factors | Not stated | Not formal |
| **Theoretical framework** | Structural power (IR) + Intelligence Studies | Offensive realism; techno-nationalism | **None — atheoretical** | Woods' layered resilience; Cyber Persistence Theory; cybersecurity dilemma |
| **Methodology** | Theory-building + plausibility probe | Comparative case study; document analysis | "Evidence-based analytical review" of secondary sources | Conceptual argument + illustrative cases |
| **Cases / data** | 2016 US election interference | Aurora, GhostNet, OPM, Volt/Flax/Salt/Silk Typhoon; USCYBERCOM vs ISF/CSF | Russia–Ukraine; Volt Typhoon; DPRK crypto ops; vendor trend data | Volt Typhoon; Ukraine cyber defence; Jack Voltaic exercises |
| **Key concepts** | Subversion; reverse structural power; capability–vulnerability paradox | Cyber sovereignty; militarisation; standard-setting | AI-driven attacks; Zero Trust; RaaS | Latent power; graceful extensibility; sustained adaptability; cyber campaigning |
| **Major argument** | Cyber operations are means of subversion, not warfare | Governance divergence turns cyberspace into a standard-setting battleground | AI has significantly boosted offensive operations | Resilience is a practice and operational capability, not a state |
| **Principal finding** | Reverse structural power resolves the capability–vulnerability paradox | Competition operates across three interconnected dimensions | Defenders are behind on AI-enabled offence | Prevailing (NIST) resilience definitions are insufficient for conflict |
| **Limitations acknowledged** | "Plausibility probe" only; single case | Review article; open-source reliance | **None stated** | NGram evidence "more illustrative than" probative |
| **Policy recommendations** | None (theory article) | Governance and confidence-building implications | Tabulated by priority area, 2025–2030 | Deterrence by denial; civil-military integration |
| **`offense-defense`** | **2** (one dismissive sentence + one bibliography entry) | **0** | **0** | **0** |
| **`artificial intelligence`** | **0** | **0** | present | **0** |
| **`agentic`** | **0** | **0** | **0** | **0** |
| **`Volt Typhoon`** | **0** | 6 | 2 | **13** |
| **`pre-position*`** | **0** | **0** | **0** | **3** |
| **Relevance to RQ** | Baseline statement that offence–defence framing is *wrong* for cyber | Contested attribution of Volt Typhoon; PRC counter-narrative | Only corpus paper linking AI autonomy to offensive operations | **Anchor paper**: pre-positioning as strategic signal |

### Evidence matrix (continued)

| | **Sullivan (2025)** | **Baram (2026)** |
|---|---|---|
| **Venue** | *The Cyber Defense Review* 10(1) | ***Contemporary Security Policy*** (ranked) |
| **Objective** | Explain and remedy the "fog of law" in cyber | Explain variation in joint public attribution |
| **Research question** | Not formal | Why do states attribute jointly, and why in one form over another? |
| **Theoretical framework** | Rules vs standards; deterrence vs Cyber Persistence Theory | Cyber norms; deterrence signalling; alliance politics |
| **Methodology** | Doctrinal legal analysis of DoD *Law of War Manual* | **Typology + coding of 20 incidents, EuRepoC dataset, 2015–2025** |
| **Cases / data** | Volt Typhoon, Salt Typhoon (passing); Stuxnet | 20 joint attribution cases; Russia 11, China 7, DPRK 1, Iran 1 |
| **Key concepts** | Fog of law; gray zone; tacit bargaining; technical vs political attribution | Jointness; four coordination modes; norm signalling |
| **Major argument** | Legal ambiguity, a deterrence-era choice, now misaligns with persistent engagement | Joint attribution is not one practice but four, with different purposes |
| **Principal finding** | Cyber operations are cheap and low-salience; unilateral clarification is the viable path | **Volt Typhoon drew a Type 3 response — technical advisory, no sanctions, no endorsement** |
| **Limitations acknowledged** | Notes policy failure ≠ theory failure | **Exemplary: Western/allied reporting bias declared explicitly** |
| **`artificial intelligence`** | **0** | **0** |
| **`autonom*`** | **1** (bibliography only) | **0** |
| **`Volt Typhoon`** | 2 | 7 |
| **`signal*`** | present | **28** |
| **Relevance to RQ** | Cost baseline; tacit bargaining; salience problem | **Empirical anchor: documents the signalling failure** |

### Evidence matrix (continued) — extractions 07–16

| Paper | Venue / status | Method | Key contribution to the RQ | AI? | Quality caution |
|---|---|---|---|---|---|
| **Kabir et al. (2026)** | *J. Computer Science & Technology Studies* (unranked) | Framework + incident coding | Dwell time as persistence-cost proxy: 197-day mean; Volt Typhoon "up to 5 years"; 73.6% of intrusions found by third parties | Defensive only | **Incident counts irreconcilable (847 vs 89 vs 253) — uncitable** |
| **Yigit et al. (2025)** | *Sensors* 25(6); established group | Survey + benchmark review | Definition of agentic AI; CYBERSECEVAL 3 as a pace metric for "autonomous offensive cyber operations" | Yes (25 mentions) | Zero strategy content |
| **Melella (n.d.)** | PhD dissertation, Genoa | Lit review + cases + dataset | **Names this RQ as a research gap**; only sustained offence–defence review in corpus | Yes (7) | Not peer reviewed; **year unconfirmed** |
| **Pokorny (2026)** | Self-published, ICL Institute | OSINT, 16 sources | Reports Lindsay (2013): balance "favors defense at the strategic level"; 2024 SSF restructuring | Minimal | Self-published; offensive-targeting document |
| **Codreanu (2025)** | Romanian Diplomatic Institute PP43 | Open-source policy analysis | **The negative case**: Russian pre-positioning in US CI since 2018, never used | None | Not peer reviewed; journalism-sourced |
| **Urbanczyk et al. (2025)** | TechRxiv preprint | Kill-chain case study | Salt Typhoon drew **Treasury sanctions** — the response asymmetry | None | Undergraduate, unreviewed; cite Treasury directly |
| **Ferdaus et al. (n.d.)** | SSRN chapter | Survey | Background on espionage/attack distinction | Incidental | Low relevance |
| **Willett (2022)** | ***Survival*** **(IISS) — highest-ranked in corpus** | Expert assessment | **"Defence dominating most of the time"**; balance is dyad-conditional; Industroyer2 defeated | None | Time-bounded to Aug 2022 |
| **Braccia (2025)** | Authorea preprint | Grey-zone analysis | Sub-threshold calibration ⇒ **H2, pre-positioning as deliberate non-signal** | None | **No affiliation, no review — do not cite for facts** |
| **Dimitrov & Andreev (2025)** | Conference proceedings, RTU Press | Doctrinal case analysis | Explicit **H1**: pre-positioning "as a means of deterrence and coercion"; Guam/Taiwan targeting | Incidental | Concedes Guam forensics showed no sabotage |


---

## 2. Comparative Analysis

### 2.1 Areas of agreement

Across the sixteen fully-extracted papers, three propositions command near-universal
assent.

**Cyber competition is continuous rather than episodic.** Guttieri (2025) frames this
through Cyber Persistence Theory — "cyber competition involves constant contact among
competitors"; Sullivan (2025) traces the 2018 US doctrinal shift from deterrence to
persistent engagement; Singh et al. (2025) periodise US–China competition into phases;
Maschmeyer (2023) locates cyber operations in the register of subversion, prolonged by
nature.

**Critical infrastructure is the contested object**, and the civil–military seam is where
strategic effect is generated (Guttieri, 2025; Kabir et al., 2026; Codreanu, 2025).

**Pre-positioning is analytically distinct from espionage.** Guttieri (2025), Codreanu
(2025), Dimitrov and Andreev (2025) and Braccia (2025) all separate persistent access for
future disruption from collection for intelligence — though, as §3 shows, they disagree
sharply about what the distinction implies.

### 2.2 Areas of disagreement

**On the direction of the offence–defence balance.** The corpus holds three incompatible
positions, and no paper adjudicates between them:

| Position | Source | Basis |
|---|---|---|
| The frame does not apply to cyber | Maschmeyer (2023) | Theoretical; cyber is subversion, not warfare |
| Offence dominates — "defenders are behind" | Butt & Ulina (2026) | **Asserted, unargued** |
| Defence is favoured at the strategic level | Lindsay (2013) via Pokorny (2026) | Sophisticated defenders detect and mitigate |
| **Defence dominated in practice** | **Willett (2022)** | **Empirical: the Russia–Ukraine war** |

Willett's is the only judgement grounded in an observed conflict, and it finds for
defence. This is a serious problem for any study assuming offence-dominance as its
baseline.

**On what pre-positioning means** — the corpus's central dispute, with named advocates
on both sides. Dimitrov and Andreev (2025) hold that pre-positioning functions "as a
means of deterrence and coercion," i.e. as a signal. Braccia (2025) holds that grey-zone
operations are "carefully calibrating effects to remain below use-of-force thresholds,"
i.e. designed *not* to signal. Guttieri (2025) supplies the interpretive rule that
supports the first; Baram (2026) supplies the behavioural evidence that undercuts it.

**On whether cyber operations are cheap.** Sullivan (2025) states that operations are
conducted "inexpensively" and that most "do not" require significant investment.
Guttieri (2025), in the same issue of the same journal, grounds the signalling inference
in "technical competence and strategic patience." The tension resolves only by
distinguishing cost of *entry* from cost of *undetected persistence* — a distinction
neither author draws.

### 2.3 Competing explanations for the capability–vulnerability paradox

1. **Offence dominance** — reported and rejected by Maschmeyer (2023).
2. **Reverse structural power** — Maschmeyer's own: centrality in the global ICT
   structure converts into exposure when subverted.
3. **Resilience deficit** — Guttieri (2025): vulnerability follows from treating
   resilience as a static IT function.
4. **Defender blindness** — Kabir et al. (2026): 73.6% of intrusions are first detected
   by third parties, not victims. Persistence is cheap partly because detection fails.

Explanations 3 and 4 are the interesting pair for this study, because both imply that
improving autonomous defence would *raise* persistence cost — the opposite of what an
offence-favouring reading of AI predicts.

### 2.4 Methodological differences

The corpus divides into four groups:

- **Theory-building with illustrative cases** — Maschmeyer (2023), Guttieri (2025).
- **Doctrinal and legal analysis** — Sullivan (2025), Pokorny (2026).
- **Expert assessment** — Willett (2022).
- **Systematic coding against a dataset** — **Baram (2026) alone**, using the European
  Repository of Cyber Incidents to code twenty joint attribution cases, 2015–2025.

Baram is the corpus's only genuinely systematic empirical design, and the only paper
whose limitations section declares its own sampling bias ("this dataset primarily
reflects Western and allied attribution practices"). It is the model this study should
follow.

Nothing in the corpus employs formal modelling, elite interviews, or archival process
tracing. Only Baram tests propositions against a coded population.

### 2.5 Evolution of the debate

Four phases are visible. **Pre-2022**, the argument is about whether cyber constitutes
war at all; Maschmeyer (2022/23) writes against militarised framing. **2022** brings the
first well-matched wartime test, and Willett records that expectations of decisive
offensive effect were disappointed. **2023 onward**, attention shifts decisively to
stealthy access: Baram (2026) finds that from 2023 "focus shifted toward stealthy access
operations against critical infrastructure," and Guttieri, Codreanu, Dimitrov, Braccia
and Pokorny all take Volt Typhoon as their object. **2025–26** brings the first
AI-inflected treatments (Butt & Ulina, 2026; Yigit et al., 2025), but they run on a
separate track.

**The debate has moved from "is cyber war?" through "what is persistent access for?"
without ever absorbing the autonomy question.** Melella names the intersection and turns
away from it. That trajectory is the warrant for this study.

---

## 3. Thematic Literature Review

### Theme 1 — Is the offence–defence balance the right frame for cyber?

**The debate.** Offence–defence theory holds that the relative ease of attack versus
defence shapes conflict likelihood. Applied to cyber, it has generated a durable
conventional wisdom of offence dominance. Maschmeyer (2023) reports this position —
citing Betz and Stevens, Lynn, and Nye — and rejects it, holding that the theory
"faces significant theoretical and empirical challenges" and, more fundamentally, that
"military affairs are precisely not where cyber operations have been most relevant."

**Comparison.** Maschmeyer's alternative is that cyber operations are means of
subversion, which reverse structural power rather than deliver military effect.
Guttieri (2025) does not contest the offence–defence frame explicitly but implicitly
resists offence-dominance: her entire argument is that resilience can deny adversaries
their objectives. Butt & Ulina (2026) assert offence-dominance flatly, without theory.

**Strength of evidence.** Weak in this corpus. Maschmeyer's rejection is
theoretically argued but empirically rests on one plausibility probe. Butt & Ulina's
affirmation rests on vendor-sourced trend data (IBM, Verizon, Cybersecurity Ventures)
with no discussion of vendor reporting incentives and no limitations section.

**A directional claim, and it favours defence.** Pokorny (2026) reports Lindsay's
(2013) position:

> "the more technically sophisticated the target, the more difficult it is to achieve a
> decisive cyber effect, because sophisticated defenders are better able to detect and
> mitigate intrusions. This 'offense-defense balance' in cyberspace, Lindsay contends,
> **favors defense at the strategic level**, even if individual tactical attacks may
> succeed."

**This is the only explicit statement in the corpus about which way the balance tilts,
and it contradicts the offence-dominance intuition.** It converges with two other corpus
findings: agentic AI is overwhelmingly defence-facing (Yigit et al., 2025), and fully
autonomous offence remains "largely theoretical" (Butt & Ulina, 2026).

Two cautions. Lindsay (2013) is **not in the corpus** — this is Pokorny's
characterisation, and it must be verified against the original before it bears weight.
And Pokorny's monograph is self-published, built on 16 unclassified sources, and is
itself an *offensive targeting* document, i.e. a primary source expressing a policy
position rather than a neutral analysis.

**Unresolved.** The corpus contains **no paper that measures or operationalises the
cyber offence–defence balance.** The canonical treatment (Slayton, 2017,
*International Security*) appears only as a citation *within* Maschmeyer's
bibliography. This is a corpus limitation, and it must be declared.

**★ The only wartime empirical judgement, and it favours defence.** Willett (2022), in
*Survival* — IISS, the corpus's highest-ranked venue — assesses the Russia–Ukraine war:

> "a sustained Russian campaign to hack into and disrupt Ukraine's critical national
> infrastructure, resulting in **intense sparring between offence and defence, but with
> defence dominating most of the time**, given its access to good intelligence and
> top-class cyber-security expertise."

**★★ And the balance is dyad-conditional, not technology-determined:**

> "a cyber conflict between Russia and a state with weaker cyber security than Ukraine,
> or one between NATO and Russia (or China), would perhaps see **a different balance
> between offence and defence**."

**This is the most consequential theoretical point in the corpus.** The balance is not a
property of the technology but of the *pairing* — specifically of defender capability
and the assistance available to it. Ukraine's defence was carried by US and UK agencies
and by Microsoft, Google and Cisco; a differently resourced defender yields a different
balance with identical offensive technology.

**It therefore reframes the research question.** "Does AI autonomy favour offence or
defence?" is malformed. The answerable question is: **which side is better positioned to
absorb autonomy, under what conditions?** On corpus evidence — defence-facing agentic AI
(Yigit et al., 2025), offensive autonomy "largely theoretical" (Butt & Ulina, 2026),
Lindsay's sophistication paradox (via Pokorny, 2026), and Willett's wartime judgement —
the answer currently leans defender, *for well-resourced defenders*. The distributional
implication is that autonomy widens the gap between capable and incapable defenders
rather than shifting a single global balance.

**Synthesis.** For the RQ, the significance is that the offence–defence frame is
contested at its foundation *and* at its direction. The corpus contains one author
rejecting the frame entirely (Maschmeyer, 2023), one asserting offence-dominance
without argument (Butt & Ulina, 2026), and one reporting a defence-favouring position
(Lindsay, via Pokorny, 2026). **A study asking how AI "shifts the balance" must
therefore establish which baseline it is shifting from — and the corpus does not
settle that.** A study asking how AI autonomy *shifts* the balance must
first defend the claim that there is a balance worth measuring — or reframe the
dependent variable in terms the corpus better supports, such as the cost and
credibility of persistent access.

### Theme 2 — Pre-positioning: espionage, preparation, or signal?

**The debate.** Persistent access to critical infrastructure is observationally
ambiguous. The same implant supports intelligence collection, attack preparation, and
coercive signalling. Guttieri (2025) makes the ambiguity her subject.

**Guttieri's mechanism.** Pre-positioned actors "maintain a portfolio of future
options… escalating the attack, disrupting services, conducting surveillance, or
withdrawing." Over time they "accumulate a form of latent power on the network."

**Guttieri's decision rule.** Reporting Nakasone and Lewis, she concludes: "when
persistent access offers low intelligence gain but high leverage, it likely reflects
preparation for conflict." This is the corpus's clearest analytical criterion for
distinguishing espionage from signalling.

**Counter-position.** Singh et al. (2025) record that the PRC denies the campaign
entirely, and reciprocally accuses the US. Where attribution is contested, the
signal's *receipt* is contested, which is a condition for signalling failure.

**Strength of evidence.** Guttieri's rule is inferential, resting on the public
statements of two US officials — sources with an institutional stake in the
interpretation. This is not a weakness she conceals, but it is a weakness.

**★ The negative case.** Codreanu (2025) supplies the corpus's only instance of
pre-positioning followed by non-use, and it is decisive for the theme:

> "In 2018, Washington accused Russia of infiltrating multiple sectors of US critical
> infrastructure, including nuclear facilities, energy, aviation, and even water supply
> networks (Lonergan & Poznansky 2025). **So far, however, Russia has not exploited
> these footholds to launch direct cyberattacks on the US**."

Seven-plus years of maintained access without use. This qualifies the
Nakasone/Guttieri inference sharply: if persistent access "likely reflects preparation
for conflict," preparation can evidently persist indefinitely without conflict.
**Pre-positioning is better characterised as option-generation than as commitment** —
consistent with Guttieri's own "portfolio of future options" phrasing, but cutting
against the warning-indicator reading her decision rule invites.

Codreanu also independently reproduces the decision rule itself, from a different
institutional vantage: "the method of operation and chosen targets did not fit the
pattern of a traditional cyber espionage campaign… the goal was not the extraction of
data for conventional espionage but rather the pre-positioning… to prepare for possible
future acts of sabotage." **Two independent statements of the same criterion strengthen
it; the negative case constrains what it licenses.**

**★★ A rival hypothesis the paper must test, not assume away.** Braccia (2025) argues
grey-zone operations "target strategically significant systems while **carefully
calibrating effects to remain below use-of-force thresholds established in international
law**. Rather than causing immediate, catastrophic damage that might trigger Article
5-type responses, these operations focus on persistent access, intelligence gathering,
and pre-positioning for potential future activation."

If pre-positioning is *designed* to stay below response thresholds, then avoiding
legibility is the objective. The actor is not communicating resolve; it is acquiring
options without triggering reaction. Two hypotheses follow:

- **H1 — signal degradation.** Pre-positioning once signalled intent; falling
  persistence cost erodes the costly-signalling logic that made it legible.
- **H2 — deliberate non-signal.** It never signalled. Sub-threshold calibration is the
  design goal, and Guttieri's (2025) reading is a target state inferring intent from an
  act engineered to avoid conveying it.

**The corpus contains explicit advocates for both.** Dimitrov and Andreev (2025) state
H1 directly: Volt Typhoon reflects "China's increasing reliance on the **prepositioning
of cyber assets in U.S. critical infrastructure as a means of deterrence and coercion**…
not merely intelligence gathering missions, but pre-emptive measures designed to embed
China's cyber capabilities into critical infrastructure, ensuring its influence in times
of crisis."

This is a documented scholarly disagreement, not an analytical construct — which is a
stronger position from which to write than an invented gap.

It is worth noting that the H1 case is weaker than its advocates allow. Dimitrov and
Andreev concede that at Guam "**forensic investigations did not reveal immediate
sabotage**," and that the intrusions "pointed to intelligence gathering and strategic
mapping" — evidence consistent with the espionage reading they reject.

**The three-case evidence is arguably more consistent with H2**: prolonged non-use,
absence of sanctions, and effects calibrated below Article 5. H2 also explains Braccia's
observation that "the deliberate obfuscation creates sufficient doubt to avoid immediate
consequences."

**This is the study's central empirical question, and the honest position is that it is
open.** H1 and H2 make divergent predictions about the effect of autonomy: under H1,
autonomy degrades an existing channel; under H2, autonomy simply scales option
acquisition, and no signalling channel is lost because none existed. Discriminating
between them is what the research design in §8 is for.

**Unresolved.** Whether pre-positioning is *intended* as a signal, or merely *read*
as one, is not settled by any paper in the corpus. Nor is the question of what happens
when the signal is denied by its putative sender — now documented from three
independent sources (Singh et al., 2025; Codreanu, 2025, quoting PRC MFA spokesperson
Lin Jian dismissing the allegations as "disinformation").

**Synthesis.** Guttieri answers the RQ's second clause more directly than any other
corpus paper — but answers it for a world of human-paced operations.

### Theme 3 — AI autonomy: capability without strategy

**The debate.** The corpus contains an enormous body of work on machine learning for
cyber defence — approximately 80 of 105 papers, spanning federated learning,
explainable anomaly detection, and threat-intelligence pipelines. Collectively these
establish that **defensive automation is being built at scale**. What they do not do is
theorise its strategic consequences.

**The one bridge.** Butt & Ulina (2026), §7.1, is the only fully-extracted paper
connecting autonomy to offensive operations:

> "While fully autonomous offensive cyber weapons are still largely theoretical, AI is
> being used to aid in reconnaissance, vulnerability discovery, phishing, malware
> development, and the adaptation of cyber exploits. As these abilities develop, any
> future system could recognize targets, determine attack routes, and conduct portions
> of an operation without human participation."

**The bloc's implicit theory.** The ~80 technical papers share an unargued premise: a
speed mismatch between machine-paced attack and human-paced defence. Ajax (2026) states
it plainly — "modern cyberattacks are increasingly automated and occur at speeds that
exceed human response capabilities" — and every architecture reviewed nonetheless retains
a human oversight layer, conceding that "full autonomy… introduces important risks,
particularly in areas requiring high accountability and human judgment."

**A caution about the bloc as evidence.** These papers cannot be cited as an
undifferentiated body. Three were read in full and they span the full quality range:
Yigit et al. (2025) in *Sensors*, from an established group, is credible; Kabir et al.
(2026) supplies usable dwell-time data but reports irreconcilable incident counts; Ajax
(2026) has no venue, no affiliation, no empirical content, and a reference list
containing papers on neural machine translation, fisheries certification and mindfulness
in the chemical industry — none related to its subject. **The bloc establishes direction
of effort, not consensus, and any use of it requires per-paper quality assessment.**

An attempt to quantify the bloc by full-text search was abandoned: Drive's matching
returned ~68 of 105 papers for `federated learning`, including Maschmeyer's subversion
article. Counts derived that way would be fabricated, and none appear in this paper.

**Strength of evidence.** Weak. The claim is asserted, sourced to OpenAI (2024) and
Schneier (2023), in a very new and low-ranked journal. Its value is that it is a
*conservative* estimate from a source with no incentive to be conservative: as of 2026,
autonomy operates at the level of sub-task assistance, not end-to-end operation.

**Unresolved.** Everything that matters for the RQ. No corpus paper offers a rate of
change, a threshold, or a mechanism linking autonomy to strategic stability.

**Synthesis.** The corpus establishes that autonomy is arriving and that it is not yet
autonomous in the strategically decisive sense. It offers no theory of what happens
when it is.

### Theme 4 — Deterrence, denial, and the security dilemma

Guttieri (2025) invokes Buchanan's **cybersecurity dilemma**, "an extension of the
traditional security dilemma in which a state's efforts to secure itself provoke
escalation from others" — the offence–defence mechanism under another name. Her
policy conclusion favours denial: "Deterrence by punishment is difficult to execute
when adversaries can exploit ambiguity."

She also reports Cunningham (2022) on China's use of cyber as a stand-in for nuclear
escalation, "leveraging them for signaling and coercion," and concludes: "Rather than
deterring escalation, China's use of cyber operations appears designed to shape
conditions for conflict."

Crucially, she identifies a **destabilisation mechanism**: entanglement across cyber,
space and nuclear systems "undermines their reliability as controlled instruments of
deterrence or coercion," such that "even a limited cyberattack could inadvertently
disrupt critical infrastructure and escalate tensions far beyond its intended scope."

**Synthesis.** This supplies the destabiliser half of the RQ — but again, without AI.

---

## 4. Research Gap

### 4.1 The core gap, evidenced — and its correct scope

**Statement of the gap.** *The intersection of AI autonomy and the offence–defence
balance has been identified as a research direction within the literature, and remains
uninvestigated — including by the author who identified it.*

An earlier draft of this paper claimed that **no** corpus paper connects AI autonomy to
the offence–defence balance. **Extraction 09 falsified that claim and it has been
withdrawn.** Melella's doctoral dissertation uses `offense-defense`/`offence-defence`
21 times, devotes Chapter I §4 to "Offence-Defence Balance in Cyberspace," engages AI
across a dedicated chapter on the NATO Locked Shields exercise, and states directly:

> "**The advancement of technologies, particularly artificial intelligence, is changing
> the landscape of cyberspace. Studying how these emerging technologies affect the
> offensive-defensive balance could reveal new dynamics and challenges.**"

He adds a second observation that bears directly on this paper's framing:

> "An under-explored area is **how actors perceive the offensive-defensive balance and
> how these perceptions influence their policy and strategy decisions.**"

**The gap survives, in a more precise and better-warranted form.** Melella *names* the
intersection as future research; he does not investigate it. His dependent variable is
**coordination**, not the balance. His AI chapter develops an ML-based IDS dataset for
an exercise — defensive tooling, not strategic consequence. The offence–defence material
is literature review, the AI material is dataset engineering, and the two are never
joined analytically.

This is a weaker claim about novelty and a **stronger claim about warrant**: an
independent doctoral researcher in security studies, working the same terrain, arrived
at the same gap. That is better evidence that the question matters than an absence of
mentions could ever be. It also means the paper must be positioned as *answering a
recognised open question*, not as discovering an unnoticed one — a distinction reviewers
care about.

**The remaining eight extractions do sustain the pattern.** Term counts:

| Paper | Theorises strategy | Engages AI autonomy |
|---|---|---|
| Maschmeyer (2023) | ✓✓ | 0 mentions |
| Singh et al. (2025) | ✓ | 0 mentions |
| Guttieri (2025) | ✓✓ | 0 mentions |
| Butt & Ulina (2026) | ✗ | ✓ |

**Among these, the papers that theorise cyber strategy do not engage AI, and the papers
that engage AI do not theorise.** The pattern holds bilaterally: Yigit et al. (2025) —
the corpus's substantive agentic-AI paper, 25 mentions, from an established research
group — contains **zero** occurrences of `Volt Typhoon`, `offense-defense`, or
`deterrence`. Kabir et al. (2026), the only corpus item returned by both the
`Volt Typhoon` and `agentic` searches, mentions `agentic` once, in a bibliography entry.

Corpus-wide triage: of 105 papers, only 5 contain `agentic` and 5 return on
`offense-defense balance` — of which verification showed at least one false positive
(Singh et al., 2025, contains zero occurrences).

### 4.2 Conceptual gap
No corpus paper defines the *unit* in which an offence–defence shift would be
measured for cyber. Maschmeyer (2023) argues the concept may not travel to cyber at
all. Without a defined dependent variable, "shift in the balance" is not yet a
researchable proposition.

### 4.3 Theoretical gap

The first draft of this paper argued that Guttieri's (2025) reading of pre-positioning
rests on an unexamined costly-signalling premise — persistence requires "technical
competence and **strategic patience**" — and that AI autonomy would erode it.

**Two subsequent extractions require that claim to be restated, and strengthen it.**

**First, a cost tension inside the corpus.** Sullivan (2025), writing in the *same
issue of the same journal* as Guttieri, asserts the opposite baseline: cyber operations
are conducted "inexpensively," most do "not" require significant investment, and "the
low cost of cyber operations extends far beyond the financial realm." Two Army Cyber
Institute authors, one issue, incompatible cost premises.

The tension resolves by disaggregating cost. Sullivan addresses the **cost of entry**;
Guttieri addresses the **cost of undetected multi-year persistence in hardened
infrastructure**. The signalling inference rests on the second. Pre-positioning signals
intent not because intrusion is hard, but because *staying* is. The variable AI
autonomy threatens is therefore the cost of *sustained, undetected presence at scale* —
a narrower and more defensible claim than the first draft made.

**Second, and more consequentially: the signalling function is already failing.**
Baram (2026) codes Volt Typhoon as a **Type 3** event — "a shared advisory with pooled
IoCs and defensive guidance… **No alliance-led endorsement or sanctions package
followed**." The paradigmatic pre-positioning case drew the weakest available form of
collective response. Baram identifies the mechanism: joint technical advisories cluster
in "China-related cases focused on stealthy access and pre-positioning," and their
"primary audience here is **network defenders, not only state elites**."

A coercive signal must reach political decision-makers to function. Pre-positioning is
being routed to system administrators.

**★ The response asymmetry.** Salt Typhoon — espionage against telecom metadata and
law-enforcement surveillance systems — drew "sanctions imposed by the U.S. Treasury on
PRC-linked cyber entities" (Urbanczyk et al., 2025; Treasury press release JY2792).
Volt Typhoon — pre-positioning for disruption of water, energy, communications and
transport — drew a technical advisory and, in Baram's (2026) words, "no alliance-led
endorsement or sanctions package."

Same adversary, same period, same target state. **The campaign that stole data was
punished; the campaign pre-positioned for sabotage was not.** On any strategic reading
the severity ordering is inverted. State response tracks **legibility and precedent**,
not gravity — which is exactly what a degraded signalling channel would predict.

**The corpus therefore documents three independent failure modes:**
1. **Non-reception** — operations "lack sufficient political salience to activate
   political institutions" (Sullivan, 2025).
2. **Denial** — the putative sender disowns the signal; the PRC calls Volt Typhoon a US
   fabrication and counter-accuses over the MARBLE toolkit (Singh et al., 2025).
3. **Misrouting** — response is technical, not diplomatic (Baram, 2026, *with data*).

**The gap, restated.** The literature contains a sharp interpretive claim about what
pre-positioning *means* (Guttieri, 2025) and empirical evidence about how states
actually *respond* to it (Baram, 2026) — and these do not match. **No paper reconciles
them, and none asks what AI autonomy does to a signalling mechanism that is already
failing.**

### 4.4 Empirical gap
The corpus contains no dataset on autonomy in operational cyber campaigns, no measured
time-series of dwell time or persistence cost, and no coding of pre-positioning
incidents by intelligence yield versus operational leverage — despite Guttieri
supplying exactly the criterion such a coding would require.

### 4.5 Methodological gap
**One** of sixteen fully-extracted papers tests propositions against a coded population:
Baram (2026), using the European Repository of Cyber Incidents across twenty joint
attribution cases. Every other paper is a review, a doctrinal analysis, an expert
assessment, or theory-building with illustrative cases; Maschmeyer (2023) labels his own
empirics a "plausibility probe."

The specific deficit is that **no paper codes pre-positioning incidents on the dimensions
its own theory identifies as decisive.** Guttieri (2025) supplies a decision rule —
intelligence yield against operational leverage — and applies it to a single case
rhetorically rather than systematically. Baram supplies the coding method but applies it
to attribution responses, not to the acts themselves. Joining the two is available and
undone.

### 4.6 Geographic gap
The corpus is overwhelmingly US-facing, with China as object rather than subject. Three
partial exceptions: Singh et al. (2025) record the PRC's own position; Codreanu (2025)
quotes the MFA denial; Pokorny (2026) supplies the 2024 SSF restructuring with
Chinese-character designations. **No corpus paper engages Chinese-language doctrinal
sources**, and Baram (2026) declares the equivalent bias in her own data — findings "map
Western-led joint public attributions rather than global practices." Any study built on
this corpus inherits that bias and must declare it.

### 4.7 Temporal gap
Butt & Ulina (2026) claim fully autonomous offensive operations are "still largely
theoretical." The corpus contains nothing on the *rate* at which that changes — no
projections, no thresholds, no indicators. It does, however, contain the instrument:
Yigit et al. (2025) identify CYBERSECEVAL 3 as benchmarking "autonomous offensive cyber
operations," and benchmark scores across model generations would constitute a
time-series. **No paper uses it for that purpose.**

### 4.8 Policy gap
Guttieri (2025) argues for deterrence by denial. Butt & Ulina (2026) offer a
recommendations table. Neither addresses how attribution, signalling, or escalation
management function when operations are machine-paced.

---

## 5. Introduction (draft)

**Strategic background.** In May 2023, US authorities attributed to Chinese
state-sponsored actors a campaign, designated Volt Typhoon, that had established
persistent access in American critical infrastructure using living-off-the-land
techniques (Guttieri, 2025; Butt & Ulina, 2026; Singh, Jash & Nanjappa, 2025). What
distinguished the campaign was not its technical sophistication but its apparent
purposelessness by the standards of espionage. As General Paul Nakasone observed,
there is "absolutely no intelligence to be gathered by putting malicious code in
[critical infrastructure] networks" (quoted in Guttieri, 2025).

**Problem statement.** Pre-positioning is observationally ambiguous: the same implant
serves collection, preparation, and coercion. Guttieri (2025) offers a resolution —
persistent access that yields little intelligence but much leverage "likely reflects
preparation for conflict." This inference works because persistence is costly: it
requires, in her words, "technical competence and strategic patience."

Concurrently, AI systems are acquiring the capacity to conduct portions of cyber
operations without human participation. Butt & Ulina (2026) place present capability
at sub-task assistance — reconnaissance, vulnerability discovery, exploit adaptation —
while noting that "fully autonomous offensive cyber weapons are still largely
theoretical."

Yet states do not appear to *act* as though pre-positioning carries this meaning.
Baram (2026), coding twenty joint public attribution cases from the European Repository
of Cyber Incidents, finds that Volt Typhoon drew only a joint technical advisory: "No
alliance-led endorsement or sanctions package followed." Such advisories cluster in
cases of "stealthy access and pre-positioning," and their "primary audience here is
network defenders, not only state elites." Sullivan (2025) supplies the reason:
operations of this kind "lurk in the shadows," lacking "sufficient political salience
to activate political institutions." Singh, Jash and Nanjappa (2025) record a third
obstacle — the PRC denies the campaign outright and counter-accuses.

**There is thus a gap between what pre-positioning is held to mean and how states
respond to it.** Guttieri establishes the interpretation; Baram shows the response does
not follow. This paper argues that the discrepancy is explained by the erosion of the
costly-signalling logic on which the interpretation depends — and that AI autonomy,
by lowering the cost of sustained undetected presence, will widen it further. The
same observable act will convey progressively less about intent, precisely as the
volume of such observations rises. This is not a technical problem but a problem of
strategic interpretation.

**Research question.** *How fast and how far will AI/agentic autonomy shift the
offence–defence balance, and when does pre-positioning itself constitute a strategic
signal or a destabiliser?*

**Objectives.**
1. Establish how the literature currently distinguishes pre-positioning-as-espionage
   from pre-positioning-as-signal.
2. Identify the cost assumptions on which that distinction depends.
3. Assess the present state and trajectory of operational cyber autonomy.
4. Theorise the consequences for signalling, escalation, and stability when
   persistence cost falls.
5. Derive indicators allowing analysts to detect the transition.

**Significance.** Academically, the study connects two literatures that the corpus
demonstrates are unconnected. For policy, it bears on whether pre-positioning should
be read as warning — a judgement that, on current doctrine, could trigger escalatory
response to what may be automated background activity.

**Scope and delimitations.** The study addresses state and state-sponsored operations
against critical infrastructure. It does not address cybercrime, information
operations, or lethal autonomous weapons except where they bear on the argument. It
treats the 2023–2026 period as its empirical focus.

**Structure.** [Standard.]

---

## 6. Findings Synthesis

**Established.** Cyber competition is continuous, not episodic (Guttieri, 2025; Singh
et al., 2025). Critical infrastructure is the contested object. Pre-positioning in US
infrastructure occurred and was officially attributed (all three post-2023 papers).
Defensive automation is being built at scale (~80 technical corpus papers).

**Contested.** Whether offence–defence theory applies to cyber (Maschmeyer, 2023,
against; Butt & Ulina, 2026, implicitly for). What Volt Typhoon signifies (Guttieri,
2025, versus the PRC position reported by Singh et al., 2025). Whether offence
currently dominates.

**Emerging.** AI-assisted offensive tooling (Butt & Ulina, 2026). Resilience reframed
as operational capability rather than IT function (Guttieri, 2025). Attribution as a
signalling instrument in its own right.

**Insufficient evidence.** The rate of autonomy diffusion. Any measurement of the
offence–defence balance. The cost structure of persistent access. Adversary intent
behind pre-positioning. Chinese doctrinal reasoning.

**A finding that constrains the whole argument.** Pre-positioning has twice been
followed by prolonged non-use — Russia since 2018, China since 2023 (Codreanu, 2025).
The corpus contains **no case of pre-positioning followed by attack.** Every
inference in the literature about what pre-positioning portends therefore rests on
zero positive instances. This should be stated plainly in the paper: it is the single
largest evidentiary weakness in the field, and acknowledging it is more defensible than
writing around it.

**Implications.** Two risks, running in opposite directions, and the corpus supports
both.

*Over-reading.* If Guttieri's (2025) decision rule is doctrine's operative heuristic
and autonomy erodes its cost premise, the risk is **misattributed intent at scale** —
reading automated persistence as deliberate strategic warning. Given Guttieri's own
entanglement argument, that misreading is escalatory.

*Under-reading.* Baram's (2026) data shows the current response pattern is already the
opposite: Volt Typhoon drew a technical advisory and nothing more. If genuine
strategic preparation is routinely processed as a network-defence matter, the failure
is not escalation but **warning failure**.

These are not alternatives to choose between; they are the two ways a degraded signal
fails. **Signal degradation, not offence-dominance, is the mechanism by which AI
autonomy destabilises** — and this reframing is what the corpus can actually support.

---

## 7. Theoretical Framework (recommended)

The framework must do three things the corpus has not: specify a dependent variable that
is measurable, accommodate a balance that is dyad-conditional rather than fixed, and
discriminate between two live hypotheses about what pre-positioning is.

**Primary: costly signalling within a security-dilemma frame.** Guttieri's (2025)
invocation of Buchanan's cybersecurity dilemma, and her grounding of the signalling
inference in "strategic patience," make this the corpus's implicit frame. Its analytical
value is that it makes *cost* the independent variable and *signal credibility* the
dependent one — converting an unmeasurable question about "the balance" into a tractable
one about the informational content of an observable act.

Critically, costly signalling also supplies the null: if the act is not costly, it
carries no information about intent. That is exactly what H2 asserts.

**The two hypotheses the framework must separate.**

- **H1 — signal degradation.** Pre-positioning signalled intent because persistence was
  expensive; autonomy erodes the cost and therefore the signal. Advocate:
  Dimitrov & Andreev (2025), who read pre-positioning as "deterrence and coercion."
- **H2 — deliberate non-signal.** Pre-positioning never signalled; sub-threshold
  calibration is the design objective and illegibility is a feature. Advocate:
  Braccia (2025), on operations "carefully calibrating effects to remain below
  use-of-force thresholds."

**Secondary: Cyber Persistence Theory** (Fischerkeller, Goldman & Harknett), via Guttieri
(2025) and Sullivan (2025). It supplies the "constant contact" baseline on which
pre-positioning is structural rather than anomalous — and therefore explains why signal
extraction from persistent access is hard in principle, not merely in practice.

**Scope condition, from Willett (2022): the balance is dyad-conditional.** Because "a
cyber conflict between Russia and a state with weaker cyber security than Ukraine… would
perhaps see a different balance between offence and defence," the framework must index
findings to defender capability rather than treating the balance as a global property.
The practical consequence is that the study's claims are claims about *pairings*, and its
distributional prediction is that autonomy widens the gap between well- and
poorly-resourced defenders rather than shifting one aggregate balance.

**Rival to be engaged, not assumed away: Maschmeyer's (2023) subversion framework.** If
cyber operations are subversion rather than warfare, offence–defence framing is a
category error and the question must be reformulated in terms of structural exploitation.
This is the most likely ground for reviewer objection and should be met directly in the
literature review.

**Explicitly not recommended: offence–defence theory as the primary frame.** The corpus's
strongest theoretical voice rejects it (Maschmeyer, 2023); no corpus paper operationalises
it; and its canonical treatment (Slayton, 2017) is absent from the corpus entirely.
Adopting it as the primary lens would require defending a baseline the evidence does not
supply. Costly signalling asks a narrower question the evidence can actually answer.

---

## 8. Methodology (recommended)

**Design.** Theory-guided structured comparison of pre-positioning campaigns, with
process tracing on the interpretation of each campaign by target-state officials.
The dependent variable is *signal credibility*, not "the balance."

**Case selection.** A three-case design with variation on the outcome:

| Case | Pre-positioned | Used | Outcome / response |
|---|---|---|---|
| **Russia → US critical infrastructure (2018– )** | Yes | **No, 7+ years** | No response recorded |
| **Volt Typhoon (2023– )** | Yes | No to date | Type 3 advisory, no sanctions (Baram, 2026) |
| **Russia → Ukraine (2021–22)** | Yes | **Yes (Industroyer2, Apr 2022)** | **Attempt defeated by defence** (Willett, 2022) |

Three pre-positioning cases; one attempted use; **zero successful strategic effects.**
The Ukrainian case is indispensable — it is the only instance in the corpus where
pre-positioning was converted to attack, and the conversion failed: the malware
"would have shut off power for two million people had the attack succeeded," but
"no power outages in fact occurred" (Willett, 2022).

A fourth, control case is available: **Estonia 2007**, which Willett reads as threshold
discovery — Russia "probably learned what sorts of cyber attacks on a NATO state the
Alliance would not consider close to its threshold for triggering an Article 5
collective response." This is signalling by *probing* rather than by presence.

The Russian 2018 case (Codreanu, 2025, via Lonergan & Poznansky, 2025) is essential:
it is the corpus's only negative case and supplies the variation absent from every
fully-extracted paper. Within-family comparisons: Flax, Salt and Silk Typhoon
(Singh et al., 2025). Out-of-family contrast: Russian operations in Ukraine
(Guttieri, 2025).

**Data.** The **European Repository of Cyber Incidents (EuRepoC)**, used by Baram
(2026) and citable via Zettl-Schabath et al. (2025), supplies a structured incident
base and removes the need to build one. Supplemented by official attribution statements
and advisories, and by vendor threat reports **treated as interested evidence, not
neutral fact** — a caution the corpus itself warrants, given Butt & Ulina's (2026)
uncritical use of vendor trend data.

**Analytical framework.** A two-level coding scheme, following Baram's (2026)
typology-then-coding design:

*Level 1 — the act.* Code each campaign on Guttieri's (2025) two dimensions,
**intelligence yield** and **operational leverage**; a third, **estimated persistence
cost** (proxied by dwell time, tradecraft sophistication, and degree of automation); and
a fourth, **target contingency-specificity** — whether the compromised node's value is
tied to a named contingency (as with Guam and a Taiwan scenario; Dimitrov & Andreev,
2025) or is generic infrastructure. Contingency-specific targeting is stronger evidence
of intent than intelligence yield alone.

*Level 2 — the response.* Code the target state's reaction using Baram's (2026) four
modes of jointness, which distinguishes technical from diplomatic responses.

**Discriminating H1 from H2.** H1 predicts that the interpretation–response gap widens
over time as persistence cost falls. H2 predicts the gap is *constant* and tracks
threshold calibration rather than cost. Coding response mode against estimated
persistence cost across the case set distinguishes them.

**The dependent variable is the gap between levels** — whether an act coded as
high-leverage/low-intelligence (i.e. reading as strategic signal) draws a
correspondingly political response, or is routed to network defenders. The theoretical
prediction: as persistence cost falls, that gap widens.

**Methods.** Qualitative content analysis of attribution statements; structured
comparison; process tracing of interpretation.

**Limitations.** Persistence cost is not directly observable and must be proxied.
Adversary intent is inaccessible. The corpus is US-centric and contains no
Chinese-language sources. Autonomy claims rest on a single weak corpus source and will
require supplementary literature.

---

## 9. Research Contribution

**To scholarship.** Three contributions.

*First*, it investigates an intersection that the literature has **named but not
studied**. Melella's dissertation proposes that "studying how these emerging technologies
affect the offensive-defensive balance could reveal new dynamics and challenges," then
studies coordination instead. **Fifteen of the sixteen fully-extracted papers sustain the
disconnect bilaterally** — strategists (Maschmeyer, Guttieri, Sullivan, Baram, Willett,
Codreanu) do not mention AI; AI researchers (Yigit et al., Kabir et al.) do not mention
deterrence, signalling, or the balance.

*Second*, it identifies and interrogates the **cost premise** in the leading account of
pre-positioning-as-signal, a premise Guttieri (2025) states but does not examine, and
which Sullivan (2025) implicitly contradicts from within the same journal issue.

*Third*, it reconciles an unnoticed **discrepancy between interpretation and response**:
Guttieri (2025) establishes that pre-positioning reads as preparation for conflict, while
Baram (2026) demonstrates empirically that states do not respond as though it does. The
Volt/Salt asymmetry sharpens this — the espionage campaign drew sanctions, the
pre-positioning campaign drew a technical advisory. No existing work joins these findings.

*Fourth*, it records an evidentiary fact the field has not confronted: **there is no
documented case of pre-positioning followed by successful strategic effect.** Three cases,
one attempted use, defeated. Every claim in this literature about what pre-positioning
portends rests on zero positive instances.

**Why it matters academically.** It reframes the offence–defence question in terms the
literature can actually sustain. Rather than asking whether AI favours attack or
defence — which the corpus offers no means of measuring — it asks what AI does to the
*informational content of observable acts*. That is answerable.

**Why it matters for policy.** Doctrine treats infrastructure pre-positioning as
strategic warning. The two hypotheses carry opposite policy risks, and both are live.

Under **H1**, if the inference rests on cost and cost is falling, the warning function
degrades precisely as the volume of detections rises. Combined with Guttieri's
entanglement argument — that limited cyber effects can "escalate tensions far beyond
intended scope" — the risk is **escalation on a misread signal**.

Under **H2**, the graver risk runs the other way. If pre-positioning is calibrated to
stay below response thresholds and states duly respond with technical advisories, then
genuine preparation is being processed as a network-defence matter. The risk is
**warning failure**, and the Volt/Salt asymmetry suggests it is already occurring.

Distinguishing them is therefore not an academic refinement. It determines whether the
appropriate policy correction is restraint or escalation of response.

---

## 10. References (corpus papers cited)

Pokorny, L. (2026). *Offensive cyber and information warfare strategies targeting
People's Republic of China military C4ISR systems: A qualitative analysis*. ICL
Institute. https://doi.org/10.5281/zenodo.19234589

Dimitrov, D., & Andreev, E. (2025). China's strategic competition in cyberspace: Volt
Typhoon and Salt Typhoon as a projection of power, a more aggressive posture and a future
beyond espionage. In *Environment. Technology. Resources* (Vol. 2, pp. 115–122). RTU
Press. https://doi.org/10.17770/etr2025vol2.8618

Braccia, C. (2025). *From Vietnam to Volt Typhoon: How the PRC refined grey zone cyber
tactics before targeting the West* [Preprint]. Authorea.
https://doi.org/10.22541/au.175390612.20874865/v1

Willett, M. (2022). The cyber dimension of the Russia–Ukraine war. *Survival, 64*(5),
7–26. https://doi.org/10.1080/00396338.2022.2126193

Codreanu, C. (2025). *Typhoons, bears, and pandas: Latest major cyber espionage
campaigns* (Policy Paper No. 43). Romanian Diplomatic Institute.

Butt, M. S., & Ulina, N. S. (2026). Cyber warfare in the AI era: Emerging attack
trends, defensive strategies and policy challenges, 2022–2026. *The Critical Review of
Social Sciences Studies, 4*(1), 6176–6192.

Guttieri, K. (2025). Fighting through disruption: Reframing cyber resilience for power
projection and strategic credibility. *The Cyber Defense Review, 10*(1), 93–114.
https://doi.org/10.55682/cdr/egvf-mkys

Baram, G. (2026). Re-ordering accountability: The significance of joint public
attribution in a fragmented cyberspace. *Contemporary Security Policy*. Advance online
publication. https://doi.org/10.1080/13523260.2026.2662220

Melella, C. (n.d.). *Coordination in offensive and defensive cyberoperations:
Dissecting China, Russia, and NATO's approaches in cyberspace* [Doctoral dissertation,
Università degli Studi di Genova]. *Year requires confirmation.*

Yigit, Y., Ferrag, M. A., Ghanem, M. C., Sarker, I. H., Maglaras, L. A., Chrysoulas, C.,
Moradpoor, N., Tihanyi, N., & Janicke, H. (2025). Generative AI and LLMs for critical
infrastructure protection: Evaluation benchmarks, agentic AI, challenges, and
opportunities. *Sensors, 25*(6), 1666. https://doi.org/10.3390/s25061666

Kabir, M. H., Siddike, M. A. M., Razib, M. D., & Uddin, M. R. (2026). A national-scale
AI-driven cyber defense framework for protecting U.S. critical infrastructure against
nation-state attacks. *Journal of Computer Science and Technology Studies, 8*(6), 94–107.

Maschmeyer, L. (2023). Subversion, cyber operations, and reverse structural power in
world politics. *European Journal of International Relations, 29*(1), 79–103.
https://doi.org/10.1177/13540661221117051

Singh, N. K., Jash, A., & Nanjappa, Y. (2025). Navigating the nexus: Geopolitical,
international relations and technical dimensions of US-China cyber strategic
competition. *Cogent Social Sciences, 11*(1), 2499171.
https://doi.org/10.1080/23311886.2025.2499171

Sullivan, S. (2025). Toward clarity in cyber's "fog of law". *The Cyber Defense
Review, 10*(1), 59–71. https://doi.org/10.55682/cdr/v8z4-sxne

### Works cited *within* corpus papers but NOT in the corpus (supplementary — must be obtained)

Buchanan, B. *The Cybersecurity Dilemma*. — via Guttieri (2025)
Cunningham, F. (2022). — via Guttieri (2025)
Fischerkeller, M., Goldman, E., & Harknett, R. *Cyber Persistence Theory*. — via Guttieri (2025)
Gartzke, E., & Lindsay, J. (2015). — via Maschmeyer (2023)
Iasiello, E. (2023). Cyber attribution. *IEEE Security & Privacy, 21*(2). — via Butt & Ulina (2026)
Libicki, M. (2009). *Cyberdeterrence and Cyberwar*. — via Maschmeyer (2023)
Schneider, J. (2019). — via Maschmeyer (2023)
**Slayton, R. (2017). What is the cyber offense-defense balance? *International Security, 41*(3), 72–109.** — via Maschmeyer (2023). *Highest priority acquisition.*
**Lindsay, J. R. (2013).** on cyber power and conventional military power — via Pokorny (2026). *Second priority: currently the corpus's only directional claim, and unverified.*
Healey, J. (2019). on forward operations and miscalculation — via Pokorny (2026)
**Lonergan, S., & Poznansky, M. (2025).** on Russian pre-positioning and non-use — via Codreanu (2025). *Supports the negative case; verify in original.*
Smeets, M. (2022). *No Shortcuts*. Hurst. — via Maschmeyer (2023), Singh et al. (2025)

---

## Status and next steps

**Completed:** 17 of 105 papers extracted (14 deep, 2 condensed, plus a bloc
characterisation of the ~80 technical papers from a sample of three); 105 triaged.

**Outstanding:** Two low-yield Tier A items (a student term paper applying the Diamond
Model; *Law, Conflict and Hybrid Warfare*) and the *CDR* volume container, whose two
relevant articles (Guttieri, Sullivan) are already extracted and the 4 Tier B autonomy papers, plus bloc
characterisation of the ~80 technical papers.

**Principal risk to publication:** the corpus lacks the canonical offence–defence
cyber literature, above all Slayton (2017). Section 7 mitigates this by declining to
adopt offence–defence theory as the primary frame — but a reviewer will still expect
the paper to demonstrate awareness of it.
