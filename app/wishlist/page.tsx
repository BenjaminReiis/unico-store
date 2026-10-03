'use client';
import Link from 'next/link';
import {useStore} from '@/lib/store';
import {products} from '@/data/products';
import ProductCard from '@/components/ProductCard';
export default function Wishlist(){const {wish}=useStore(),l=products.filter(p=>wish.includes(p.slug));
 return <div className="mx-auto max-w-7xl px-4 py-10"><h1 className="text-5xl font-black">WISHLIST</h1>
 {l.length==0?<div className="py-20 text-center"><h2 className="text-2xl font-black">YOUR WISHLIST IS EMPTY</h2><p className="text-ink/60">Save your favorite ÚNICO pieces here.</p><Link href="/shop" className="mt-5 inline-block rounded-full bg-electric px-6 py-3 font-bold text-white">SHOP NOW</Link></div>
 :<div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">{l.map(p=><ProductCard key={p.slug} p={p}/>)}</div>}</div>}
