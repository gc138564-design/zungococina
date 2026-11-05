import json
p='lib/zungoContent.ts'
s=open(p,encoding='utf-8').read()
start=s.index('export const zungoCss = ')+len('export const zungoCss = ')
end=s.index(';\nexport const zungoBody',start)
css=json.loads(s[start:end])
# find header
i=css.find('header')
print(css[i-50:i+1200])
