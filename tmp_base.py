import json
p='lib/zungoContent.ts'
s=open(p,encoding='utf-8').read()
start=s.index('export const zungoCss = ')+len('export const zungoCss = ')
end=s.index(';\nexport const zungoBody',start)
css=json.loads(s[start:end])
import re
for m in re.finditer(r'@media[^{]*\{[^}]*\.logo[^}]*\}', css):
    print(m.group(0)[:400])
    print('---')
