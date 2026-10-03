'use client';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {useState} from 'react';
import {useStore} from '@/lib/store';
const nav=[['New','/shop?sort=new'],['Camisetas','/shop?cat=Camisetas'],['Moletons','/shop?cat=Moletons'],['Calças','/shop?cat=Calças'],['Acessórios','/shop?cat=Acessórios'],['Sneakers','/shop?cat=Sneakers']];
export default function Header(){
 const {cart,wish,setOpen}=useStore(),r=useRouter(),[m,setM]=useState(false),[s,setS]=useState(false),[q,setQ]=useState('');
 const n=cart.reduce((a:number,i:any)=>a+i.qty,0);
 return <header className="sticky top-0 z-30 border-b border-ink/10 bg-off/90 backdrop-blur">
  <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4">
   <button className="text-2xl lg:hidden" aria-label="Menu" aria-expanded={m} onClick={()=>setM(!m)}>{m?'×':'☰'}</button>
   <Link href="/" className="flex items-center gap-2 font-display text-xl font-extrabold tracking-wider"><img src="/logo.png" alt="" className="h-7 w-auto"/>ÚNICO</Link>
   <nav aria-label="Principal" className="ml-6 hidden gap-5 text-sm font-medium lg:flex">{nav.map(([l,h])=><Link key={l} href={h} className="transition hover:text-electric">{l}</Link>)}</nav>
   <div className="ml-auto flex items-center gap-3">
    <button className="text-lg lg:hidden" aria-label="Buscar" aria-expanded={s} onClick={()=>setS(!s)}>⌕</button>
    <form role="search" onSubmit={e=>{e.preventDefault();setS(false);r.push('/shop?q='+encodeURIComponent(q))}} className={s?'absolute inset-x-0 top-16 flex border-b border-ink/10 bg-off p-3 lg:static lg:border-0 lg:bg-transparent lg:p-0':'hidden lg:flex'}>
     <input value={q} onChange={e=>setQ(e.target.value)} aria-label="Buscar produtos" placeholder="Buscar" className="w-full rounded-full border border-ink/20 bg-white px-4 py-1.5 text-sm lg:w-48"/></form>
    <Link href="/wishlist" aria-label="Favoritos" className="hidden lg:block">♡<sup>{wish.length||''}</sup></Link>
    <button onClick={()=>setOpen(true)} className="whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-sm font-bold text-white lg:px-4" aria-label="Abrir sacola">Sacola ({n})</button></div>
  </div>
  {m&&<nav className="grid border-t border-ink/10 px-4 py-2 lg:hidden">{[...nav,['Favoritos ('+wish.length+')','/wishlist']].map(([l,h])=><Link key={l} href={h} onClick={()=>setM(false)} className="py-3 text-lg font-semibold">{l}</Link>)}</nav>}
 </header>;
}
