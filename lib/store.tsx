'use client';
import {createContext,useContext,useEffect,useState,ReactNode} from 'react';
import type {CartItem} from '@/types';
const Ctx=createContext<any>(null);
export const useStore=()=>useContext(Ctx);
export function StoreProvider({children}:{children:ReactNode}){
 const [cart,setCart]=useState<CartItem[]>([]),[wish,setWish]=useState<string[]>([]),[open,setOpen]=useState(false),[coupon,setCoupon]=useState('');
 useEffect(()=>{try{setCart(JSON.parse(localStorage.getItem('u-cart')||'[]'));setWish(JSON.parse(localStorage.getItem('u-wish')||'[]'))}catch{}},[]);
 useEffect(()=>{try{localStorage.setItem('u-cart',JSON.stringify(cart));localStorage.setItem('u-wish',JSON.stringify(wish))}catch{}},[cart,wish]);
 const add=(it:CartItem)=>{setCart(c=>{const f=c.find(x=>x.slug==it.slug&&x.size==it.size&&x.color==it.color);return f?c.map(x=>x==f?{...x,qty:x.qty+it.qty}:x):[...c,it]});setOpen(true)};
 const setQty=(i:number,q:number)=>setCart(c=>q<1?c.filter((_,k)=>k!=i):c.map((x,k)=>k==i?{...x,qty:q}:x));
 const toggleWish=(s:string)=>setWish(w=>w.includes(s)?w.filter(x=>x!=s):[...w,s]);
 return <Ctx.Provider value={{cart,wish,open,setOpen,coupon,setCoupon,add,setQty,toggleWish,clear:()=>{setCart([]);setCoupon('')}}}>{children}</Ctx.Provider>;
}
