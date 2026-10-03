// MOCK do feed. Para conectar Instagram/TikTok: substitua por fetch da API no servidor (token em variável de ambiente).
export const social={handle:'@unico',url:process.env.NEXT_PUBLIC_INSTAGRAM_URL||'#',posts:['#2F2FE4','#7A4DFF','#E6E8F4','#12123A','#5B5BFF','#C9CCE0'].map((c,i)=>({id:i,color:c,alt:`Post ${i+1} (imagem a substituir)`}))};
