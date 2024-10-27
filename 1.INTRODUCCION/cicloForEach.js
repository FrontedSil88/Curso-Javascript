
// /* Ciclo forEach
// Es un metodo de los arreglos que podemos usar para 
// recorrer los elementos
// */

// const amigos=['Alejandro','Cesar','Manuel'];
// amigos.forEach((amigo,index)=>console.log( `El amigo #${index} es: ${amigo} `));



// /* Ciclo for in
// Nos permite recorrer las propiedades de un objeto
// */

// const persona={
//     nombre:'Carlos',
//     edad:27,
//     correo:'correo@correo.com',
// };

// for(propiedad in persona){
//    // console.log(persona[propiedad]);
//     //Puede borrar con:
//     persona[propiedad]='';

//     // o asi se ve que tiene un valor vacio
//     console.log(persona);
// }


 /* Ciclo for of

Nos permite recorrer los valores de un objeto iterable
Podemos recorrer:Arreglos,cadenas de texto, mapas y listas de nodos, etc
*/

const etiquetas=document.head.children; // todas las etiquetas dentro de head

console.log(etiquetas);

// se usan poco

// for(elemento of etiquetas){
// console.log(elemento);

// }

//otra forma, mejor

[...etiquetas].forEach((elemento)=>console.log(elemento));


