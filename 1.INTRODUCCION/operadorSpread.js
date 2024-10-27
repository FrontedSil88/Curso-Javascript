 

 /* Operador Spread
 Permite tomar los elementos de un arreglo u objetos y expandirlos en otro sitio
 */

 /*Ejemplo*/

//  const frutas=['Manzana','Pera','Piña','Melon', 'Uvas']; // se autoaliza automanticamente 
//  const comidaFavorita=['Pizza','Sushi',...frutas]; //operador Spread
//  console.log(comidaFavorita);


// Tambien funciona con objetos

// const datosLogin={
//     correo:'correo@correo.com',
//     password:'123',
// }


//   const usuario={
//     nombre:'Carlos',
//     ...datosLogin, /* chevere se puede expandir en el objeto 
//                     los datoses,  importante donde se coloca 
//                     por el orden de los elementos */ 
//     edad:27,

//   };

//   console.log(usuario);

/* Parametro Rest
Permite que una funcion contenga un numero indefinido de argumentos.
Los argumentos extra que encuentre los convertira en un arreglo.
*/

// const registrarUsuario=(nombre,correo, ...datosAdicionales)=>{  // se le pone como rest
//     console.log(nombre, correo,datosAdicionales); // arreglo datos Adicionales

// };

// registrarUsuario('Carlos','correo@correo.com'); //llamar a la funcion

// registrarUsuario('Alejandro','alex@correo.com',28, 'España');

//.....


/* Destructuración de objetos
Nos permite obtener elementos o propiedades de un arreglo 
u objetos y guardarlos en una variable.
*/

const amigos=['Alejandro','Cesar','Manuel']; 
// const primerAmigo=amigos[0]; // forma mas compleja
// const segundoAmigo=amigos[1];


// Forma más sencilla- Destructurar el objeto

const[primerAmigo,segundoAmigo,tercerAmigo]=amigos;

console.log(segundoAmigo); //obtengo valores como si fuera variable

const persona={
    nombre:'Carlos',
    edad:27,
    pais:'México',

};

const{nombre,pais,edad}= persona; // objeto

console.log(nombre,pais);


const mostrarEdad=({nombre,edad})=>{ // ojo aqui se pone {}
    console.log( `${nombre} tiene ${edad} años`);
}

mostrarEdad(persona);

/*Tambien se puede poner el nombre y dentro de los parentesis
de los que quieres mostrar se pone llaves*/



