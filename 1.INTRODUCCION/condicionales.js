

//Estructura de un condicional

//if(true){
    //codigo a ejecutar
//}

//Ejemplo #1:

//const usuario={
  //  edad:17,
    //pais:'Mexico',
    //ticket:true,
//};

//if(usuario.edad>17){
//console.log('El usuario es mayor de edad,puede entrar al concierto');

//} else{
 //   console.log('El usuario es menor de edad, no puede entrar al concierto');
//}


//Ejemplo #2- combiando operadores


// const usuario={
    //edad:27,
    // pais:'Mexico',
    // ticket:false,
// };
// tiene que ser ciertas las dos condiciones para ser cierto
// if(usuario.edad>=18 && usuario.ticket){
    //console.log('El usuario es mayor de edad y tiene un ticket');

// }else{
 //   console.log('El usuario es menor de edad o no tiene ticket');
// }

// si se coloca o en la consulta || una de las dos tiene que ser cierto

//.............

//ejemplo #3- Anindando condicionales

//const usuario={
//edad:27,
//pais:'Mexico',
//ticket:false,
//};

// se puede poner algo dentro de algo

//if(usuario.edad>=18){
   // if(usuario.ticket){
   //     console.log('El usuario es mayor de edad y tiene un ticket');
    
   // }else{
   //     console.log('El usuario es mayor de edad,pero no tiene ticket');
   // }
  //}  else{
      //  console.log('El usuario es menor de edad');
    //}


    //Ejemplo #4-elseif


    const usuario={
        edad:27,
        pais:'Venezuela',
        ticket:false,
        };



if(usuario.pais==='Mexico'){
    console.log('El usuario es mexicano');
}else if(usuario.pais==='Colombia'){
    console.log('El usuario es colombiano');
}else if(usuario.pais==='España'){
    console.log('El usuario es Español');
}else{
    console.log('El usuario es de otro pais')
}


