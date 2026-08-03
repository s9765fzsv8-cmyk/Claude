# The Price of Patience: AI Autonomy, Costly Signalling and the Strategic Meaning of Cyber Pre-Positioning

## Abstract

When a foreign state plants software inside another country's power grid or water system and leaves it there, analysts usually read this as a warning sign. They assume the state is preparing for war. That reading rests on a simple idea: staying hidden inside a network for years is hard and expensive, so anyone who bothers must be serious. This paper tests that idea and asks what happens to it as artificial intelligence takes over more of the work.

Sixteen studies were examined. Three things stand out.

First, what analysts say and what governments do are not the same. Volt Typhoon, the Chinese campaign found inside American infrastructure in 2023, is described as preparation for conflict. Yet the United States answered it with a technical advisory and no punishment. A Chinese spying campaign in the same period, Salt Typhoon, drew financial sanctions. The lesser act was punished and the graver one was not.

Second, there is no case on record where pre-positioning led to a successful attack. There are three cases of it happening, one attempt that failed, and nothing else. Everything the field says about what pre-positioning means rests on no successful examples.

Third, whether attack or defence has the advantage in cyberspace depends on who is fighting whom, not on the technology itself. So the useful question is not whether AI helps attackers. It is which side is better placed to use it.

The paper sets out two rival explanations and a way to test them. Either AI is weakening a warning system that used to work, or pre-positioning never worked as a warning and was always designed to stay quiet. The paper does not decide between them. It shows that the question is open, that the field has noticed it without studying it, and that the evidence so far points toward the second.

**Keywords:** offence-defence balance; cyber pre-positioning; costly signalling; artificial intelligence; Volt Typhoon; critical infrastructure; escalation

---

## 1. Introduction

### 1.1 Background

In May 2023 the United States and its Five Eyes partners named China as the source of a campaign they called Volt Typhoon. Chinese operators had been living inside American critical infrastructure, using the target's own system tools so that nothing looked out of place.[^1] They were found in energy, water, communications and transport networks, and in systems supporting United States military operations on Guam, the main American base for any Pacific crisis.[^2]

The odd thing about Volt Typhoon was not how clever it was. It was that the operation made no sense as spying. General Paul Nakasone put it bluntly. There is, he said, "absolutely no intelligence to be gathered by putting malicious code in [critical infrastructure] networks."[^3] American officials said the campaign "did not fit the pattern of a traditional cyber espionage campaign."[^4]

At the same time, artificial intelligence began taking over parts of cyber operations. Butt and Ulina find that AI now helps with scouting targets, finding weaknesses and adjusting attack tools, but that fully automatic attack systems are still "largely theoretical." Yigit and colleagues define an agentic AI system as one "capable of autonomous action, real-time adaptation, and multi-step problem-solving aligned with specific contexts and objectives."[^5]

### 1.2 The problem

Guttieri gives analysts a rule for reading these intrusions.[^6] If someone holds access that produces little useful intelligence but would give them great power in a crisis, that access "likely reflects preparation for conflict."

The rule works because staying hidden is difficult. In her words it takes "technical competence and strategic patience." This is what scholars call costly signalling. An act tells you something about intentions precisely because it is expensive to carry out. Cheap talk proves nothing. Expensive acts prove something.

But governments do not behave as though they believe this. Baram studied twenty cases where two or more states publicly blamed the same attacker.[^7] For Volt Typhoon, she found, the response was a shared technical advisory and nothing more. "No alliance-led endorsement or sanctions package followed." Advisories like this cluster around quiet intrusion cases, and their "primary audience here is network defenders, not only state elites."

Sullivan explains why.[^8] These operations "lurk in the shadows." They lack "sufficient political salience to activate political institutions to punish the perpetrator." Nobody sees a burning building, so nobody demands a response. Singh, Jash, and Nanjappa add a third problem.[^9] China denies the campaign happened and accuses the United States of the same thing.

So there is a gap. Analysts say pre-positioning is a warning. Governments do not treat it as one. Nobody has put these two findings side by side, and nobody has asked what AI does to a warning system that is already this weak.

### 1.3 Research question

How fast and how far will AI and machine autonomy shift the balance between attack and defence, and when does pre-positioning count as a strategic signal or as a cause of instability?

### 1.4 Objectives

1. To set out how the literature tells spying apart from signalling.
2. To find the assumptions about cost that this distinction depends on.
3. To assess where machine autonomy stands now and where it is heading.
4. To work out what happens to warning, escalation and stability if staying hidden becomes cheap.
5. To suggest signs by which analysts could spot that change.

### 1.5 Why it matters

For scholarship, the value is in joining two literatures that have grown up apart. Melella writes that "studying how these emerging technologies affect the offensive-defensive balance could reveal new dynamics and challenges," and then studies something else.[^10]

For policy, the value is more direct. Governments treat foreign implants in infrastructure as a warning of coming attack. If that reading is wrong, states may either punish activity that means nothing, or ignore preparation that means a great deal.

### 1.6 Scope and limits

This study looks at states and state-backed groups attacking critical infrastructure. It does not cover ordinary crime, propaganda campaigns or armed robots, except where these touch the argument. The period covered runs from 2018 to 2026.

Three limits should be admitted now. The sources are open, published material. They lean heavily towards the United States and its allies. No Chinese-language military writing is included. Quality also varies, and Section 2.1 says which sources are peer reviewed and which are not.

### 1.7 How the paper is arranged

Section 2 reviews the literature by theme. Section 3 sets out the gap. Section 4 gives the theory and the two rival explanations. Section 5 proposes a research design. Section 6 sums up what is known and what is not. Section 7 states the contribution. Section 8 concludes.

---

## 2. Literature Review

### 2.1 The sources

Sixteen studies form the base of this review. Table 1 lists them with their venue, method and standing.

The standing column matters. Two of the sixteen have no named institution behind them and no peer review. One reports figures that contradict each other. These are used for the events they describe, not for the conclusions they draw.

**Table 1. Studies reviewed**

| Study | Venue | Method | Standing |
|---|---|---|---|
| Maschmeyer 2023 | European Journal of International Relations | Theory with one test case | Peer reviewed, ranked |
| Willett 2022 | Survival (IISS) | Expert assessment of the war in Ukraine | Peer reviewed, ranked |
| Baram 2026 | Contemporary Security Policy | Coding of twenty cases | Peer reviewed, ranked |
| Guttieri 2025 | The Cyber Defense Review | Argument with case studies | Peer reviewed |
| Sullivan 2025 | The Cyber Defense Review | Legal analysis | Peer reviewed |
| Yigit et al. 2025 | Sensors | Survey and benchmark review | Peer reviewed |
| Singh, Jash, and Nanjappa 2025 | Cogent Social Sciences | Comparative case study | Peer reviewed |
| Dimitrov and Andreev 2025 | Environment. Technology. Resources | Case analysis | Conference paper |
| Codreanu 2025 | Romanian Diplomatic Institute | Open-source analysis | Institute paper, not reviewed |
| Melella n.d. | University of Genoa | Doctoral thesis | Not reviewed; year unconfirmed |
| Butt and Ulina 2026 | Critical Review of Social Sciences Studies | Review of secondary sources | Unranked journal |
| Kabir et al. 2026 | Journal of Computer Science and Technology Studies | Framework and incident coding | Unranked; figures inconsistent |
| Pokorny 2026 | ICL Institute | Analysis of sixteen sources | Self-published |
| Braccia 2025 | Authorea | Grey zone analysis | Preprint, no institution |
| Urbanczyk et al. 2025 | TechRxiv | Case study | Preprint, not reviewed |
| Ferdaus et al. n.d. | SSRN | Survey chapter | Working paper |

### 2.2 Does the attack and defence balance even apply to cyberspace?

The old idea is simple. When attacking is easier than defending, wars become more likely. Applied to cyberspace, this produced a common belief that attackers hold the advantage.

Maschmeyer reports that belief and rejects it.[^11] The usual view, he writes, "attempts to explain this paradox militarily through offense-defense theory, diagnosing a strong offensive advantage for cyber weapons." But this theory "faces significant theoretical and empirical challenges." He supports the point by pointing to Gartzke and Lindsay, Libicki and Slayton.[^12] His own answer is that cyber operations are a form of subversion rather than warfare. They work by turning a country's strengths into weaknesses.

Three other positions appear, and they do not agree with each other.

Butt and Ulina say attackers are ahead.[^13] New tricks keep coming "on the offensive side, including AI-powered attacks, supply chain compromise, attacks on critical infrastructure, influence operations, deepfakes and that's where the defenders are behind." They state this rather than prove it, and their figures come from security companies that sell protection, without any discussion of that conflict of interest.

Pokorny reports the opposite view from Lindsay.[^14] On that account "the more technically sophisticated the target, the more difficult it is to achieve a decisive cyber effect, because sophisticated defenders are better able to detect and mitigate intrusions." The balance therefore "favors defense at the strategic level, even if individual tactical attacks may succeed." Two warnings apply here. Lindsay is not among the sources read for this study, so this is a second-hand account that needs checking. Pokorny's own work is self-published, rests on sixteen unclassified sources, and is written as a plan for attacking China, which makes it a statement of policy preference rather than neutral analysis.

Willett offers the only judgement based on watching an actual war.[^15] Writing for the International Institute for Strategic Studies about Russia and Ukraine, he describes "a sustained Russian campaign to hack into and disrupt Ukraine's critical national infrastructure, resulting in intense sparring between offence and defence, but with defence dominating most of the time, given its access to good intelligence and top-class cyber-security expertise."

He then adds a line that matters more than the finding. A war "between Russia and a state with weaker cyber security than Ukraine, or one between NATO and Russia (or China), would perhaps see a different balance between offence and defence."

The balance, in other words, is not a fixed property of the technology. It depends on who is facing whom. Ukraine held out because American and British agencies helped, and because Microsoft, Google and Cisco helped. Send the same Russian tools against a poorer defender and the result changes.

The evidence behind each position is thin in different ways. Maschmeyer argues well but tests his idea on one case, which he himself calls a plausibility probe. Butt and Ulina simply assert. Lindsay reaches this paper second-hand. Only Willett watched a war, and even he limits his judgement to August 2022 and to two evenly matched sides. His finding that Russia could not disable Ukrainian military systems fits Smeets on how hard states find it to build cyber forces, a work cited by Maschmeyer and by Singh, Jash, and Nanjappa.[^16]

No study reviewed here actually measures the balance. The standard treatment of the concept, Slayton, appears only inside Maschmeyer's bibliography.[^17]

The lesson for this paper is straightforward. Anyone asking how AI shifts the balance must first say what the balance was before. The literature does not tell us.

### 2.3 Is pre-positioning spying, preparation, or a message?

The same implant can serve three purposes. It can collect intelligence, prepare an attack, or send a warning. From the outside they look identical.

Guttieri takes this problem head on.[^18] Intruders who settle in, she writes, "maintain a portfolio of future options." They can choose among "escalating the attack, disrupting services, conducting surveillance, or withdrawing." Over time they "accumulate a form of latent power on the network."

Her rule for telling the cases apart comes from Nakasone and the analyst James Lewis. Together, she argues, their views "offer a strong interpretive signal: when persistent access offers low intelligence gain but high leverage, it likely reflects preparation for conflict."

Codreanu arrives at the same rule from a different place, working at the Romanian Diplomatic Institute with different sources.[^19] American officials held that the aim "was not the extraction of data for conventional espionage but rather the pre-positioning in key points of critical infrastructure to prepare for possible future acts of sabotage." Two independent statements of one rule make it stronger.

Two further studies disagree about what the rule allows us to conclude.

Dimitrov and Andreev treat pre-positioning as a form of pressure.[^20] Volt Typhoon, they argue, shows China's "increasing reliance on the prepositioning of cyber assets in U.S. critical infrastructure as a means of deterrence and coercion." These are not spying missions but "pre-emptive measures designed to embed China's cyber capabilities into critical infrastructure, ensuring its influence in times of crisis." Their own evidence sits awkwardly with this. They admit that at Guam "forensic investigations did not reveal immediate sabotage" and that the intrusions "pointed to intelligence gathering and strategic mapping." That is the spying explanation they set out to reject.

Braccia argues the opposite.[^21] Grey zone operations, he writes, "target strategically significant systems while carefully calibrating effects to remain below use-of-force thresholds established in international law." Rather than doing damage that might trigger a collective response, they "focus on persistent access, intelligence gathering, and pre-positioning for potential future activation."

If that is right, staying invisible is the whole point. The operator is not trying to send a message at all. This is a preprint with no institution behind it, so its factual claims should be taken from the government advisories it cites rather than from the preprint. The idea itself, drawn from wider work on grey zone conflict, is worth taking seriously.

Three problems with the signalling reading appear in the literature, each found independently.

**Nobody notices.** Sullivan observes that cyber operations "rarely possess sufficient political salience to activate political institutions to punish the perpetrator in any way that might provoke meaningful blowback." Campaigns such as Volt Typhoon and Salt Typhoon "lurk in the shadows, compromising entire populations while leaving little trace."[^22]

**The sender denies it.** Singh, Jash, and Nanjappa record that China's National Computer Virus Emergency Response Centre answered the accusation by accusing the United States of running a tool to erase digital traces, and that the Chinese foreign ministry complained about the "hyping up" of Volt Typhoon.[^23] Codreanu records the ministry spokesman calling the allegations disinformation.[^24]

**The message goes to the wrong people.** Baram classes the Volt Typhoon response as a joint technical advisory, noting that "no alliance-led endorsement or sanctions package followed," and that for advisories of this kind the "primary audience here is network defenders, not only state elites." A threat has to reach the people who make decisions.[^25] This one reached system administrators.

Urbanczyk and colleagues sharpen the point with a comparison.[^26] Salt Typhoon, which broke into telephone companies and reached police surveillance systems, produced "sanctions imposed by the U.S. Treasury on PRC-linked cyber entities." Same country, same period, same victim. Spying got sanctions. Planting weapons in the power grid got an advisory. By any strategic measure that ordering is backwards, since implants in water and electricity systems are worse than stolen call records. Governments seem to respond to what is easy to explain and what fits past practice, not to what is dangerous.

Codreanu records the one case where pre-positioning went nowhere.[^27] Drawing on Lonergan and Poznansky, he notes that in 2018 the United States accused Russia of getting inside nuclear, energy, aviation and water systems, and that "so far, however, Russia has not exploited these footholds to launch direct cyberattacks on the US." Seven years of holding access without using it.[^28] If access means an attack is coming, the attack can evidently stay away for a very long time.

Willett records the one case where pre-positioning turned into an attack.[^29] Russia had been "conducting reconnaissance of, and pre-positioning cyber capabilities on, certain Ukrainian energy and communications networks from at least March 2021." In April 2022 an intrusion into a large Ukrainian power facility was set to fire. "Ukrainian cyber security neutralised it." The malware "would have shut off power for two million people had the attack succeeded," but "no power outages in fact occurred." Malware aimed at gas plant safety systems was caught before use, and the FBI shut down a Russian network of hijacked routers before it could be turned on.

So the record holds three cases of pre-positioning, one attempt, and no success.

### 2.4 Machine autonomy, with no strategy attached

Butt and Ulina give the only account here that connects autonomy to attack.[^30] It is cautious. "While fully autonomous offensive cyber weapons are still largely theoretical, AI is being used to aid in reconnaissance, vulnerability discovery, phishing, malware development, and the adaptation of cyber exploits." In time, they suggest, systems "could recognize targets, determine attack routes, and conduct portions of an operation without human participation." The caution is what makes it useful. These authors have no reason to play down how fast things are moving.

Yigit and colleagues, writing from Edinburgh Napier University and the University of Liverpool, supply both the definition of agentic AI used here and a way of measuring it.[^31] The CYBERSECEVAL 3 benchmark, they note, tests "offensive security capabilities, such as automated social engineering, scaling manual offensive operations, and autonomous offensive strategies," and covers "autonomous offensive cyber operations." Scores from this benchmark across successive generations of models would give a real measurement of how fast autonomy is arriving, instead of guesswork. The authors also note limits, confirming earlier findings of "limitations in zero-shot LLMs for adversarial attack detection."

Two things stand out in this work. Autonomy appears almost entirely on the defensive side. Yigit and colleagues describe agentic systems as delivering "proactive defence and resilience in real time by autonomously learning, adapting, and orchestrating multi-step mitigation strategies." Kabir and colleagues likewise put automatic response inside a national defensive system.[^32]

Kabir and colleagues also supply two useful numbers, with a warning attached. Coding state intrusions from 2020 to 2024, they report an average of 197 days between break-in and discovery, and describe Volt Typhoon as lasting "up to 5 years," "pre-positioned for destructive action." They also report that "73.6% of events were first discovered by entities other than the victim organisation's security teams."

The warning is that their incident totals do not add up. The abstract claims 847 confirmed intrusions. The results section reports 89 confirmed attacks and 253 confirmed events. No explanation is offered. Those totals should not be quoted. The dwell time and discovery figures should be checked against independent industry reporting before use.

That discovery figure carries an implication worth noting. If most intrusions are found by outsiders rather than by the victim, then intruders survive partly because defenders cannot see them. Better automatic detection would make hiding harder, not easier. Autonomy might therefore raise the cost of persistence rather than lower it.

Fifteen of the sixteen studies do not link machine autonomy to the balance between attack and defence. Those writing about strategy, including Maschmeyer, Guttieri, Sullivan, Baram, Willett and Codreanu, never mention artificial intelligence. Those writing about artificial intelligence, including Yigit and Kabir with their colleagues, never mention deterrence, signalling or the balance.

### 2.5 Deterrence, denial and the security dilemma

Guttieri places pre-positioning inside Buchanan's cybersecurity dilemma, "an extension of the traditional security dilemma in which a state's efforts to secure itself provoke escalation from others." Her conclusion favours denial over punishment.[^33] "Deterrence by punishment is difficult to execute when adversaries can exploit ambiguity. In contrast, preventing adversaries from achieving their goals through resilience remains insufficiently emphasized."

She also shows how pre-positioning becomes dangerous. Drawing on Cunningham, she notes that China uses cyber, space and precision weapons "as stand-ins for nuclear escalation, leveraging them for signaling and coercion," and concludes that "rather than deterring escalation, China's use of cyber operations appears designed to shape conditions for conflict." But because cyber, space and nuclear systems are tangled together, this tangle "undermines their reliability as controlled instruments of deterrence or coercion." The result is that "even a limited cyberattack could inadvertently disrupt critical infrastructure and escalate tensions far beyond its intended scope."[^34]

Sullivan traces how American doctrine moved from deterrence to constant engagement, and what that did to communication between rivals.[^35] Deterrence "is reactive and punitive," while persistent engagement "is proactively preventive." Deterrence "is episodic in nature," while the new approach depends on "the continuous operations that it requires." Where deterrence rewarded keeping your intentions vague, constant contact "both facilitates and benefits from clarity over ambiguity."

Operations themselves start to carry meaning. As Sullivan puts it, "defend forward operations to dismantle specific foreign threats and not others signal to an adversary a sense of the types of most threatening or inappropriate cyber threats." He calls this tacit bargaining.

He also separates two kinds of blame. "Even when technical attribution is possible, political attribution rarely follows," because naming a government publicly "is subject to political considerations that may counsel against attribution."[^36] Knowing who did it and saying so are different decisions.

Willett records what is at stake.[^37] President Biden named a cyber breach as the most likely path to the United States finding itself in "a real shooting war" with a major power. NATO has said it would judge Article 5 case by case and "could consider an accumulation of minor attacks as crossing that threshold." Willett also notes that after the 2007 attacks on Estonia, Russia "probably learned what sorts of cyber attacks on a NATO state the Alliance would not consider close to its threshold." That is learning by testing, which is different from pre-positioning.

Sullivan and Pokorny point to the same missing piece.[^38] Sullivan describes a lasting fog of law around cyber operations. Pokorny notes that "a significant gap in the public literature concerns the precise rules of engagement governing forward operations, the potential for miscalculation, and the legal implications of continuously operating within the sovereign networks of other states."

### 2.6 Summary

The literature agrees that cyber competition never stops, that infrastructure is the prize, and that pre-positioning is different from spying. It disagrees about whether attack or defence has the advantage, about whether pre-positioning carries a message, and about whether these operations are cheap or expensive. It says nothing about how machine autonomy affects any of this.

---

## 3. The Research Gap

### 3.1 The gap

The meeting point of machine autonomy and the attack-defence balance has been named as a subject worth studying and has not been studied, including by the person who named it.

Melella gives a chapter section to the balance in cyberspace and a chapter to artificial intelligence in the NATO Locked Shields exercise.[^39] He writes that "the advancement of technologies, particularly artificial intelligence, is changing the landscape of cyberspace" and that "studying how these emerging technologies affect the offensive-defensive balance could reveal new dynamics and challenges." He adds that "an under-explored area is how actors perceive the offensive-defensive balance and how these perceptions influence their policy and strategy decisions."

Having named the subject, he studies coordination instead. His research question is about coordination, not the balance. His AI chapter builds a detection dataset for a training exercise. The two halves never meet.

This is good news for the present study. An independent researcher working the same ground reached the same question and wrote it down as needing work. That is stronger support than simply finding no mentions, and it means this paper answers a recognised question rather than claiming to have spotted something nobody saw.

### 3.2 Conceptual gap

No study says what unit a shift in the balance would be measured in. Maschmeyer doubts the concept applies to cyberspace at all.[^40] Without something to measure, a shift in the balance is not yet a question research can answer.

### 3.3 Theoretical gap

Guttieri reads pre-positioning as a warning because staying hidden takes patience.[^41] The act means something because it is expensive.

Sullivan, publishing in the same issue of the same journal, says the opposite.[^42] Cyber operations are carried out "inexpensively," most "do not" need serious investment, and "the low cost of cyber operations extends far beyond the financial realm." Two colleagues at one institution, in one issue, working from incompatible assumptions.

The disagreement dissolves if cost is split in two. Sullivan is talking about the cost of getting in. Guttieri is talking about the cost of staying in, undetected, for years, inside a defended network. The warning rests on the second, not the first. Pre-positioning means something not because breaking in is hard but because remaining unseen is hard. Neither author separates the two, and nobody asks what happens when the second cost falls.

### 3.4 Empirical gap

No study codes pre-positioning cases along the lines its own theory says matter. Guttieri offers a rule and applies it to one case in prose rather than through systematic coding.[^43] Baram has the coding method but applies it to how governments respond, not to what the intruders did.[^44] Joining the two is possible and has not been done. There is no record of how the cost of persistence has changed over time, and no dataset tracking autonomy in real campaigns.

### 3.5 Methodological gap

One study out of sixteen tests claims against a body of coded cases. Baram codes twenty attribution cases from the European Repository of Cyber Incidents.[^45] The rest are reviews, legal analyses, expert judgements or arguments illustrated by examples. Maschmeyer calls his own evidence a plausibility probe.[^46]

### 3.6 Geographic gap

The literature looks at China from the outside. Three partial exceptions exist. Singh, Jash, and Nanjappa record China's stated position.[^47] Codreanu quotes the ministry denial.[^48] Pokorny describes the 2024 reorganisation of the Strategic Support Force into an Information Support Force, an Aerospace Force and a Cyberspace Force.[^49] None uses Chinese-language military writing. Baram admits the same bias in her own data, noting that her findings "map Western-led joint public attributions rather than global practices." Any study built on these sources inherits that bias and should say so.[^50]

### 3.7 Time gap

Butt and Ulina say fully automatic attack systems remain theoretical.[^51] Nothing in the literature says how fast that will change. There are no forecasts, no thresholds and no warning signs. The measuring tool exists, though. Yigit and colleagues point to CYBERSECEVAL 3, which tests automatic attack capability, and results across model generations would show the trend.[^52] Nobody has used it that way.

### 3.8 Policy gap

Guttieri argues for defence by denial.[^53] Butt and Ulina offer a table of recommendations.[^54] Neither asks how blame, warning and escalation control work when machines move faster than the people supposed to be in charge.

---

## 4. Theoretical Framework

### 4.1 What the framework has to do

It has to give something measurable to study. It has to allow the balance to differ from one pairing of rivals to another. And it has to separate two live explanations of what pre-positioning actually is.

### 4.2 Main framework: costly signalling inside a security dilemma

Guttieri already works this way without saying so.[^55] She uses the cybersecurity dilemma, and she grounds her warning rule in patience.

The value of costly signalling is that it turns an argument about the balance, which nobody can measure, into a question about cost and credibility, which can be studied. Cost becomes the thing that changes. Credibility of the warning becomes the thing that changes in response.

Costly signalling also tells us what an absence looks like. If an act is cheap, it says nothing about intentions. That is exactly what the second explanation below claims.

### 4.3 The two explanations

**Explanation one: the warning is fading.** Pre-positioning once meant something because holding access was expensive. Machine autonomy makes it cheaper, so the meaning drains away. Dimitrov and Andreev hold the underlying view, treating pre-positioning as pressure and coercion.[^56]

**Explanation two: there never was a warning.** Pre-positioning never meant to say anything. Staying below the level that triggers a response is the design goal, and being hard to read is a feature rather than a fault. Braccia argues this, describing operations tuned to stay below the use-of-force line.[^57]

They predict different futures. Under the first, autonomy is wearing away a channel that used to carry meaning. Under the second, autonomy simply lets states collect more options faster, and nothing is lost because nothing was there.

The evidence fits the second at least as well. Pre-positioning has twice been followed by years of nothing. It drew no punishment in the one case anyone has coded properly. And its effects appear tuned to stay under the line that would bring allies in.

### 4.4 Supporting framework: cyber persistence theory

Cyber persistence theory, developed by Fischerkeller, Goldman, and Harknett and reported by Guttieri and Sullivan, supplies the background of constant contact.[^58] Against that background, sitting inside a rival's networks is normal rather than exceptional. This explains why pulling a clear message out of persistent access is hard as a matter of principle, not just in practice.

### 4.5 A condition on the whole argument

Willett shows that a weaker defender would produce a different balance.[^59] The framework must therefore tie its findings to how capable the defender is, rather than treating the balance as one global number. Conclusions become conclusions about particular pairs of rivals. The expectation that follows is that autonomy widens the distance between rich defenders and poor ones rather than tilting one overall balance.

### 4.6 The rival that must be answered

Maschmeyer should be answered directly, not ignored.[^60] If cyber operations are subversion rather than war, then framing them in terms of attack and defence is a mistake of category, and the question has to be asked differently. This is the most likely objection a reviewer will raise, and it belongs in the main text.

### 4.7 What not to use

Attack-defence theory should not be the main lens. The strongest theorist in this literature rejects it, no study here measures it, and the standard treatment of it is missing from the sources. Using it would mean defending a starting point the evidence does not provide. Costly signalling asks a smaller question the evidence can answer.

---

## 5. Methodology

### 5.1 Design

A structured comparison of pre-positioning cases, guided by theory, together with a trace of how officials in the target state read each case. What is being explained is the credibility of the warning, not the balance itself.

### 5.2 Cases

**Table 2. Cases**

| Case | Access established | Used | Result or response |
|---|---|---|---|
| Russia in United States infrastructure, 2018 onwards | Yes | No, over seven years | Nothing recorded |
| Volt Typhoon, 2023 onwards | Yes | Not so far | Technical advisory, no sanctions |
| Russia in Ukraine, 2021 to 2022 | Yes | Yes, April 2022 | Attack stopped by defenders |

The Russian case of 2018, reported by Codreanu from Lonergan and Poznansky, gives the case where nothing happened.[^61] The Ukrainian case, from Willett, gives the only case where access became attack.[^62] Further comparisons are available in the Flax, Salt and Silk Typhoon campaigns named by Singh, Jash, and Nanjappa.[^63] Estonia in 2007 offers a contrast, since there the learning came from testing rather than from hiding.

### 5.3 Sources of data

The European Repository of Cyber Incidents, compiled by Zettl-Schabath and colleagues and used by Baram, provides a ready-made set of coded incidents.[^64] To this can be added official statements and advisories. Reports from security companies are treated as interested evidence rather than neutral fact, a caution this literature earns given how Butt and Ulina use vendor figures without question.[^65]

### 5.4 How cases are coded

Coding happens at two levels, following the pattern Baram used, where a typology is built first and cases are sorted into it afterwards.[^66]

At the level of the act, each campaign is scored on four things: how much intelligence the access yields and how much power it would confer, following Guttieri; how expensive the access is to maintain, estimated from how long it went unnoticed, how skilled the tradecraft was, and how much was automated; and whether the target matters for one named scenario, as Guam does for Taiwan, or is simply general infrastructure.[^67]

At the level of the response, what the target government did is sorted using Baram's four types, which separate technical answers from political ones.

What is being explained is the distance between the two levels. Does an act that scores high on power and low on intelligence draw a political response, or does it get handed to network defenders?

### 5.5 Telling the two explanations apart

The first explanation predicts that the distance grows over time as holding access becomes cheaper. The second predicts that the distance stays the same and tracks how carefully the operation was tuned to stay below the response line. Scoring response type against estimated cost across the cases separates them.

### 5.6 Limits

The cost of holding access cannot be seen directly and has to be estimated. What the attacker intended cannot be known. The sources lean towards the United States and include no Chinese-language material. Claims about the speed of autonomy rest on few sources and will need benchmark data added. The number of cases is small, which supports comparison but not statistics.

---

## 6. What the Literature Shows

### 6.1 Settled

Cyber competition is continuous, not a series of separate incidents.[^68] Infrastructure is the target. Foreign access to American infrastructure happened and was publicly attributed.[^69] Automatic defence tools are being built and deployed.[^70]

### 6.2 Disputed

Whether attack-defence theory applies to cyberspace, with Maschmeyer against.[^71] Which side holds the advantage, with Butt and Ulina for attackers, and Lindsay through Pokorny and Willett for defenders.[^72] Whether pre-positioning carries a message, with Dimitrov and Andreev for and Braccia against.[^73] Whether these operations are cheap, with Sullivan and Guttieri at odds.[^74]

### 6.3 Emerging

AI helping with attack tasks, though not yet running attacks.[^75] Resilience recast as a fighting capability rather than an IT function.[^76] Public blame understood as a form of signalling in its own right.[^77]

### 6.4 Unknown

How fast autonomy spreads. Any measurement of the balance. What holding access actually costs. What the intruders intend. How Chinese planners think.

One absence shapes the whole field. Pre-positioning has twice led to years of nothing and once to an attack that failed. There is no case where it led to a successful strategic result. Everything this literature says about what pre-positioning means therefore rests on no successful examples.

### 6.5 What follows for strategy and policy

Two dangers follow, pointing in opposite directions, and the evidence supports both.

If the first explanation is right, and Guttieri's rule is what governments actually use, then autonomy is eroding the assumption underneath it. Governments would then read automatic, routine access as deliberate warning. Given how tangled cyber, space and nuclear systems are, that mistake pushes towards escalation.

If the second explanation is right, the danger runs the other way. Operations tuned to stay quiet get quiet answers. Real preparation gets handed to network defenders and treated as a maintenance problem. The danger is not overreaction but missed warning, and the difference between how Volt Typhoon and Salt Typhoon were answered suggests this may already be happening.

These are not two options to choose between. They are the two ways a weak signal fails. What makes autonomy dangerous is the weakening of the signal, not any advantage it gives attackers, and that is a claim this literature can actually support.

---

## 7. Contribution

### 7.1 To scholarship

The study takes up a subject the field has named without studying. Melella proposes looking at how new technology affects the balance, then looks at coordination.[^78] Fifteen of the sixteen studies keep the two halves apart, since those writing about strategy do not discuss artificial intelligence and those writing about artificial intelligence do not discuss deterrence, warning or the balance.

The study examines the assumption about cost sitting underneath the leading account of pre-positioning as warning, an assumption Guttieri states without examining and Sullivan contradicts in the same issue of the same journal.[^79]

It also reconciles a mismatch nobody has noticed. Guttieri shows that pre-positioning reads as preparation for war. Baram shows that governments do not act as if it does.[^80] The gap between how Volt Typhoon and Salt Typhoon were answered makes the point sharper.

And it records a fact the field has not faced, which is that no case exists where pre-positioning produced a successful strategic result.

### 7.2 Why it matters academically

The study asks the attack-defence question in a form the literature can actually handle. Instead of asking whether autonomy helps attackers, which nobody can measure, it asks what autonomy does to the information carried by acts we can observe. That question has an answer.

### 7.3 Why it matters for policymakers and planners

Governments treat foreign implants in infrastructure as a warning. The two explanations point to opposite corrections. Telling them apart decides whether governments should respond less or respond more. Since limited cyber effects can, on Guttieri's account, spread far beyond what anyone intended, getting this wrong is expensive.

---

## 8. Conclusion

The meaning we give to foreign implants in critical infrastructure rests on an assumption about cost that the literature states without examining. We read persistent access as preparation for war because staying hidden is supposed to be hard. Machine autonomy bears directly on that assumption, and nobody has asked how.

The evidence gathered here suggests the trouble runs deeper than a warning system being worn away. Pre-positioning already works poorly as a warning. It does not reach the people who decide. The state accused of it denies it. And it draws a technical answer where a serious reading would demand a political one. In the one case anyone has coded properly, it produced no punishment at all, while a lesser campaign by the same country in the same period did.

Whether autonomy is eroding a channel that once carried meaning, or simply speeding up the collection of options through a channel that never carried any, remains open. This paper does not settle it. It shows the question can be answered, sets out the two explanations that compete, and offers a design capable of separating them.

The stakes are practical. If governments read automatic, routine access as deliberate warning, they may punish activity that means nothing. If they keep treating real preparation as a job for network defenders, they may miss activity that means a great deal. Both mistakes come from the same weakness in the signal, and neither can be fixed until we know whether the signal is there at all.

---



## NOTES

[^1]: Karen Guttieri, "Fighting through Disruption: Reframing Cyber Resilience for Power Projection and Strategic Credibility," *The Cyber Defense Review* 10, no. 1 (2025): 93-114, https://doi.org/10.55682/cdr/egvf-mkys; Claudiu Codreanu, *Typhoons, Bears, and Pandas: Latest Major Cyber Espionage Campaigns*, Policy Paper 43 (Bucharest: Romanian Diplomatic Institute, 2025), https://www.idr.ro; Nistha Kumari Singh, Amrita Jash, and Yashwanth Nanjappa, "Navigating the Nexus: Geopolitical, International Relations and Technical Dimensions of US-China Cyber Strategic Competition," *Cogent Social Sciences* 11, no. 1 (2025): 2499171, https://doi.org/10.1080/23311886.2025.2499171.
[^2]: Dimitar Dimitrov and Evgeni Andreev, "China's Strategic Competition in Cyberspace: Volt Typhoon and Salt Typhoon as a Projection of Power, a More Aggressive Posture and a Future beyond Espionage," in *Environment. Technology. Resources: Proceedings of the 16th International Scientific and Practical Conference* (Rezekne: RTU Press, 2025), 2:115-22, https://doi.org/10.17770/etr2025vol2.8618.
[^3]: Guttieri, "Fighting through Disruption," https://doi.org/10.55682/cdr/egvf-mkys.
[^4]: Codreanu, *Typhoons, Bears, and Pandas*, https://www.idr.ro.
[^5]: Muhammad Saqib Butt and Ninta Sri Ulina, "Cyber Warfare in the AI Era: Emerging Attack Trends, Defensive Strategies and Policy Challenges, 2022-2026," *The Critical Review of Social Sciences Studies* 4, no. 1 (2026): 6176-92, https://thecrsss.com/index.php/Journal/about; Yagmur Yigit et al., "Generative AI and LLMs for Critical Infrastructure Protection: Evaluation Benchmarks, Agentic AI, Challenges, and Opportunities," *Sensors* 25, no. 6 (2025): 1666, https://doi.org/10.3390/s25061666.
[^6]: Guttieri, "Fighting through Disruption," https://doi.org/10.55682/cdr/egvf-mkys.
[^7]: Gil Baram, "Re-ordering Accountability: The Significance of Joint Public Attribution in a Fragmented Cyberspace," *Contemporary Security Policy*, advance online publication, 2026, https://doi.org/10.1080/13523260.2026.2662220.
[^8]: Scott Sullivan, "Toward Clarity in Cyber's 'Fog of Law,'" *The Cyber Defense Review* 10, no. 1 (2025): 59-71, https://doi.org/10.55682/cdr/v8z4-sxne.
[^9]: Singh, Jash, and Nanjappa, "Navigating the Nexus," https://doi.org/10.1080/23311886.2025.2499171.
[^10]: Cosimo Melella, "Coordination in Offensive and Defensive Cyberoperations: Dissecting China, Russia, and NATO's Approaches in Cyberspace" (PhD diss., Universita degli Studi di Genova, n.d.).
[^11]: Lennart Maschmeyer, "Subversion, Cyber Operations, and Reverse Structural Power in World Politics," *European Journal of International Relations* 29, no. 1 (2023): 79-103, https://doi.org/10.1177/13540661221117051.
[^12]: Jon R. Lindsay, 2013, cited in Pokorny, *Offensive Cyber and Information Warfare Strategies*; Rebecca Slayton, "What Is the Cyber Offense-Defense Balance? Conceptions, Causes, and Assessment," *International Security* 41, no. 3 (2017): 72-109, https://doi.org/10.1162/ISEC_a_00267, cited in Maschmeyer, "Subversion, Cyber Operations, and Reverse Structural Power."; Erik Gartzke and Jon Lindsay, 2015, cited in Maschmeyer, "Subversion, Cyber Operations, and Reverse Structural Power."; Martin Libicki, *Cyberdeterrence and Cyberwar* (Santa Monica: RAND, 2009), cited in Maschmeyer, "Subversion, Cyber Operations, and Reverse Structural Power."
[^13]: Butt and Ulina, "Cyber Warfare in the AI Era," https://thecrsss.com/index.php/Journal/about.
[^14]: Laszlo Pokorny, *Offensive Cyber and Information Warfare Strategies Targeting People's Republic of China Military C4ISR Systems: A Qualitative Analysis* (New Jersey: ICL Institute, 2026), https://doi.org/10.5281/zenodo.19234589; Lindsay, cited in Pokorny.
[^15]: Marcus Willett, "The Cyber Dimension of the Russia-Ukraine War," *Survival* 64, no. 5 (2022): 7-26, https://doi.org/10.1080/00396338.2022.2126193.
[^16]: Maschmeyer, "Subversion, Cyber Operations, and Reverse Structural Power," https://doi.org/10.1177/13540661221117051; Singh, Jash, and Nanjappa, "Navigating the Nexus," https://doi.org/10.1080/23311886.2025.2499171; Max Smeets, *No Shortcuts: Why States Struggle to Develop a Military Cyber-Force* (London: Hurst, 2022), cited in Maschmeyer, "Subversion, Cyber Operations, and Reverse Structural Power."
[^17]: Maschmeyer, "Subversion, Cyber Operations, and Reverse Structural Power," https://doi.org/10.1177/13540661221117051; Slayton, "What Is the Cyber Offense-Defense Balance?"
[^18]: Guttieri, "Fighting through Disruption," https://doi.org/10.55682/cdr/egvf-mkys.
[^19]: Codreanu, *Typhoons, Bears, and Pandas*, https://www.idr.ro.
[^20]: Dimitrov and Andreev, "China's Strategic Competition in Cyberspace," https://doi.org/10.17770/etr2025vol2.8618.
[^21]: Christopher Braccia, "From Vietnam to Volt Typhoon: How the PRC Refined Grey Zone Cyber Tactics before Targeting the West" (preprint, Authorea, July 30, 2025), https://doi.org/10.22541/au.175390612.20874865/v1.
[^22]: Sullivan, "Toward Clarity in Cyber's 'Fog of Law.'", https://doi.org/10.55682/cdr/v8z4-sxne.
[^23]: Singh, Jash, and Nanjappa, "Navigating the Nexus," https://doi.org/10.1080/23311886.2025.2499171.
[^24]: Codreanu, *Typhoons, Bears, and Pandas*, https://www.idr.ro.
[^25]: Baram, "Re-ordering Accountability," https://doi.org/10.1080/13523260.2026.2662220.
[^26]: Jack Urbanczyk et al., "State-Sponsored Intrusions and Critical Infrastructure: A Case Study of the Salt Typhoon Cyberattack on U.S." (preprint, TechRxiv, June 25, 2025), https://doi.org/10.36227/techrxiv.175085869.97198541/v1.
[^27]: Codreanu, *Typhoons, Bears, and Pandas*, https://www.idr.ro.
[^28]: Shawn Lonergan and Michael Poznansky, 2025, cited in Codreanu, *Typhoons, Bears, and Pandas*.
[^29]: Willett, "The Cyber Dimension of the Russia-Ukraine War," https://doi.org/10.1080/00396338.2022.2126193.
[^30]: Butt and Ulina, "Cyber Warfare in the AI Era," https://thecrsss.com/index.php/Journal/about.
[^31]: Yigit et al., "Generative AI and LLMs for Critical Infrastructure Protection," https://doi.org/10.3390/s25061666.
[^32]: Yigit et al., "Generative AI and LLMs for Critical Infrastructure Protection," https://doi.org/10.3390/s25061666; Md Humayun Kabir et al., "A National-Scale AI-Driven Cyber Defense Framework for Protecting U.S. Critical Infrastructure against Nation-State Attacks," *Journal of Computer Science and Technology Studies* 8, no. 6 (2026): 94-107, https://www.al-kindipublisher.com/index.php/jcsts.
[^33]: Guttieri, "Fighting through Disruption," https://doi.org/10.55682/cdr/egvf-mkys; Ben Buchanan, *The Cybersecurity Dilemma*, cited in Guttieri, "Fighting through Disruption."
[^34]: Fiona Cunningham, 2022, cited in Guttieri, "Fighting through Disruption."
[^35]: Sullivan, "Toward Clarity in Cyber's 'Fog of Law.'", https://doi.org/10.55682/cdr/v8z4-sxne.
[^36]: Sullivan, "Toward Clarity in Cyber's 'Fog of Law.'", https://doi.org/10.55682/cdr/v8z4-sxne; Kristen E. Eichensehr, "The Law and Politics of Cyberattack Attribution," *UCLA Law Review* 67 (2020): 520-98, cited in Sullivan, "Toward Clarity in Cyber's 'Fog of Law.'", https://www.uclalawreview.org/the-law-politics-of-cyberattack-attribution/.
[^37]: Willett, "The Cyber Dimension of the Russia-Ukraine War," https://doi.org/10.1080/00396338.2022.2126193.
[^38]: Sullivan, "Toward Clarity in Cyber's 'Fog of Law.'", https://doi.org/10.55682/cdr/v8z4-sxne; Pokorny, *Offensive Cyber and Information Warfare Strategies*, https://doi.org/10.5281/zenodo.19234589.
[^39]: Melella, "Coordination in Offensive and Defensive Cyberoperations."
[^40]: Maschmeyer, "Subversion, Cyber Operations, and Reverse Structural Power," https://doi.org/10.1177/13540661221117051.
[^41]: Guttieri, "Fighting through Disruption," https://doi.org/10.55682/cdr/egvf-mkys.
[^42]: Sullivan, "Toward Clarity in Cyber's 'Fog of Law.'", https://doi.org/10.55682/cdr/v8z4-sxne.
[^43]: Guttieri, "Fighting through Disruption," https://doi.org/10.55682/cdr/egvf-mkys.
[^44]: Baram, "Re-ordering Accountability," https://doi.org/10.1080/13523260.2026.2662220.
[^45]: Baram, "Re-ordering Accountability," https://doi.org/10.1080/13523260.2026.2662220.
[^46]: Maschmeyer, "Subversion, Cyber Operations, and Reverse Structural Power," https://doi.org/10.1177/13540661221117051.
[^47]: Singh, Jash, and Nanjappa, "Navigating the Nexus," https://doi.org/10.1080/23311886.2025.2499171.
[^48]: Codreanu, *Typhoons, Bears, and Pandas*, https://www.idr.ro.
[^49]: Pokorny, *Offensive Cyber and Information Warfare Strategies*, https://doi.org/10.5281/zenodo.19234589.
[^50]: Baram, "Re-ordering Accountability," https://doi.org/10.1080/13523260.2026.2662220.
[^51]: Butt and Ulina, "Cyber Warfare in the AI Era," https://thecrsss.com/index.php/Journal/about.
[^52]: Yigit et al., "Generative AI and LLMs for Critical Infrastructure Protection," https://doi.org/10.3390/s25061666.
[^53]: Guttieri, "Fighting through Disruption," https://doi.org/10.55682/cdr/egvf-mkys.
[^54]: Butt and Ulina, "Cyber Warfare in the AI Era," https://thecrsss.com/index.php/Journal/about.
[^55]: Guttieri, "Fighting through Disruption," https://doi.org/10.55682/cdr/egvf-mkys.
[^56]: Dimitrov and Andreev, "China's Strategic Competition in Cyberspace," https://doi.org/10.17770/etr2025vol2.8618.
[^57]: Braccia, "From Vietnam to Volt Typhoon," https://doi.org/10.22541/au.175390612.20874865/v1.
[^58]: Guttieri, "Fighting through Disruption," https://doi.org/10.55682/cdr/egvf-mkys; Sullivan, "Toward Clarity in Cyber's 'Fog of Law.'", https://doi.org/10.55682/cdr/v8z4-sxne; Michael Fischerkeller, Emily Goldman, and Richard Harknett, *Cyber Persistence Theory: Redefining National Security in Cyberspace*, cited in Guttieri, "Fighting through Disruption," and Sullivan, "Toward Clarity in Cyber's 'Fog of Law.'."
[^59]: Willett, "The Cyber Dimension of the Russia-Ukraine War," https://doi.org/10.1080/00396338.2022.2126193.
[^60]: Maschmeyer, "Subversion, Cyber Operations, and Reverse Structural Power," https://doi.org/10.1177/13540661221117051.
[^61]: Codreanu, *Typhoons, Bears, and Pandas*, https://www.idr.ro; Lonergan and Poznansky, cited in Codreanu.
[^62]: Willett, "The Cyber Dimension of the Russia-Ukraine War," https://doi.org/10.1080/00396338.2022.2126193.
[^63]: Singh, Jash, and Nanjappa, "Navigating the Nexus," https://doi.org/10.1080/23311886.2025.2499171.
[^64]: Baram, "Re-ordering Accountability," https://doi.org/10.1080/13523260.2026.2662220; Kerstin Zettl-Schabath et al., European Repository of Cyber Incidents, 2025, https://eurepoc.eu, cited in Baram, "Re-ordering Accountability."
[^65]: Butt and Ulina, "Cyber Warfare in the AI Era," https://thecrsss.com/index.php/Journal/about.
[^66]: Baram, "Re-ordering Accountability," https://doi.org/10.1080/13523260.2026.2662220.
[^67]: Guttieri, "Fighting through Disruption," https://doi.org/10.55682/cdr/egvf-mkys; Dimitrov and Andreev, "China's Strategic Competition in Cyberspace," https://doi.org/10.17770/etr2025vol2.8618.
[^68]: Guttieri, "Fighting through Disruption," https://doi.org/10.55682/cdr/egvf-mkys; Sullivan, "Toward Clarity in Cyber's 'Fog of Law.'", https://doi.org/10.55682/cdr/v8z4-sxne.
[^69]: Guttieri, "Fighting through Disruption," https://doi.org/10.55682/cdr/egvf-mkys; Baram, "Re-ordering Accountability," https://doi.org/10.1080/13523260.2026.2662220; Codreanu, *Typhoons, Bears, and Pandas*, https://www.idr.ro.
[^70]: Yigit et al., "Generative AI and LLMs for Critical Infrastructure Protection," https://doi.org/10.3390/s25061666; Kabir et al., "A National-Scale AI-Driven Cyber Defense Framework," https://www.al-kindipublisher.com/index.php/jcsts.
[^71]: Maschmeyer, "Subversion, Cyber Operations, and Reverse Structural Power," https://doi.org/10.1177/13540661221117051.
[^72]: Willett, "The Cyber Dimension of the Russia-Ukraine War," https://doi.org/10.1080/00396338.2022.2126193; Butt and Ulina, "Cyber Warfare in the AI Era," https://thecrsss.com/index.php/Journal/about; Pokorny, *Offensive Cyber and Information Warfare Strategies*, https://doi.org/10.5281/zenodo.19234589; Lindsay, cited in Pokorny.
[^73]: Dimitrov and Andreev, "China's Strategic Competition in Cyberspace," https://doi.org/10.17770/etr2025vol2.8618; Braccia, "From Vietnam to Volt Typhoon," https://doi.org/10.22541/au.175390612.20874865/v1.
[^74]: Guttieri, "Fighting through Disruption," https://doi.org/10.55682/cdr/egvf-mkys; Sullivan, "Toward Clarity in Cyber's 'Fog of Law.'", https://doi.org/10.55682/cdr/v8z4-sxne.
[^75]: Butt and Ulina, "Cyber Warfare in the AI Era," https://thecrsss.com/index.php/Journal/about.
[^76]: Guttieri, "Fighting through Disruption," https://doi.org/10.55682/cdr/egvf-mkys.
[^77]: Sullivan, "Toward Clarity in Cyber's 'Fog of Law.'", https://doi.org/10.55682/cdr/v8z4-sxne; Baram, "Re-ordering Accountability," https://doi.org/10.1080/13523260.2026.2662220.
[^78]: Melella, "Coordination in Offensive and Defensive Cyberoperations."
[^79]: Guttieri, "Fighting through Disruption," https://doi.org/10.55682/cdr/egvf-mkys; Sullivan, "Toward Clarity in Cyber's 'Fog of Law.'", https://doi.org/10.55682/cdr/v8z4-sxne.
[^80]: Baram, "Re-ordering Accountability," https://doi.org/10.1080/13523260.2026.2662220.

## Bibliography

Baram, Gil. 2026. "Re-ordering Accountability: The Significance of Joint Public Attribution in a Fragmented Cyberspace." *Contemporary Security Policy*. Advance online publication. https://doi.org/10.1080/13523260.2026.2662220.

Braccia, Christopher. 2025. "From Vietnam to Volt Typhoon: How the PRC Refined Grey Zone Cyber Tactics before Targeting the West." Preprint, Authorea, July 30. https://doi.org/10.22541/au.175390612.20874865/v1.

Butt, Muhammad Saqib, and Ninta Sri Ulina. 2026. "Cyber Warfare in the AI Era: Emerging Attack Trends, Defensive Strategies and Policy Challenges, 2022-2026." *The Critical Review of Social Sciences Studies* 4 (1): 6176-92. https://thecrsss.com/index.php/Journal/about.

Codreanu, Claudiu. 2025. *Typhoons, Bears, and Pandas: Latest Major Cyber Espionage Campaigns*. Policy Paper 43. Bucharest: Romanian Diplomatic Institute. https://www.idr.ro.

Dimitrov, Dimitar, and Evgeni Andreev. 2025. "China's Strategic Competition in Cyberspace: Volt Typhoon and Salt Typhoon as a Projection of Power, a More Aggressive Posture and a Future beyond Espionage." In *Environment. Technology. Resources: Proceedings of the 16th International Scientific and Practical Conference*, 2:115-22. Rezekne: RTU Press. https://doi.org/10.17770/etr2025vol2.8618.

Ferdaus, Md Hasanul, Mohammed Golam Kaosar, Fares Alharbi, Md Sawkat Ali, Mohammad Manzurul Islam, and Rajkumar Buyya. n.d. "The Digital Face of Espionage: Analyzing Cyber Threats to National Security." SSRN working paper. https://ssrn.com/abstract=5249574.

Guttieri, Karen. 2025. "Fighting through Disruption: Reframing Cyber Resilience for Power Projection and Strategic Credibility." *The Cyber Defense Review* 10 (1): 93-114. https://doi.org/10.55682/cdr/egvf-mkys.

Kabir, Md Humayun, Md Al Mamun Siddike, MD Razib, and Md Riyad Uddin. 2026. "A National-Scale AI-Driven Cyber Defense Framework for Protecting U.S. Critical Infrastructure against Nation-State Attacks." *Journal of Computer Science and Technology Studies* 8 (6): 94-107. https://www.al-kindipublisher.com/index.php/jcsts.

Maschmeyer, Lennart. 2023. "Subversion, Cyber Operations, and Reverse Structural Power in World Politics." *European Journal of International Relations* 29 (1): 79-103. https://doi.org/10.1177/13540661221117051.

Melella, Cosimo. n.d. "Coordination in Offensive and Defensive Cyberoperations: Dissecting China, Russia, and NATO's Approaches in Cyberspace." PhD diss., Universita degli Studi di Genova.

Pokorny, Laszlo. 2026. *Offensive Cyber and Information Warfare Strategies Targeting People's Republic of China Military Command, Control, Communications, Computers, Intelligence, Surveillance, and Reconnaissance (C4ISR) Systems: A Qualitative Analysis*. New Jersey: ICL Institute. https://doi.org/10.5281/zenodo.19234589.

Singh, Nistha Kumari, Amrita Jash, and Yashwanth Nanjappa. 2025. "Navigating the Nexus: Geopolitical, International Relations and Technical Dimensions of US-China Cyber Strategic Competition." *Cogent Social Sciences* 11 (1): 2499171. https://doi.org/10.1080/23311886.2025.2499171.

Sullivan, Scott. 2025. "Toward Clarity in Cyber's 'Fog of Law.'" *The Cyber Defense Review* 10 (1): 59-71. https://doi.org/10.55682/cdr/v8z4-sxne.

Urbanczyk, Jack, Conner Skoumal, Moe Elshareif, Hajira Sultana, and Mathias R. Plass. 2025. "State-Sponsored Intrusions and Critical Infrastructure: A Case Study of the Salt Typhoon Cyberattack on U.S." Preprint, TechRxiv, June 25. https://doi.org/10.36227/techrxiv.175085869.97198541/v1.

Willett, Marcus. 2022. "The Cyber Dimension of the Russia-Ukraine War." *Survival* 64 (5): 7-26. https://doi.org/10.1080/00396338.2022.2126193.

Yigit, Yagmur, Mohamed Amine Ferrag, Mohamed C. Ghanem, Iqbal H. Sarker, Leandros A. Maglaras, Christos Chrysoulas, Naghmeh Moradpoor, Norbert Tihanyi, and Helge Janicke. 2025. "Generative AI and LLMs for Critical Infrastructure Protection: Evaluation Benchmarks, Agentic AI, Challenges, and Opportunities." *Sensors* 25 (6): 1666. https://doi.org/10.3390/s25061666.

### Works quoted at second hand

Each work below is referred to in this paper only as reported by one of the sixteen studies read. None was consulted in the original. They are listed apart from the references so the difference is clear, and each should be obtained and checked before the paper is submitted.

Buchanan, Ben. *The Cybersecurity Dilemma*. Reported in Guttieri (2025).

Cunningham, Fiona. 2022. Reported in Guttieri (2025).

Eichensehr, Kristen E. 2020. "The Law and Politics of Cyberattack Attribution." *UCLA Law Review* 67: 520-98. Reported in Sullivan (2025). https://www.uclalawreview.org/the-law-politics-of-cyberattack-attribution/.

Fischerkeller, Michael, Emily Goldman, and Richard Harknett. *Cyber Persistence Theory: Redefining National Security in Cyberspace*. Reported in Guttieri (2025) and Sullivan (2025).

Gartzke, Erik, and Jon Lindsay. 2015. Reported in Maschmeyer (2023).

Libicki, Martin. 2009. *Cyberdeterrence and Cyberwar*. Santa Monica: RAND. Reported in Maschmeyer (2023).

Lindsay, Jon R. 2013. Reported in Pokorny (2026). This is the source of the claim that defence holds the strategic advantage, and it needs checking.

Lonergan, Shawn, and Michael Poznansky. 2025. Reported in Codreanu (2025). This is the source for Russian access held since 2018 without use.

Slayton, Rebecca. 2017. "What Is the Cyber Offense-Defense Balance? Conceptions, Causes, and Assessment." *International Security* 41 (3): 72-109. Reported in Maschmeyer (2023). This is the standard treatment of the concept and should be obtained first. https://doi.org/10.1162/ISEC_a_00267.

Smeets, Max. 2022. *No Shortcuts: Why States Struggle to Develop a Military Cyber-Force*. London: Hurst. Reported in Maschmeyer (2023) and in Singh, Jash, and Nanjappa (2025).

Zettl-Schabath, Kerstin, et al. 2025. European Repository of Cyber Incidents. Reported in Baram (2026). https://eurepoc.eu.
