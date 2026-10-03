import type {Product} from '@/types';
// Sem foto real: placeholder identificado. Preencha `images` em data/products.ts.
export default function ProductImage({p,className='',compact=false}:{p:Product;className?:string;compact?:boolean}){
 if(p.images[0])return <>
  <img src={p.images[0]} alt={p.name} loading="lazy" className={`absolute inset-0 h-full w-full object-cover ${className}`}/>
  {p.images[1]&&<img src={p.images[1]} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-0 transition group-hover:opacity-100"/>}</>;
 return <div role="img" aria-label={`${p.name} (imagem a substituir)`} className={`absolute inset-0 grid place-items-center ${className}`} style={{background:`linear-gradient(145deg,${p.colors[0].hex},#12123A)`}}>
  <div className="text-center text-white/80"><div className="text-5xl font-black">Ú</div><div className={`mt-2 text-[10px] ${compact?"hidden":""}`}><div className="text-[10px] uppercase tracking-widest">Foto do produto: substituir</div></div></div></div>;
}
