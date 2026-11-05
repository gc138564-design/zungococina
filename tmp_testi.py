import json
p='lib/zungoContent.ts'
s=open(p,encoding='utf-8').read()
start=s.index('export const zungoBody = ')+len('export const zungoBody = ')
end=s.index(';\nexport const zungoScript',start)
body=json.loads(s[start:end])
# insert testimonials section before gallery
marker='<section class="gallery" id="galeria">'
testi='''<section id="testimonios"><div class="wrap">
<div class="section-head"><div class="kicker">Lo que dicen</div><h2>CLIENTES<br/>QUE REPITEN.</h2><p>Experiencias reales de quienes ya probaron ZUNGO.</p></div>
<div class="testimonials">
<div class="testimonial"><p>"La mejor hamburguesa que he probado: ingredientes frescos y sabor único."</p><strong>— Ana M.</strong></div>
<div class="testimonial"><p>"El servicio por WhatsApp es rápido y la entrega impecable."</p><strong>— Carlos R.</strong></div>
<div class="testimonial"><p>"El detalle en cada preparación se nota; se siente premium."</p><strong>— Laura G.</strong></div>
</div>
</div></section>
'''
assert marker in body
body=body.replace(marker,testi+marker,1)
# add nav link before Contacto
body=body.replace('<a href="#contacto">Contacto</a>','<a href="#testimonios">Testimonios</a><a href="#contacto">Contacto</a>',1)
new_literal=json.dumps(body,ensure_ascii=False)
s=s[:start]+new_literal+s[end:]
open(p,'w',encoding='utf-8').write(s)
print('done')
