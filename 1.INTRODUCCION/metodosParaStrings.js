

/* .length- Devuelve el número de caracteres de una cadena de texto
*/

// const texto='Hola yo soy Carlos!';
// console.log(texto.length); // es una propiedad no lleva parentesis, solo los metodos llevan parentesis


/* .indexOf() .lastIndexOf()- Devuelve el inde del primer/último caracter especificado
*/

//const texto='Hola yo soy Carlos!';
// console.log(texto.indexOf('o'));

// console.log(texto.lastIndexOf('o')); // utiles para la posicion de una letra

/* 
slice()-Devuelve un fragmento de una cadena de texto
1er parametro-index desde donde queremos cortar
2do parametro(opcional)-index hasta donde queremos cortar
*/

// const texto='Hola yo soy Carlos!';
// const index=texto.indexOf('s');
// const lastindex=texto.lastIndexOf('s');
//console.log(texto.slice (index, lastindex + 1));

// console.log(texto.slice(-7,-1)); // toma un fragmento para devolver y mostrar en consola

// console.log(texto);// el texto no cambia

/* .replace()-devuelve una cadena de texto en donde remplaza un valor por otro 
1er parametro-el texto que queremos remeplazar
2do parametro-el texto que queremos poner
*/



//const texto='Hola yo soy Carlos!';

//console.log(texto.replace('Carlos', 'Arturo'));

/* .split()-Convierte una cadena de texto en un arreglo.
Tenemos que especificar donde cortar cada elemento.

1er parametro-el caracter que funcionara como separador.
*/


const texto='Hola yo soy Carlos!';

texto.split(' '); // lo ideal un espacio

console.log(texto.split(' '));


/* . toUpperCase() .tolowerCase()
Devuelve una cadena de texto de puras minisculas/mayusculas.
*/

console.log(texto.toUpperCase());
console.log(texto.toLowerCase());




