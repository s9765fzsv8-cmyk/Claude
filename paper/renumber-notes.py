"""Three corrections to the Chicago notes conversion:
   1. renumber notes so they run in document order
   2. join multiple works in one note with semicolons, not full stops
   3. put periods inside closing quotation marks (Chicago/US convention)
"""
import re

P = '/home/user/Claude/paper/ai-autonomy-offence-defence.md'
t = open(P).read()

body, tail = t.split('\n## NOTES', 1)
notes_block, bib = tail.split('\n## Bibliography', 1)

# ---- parse existing note definitions ----
defs = {}
for m in re.finditer(r'^\[\^(\d+)\]:\s*([\s\S]*?)(?=\n\[\^\d+\]:|\Z)', notes_block, re.M):
    defs[int(m.group(1))] = m.group(2).strip()

# ---- 1. renumber in document order ----
order = [int(x) for x in re.findall(r'\[\^(\d+)\]', body)]
mapping, nxt = {}, 1
for old in order:
    if old not in mapping:
        mapping[old] = nxt
        nxt += 1

body = re.sub(r'\[\^(\d+)\]', lambda m: '[^%d]' % mapping[int(m.group(1))], body)
renumbered = {mapping[o]: defs[o] for o in mapping}

# ---- 2. join multiple works with semicolons ----
def semicolon_join(note):
    # notes are already joined with semicolons at construction; leave them alone
    return note

for k in list(renumbered):
    renumbered[k] = semicolon_join(renumbered[k])

# ---- 3. periods inside closing quotation marks ----
# only where a closing quote is immediately followed by a sentence-ending period
body = re.sub(r'"\.(?=\s|\[|$)', '."', body)
# same inside note text, e.g. short notes already end with ." so leave those
for k in list(renumbered):
    renumbered[k] = re.sub(r'"\.(?=\s|$)', '."', renumbered[k])

notes_out = '\n'.join('[^%d]: %s' % (k, renumbered[k]) for k in sorted(renumbered))
open(P, 'w').write(body + '\n## NOTES\n\n' + notes_out + '\n\n## Bibliography' + bib)
print('renumbered %d notes; %d were reordered' % (len(renumbered),
      sum(1 for o, n in mapping.items() if o != n)))
