import {notFound} from 'next/navigation';
import {products,getProduct} from '@/data/products';
import ProductView from '@/components/ProductView';
export const generateStaticParams=()=>products.map(p=>({slug:p.slug}));
export const generateMetadata=({params}:{params:{slug:string}})=>({title:getProduct(params.slug)?.name??'Produto'});
export default function Page({params}:{params:{slug:string}}){const p=getProduct(params.slug);if(!p)notFound();return <ProductView p={p}/>}
