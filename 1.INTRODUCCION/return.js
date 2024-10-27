

// const operacion=(tipo,numero1,numero2)=>{
//     let resultado;
//     if(tipo==='suma'){
//         resultado=numero1+numero2
//         //console.log(numero1+numero2);  
//     }else if(tipo=='resta'){

//         resultado=numero1-numero2;
//     //console.log(numero1-numero2); 
//     }

//     return resultado;   //importante 
// };

// const miVariable= operacion('suma',100,11);

// console.log(miVariable);



    const operacion=(tipo,numero1,numero2)=>{
    if(tipo==='suma'){
      return numero1+numero2
    }else if(tipo=='resta'){

    return numero1-numero2; //devuelve el valor, 
    }

};

    const miVariable= operacion('suma',150,111);
    console.log(miVariable);


