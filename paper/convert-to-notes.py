"""Convert Chicago author-date in-text citations to Chicago notes-bibliography.

Places a [^N] marker at the end of the sentence containing each citation,
emits a full note on first use of a source and a shortened note thereafter,
and writes a NOTES block the docx builder turns into real Word footnotes.
"""
import re, json

SRC = '/home/user/Claude/paper/ai-autonomy-offence-defence.md'

# key -> (full note, short note)
S = {
 'Guttieri': (
   'Karen Guttieri, "Fighting through Disruption: Reframing Cyber Resilience for Power Projection and Strategic Credibility," *The Cyber Defense Review* 10, no. 1 (2025): 93-114, https://doi.org/10.55682/cdr/egvf-mkys.',
   'Guttieri, "Fighting through Disruption."'),
 'Sullivan': (
   'Scott Sullivan, "Toward Clarity in Cyber\'s \'Fog of Law,\'" *The Cyber Defense Review* 10, no. 1 (2025): 59-71, https://doi.org/10.55682/cdr/v8z4-sxne.',
   'Sullivan, "Toward Clarity in Cyber\'s \'Fog of Law.\'"'),
 'Baram': (
   'Gil Baram, "Re-ordering Accountability: The Significance of Joint Public Attribution in a Fragmented Cyberspace," *Contemporary Security Policy*, advance online publication, 2026, https://doi.org/10.1080/13523260.2026.2662220.',
   'Baram, "Re-ordering Accountability."'),
 'Willett': (
   'Marcus Willett, "The Cyber Dimension of the Russia-Ukraine War," *Survival* 64, no. 5 (2022): 7-26, https://doi.org/10.1080/00396338.2022.2126193.',
   'Willett, "The Cyber Dimension of the Russia-Ukraine War."'),
 'Maschmeyer': (
   'Lennart Maschmeyer, "Subversion, Cyber Operations, and Reverse Structural Power in World Politics," *European Journal of International Relations* 29, no. 1 (2023): 79-103, https://doi.org/10.1177/13540661221117051.',
   'Maschmeyer, "Subversion, Cyber Operations, and Reverse Structural Power."'),
 'Codreanu': (
   'Claudiu Codreanu, *Typhoons, Bears, and Pandas: Latest Major Cyber Espionage Campaigns*, Policy Paper 43 (Bucharest: Romanian Diplomatic Institute, 2025), https://www.idr.ro.',
   'Codreanu, *Typhoons, Bears, and Pandas*.'),
 'Singh': (
   'Nistha Kumari Singh, Amrita Jash, and Yashwanth Nanjappa, "Navigating the Nexus: Geopolitical, International Relations and Technical Dimensions of US-China Cyber Strategic Competition," *Cogent Social Sciences* 11, no. 1 (2025): 2499171, https://doi.org/10.1080/23311886.2025.2499171.',
   'Singh, Jash, and Nanjappa, "Navigating the Nexus."'),
 'Dimitrov': (
   'Dimitar Dimitrov and Evgeni Andreev, "China\'s Strategic Competition in Cyberspace: Volt Typhoon and Salt Typhoon as a Projection of Power, a More Aggressive Posture and a Future beyond Espionage," in *Environment. Technology. Resources: Proceedings of the 16th International Scientific and Practical Conference* (Rezekne: RTU Press, 2025), 2:115-22, https://doi.org/10.17770/etr2025vol2.8618.',
   'Dimitrov and Andreev, "China\'s Strategic Competition in Cyberspace."'),
 'Butt': (
   'Muhammad Saqib Butt and Ninta Sri Ulina, "Cyber Warfare in the AI Era: Emerging Attack Trends, Defensive Strategies and Policy Challenges, 2022-2026," *The Critical Review of Social Sciences Studies* 4, no. 1 (2026): 6176-92.',
   'Butt and Ulina, "Cyber Warfare in the AI Era."'),
 'Yigit': (
   'Yagmur Yigit et al., "Generative AI and LLMs for Critical Infrastructure Protection: Evaluation Benchmarks, Agentic AI, Challenges, and Opportunities," *Sensors* 25, no. 6 (2025): 1666, https://doi.org/10.3390/s25061666.',
   'Yigit et al., "Generative AI and LLMs for Critical Infrastructure Protection."'),
 'Kabir': (
   'Md Humayun Kabir et al., "A National-Scale AI-Driven Cyber Defense Framework for Protecting U.S. Critical Infrastructure against Nation-State Attacks," *Journal of Computer Science and Technology Studies* 8, no. 6 (2026): 94-107.',
   'Kabir et al., "A National-Scale AI-Driven Cyber Defense Framework."'),
 'Melella': (
   'Cosimo Melella, "Coordination in Offensive and Defensive Cyberoperations: Dissecting China, Russia, and NATO\'s Approaches in Cyberspace" (PhD diss., Universita degli Studi di Genova, n.d.).',
   'Melella, "Coordination in Offensive and Defensive Cyberoperations."'),
 'Pokorny': (
   'Laszlo Pokorny, *Offensive Cyber and Information Warfare Strategies Targeting People\'s Republic of China Military C4ISR Systems: A Qualitative Analysis* (New Jersey: ICL Institute, 2026), https://doi.org/10.5281/zenodo.19234589.',
   'Pokorny, *Offensive Cyber and Information Warfare Strategies*.'),
 'Braccia': (
   'Christopher Braccia, "From Vietnam to Volt Typhoon: How the PRC Refined Grey Zone Cyber Tactics before Targeting the West" (preprint, Authorea, July 30, 2025), https://doi.org/10.22541/au.175390612.20874865/v1.',
   'Braccia, "From Vietnam to Volt Typhoon."'),
 'Urbanczyk': (
   'Jack Urbanczyk et al., "State-Sponsored Intrusions and Critical Infrastructure: A Case Study of the Salt Typhoon Cyberattack on U.S." (preprint, TechRxiv, June 25, 2025), https://doi.org/10.36227/techrxiv.175085869.97198541/v1.',
   'Urbanczyk et al., "State-Sponsored Intrusions and Critical Infrastructure."'),
 'Ferdaus': (
   'Md Hasanul Ferdaus et al., "The Digital Face of Espionage: Analyzing Cyber Threats to National Security" (SSRN working paper, n.d.), https://ssrn.com/abstract=5249574.',
   'Ferdaus et al., "The Digital Face of Espionage."'),
 'Eichensehr': (
   'Kristen E. Eichensehr, "The Law and Politics of Cyberattack Attribution," *UCLA Law Review* 67 (2020): 520-98, cited in Sullivan, "Toward Clarity in Cyber\'s \'Fog of Law.\'"',
   'Eichensehr, "The Law and Politics of Cyberattack Attribution."'),
 'Zettl': (
   'Kerstin Zettl-Schabath et al., European Repository of Cyber Incidents, 2025, https://eurepoc.eu, cited in Baram, "Re-ordering Accountability."',
   'Zettl-Schabath et al., European Repository of Cyber Incidents.'),
 'Lonergan': (
   'Shawn Lonergan and Michael Poznansky, 2025, cited in Codreanu, *Typhoons, Bears, and Pandas*.',
   'Lonergan and Poznansky, cited in Codreanu.'),
 'Lindsay': (
   'Jon R. Lindsay, 2013, cited in Pokorny, *Offensive Cyber and Information Warfare Strategies*.',
   'Lindsay, cited in Pokorny.'),
 'Slayton': (
   'Rebecca Slayton, "What Is the Cyber Offense-Defense Balance? Conceptions, Causes, and Assessment," *International Security* 41, no. 3 (2017): 72-109, https://doi.org/10.1162/ISEC_a_00267, cited in Maschmeyer, "Subversion, Cyber Operations, and Reverse Structural Power."',
   'Slayton, "What Is the Cyber Offense-Defense Balance?"'),
 'Gartzke': (
   'Erik Gartzke and Jon Lindsay, 2015, cited in Maschmeyer, "Subversion, Cyber Operations, and Reverse Structural Power."',
   'Gartzke and Lindsay, cited in Maschmeyer.'),
 'Libicki': (
   'Martin Libicki, *Cyberdeterrence and Cyberwar* (Santa Monica: RAND, 2009), cited in Maschmeyer, "Subversion, Cyber Operations, and Reverse Structural Power."',
   'Libicki, *Cyberdeterrence and Cyberwar*.'),
 'Smeets': (
   'Max Smeets, *No Shortcuts: Why States Struggle to Develop a Military Cyber-Force* (London: Hurst, 2022), cited in Maschmeyer, "Subversion, Cyber Operations, and Reverse Structural Power."',
   'Smeets, *No Shortcuts*.'),
 'Fischerkeller': (
   'Michael Fischerkeller, Emily Goldman, and Richard Harknett, *Cyber Persistence Theory: Redefining National Security in Cyberspace*, cited in Guttieri, "Fighting through Disruption," and Sullivan, "Toward Clarity in Cyber\'s \'Fog of Law.\'"',
   'Fischerkeller, Goldman, and Harknett, *Cyber Persistence Theory*.'),
 'Cunningham': (
   'Fiona Cunningham, 2022, cited in Guttieri, "Fighting through Disruption."',
   'Cunningham, cited in Guttieri.'),
 'Buchanan': (
   'Ben Buchanan, *The Cybersecurity Dilemma*, cited in Guttieri, "Fighting through Disruption."',
   'Buchanan, *The Cybersecurity Dilemma*.'),
}


# verified links, taken from the source PDFs themselves
LINKS = {
 'Guttieri':   'https://doi.org/10.55682/cdr/egvf-mkys',
 'Sullivan':   'https://doi.org/10.55682/cdr/v8z4-sxne',
 'Baram':      'https://doi.org/10.1080/13523260.2026.2662220',
 'Willett':    'https://doi.org/10.1080/00396338.2022.2126193',
 'Maschmeyer': 'https://doi.org/10.1177/13540661221117051',
 'Codreanu':   'https://www.idr.ro',
 'Singh':      'https://doi.org/10.1080/23311886.2025.2499171',
 'Dimitrov':   'https://doi.org/10.17770/etr2025vol2.8618',
 'Butt':       'https://thecrsss.com/index.php/Journal/about',
 'Yigit':      'https://doi.org/10.3390/s25061666',
 'Kabir':      'https://www.al-kindipublisher.com/index.php/jcsts',
 'Pokorny':    'https://doi.org/10.5281/zenodo.19234589',
 'Braccia':    'https://doi.org/10.22541/au.175390612.20874865/v1',
 'Urbanczyk':  'https://doi.org/10.36227/techrxiv.175085869.97198541/v1',
 'Ferdaus':    'https://ssrn.com/abstract=5249574',
 'Eichensehr': 'https://www.uclalawreview.org/the-law-politics-of-cyberattack-attribution/',
 'Zettl':      'https://eurepoc.eu',
}

# map surname tokens found in text to keys
ALIAS = {
 'Guttieri':'Guttieri','Sullivan':'Sullivan','Baram':'Baram','Willett':'Willett',
 'Maschmeyer':'Maschmeyer','Codreanu':'Codreanu','Singh':'Singh','Dimitrov':'Dimitrov',
 'Butt':'Butt','Yigit':'Yigit','Kabir':'Kabir','Melella':'Melella','Pokorny':'Pokorny',
 'Braccia':'Braccia','Urbanczyk':'Urbanczyk','Ferdaus':'Ferdaus','Eichensehr':'Eichensehr',
 'Zettl-Schabath':'Zettl','Lonergan':'Lonergan','Lindsay':'Lindsay','Slayton':'Slayton',
 'Gartzke':'Gartzke','Libicki':'Libicki','Smeets':'Smeets','Fischerkeller':'Fischerkeller',
 'Cunningham':'Cunningham','Buchanan':'Buchanan',
 'Ulina':'Butt','Nanjappa':'Singh','Jash':'Singh','Andreev':'Dimitrov','Poznansky':'Lonergan','Goldman':'Fischerkeller','Harknett':'Fischerkeller',
}

text = open(SRC).read()
head, refs = text.split('## References', 1)

notes = []            # ordered note bodies
seen = set()

def note_for(keys):
    """Return a note number for a list of source keys."""
    parts = []
    for k in keys:
        full, short = S[k]
        txt = full if k not in seen else short
        url = LINKS.get(k)
        if url and 'http' not in txt:
            txt = txt.rstrip().rstrip('.') + ', ' + url + '.'
        parts.append(txt.strip())
        seen.add(k)
    if len(parts) == 1:
        notes.append(parts[0])
    else:
        trimmed = [re.sub(r'\.$', '', p) for p in parts]
        notes.append('; '.join(trimmed) + '.')
    return len(notes)

# --- work sentence by sentence so markers land at sentence ends ---
CITE = re.compile(r'\(([^()]*?\b(?:19|20)\d{2}[^()]*?)\)')

def keys_in(s):
    out = []
    for name, key in ALIAS.items():
        if re.search(r'\b' + re.escape(name) + r'\b', s):
            if key not in out:
                out.append(key)
    return out

out_lines = []
for block in head.split('\n'):
    if block.strip().startswith('|') or block.strip().startswith('#') or not block.strip():
        out_lines.append(block)
        continue
    # split into sentences, keeping delimiters
    sents = re.split(r'(?<=[.!?])(?=\s)', block)
    rebuilt = []
    for sent in sents:
        has_cite = bool(re.search(r'\((?:[^()]*\b(?:19|20)\d{2}[^()]*|n\.d\.)\)', sent))
        if not has_cite:
            rebuilt.append(sent); continue
        keys = keys_in(sent)
        if not keys:
            rebuilt.append(sent); continue
        # strip the year parentheses from the sentence
        s2 = re.sub(r'\s*\((?:[^()]*?\b(?:19|20)\d{2}[^()]*?|n\.d\.)\)', '', sent)
        s2 = re.sub(r'\s+([,.;:])', r'\1', s2)
        s2 = re.sub(r'  +', ' ', s2)
        n = note_for(keys)
        # place marker before the final punctuation of the sentence
        m = re.search(r'([.!?])(\s*)$', s2)
        if m:
            s2 = s2[:m.start()] + m.group(1) + '[^%d]' % n + m.group(2)
        else:
            s2 = s2.rstrip() + '[^%d]' % n
        rebuilt.append(s2)
    out_lines.append(''.join(rebuilt))

body = '\n'.join(out_lines)

notes_block = '\n\n## NOTES\n\n' + '\n'.join('[^%d]: %s' % (i+1, n) for i, n in enumerate(notes)) + '\n'

open(SRC, 'w').write(body + notes_block + '\n## Bibliography' + refs.split('## References',1)[-1])
print('notes generated:', len(notes))
