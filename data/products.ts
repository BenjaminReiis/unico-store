import type {Product,Coupon} from '@/types';
const C={blue:{name:'Azul',hex:'#2F2FE4'},violet:{name:'Violeta',hex:'#7A4DFF'},off:{name:'Off-white',hex:'#F4F5FB'},ink:{name:'Marinho',hex:'#12123A'},grey:{name:'Cinza',hex:'#C9CCE0'}};
const L=['P','M','G','GG'],ONE=['Único'];
// DEMO: produtos, preços e estoque fictícios. Preencha `images` com URLs reais.
const mk=(slug:string,name:string,category:string,price:number,o:Partial<Product>={}):Product=>({slug,name,category,gender:'unisex',price,colors:[C.blue,C.off,C.ink],sizes:L,stock:30,description:'Peça de demonstração da ÚNICO, corte oversized e acabamento premium.',materials:'100% algodão (demonstrativo).',images:[],collection:'After Dark',createdAt:'2026-09-01',...o});
export const products:Product[]=[
mk('oversized-tee','ÚNICO Oversized Tee','Camisetas',189.9,{badge:'NEW'}),
mk('signature-tee','ÚNICO Signature Tee','Camisetas',169.9,{badge:'NEW',colors:[C.violet,C.off]}),
mk('urban-graphic-tee','Urban Graphic Tee','Camisetas',199.9,{salePrice:149.9,badge:'SALE'}),
mk('core-hoodie','Core Hoodie','Moletons',349.9,{colors:[C.ink,C.grey]}),
mk('limited-hoodie','Limited Edition Hoodie','Moletons',449.9,{badge:'LIMITED',stock:47,colors:[C.violet]}),
mk('urban-cargo','Urban Cargo','Calças',329.9,{badge:'NEW',colors:[C.ink,C.grey]}),
mk('wide-leg-denim','Wide Leg Denim','Calças',389.9,{colors:[C.blue]}),
mk('signature-cap','Signature Cap','Acessórios',119.9,{sizes:ONE}),
mk('crossbody-bag','ÚNICO Crossbody Bag','Acessórios',149.9,{sizes:ONE,stock:0}),
mk('motion-runner','Motion Runner','Sneakers',599.9,{sizes:['38','40','42','44'],badge:'NEW',colors:[C.off,C.blue]}),
];
export const categories=['Camisetas','Moletons','Calças','Acessórios','Sneakers'];
export const coupons:Coupon[]=[{code:'UNICO10',percent:10}];
export const getProduct=(s:string)=>products.find(p=>p.slug===s);
