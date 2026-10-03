import './globals.css';
import type {Metadata} from 'next';
import {StoreProvider} from '@/lib/store';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
export const metadata:Metadata={title:{default:'ÚNICO — Streetwear Made Different',template:'%s | ÚNICO'},description:'Descubra a ÚNICO, uma marca contemporânea de streetwear criada para quem transforma estilo em identidade.',openGraph:{title:'ÚNICO — Streetwear Made Different',type:'website',locale:'pt_BR'}};
export default function Root({children}:{children:React.ReactNode}){return <html lang="pt-BR"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,800&family=DM+Sans:wght@400;500;700&display=swap"/></head><body><StoreProvider><Header/><main>{children}</main><Footer/><CartDrawer/></StoreProvider></body></html>}
