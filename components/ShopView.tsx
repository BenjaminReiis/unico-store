'use client';
import {useMemo,useState} from 'react';
import {products,categories} from '@/data/products';
import ProductCard from './ProductCard';
export default function ShopView({q='',cat='',sort='featured'}:{q?:string;cat?:string;sort?:string}){
 const [c,setC]=useState(cat),[s,setS]=useState(sort),[avail,setAvail]=useState(false);
 const list=useMemo(()=>{const k=q.toLowerCase().trim(),pr=(p:any)=>p.salePrice??p.price;
  let l=products.filter(p=>(!c||p.category==c)&&(!avail||p.stock>0)&&(!k||(p.name+p.category+p.collection).toLowerCase().includes(k)));
  if(s=='asc')l=[...l].sort((a,b)=>pr(a)-pr(b));if(s=='desc')l=[...l].sort((a,b)=>pr(b)-pr(a));if(s=='new')l=[...l].sort((a,b)=>+(b.badge=='NEW')-+(a.badge=='NEW'));
  return l},[q,c,s,avail]);
 return <div className="mx-auto max-w-7xl px-4 py-10"><h1 className="text-5xl font-black">SHOP</h1>
  <div className="my-5 flex flex-wrap items-center gap-2">
   {['',...categories].map(x=><button key={x} aria-pressed={c==x} onClick={()=>setC(x)} className={`rounded-full border px-4 py-1.5 text-sm ${c==x?'bg-ink text-white':'border-ink/20'}`}>{x||'Todos'}</button>)}
   <label className="ml-2 text-sm"><input type="checkbox" checked={avail} onChange={e=>setAvail(e.target.checked)}/> Só disponíveis</label>
   <select aria-label="Ordenar" value={s} onChange={e=>setS(e.target.value)} className="ml-auto rounded-full border border-ink/20 bg-white px-3 py-1.5 text-sm"><option value="featured">Featured</option><option value="new">Newest</option><option value="asc">Price Low to High</option><option value="desc">Price High to Low</option></select></div>
  <p className="mb-4 text-sm text-ink/60">{list.length} produtos{q&&` para “${q}”`}</p>
  {list.length==0?<div className="py-20 text-center"><h2 className="text-2xl font-black">No results found</h2><p className="text-ink/60">Tente outra palavra, como camiseta, hoodie, boné ou tênis.</p></div>
  :<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">{list.map(p=><ProductCard key={p.slug} p={p}/>)}</div>}</div>;
}
