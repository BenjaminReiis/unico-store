export interface Color{name:string;hex:string}
export interface Product{slug:string;name:string;category:string;gender:'unisex'|'men'|'women';price:number;salePrice?:number;colors:Color[];sizes:string[];stock:number;badge?:'NEW'|'LIMITED'|'SALE';description:string;materials:string;images:string[];collection:string;createdAt:string}
export interface CartItem{slug:string;size:string;color:string;qty:number}
export interface Coupon{code:string;percent:number}
export interface Address{name:string;street:string;city:string;state:string;zip:string;country:string}
export interface OrderItem{slug:string;size:string;color:string;qty:number;unitPrice:number}
export interface Order{id:string;items:OrderItem[];total:number;status:'Processing'|'Shipped'|'Delivered';address:Address;createdAt:string}
// Fase backend: Category, Collection, Variant, User, Wishlist, Review.
