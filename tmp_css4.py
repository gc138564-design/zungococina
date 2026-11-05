import json
p='lib/zungoContent.ts'
s=open(p,encoding='utf-8').read()
start=s.index('export const zungoCss = ')+len('export const zungoCss = ')
end=s.index(';\nexport const zungoBody',start)
css=json.loads(s[start:end])
print(css[11280:11520])
