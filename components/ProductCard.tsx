'use client';
import Link from 'next/link';
import type {Product} from '@/types';
import {brl} from '@/lib/format';
import {useStore} from '@/lib/store';
import ProductImage from './ProductImage';
export default function ProductCard({p}:{p:Product}){
 const {wish,toggleWish}=useStore(),on=wish.includes(p.slug);
 return <div className="group relative">
  <Link href={`/product/${p.slug}`} className="block">
   <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cloud"><ProductImage p={p} className="transition duration-500 group-hover:scale-105"/>
    {p.badge&&<span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-ink">{p.badge}</span>}
    {p.stock===0&&<span className="absolute bottom-3 left-3 rounded-full bg-ink px-3 py-1 text-xs font-bold text-white">Esgotado</span>}</div>
   <div className="mt-3 flex flex-col gap-1 md:flex-row md:justify-between md:gap-2"><div><h3 className="font-semibold">{p.name}</h3>
    <div className="mt-1 flex gap-1">{p.colors.map(c=><span key={c.name} title={c.name} className="h-3 w-3 rounded-full border border-ink/20" style={{background:c.hex}}/>)}</div></div>
    <div className="text-sm md:text-right">{p.salePrice?<><s className="text-ink/50">{brl(p.price)}</s><div className="font-bold">{brl(p.salePrice)}</div></>:<b>{brl(p.price)}</b>}</div></div>
  </Link>
  <button aria-label={on?'Remover dos favoritos':'Salvar nos favoritos'} aria-pressed={on} onClick={()=>toggleWish(p.slug)} className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-lg transition active:scale-90">{on?'♥':'♡'}</button></div>;
}
