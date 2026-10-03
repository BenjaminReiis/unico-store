import {coupons,getProduct} from '@/data/products';
import type {CartItem} from '@/types';
export const FREE_SHIPPING_FROM=399,SHIPPING_FEE=29.9;
export function totals(items:CartItem[],code=''){
 const subtotal=items.reduce((s,i)=>{const p=getProduct(i.slug);return s+(p?(p.salePrice??p.price)*i.qty:0)},0);
 const cp=coupons.find(c=>c.code===code.trim().toUpperCase());
 const discount=cp?+(subtotal*cp.percent/100).toFixed(2):0;
 const shipping=items.length===0||subtotal-discount>=FREE_SHIPPING_FROM?0:SHIPPING_FEE;
 return{subtotal,discount,shipping,total:subtotal-discount+shipping,couponValid:!!cp};
}
