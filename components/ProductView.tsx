'use client';
import {useState} from 'react';
import type {Product} from '@/types';
import {brl} from '@/lib/format';
import {useStore} from '@/lib/store';
import ProductImage from './ProductImage';
export default function ProductView({p}:{p:Product}){
 const {add,toggleWish,wish}=useStore(),[size,setSize]=useState(p.sizes.length==1?p.sizes[0]:''),[color,setColor]=useState(p.colors[0].name),[qty,setQty]=useState(1),[err,setErr]=useState(''),[ok,setOk]=useState(false);
 const out=p.stock==0,go=()=>{if(!size){setErr('Escolha um tamanho');return}setErr('');add({slug:p.slug,size,color,qty});setOk(true);setTimeout(()=>setOk(false),1800)};
 return <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-2">
  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-cloud"><ProductImage p={p}/></div>
  <div><p className="text-sm text-ink/60">{p.category} · {p.collection}</p><h1 className="text-4xl font-black">{p.name}</h1>
   <p className="mt-2 text-2xl font-bold">{p.salePrice?<><s className="mr-2 text-ink/40">{brl(p.price)}</s>{brl(p.salePrice)}</>:brl(p.price)}</p>
   <p className="mt-1 text-sm">{out?'Out of Stock':p.stock<=10?'Low Stock':'In Stock'}</p>
   <p className="mt-4 text-ink/70">{p.description}</p>
   <b className="mt-5 block">Cor: {color}</b><div className="mt-2 flex gap-2">{p.colors.map(c=><button key={c.name} aria-label={c.name} aria-pressed={color==c.name} onClick={()=>setColor(c.name)} className={`h-9 w-9 rounded-full border-2 ${color==c.name?'ring-2 ring-violet ring-offset-2':''}`} style={{background:c.hex}}/>)}</div>
   <b className="mt-5 block">Tamanho</b><div className="mt-2 flex flex-wrap gap-2">{p.sizes.map(s=><button key={s} aria-pressed={size==s} onClick={()=>setSize(s)} className={`min-w-12 rounded-xl border px-3 py-3 font-bold ${size==s?'border-electric bg-electric text-white':'border-ink/20'}`}>{s}</button>)}</div>
   {err&&<p role="alert" className="mt-2 text-sm font-bold text-red-600">{err}</p>}
   <div className="mt-5 flex items-center gap-3"><button aria-label="Diminuir" className="h-10 w-10 rounded-full border" onClick={()=>setQty(Math.max(1,qty-1))}>−</button>{qty}<button aria-label="Aumentar" className="h-10 w-10 rounded-full border" onClick={()=>setQty(qty+1)}>+</button></div>
   <div className="mt-5 flex gap-3"><button disabled={out} onClick={go} className="flex-1 rounded-full bg-electric py-4 font-bold text-white transition active:scale-95 disabled:opacity-40">{out?'ESGOTADO':ok?'ADICIONADO ✓':'ADD TO CART'}</button>
    <button aria-label="Favoritar" aria-pressed={wish.includes(p.slug)} onClick={()=>toggleWish(p.slug)} className="h-14 w-14 rounded-full border-2 border-ink text-xl">{wish.includes(p.slug)?'♥':'♡'}</button></div>
   <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">{[['Materials',p.materials],['Shipping & Returns','Frete grátis acima de R$ 399. Troca em até 30 dias (texto demonstrativo).'],['Size Guide','Tabela de medidas: pendente (substituir por valores reais).']].map(([t,b])=><details key={t} className="py-3"><summary className="cursor-pointer font-bold">{t}</summary><p className="mt-2 text-sm text-ink/70">{b}</p></details>)}</div>
  </div></div>;
}
