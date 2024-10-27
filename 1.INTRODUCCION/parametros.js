

// const saludo=(nombre='amigo')=>{ //funcion dinamica
//     console.log(`Hola ${nombre}!`);

// };

// saludo('Carlos');
// saludo('Alex');
// saludo('Cesar');
// saludo(); //Default o lo que tenga en la funcion

//Se debe identificar los parametros con argumentos
//Importante aprender la logica

//Parametros: Los valores espedificados en la definicion
//Argumentos:Los valores que le pasamos a la funcion cuando la invocamos

/*
MULTIPLES PARAMETROS- calculadora básica
*/

const operacion=(tipo,numero1,numero2)=>{
    //console.log(numero1+numero2);

    if(tipo==='suma'){
        console.log(numero1+numero2);  
    }else if(tipo=='resta'){
    console.log(numero1-numero2); 
}
};

operacion('suma',100,100);

operacion('resta',100,200);











