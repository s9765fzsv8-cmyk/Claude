# 70-second reel script — condensed from Sayed Zeeshan Haider's Week 3 D1 script.
# Original phrasing preserved verbatim wherever possible; trimmed to fit 70s at
# professional narration pace (~170 wpm) with beats between sections.

SEGMENTS = [
    ("HOOK",
     "A treaty that survived three wars was frozen in a single day. "
     "And the most dangerous thing India withheld from Pakistan wasn't water. "
     "It was information.",
     0.5),

    ("CONTEXT",
     "The Indus Waters Treaty of nineteen sixty divided six rivers between the two countries. "
     "In April twenty twenty five, a day after the Pahalgam attack, "
     "India placed the treaty in abeyance. Pakistan calls the move illegal.",
     0.45),

    ("CORE ANALYSIS",
     "Here's what's misunderstood. India cannot simply switch off Pakistan's water. "
     "The treaty itself barred India from building the storage dams that would make it possible. "
     "What India can do immediately is stop talking. "
     "River flow data, reservoir readings, flood warnings. That exchange has ended.",
     0.45),

    ("EVIDENCE",
     "Eighty percent of Pakistan's irrigated agriculture depends on these rivers, "
     "a sector worth a quarter of its economy. "
     "The Permanent Court of Arbitration has ruled the treaty permits no unilateral suspension. "
     "India rejects the court entirely.",
     0.45),

    ("WHY IT MATTERS",
     "So two nuclear armed neighbours now manage a shared, climate stressed river system "
     "with no agreed facts between them. Every monsoon becomes a guess.",
     0.45),

    ("CONCLUSION",
     "The real danger isn't a river switched off. "
     "It's a flood nobody downstream was warned about.",
     0.0),
]

if __name__ == "__main__":
    total = sum(len(t.split()) for _, t, _ in SEGMENTS)
    print(f"word count: {total}")
    for n, t, p in SEGMENTS:
        print(f"  {n:16s} {len(t.split()):3d} w")
