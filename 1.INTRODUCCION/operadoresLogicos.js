/*Operadores Lógicos- para comprobar dos o tres cosas 

&& AND
|| OR
! NOt

*/

const nombre='Carlos';
const edad=17;
const tieneEntrada = true;
const tienePermiso = true;

//Ejemplo 1- && AND
//const permitirAcceso=edad>=18 && tieneEntrada;
// console.log('Acceso permitido al concierto:' + permitirAcceso);


//Ejemplo 2- || OR
// const permitirAcceso=(edad >=18 && tieneEntrada) || (tienePermiso && tieneEntrada) ;
//console.log('Acceso permitido al concierto:' + permitirAcceso);


//Ejemplo 3- ! Not- Si se tiene un valor lo transforma( - a uno +)

const variable=true;
//console.log(variable);

console.log(!variable); //!invierte el valor.

!tieneEntrada //Sino tiene entrada se intercambia el valor 

