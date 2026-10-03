'use client';
import {useEffect,useRef,useState,ReactNode} from 'react';
export default function Reveal({children,className=''}:{children:ReactNode;className?:string}){
 const r=useRef<HTMLDivElement>(null),[v,setV]=useState(false);
 useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){setV(true);o.disconnect()}},{threshold:.1});r.current&&o.observe(r.current);return()=>o.disconnect()},[]);
 return <div ref={r} className={`transition duration-700 ${v?'translate-y-0 opacity-100':'translate-y-4 opacity-0'} ${className}`}>{children}</div>}
