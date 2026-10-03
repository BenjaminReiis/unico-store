'use client';
import Link from 'next/link';
import {useEffect} from 'react';
import {useStore} from '@/lib/store';
import {getProduct} from '@/data/products';
import {totals,FREE_SHIPPING_FROM} from '@/lib/pricing';
import {brl} from '@/lib/format';
import ProductImage from './ProductImage';
export default function CartDrawer(){
 const {cart,open,setOpen,setQty,coupon}=useStore(),t=totals(cart,coupon);
 useEffect(()=>{const f=(e:KeyboardEvent)=>e.key=='Escape'&&setOpen(false);document.addEventListener('keydown',f);return()=>document.removeEventListener('keydown',f)},[setOpen]);
 if(!open)return null;
 return <div className="fixed inset-0 z-40" role="dialog" aria-modal="true" aria-label="Sacola">
  <div className="absolute inset-0 bg-ink/50" onClick={()=>setOpen(false)}/>
  <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-off p-5">
   <div className="flex items-center justify-between"><h2 className="text-2xl font-black">Sua sacola</h2><button onClick={()=>setOpen(false)} aria-label="Fechar" className="text-3xl">×</button></div>
   <p className="mt-2 text-sm">{t.subtotal>=FREE_SHIPPING_FROM?'Frete grátis garantido.':`Faltam ${brl(FREE_SHIPPING_FROM-t.subtotal)} para o frete grátis`}</p>
   <div className="mt-1 h-2 rounded bg-cloud"><div className="h-2 rounded bg-gradient-to-r from-electric to-violet" style={{width:Math.min(100,t.subtotal/FREE_SHIPPING_FROM*100)+'%'}}/></div>
   <div className="my-4 flex-1 overflow-auto">{cart.length==0&&<p className="text-ink/60">Sua sacola está vazia. Comece pelo New Drop.</p>}
    {cart.map((i:any,k:number)=>{const p=getProduct(i.slug)!;return <div key={k} className="flex gap-3 border-b border-ink/10 py-3">
     <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-lg"><ProductImage p={p} compact/></div>
     <div className="flex-1 text-sm"><b>{p.name}</b><div className="text-ink/60">{i.size} · {i.color}</div>
      <div className="mt-1 flex items-center gap-2"><button aria-label="Diminuir" className="h-7 w-7 rounded-full border" onClick={()=>setQty(k,i.qty-1)}>−</button>{i.qty}<button aria-label="Aumentar" className="h-7 w-7 rounded-full border" onClick={()=>setQty(k,i.qty+1)}>+</button>
      <button className="ml-auto text-xs underline" onClick={()=>setQty(k,0)}>Remover</button></div></div>
     <b className="text-sm">{brl((p.salePrice??p.price)*i.qty)}</b></div>})}</div>
   <div className="flex justify-between font-bold"><span>Subtotal</span><span>{brl(t.subtotal)}</span></div>
   <Link href="/checkout" onClick={()=>setOpen(false)} aria-disabled={!cart.length} className={`mt-3 block rounded-full bg-electric py-3 text-center font-bold text-white ${cart.length?'':'pointer-events-none opacity-50'}`}>CHECKOUT</Link>
  </aside></div>;
}
