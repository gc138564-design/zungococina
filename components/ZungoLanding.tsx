"use client";

import { useEffect } from "react";
import { zungoCss, zungoBody, zungoScript } from "@/lib/zungoContent";

const heroCss = `
.hero{position:relative;overflow:hidden;padding:90px 0 100px;background:radial-gradient(900px 500px at 10% 80%,#1a3a12 0%,transparent 60%),linear-gradient(135deg,#050505 0%,#0d0a0e 45%,#1a0c17 100%)}
.hero:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:46px 46px;mask-image:radial-gradient(ellipse at center,black 40%,transparent 85%);pointer-events:none}
.hero:after{content:"";position:absolute;width:520px;height:520px;border-radius:50%;right:-220px;top:-60px;background:radial-gradient(circle,#d00091 0%,#d00091 15%,transparent 70%);filter:blur(60px);opacity:.35;pointer-events:none}
.hero-image img{max-height:700px !important;box-shadow:0 30px 100px #000c,0 0 80px #d0009122}
.hero-grid{gap:60px;align-items:center}
.float-wa{display:inline-flex;align-items:center;gap:4px;padding:14px 20px;border-radius:999px;transition:transform .2s,box-shadow .2s}
.float-wa:hover{transform:translateY(-3px);box-shadow:0 12px 40px #000c}
.float-wa svg{flex-shrink:0}

.testimonials{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px;margin-top:32px}
.testimonial{background:#171417;border:1px solid #ffffff18;border-radius:16px;padding:22px}
.testimonial p{color:#ddd;line-height:1.6;margin:0 0 12px}
.testimonial strong{color:var(--pink)}
@media (max-width: 800px){.testimonials{grid-template-columns:1fr}}
.cart-overlay,.cart-panel{z-index:80 !important}

header{position:fixed !important;top:0;left:0;right:0;z-index:50}
main{padding-top:0}
@media (max-width: 800px){main{padding-top:0}}

.reveal{opacity:0;transform:translateY(24px);transition:opacity .6s ease,transform .6s ease}
.reveal.in{opacity:1;transform:none}

.order-band{position:relative;overflow:hidden}
.order-band:before{content:"";position:absolute;width:140px;height:140px;border-radius:50%;background:#ffffff26;top:-50px;right:-40px;pointer-events:none}
.order-band:after{content:"";position:absolute;width:90px;height:90px;border-radius:50%;background:#ffffff1a;bottom:-35px;left:-25px;pointer-events:none}
.hero{position:relative}
.hero:before{pointer-events:none}
@media (max-width: 480px){.cart-label{display:none}}

@media (max-width: 800px){
  footer{padding:40px 0 24px}
  .footer-grid{flex-direction:column;align-items:center;text-align:center;gap:24px}
  .footer-copy{max-width:100%;margin:0}
  .footer-links{justify-content:center;gap:16px}
  .brand-logo{margin:0 auto 12px;max-width:180px;max-height:56px}
  .copyright{margin-top:24px;font-size:.75rem}
}

@media (max-width: 480px){
  .hero h1{font-size:clamp(1.7rem,10vw,2.3rem) !important;line-height:.95}
  .hero-copy{font-size:.88rem !important}
  .hero-image img{max-height:240px !important}
}

@media (max-width: 800px){
  .hero{padding:40px 0 48px}
  .hero-grid{grid-template-columns:1fr;gap:24px;align-items:center}
  .hero h1{font-size:clamp(2rem,11vw,2.8rem);line-height:.9;text-align:center;margin:16px 0 18px}
  .hero-copy{font-size:.92rem;line-height:1.6;text-align:center;max-width:92%;margin:0 auto}
  .hero-buttons{flex-direction:column;align-items:stretch;gap:10px;margin-top:20px}
  .hero-buttons .btn{width:100%;justify-content:center}
  .hero-note{justify-content:center;font-size:.8rem;text-align:center}
  .hero-image{margin:0 auto;max-width:92%}
  .hero-image img{max-height:280px !important;border-radius:16px}
  .image-label{position:absolute;bottom:10px;left:50%;transform:translateX(-50%) rotate(-3deg);font-size:.75rem !important;padding:8px 14px !important;border-radius:10px !important}
}

@media (max-width: 480px){
  .brand-logo{max-width:130px;margin:0 auto 12px}
  .footer-copy{display:block;margin:8px 0 0}
  .footer-links{flex-direction:column;gap:8px}
  .copyright{font-size:.7rem}
}
.menu-close{display:none}
@media (max-width: 800px){
  .menu-close{display:flex;position:fixed;top:18px;right:20px;width:46px;height:46px;border-radius:50%;border:1px solid #ffffff44;background:#171317;color:#fff;font-size:1.6rem;align-items:center;justify-content:center;cursor:pointer;z-index:70;box-shadow:0 6px 20px #0008;transition:background .15s,transform .15s}
  .menu-close:hover{background:var(--pink);border-color:var(--pink);transform:scale(1.05)}
  .navlinks{position:fixed !important;top:0 !important;left:0 !important;right:0 !important;bottom:0 !important;width:100vw !important;height:100vh !important;background:#090909f2;backdrop-filter:blur(12px);z-index:60 !important;display:flex !important;flex-direction:column;align-items:center;justify-content:center;gap:24px;padding:24px;overflow:auto;opacity:0;pointer-events:none;transform:scale(.98);transition:opacity .2s ease,transform .2s ease;will-change:opacity,transform}
  .navlinks.open{opacity:1 !important;pointer-events:auto !important;transform:scale(1) !important}
  .navlinks a{font-size:1.4rem}
}


@media (max-width: 800px){
  .hero{padding:48px 0 56px}
  .hero h1{text-align:center}
  .kicker{text-align:center}
  .hero-copy{font-size:.95rem !important;line-height:1.6 !important}
  .hero-note{font-size:.8rem !important}
  .hero-buttons .btn{padding:12px 18px;font-size:.9rem}
  .hero-copy{text-align:center;margin:0 auto}
  .hero-buttons{justify-content:center}
  .hero-note{justify-content:center}
  .hero-image{text-align:center}
  .hero-image img{max-height:320px !important;border-radius:18px}
  .image-label{left:50%;transform:translateX(-50%) rotate(-3deg);bottom:12px}
}
.kicker::before{content:"";display:inline-block;width:12px;height:12px;margin-right:8px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23b5ed35'%3E%3Cpath d='M12 2l2.4 7.2H22l-6 4.4 2.3 7.2L12 16.4 5.7 20.8 8 13.6 2 9.2h7.6z'/%3E%3C/svg%3E") no-repeat center/contain;vertical-align:middle}

.cart-pill{display:inline-flex;align-items:center;gap:8px;white-space:nowrap}
.brand-logo{filter:drop-shadow(0 2px 10px #000) !important}
.hero{background:url('/images/hero-bg.png') center/cover no-repeat !important;padding-top:90px !important;padding-bottom:0 !important;min-height:100vh !important;display:flex !important;align-items:flex-start !important}
.hero:before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(9,9,9,.45) 0%,rgba(9,9,9,.78) 100%);z-index:0;pointer-events:none}
.hero > *{position:relative;z-index:1}
.hero-grid{grid-template-columns:1fr !important;gap:20px !important;text-align:left;max-width:1200px !important;margin:0 auto !important;width:100% !important}
.hero h1{font-size:clamp(2rem,6vw,3rem) !important;margin:0 0 16px !important;line-height:.95 !important;text-shadow:0 4px 24px #000,0 2px 8px #0008 !important}
.hero-copy{margin:0 0 20px !important;max-width:680px;text-align:left !important}
.hero-buttons{justify-content:flex-start !important}
.hero-note{justify-content:flex-start !important}
.hero-image{margin:0 auto !important;max-width:100% !important}
.hero-image img{max-height:640px !important;width:100% !important;object-fit:cover !important}
.navlinks{position:fixed !important;top:0 !important;left:0 !important;right:0 !important;bottom:0 !important;width:100vw !important;height:100vh !important;background:#090909f2;backdrop-filter:blur(12px);z-index:60 !important;display:flex !important;flex-direction:column;align-items:center;justify-content:center;gap:24px;padding:24px;overflow:auto;opacity:0;pointer-events:none;transform:scale(.98);transition:opacity .2s ease,transform .2s ease}
.navlinks.open{opacity:1 !important;pointer-events:auto !important;transform:scale(1) !important}
.menu-toggle{display:inline-flex !important}
.menu-close{display:flex !important}
.cart-pill svg{flex-shrink:0}
.toast{bottom:96px;max-width:90vw;text-align:center;line-height:1.4}
.add-btn{width:100%;margin-top:12px;margin-bottom:8px}

html,body{overflow-x:hidden}
img{max-width:100%}
.hero-image img{max-width:100% !important}
@media (max-width: 800px){
  .cart-panel{width:100% !important;max-width:100vw;border-radius:18px 18px 0 0 !important;max-height:96vh !important}
  .cart-overlay{padding:0 !important;align-items:flex-end !important}
  .cart-head{position:sticky;top:0;background:#121012;padding-bottom:8px;z-index:2}
  .cart-total{position:sticky;bottom:0;background:#121012;padding-top:8px}
  .cart-panel{padding:14px}
  .checkout-fields input,.checkout-fields textarea{padding:10px 12px;font-size:.9rem}
  .cart-item{padding:10px 0;gap:8px}
  .cart-item-info strong{font-size:1rem}
  .cart-item-info small{font-size:.85rem}
  .qty-btn{width:28px;height:28px;font-size:.9rem}
  .close-cart{width:40px;height:40px}
  .wrap{width:94% !important}
  .nav{flex-wrap:wrap}
  .nav-actions{width:100%;justify-content:space-between}
  .hero-grid{grid-template-columns:1fr !important;gap:20px}
  .hero-image{margin:0}
  .hero-image img{max-height:360px !important}
  .manifesto-grid{grid-template-columns:1fr !important}
  .values{grid-template-columns:1fr !important}
  .steps{grid-template-columns:1fr !important}
  .gallery-grid{grid-template-columns:1fr !important}
  .ingredient-grid{grid-template-columns:repeat(2,minmax(0,1fr)) !important}
  .footer-grid{flex-direction:column !important;gap:20px}
  .order-band-inner{flex-direction:column !important;align-items:flex-start !important}
  .float-wa{right:12px;bottom:12px;padding:12px 16px;font-size:.85rem}
  .toast{left:12px;right:12px;transform:none;max-width:none}
}
@media (max-width: 480px){
  .ingredient-grid{grid-template-columns:1fr !important}
  .product-photo img{height:240px !important}
  .gallery-grid img{height:240px !important}
  .menu-grid{grid-template-columns:1fr !important}
  .product-card{width:100%}

  .hero{padding:48px 0 56px}
  .hero h1{font-size:clamp(1.9rem,8vw,2.6rem);text-align:center}
  .hero-copy{text-align:center;margin:0 auto}
  .hero-buttons{justify-content:center}
  .hero-note{justify-content:center}
  .hero-image{text-align:center}
  .hero-image img{max-height:320px !important;border-radius:18px}
  .image-label{left:50%;transform:translateX(-50%) rotate(-3deg);bottom:12px}
  .hero h1{font-size:clamp(1.7rem,9vw,2.2rem)}
}

.cart-item{display:grid;grid-template-columns:40px 1fr auto;gap:12px;align-items:center;padding:14px 0;border-bottom:1px solid var(--line)}
.qty-badge{width:36px;height:36px;border-radius:50%;background:var(--lime);color:#111;display:flex;align-items:center;justify-content:center;font-weight:1000;font-size:1rem;flex-shrink:0;box-shadow:0 4px 12px #b5ed3544}
.cart-item-info strong{display:block;font-size:.95rem;line-height:1.2}
.cart-item-info small{color:#aaa;font-size:.8rem;margin-top:3px;display:block}
.qty-controls{display:flex;gap:6px;align-items:center}
.qty-btn{width:30px;height:30px;border-radius:50%;border:1px solid #ffffff44;background:#1f1b1f;color:#fff;cursor:pointer;font-weight:900;font-size:1rem;display:flex;align-items:center;justify-content:center;transition:background .15s,border-color .15s}
.qty-btn:hover{background:var(--pink);border-color:var(--pink)}
.remove{background:none;border:0;color:#ff82d7;cursor:pointer;font-size:1.05rem;padding:4px;line-height:1}
@media (max-width: 480px){
  .cart-item{grid-template-columns:36px 1fr auto;gap:8px}
  .qty-badge{width:32px;height:32px;font-size:.9rem}
  .qty-btn{width:26px;height:26px;font-size:.9rem}
}
@media (max-width: 800px){
  .nav{display:flex !important;align-items:center;justify-content:space-between;min-height:52px;gap:8px;padding:4px 0}
  .nav-actions{display:contents !important;gap:8px}
  .logo{order:2;flex:1 1 auto;display:flex;justify-content:center;margin:0}
  .brand-logo{margin:0;max-height:40px}
  .cart-pill{order:1;flex:0 0 auto;display:inline-flex;justify-content:flex-start;padding:8px 12px;font-size:.82rem}
  .menu-toggle{order:3;flex:0 0 auto;display:inline-flex;justify-content:flex-end;padding:8px 10px}
  .cart-pill svg{width:16px;height:16px;margin-right:4px}
  .menu-toggle{padding:8px 10px}
  .hero{padding:56px 0 64px}
  .hero-grid{gap:24px}
  .hero-image img{max-height:420px !important}
  .section-head h2{letter-spacing:-1px}
  .section-head h2{font-size:clamp(1.7rem,7vw,2.4rem) !important}
  .product-photo img{height:260px}
  .gallery-grid img{height:240px}
  .lightbox img{max-width:96vw;max-height:80vh}
}
@media (max-width: 480px){
  .wrap{width:94%}
  .hero h1{font-size:clamp(1.8rem,10vw,2.3rem)}
  .product-body{padding:16px}
  .btn{padding:13px 18px;font-size:.9rem}
  .topbar{font-size:.7rem;letter-spacing:1px}
}
.lightbox{display:none;position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:100;align-items:center;justify-content:center;padding:24px;cursor:zoom-out}
.lightbox.open{display:flex}
.lightbox img{max-width:92vw;max-height:92vh;border-radius:18px;box-shadow:0 30px 100px #000;object-fit:contain}
.product-photo img,.gallery-grid img,.ingredient-card img{cursor:zoom-in}
`;

export default function ZungoLanding() {
  useEffect(() => {
    const script = document.createElement("script");
    script.textContent = zungoScript
      .replace(/\bconst\s+WHATSAPP\b/g, "var WHATSAPP")
      .replace(/\blet\s+cart\b/g, "var cart");
    document.body.appendChild(script);
    const extra = document.createElement("script");
    extra.textContent = `
      function openLightbox(src){var lb=document.getElementById('lightbox');var im=document.getElementById('lightboxImg');im.src=src;lb.classList.add('open');document.body.style.overflow='hidden';}
      function closeLightbox(){var lb=document.getElementById('lightbox');lb.classList.remove('open');document.body.style.overflow='';}
      document.addEventListener('keydown',function(e){if(e.key==='Escape')closeLightbox();});
      function attachZoom(){document.querySelectorAll('.product-photo img,.gallery-grid img,.ingredient-card img').forEach(function(img){img.addEventListener('click',function(){openLightbox(img.src);});});}
      if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',attachZoom);}else{attachZoom();}
      (function(){var els=document.querySelectorAll('section,.product-card,.value,.step,.ingredient-card');els.forEach(function(e){e.classList.add('reveal');});var io=new IntersectionObserver(function(entries){entries.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});},{threshold:.12});els.forEach(function(e){io.observe(e);});})();
      document.addEventListener('click',function(e){var nav=document.getElementById('navlinks');var toggle=document.querySelector('.menu-toggle');if(nav && nav.classList.contains('open') && (!nav.contains(e.target)) && (!toggle || !toggle.contains(e.target))){nav.classList.remove('open');}});
      (function(){var heroImg=document.querySelector('.hero-image img');if(!heroImg)return;var ticking=false;window.addEventListener('scroll',function(){if(ticking)return;ticking=true;requestAnimationFrame(function(){heroImg.style.transform='translateY('+(window.scrollY*0.12)+'px)';ticking=false;});},{passive:true});})();
    `;
    document.body.appendChild(extra);
    return () => {
      script.remove();
      extra.remove();
    };
  }, []);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: zungoCss }} />
      <style dangerouslySetInnerHTML={{ __html: heroCss }} />
      <div dangerouslySetInnerHTML={{ __html: zungoBody }} />
    </>
  );
}
