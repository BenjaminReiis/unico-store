import Link from 'next/link';
import Spark from './Spark';
export default function CollectionBanner(){return <section className="mx-auto max-w-7xl px-4 py-12"><div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-electric via-[#4B3AF0] to-violet p-8 text-white md:p-16">
 <Spark className="absolute -right-10 -top-10 h-72 w-72 text-white/10 md:h-[28rem] md:w-[28rem]"/>
 <p className="text-sm font-bold">COLLECTION 01</p>
 <h2 className="font-display mt-2 text-6xl font-extrabold leading-none md:text-9xl">AFTER<br/>DARK</h2>
 <p className="mt-5 max-w-md text-white/85">Uma coleção inspirada na energia das cidades, na cultura urbana e na liberdade de criar o próprio caminho.</p>
 <Link href="/shop?q=After%20Dark" className="mt-7 inline-block rounded-full bg-white px-7 py-3 font-bold text-ink transition hover:-translate-y-0.5 hover:shadow-xl">EXPLORE COLLECTION</Link></div></section>}
