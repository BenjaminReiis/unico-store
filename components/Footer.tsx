import Link from 'next/link';
const cols:Record<string,string[][]>={Shop:[['New','/shop?sort=new'],['Todos','/shop']],Ajuda:[['Trocas e devoluções','/#ajuda'],['Contato','/#ajuda']],Social:[['Instagram',process.env.NEXT_PUBLIC_INSTAGRAM_URL||'#'],['TikTok',process.env.NEXT_PUBLIC_TIKTOK_URL||'#'],['Pinterest',process.env.NEXT_PUBLIC_PINTEREST_URL||'#']]};
export default function Footer(){return <footer id="ajuda" className="mt-20 bg-ink py-12 text-off"><div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-4">
 <div><div className="text-3xl font-black">ÚNICO</div><p className="mt-2 text-sm text-off/70">Streetwear made different.</p></div>
 {Object.entries(cols).map(([t,l])=><div key={t}><b>{t}</b><ul className="mt-3 space-y-2 text-sm text-off/70">{l.map(([n,h])=><li key={n}><Link href={h}>{n}</Link></li>)}</ul></div>)}
 </div><p className="mx-auto mt-10 max-w-7xl px-4 text-xs text-off/50">© 2026 ÚNICO. Loja de demonstração: produtos e preços fictícios.</p></footer>}
