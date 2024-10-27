// Para menos linea de codigo


const boleto='vip';
//let codigoDeAcceso;

//if(boleto==='vip'){
//    codigoDeAcceso='VIP-123-456';

//}else {
  //  codigoDeAcceso='REGULAR-456-789';
//}

//console.log(codigoDeAcceso);

//operador termario

const codigoDeAcceso = (boleto === 'vip') ? 'VIP-123-456': 'REGULAR-456-789';

console.log(codigoDeAcceso);

// tambien se usa como un condicional if

boleto === 'vip' 
? 
console.log('Tu boleto es de tipo VIP') 
: 
console.log('Tu boleto es de tipo REGULAR');





