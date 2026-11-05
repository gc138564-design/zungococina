import json
p='lib/zungoContent.ts'
s=open(p,encoding='utf-8').read()
start=s.index('export const zungoCss = ')+len('export const zungoCss = ')
end=s.index(';\nexport const zungoBody',start)
css=json.loads(s[start:end])
import re
for m in re.finditer(r'#[dD]00091|pink|#ff', css):
    print(m.start(), css[max(0,m.start()-60):m.start()+60])
