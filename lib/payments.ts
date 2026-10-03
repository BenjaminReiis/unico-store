// PONTO DE INTEGRAÇÃO: troque por chamada ao seu backend (Stripe, Mercado Pago, Pix...).
// Hoje é MOCK: nenhum pagamento real é processado.
export async function createPayment(_amount:number,_method:string){
 await new Promise(r=>setTimeout(r,700));
 return{ok:true,orderId:'UNIC-'+Math.floor(1000+Math.random()*9000),mock:true};
}
