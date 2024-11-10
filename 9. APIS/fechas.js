/*
	📌 API para trabajar con fechas 
	Javascript expone su API para que podamos trabajar con fechas.

	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/*
	📌 Crear un objeto de fecha
	Para poder trabajar con fechas primero tenemos que crear un objeto de fecha.
*/
// Fecha actual
const fechaActual = new Date();
// console.log(fechaActual);

const cumpleaños = new Date('1995-09-07T12:00:00');
// console.log(cumpleaños);

/*
	📌 Metodos para trabajar con fechas
*/
console.log(fechaActual.toString());// transforma en una cadena de texto
console.log(fechaActual.toDateString()); //fecha, dia, mes y año
console.log(fechaActual.toTimeString()); //en cadena de texto, el tiempo

// Obtener mes
console.log(fechaActual.getMonth());// el mes, devuelve la posicion del arreglo pilas

// Obtener día
console.log(fechaActual.getDate()); //el dia

// Obtener año
console.log(fechaActual.getFullYear());// el año
