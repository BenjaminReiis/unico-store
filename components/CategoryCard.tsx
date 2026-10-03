import Link from 'next/link';
export default function CategoryCard({name,from,to,count,className=''}:{name:string;from:string;to:string;count:number;className?:string}){
 return <Link href={`/shop?cat=${encodeURIComponent(name)}`} className={`group relative flex min-h-[170px] flex-col justify-end overflow-hidden rounded-2xl p-5 text-white ${className}`} style={{background:`linear-gradient(150deg,${from},${to})`}}>
  <span className="absolute right-4 top-3 text-6xl font-black text-white/15 transition duration-500 group-hover:scale-125 group-hover:text-white/25">Ú</span>
  <span className="font-display text-2xl font-extrabold md:text-3xl">{name}</span>
  <span className="mt-1 text-sm text-white/75">{count} peças <span className="inline-block transition group-hover:translate-x-1">→</span></span></Link>}
