import Link from 'next/link';
import {products,categories} from '@/data/products';
import {social} from '@/data/social';
import ProductCard from '@/components/ProductCard';
import ProductImage from '@/components/ProductImage';
import CategoryCard from '@/components/CategoryCard';
import CollectionBanner from '@/components/CollectionBanner';
import Reveal from '@/components/Reveal';
import Spark from '@/components/Spark';
const LOT=100; // MOCK: tamanho do lote da edição limitada
const grad:Record<string,[string,string]>={Camisetas:['#2F2FE4','#7A4DFF'],Moletons:['#7A4DFF','#12123A'],Calças:['#12123A','#2F2FE4'],Acessórios:['#5B5BFF','#7A4DFF'],Sneakers:['#2F2FE4','#12123A']};
const phrases=['BE DIFFERENT','DON\'T FOLLOW. DEFINE.','NOT EVERYONE GETS IT','WEAR YOUR IDENTITY'];
export default function Home(){
 const fresh=products.filter(p=>p.badge=='NEW').slice(0,4),ltd=products.filter(p=>p.badge=='LIMITED')[0];
 const H=({t,s}:{t:string;s:string})=><div className="mb-7"><h2 className="text-4xl font-extrabold md:text-5xl">{t}</h2><p className="mt-1 text-ink/60">{s}</p></div>;
 return <>
 <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-2 md:items-center md:py-16">
  <div className="min-w-0"><p className="font-bold text-electric">NEW DROP</p>
   <h1 className="mt-2 bg-gradient-to-r from-ink via-electric to-violet bg-clip-text pb-2 text-[2.6rem] font-extrabold leading-[.95] sm:text-6xl text-transparent md:text-8xl">BE DIFFERENT. BE ÚNICO.</h1>
   <p className="mt-5 max-w-md text-lg text-ink/70">Descubra peças criadas para quem não nasceu para seguir tendências.</p>
   <div className="mt-7 flex flex-wrap gap-3"><Link href="/shop" className="rounded-full bg-electric px-7 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg">SHOP NOW</Link><Link href="/shop?q=After%20Dark" className="rounded-full border-2 border-ink px-7 py-3 font-bold transition hover:bg-ink hover:text-white">EXPLORE COLLECTION</Link></div></div>
  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-electric via-violet to-[#1b1b66]">
   <Spark className="absolute -right-8 top-6 h-56 w-56 text-white/20 md:h-72 md:w-72"/><Spark className="absolute bottom-16 left-8 h-16 w-16 text-white/60"/>
   <div className="absolute inset-x-0 bottom-0 p-6 text-white"><p className="text-sm font-bold">DROP 01 · AFTER DARK</p><p className="text-xs uppercase tracking-widest text-white/70">Foto de campanha: substituir</p></div></div>
 </section>
 <div className="overflow-hidden bg-gradient-to-r from-ink via-electric to-violet py-3 text-white" aria-hidden="true"><div className="flex w-max animate-[mq_28s_linear_infinite] gap-10 whitespace-nowrap font-display text-lg font-extrabold">{[...phrases,...phrases,...phrases,...phrases].map((t,i)=><span key={i} className="flex items-center gap-10">{t}<Spark className="h-4 w-4"/></span>)}</div></div>
 <Reveal><section className="mx-auto max-w-7xl px-4 py-14"><H t="NEW DROP" s="As peças que acabam de chegar."/>
  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">{fresh.map(p=><ProductCard key={p.slug} p={p}/>)}</div>
  <div className="mt-8 text-center"><Link href="/shop?sort=new" className="inline-block rounded-full border-2 border-ink px-7 py-3 font-bold transition hover:bg-ink hover:text-white">Ver todos os lançamentos</Link></div></section></Reveal>
 <Reveal><section className="mx-auto max-w-7xl px-4 py-10"><H t="SHOP BY CATEGORY" s="Escolha por onde começar."/>
  <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4">
   {categories.map((c,i)=><CategoryCard key={c} name={c} from={grad[c][0]} to={grad[c][1]} count={products.filter(p=>p.category==c).length} className={i==0?'col-span-2 md:row-span-2 md:min-h-[360px]':i==4?'col-span-2 md:col-span-1':''}/>)}</div></section></Reveal>
 <Reveal><CollectionBanner/></Reveal>
 {ltd&&<Reveal><section className="bg-gradient-to-br from-[#1b1b66] via-electric to-violet py-16 text-white"><div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2">
  <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl"><ProductImage p={ltd}/><span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-ink">LIMITED DROP</span></div>
  <div><h2 className="text-5xl font-extrabold md:text-6xl">LIMITED EDITION</h2><p className="mt-3 max-w-md text-white/85">Algumas peças não foram feitas para durar para sempre. Tiragem curta, numerada e sem reposição.</p>
   <h3 className="mt-6 text-2xl font-bold">{ltd.name}</h3>
   <div className="mt-4 max-w-sm"><div className="flex justify-between text-sm font-bold"><span>Only {ltd.stock} pieces available</span><span>de {LOT}</span></div><div className="mt-2 h-2 rounded bg-white/25"><div className="h-2 rounded bg-white" style={{width:ltd.stock/LOT*100+'%'}}/></div><p className="mt-2 text-xs text-white/60">Números demonstrativos, vindos do estoque cadastrado.</p></div>
   <div className="mt-7 flex flex-wrap gap-3"><Link href={`/product/${ltd.slug}`} className="rounded-full bg-white px-7 py-3 font-bold text-ink transition hover:-translate-y-0.5 hover:shadow-xl">Garantir a minha</Link><Link href="/shop" className="rounded-full border-2 border-white px-7 py-3 font-bold transition hover:bg-white hover:text-ink">Ver tudo</Link></div></div></div></section></Reveal>}
 <Reveal><section className="mx-auto max-w-7xl overflow-hidden px-4 py-16 text-center"><Spark className="mx-auto h-10 w-10 text-violet"/><p className="font-display mt-4 text-4xl font-extrabold leading-none tracking-tight sm:text-5xl md:text-8xl">NOT EVERYONE<br/>GETS IT.</p><Link href="/shop" className="mt-8 inline-block rounded-full bg-electric px-7 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg">Ver a coleção</Link></section></Reveal>
 <Reveal><section className="mx-auto max-w-7xl px-4 py-10"><H t="FOLLOW THE ÚNICO" s="Streetwear, lifestyle and everything in between."/>
  <div className="grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-3">{social.posts.map(p=><a key={p.id} href={social.url} aria-label={p.alt} className="group relative grid aspect-square place-items-center overflow-hidden rounded-xl" style={{background:p.color}}><Spark className="h-1/3 w-1/3 text-white/40 transition duration-500 group-hover:scale-125 group-hover:text-white/80"/></a>)}</div>
  <a href={social.url} className="mt-6 inline-block font-bold text-electric underline-offset-4 hover:underline">{social.handle} no Instagram →</a></section></Reveal>
 <section className="mx-auto max-w-xl px-4 py-16 text-center"><h2 className="text-3xl font-extrabold md:text-4xl">JOIN THE ÚNICO WORLD</h2><p className="mt-2 text-ink/60">Receba primeiro os novos drops, coleções exclusivas e novidades da ÚNICO.</p>
  <form className="mt-5 flex gap-2"><input type="email" required aria-label="Seu e-mail" placeholder="Your email" className="min-w-0 flex-1 rounded-full border border-ink/20 px-5 py-3"/><button className="rounded-full bg-ink px-6 font-bold text-white">JOIN</button></form></section></>;
}
