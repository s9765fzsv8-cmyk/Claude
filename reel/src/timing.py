"""Word- and card-level caption timing derived from the per-segment VO marks."""
import json, re

# words the caption should emphasise in accent colour
EMPH = {
    "three": "amber", "wars": "amber", "frozen": "amber", "single": "amber", "day.": "amber",
    "wasn't": "amber", "water.": "river", "information.": "amber",
    "1960": "river", "six": "river", "rivers": "river",
    "April": "amber", "2025,": "amber", "Pahalgam": "alert", "abeyance.": "alert",
    "illegal.": "alert",
    "cannot": "alert", "barred": "amber", "storage": "river", "dams": "river",
    "stop": "amber", "talking.": "amber", "flood": "river", "warnings.": "river",
    "ended.": "alert",
    "Eighty": "amber", "percent": "amber", "quarter": "amber", "economy.": "amber",
    "Permanent": "river", "Court": "river", "Arbitration": "river",
    "no": "alert", "unilateral": "alert", "suspension.": "alert", "rejects": "alert",
    "nuclear-armed": "alert", "climate-stressed": "river", "guess.": "amber",
    "danger": "alert", "flood.": "river", "warned": "amber",
}

# on-screen caption text per segment (pretty punctuation / numerals restored)
DISPLAY = {
    "HOOK": "A treaty that survived three wars was frozen in a single day. "
            "And the most dangerous thing India withheld from Pakistan wasn't water. "
            "It was information.",
    "CONTEXT": "The Indus Waters Treaty of 1960 divided six rivers between the two countries. "
               "In April 2025, a day after the Pahalgam attack, India placed the treaty in abeyance. "
               "Pakistan calls the move illegal.",
    "CORE ANALYSIS": "Here's what's misunderstood. India cannot simply switch off Pakistan's water. "
                     "The treaty itself barred India from building the storage dams that would make it possible. "
                     "What India can do immediately is stop talking. "
                     "River-flow data, reservoir readings, flood warnings. That exchange has ended.",
    "EVIDENCE": "Eighty percent of Pakistan's irrigated agriculture depends on these rivers, "
                "a sector worth a quarter of its economy. "
                "The Permanent Court of Arbitration has ruled the treaty permits no unilateral suspension. "
                "India rejects the court entirely.",
    "WHY IT MATTERS": "So two nuclear-armed neighbours now manage a shared, climate-stressed river system "
                      "with no agreed facts between them. Every monsoon becomes a guess.",
    "CONCLUSION": "The real danger isn't a river switched off. "
                  "It's a flood nobody downstream was warned about.",
}

MAX_CARD_W = 3          # words per caption card (visual), overridden by width fit


def _weight(w):
    """Rough spoken length of a word."""
    core = re.sub(r"[^A-Za-z0-9']", "", w)
    syll = max(1, len(re.findall(r"[aeiouyAEIOUY]+", core)))
    base = 1.6 + 0.55 * syll + 0.10 * len(core)
    if w.endswith((".", "!", "?")):
        base += 2.4
    elif w.endswith((",", ";", ":")):
        base += 1.2
    return base


def word_times(marks_path="vo.json"):
    marks = json.load(open(marks_path))
    out = []
    for m in marks:
        disp = DISPLAY[m["name"]].split()
        wts = [_weight(w) for w in disp]
        tot = sum(wts)
        dur = m["end"] - m["start"]
        t = m["start"]
        seg = []
        for w, wt in zip(disp, wts):
            d = dur * wt / tot
            seg.append({"w": w, "s": t, "e": t + d})
            t += d
        out.append({"name": m["name"], "start": m["start"], "end": m["end"], "words": seg})
    return out


def cards(segments, per=4):
    """Group words into caption cards, breaking on sentence punctuation."""
    out = []
    for seg in segments:
        cur = []
        for wd in seg["words"]:
            cur.append(wd)
            hard = wd["w"].endswith((".", "!", "?"))
            soft = wd["w"].endswith((",", ";", ":"))
            if hard or len(cur) >= per or (soft and len(cur) >= per - 1):
                out.append({"seg": seg["name"], "words": cur,
                            "s": cur[0]["s"], "e": cur[-1]["e"]})
                cur = []
        if cur:
            out.append({"seg": seg["name"], "words": cur,
                        "s": cur[0]["s"], "e": cur[-1]["e"]})
    # let each card hold until the next one starts (no gaps/flicker)
    for i in range(len(out) - 1):
        out[i]["e"] = max(out[i]["e"], out[i + 1]["s"] - 0.01)
    return out


def srt(cs, path="reel.srt"):
    def ts(t):
        h = int(t // 3600); m = int(t % 3600 // 60); s = t % 60
        return f"{h:02d}:{m:02d}:{s:06.3f}".replace(".", ",")
    with open(path, "w") as f:
        for i, c in enumerate(cs, 1):
            f.write(f"{i}\n{ts(c['s'])} --> {ts(c['e'])}\n"
                    f"{' '.join(w['w'] for w in c['words'])}\n\n")
    return path
