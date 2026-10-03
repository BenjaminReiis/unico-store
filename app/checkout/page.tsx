'use client';
import Link from 'next/link';
import {useState} from 'react';
import {useStore} from '@/lib/store';
import {totals} from '@/lib/pricing';
import {brl} from '@/lib/format';
import {createPayment} from '@/lib/payments';
const inp='w-full rounded-xl border border-ink/20 bg-white px-4 py-3';
export default function Checkout(){
 const {cart,coupon,setCoupon,clear}=useStore(),[code,setCode]=useState(''),[st,setSt]=useState('idle'),[oid,setOid]=useState(''),[pay,setPay]=useState('pix');
 const t=totals(cart,coupon);
 async function submit(e:React.FormEvent){e.preventDefault();setSt('busy');try{const r=await createPayment(t.total,pay);setOid(r.orderId);clear();setSt('done')}catch{setSt('err')}}
 if(st=='done')return <div className="mx-auto max-w-lg px-4 py-20 text-center"><h1 className="text-4xl font-black">ORDER CONFIRMED</h1><p className="mt-2">Thank you for choosing ÚNICO.</p><p className="mt-4 text-xl font-bold">Order #{oid}</p><p className="text-sm text-ink/60">Pedido de demonstração: nenhum pagamento foi processado.</p><Link href="/shop" className="mt-6 inline-block rounded-full bg-electric px-7 py-3 font-bold text-white">CONTINUE SHOPPING</Link></div>;
 if(!cart.length)return <div className="py-24 text-center"><h1 className="text-3xl font-black">Sua sacola está vazia</h1><Link href="/shop" className="mt-4 inline-block underline">Ir para a loja</Link></div>;
 const M:any={pix:'Pix',card:'Cartão',apple:'Apple Pay',google:'Google Pay'};
 return <form onSubmit={submit} className="mx-auto grid max-w-5xl gap-8 px-4 py-10 md:grid-cols-[1fr_340px]">
  <div className="space-y-3"><h1 className="text-4xl font-black">CHECKOUT</h1>
   <h2 className="pt-3 font-bold">CONTACT</h2><input required type="email" aria-label="E-mail" placeholder="E-mail" className={inp}/>
   <h2 className="pt-3 font-bold">SHIPPING</h2><input required aria-label="Nome" placeholder="Nome completo" className={inp}/><input required aria-label="Endereço" placeholder="Endereço" className={inp}/>
   <div className="grid grid-cols-2 gap-3"><input required aria-label="Cidade" placeholder="Cidade" className={inp}/><input required aria-label="Estado" placeholder="Estado" className={inp}/><input required aria-label="CEP" placeholder="CEP" className={inp}/><input aria-label="País" defaultValue="Brasil" className={inp}/></div>
   <h2 className="pt-3 font-bold">PAYMENT</h2><div className="flex flex-wrap gap-2">{Object.keys(M).map(m=><button type="button" key={m} aria-pressed={pay==m} onClick={()=>setPay(m)} className={`rounded-full border px-4 py-2 ${pay==m?'bg-ink text-white':'border-ink/20'}`}>{M[m]}</button>)}</div>
   <p className="text-sm text-ink/60">Interface de demonstração. A cobrança real entra em lib/payments.ts.</p>
   {st=='err'&&<p role="alert" className="font-bold text-red-600">Não foi possível concluir o pedido. Tente novamente.</p>}</div>
  <aside className="h-fit rounded-2xl bg-white p-5"><h2 className="font-bold">Resumo</h2>
   <div className="mt-3 flex gap-2"><input value={code} onChange={e=>setCode(e.target.value)} placeholder="Cupom (UNICO10)" aria-label="Cupom" className="min-w-0 flex-1 rounded-xl border px-3 py-2"/><button type="button" onClick={()=>setCoupon(code)} className="rounded-xl bg-ink px-3 text-white">Aplicar</button></div>
   {coupon&&<p className="mt-1 text-sm">{t.couponValid?'Cupom aplicado.':'Cupom inválido.'}</p>}
   <dl className="mt-4 space-y-1 text-sm">{[['Subtotal',t.subtotal],['Desconto',-t.discount],['Frete',t.shipping]].map(([k,v]:any)=><div key={k} className="flex justify-between"><dt>{k}</dt><dd>{brl(v)}</dd></div>)}<div className="flex justify-between border-t pt-2 text-lg font-bold"><dt>Total</dt><dd>{brl(t.total)}</dd></div></dl>
   <button disabled={st=='busy'} className="mt-4 w-full rounded-full bg-electric py-3 font-bold text-white disabled:opacity-50">{st=='busy'?'Processando…':'Confirmar pedido (demo)'}</button></aside></form>;
}
