import ShopView from '@/components/ShopView';
export const metadata={title:'Shop'};
export default function Shop({searchParams}:{searchParams:{q?:string;cat?:string;sort?:string}}){
 return <ShopView key={JSON.stringify(searchParams)} q={searchParams.q} cat={searchParams.cat} sort={searchParams.sort}/>;
}
