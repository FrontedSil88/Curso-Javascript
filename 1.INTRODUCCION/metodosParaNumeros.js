

/*toString()
*/

// const numero =10;
// console.log(numero,typeof numero);

// /* queremos que sea una cadena de texto, tenemos que usar
// toString*/

// const texto= numero.toString();
// console.log(texto,typeof texto); //cadena de texto



// /* casi no se ustiliza*/



/* .toFixed()
Permite obtener un numero con la cantidad de 
decimales especificados 
*/

// const numero= 3.1415;

// console.log(numero.toFixed(10)); // n° de decimales


/* parseInt() Es una función
Intenta transformar un valor a un entero 
Se usa más
*/

// const numero1=prompt('Escribe un numero');
// const numero2=prompt('Escribe un numero');

// console.log(numero1+numero2); // lo concatena resultado (11)


// const numero1=parseInt(prompt('Escribe un numero'));
// const numero2=parseInt(prompt('Escribe un numero'));

// console.log(numero1+numero2); //se suma por parseInt- no trabaja con decimales

//....

/* .parseFloat()
Intenta transformar un valor a un neumero con decimales
*/

// const numero1=parseFloat(prompt('Escribe un numero'));
// const numero2=parseFloat(prompt('Escribe un numero'));

// console.log(numero1+numero2);

/* Math.random() // metodos numero al azar entre 0 y 1
*/

// const numero=Math.random(); //Sirve para generar numeros aleatorios
// console.log(numero);


/* Math.floor()
Redondea hacia abajo un numero
*/

// console.log(Math.floor('10.1'));
// console.log(Math.floor('10.99'));


/* Math.ceil()
Redondea hacia arriba un numero
*/

// console.log(Math.ceil('10.1'));
// console.log(Math.ceil('10.99'));



/* Math.round()
Redondea hacia el entero más cercano
*/


// console.log(Math.round('10.1'));
// console.log(Math.round('10.99'));
/*

//.....


/* Ejemplo de numero al azar de 0 a 100
*/

const numero= Math.random();
console.log(Math.floor(numero * 101)); // numero del 0 al 100 por el multiplicador







