/*
	📌 window.setTimeOut()
	Nos permite ejecutar una funcion despues de
     cierto tiempo.
*/

// const saludo = () => {
// 	console.log('Hola!');
// };

// let id; //variable global
// const iniciar = () => {
// 	console.log('Iniciando timer');
//id = setTimeout(saludo, 5000);// ejecuta esta funcion y corre el tiempo
// };


// const parar = () => {
// 	console.log('Parando timer');
// 	clearTimeout(id); // Pasar identificador de timer
// };

/*
	📌 window.setInterval()
	Nos permite ejecutar una funcion cada cierto tiempo.
*/
let cuenta = 0;
let id;

const iniciar = () => {
	id = setInterval(() => {
		console.log(cuenta);
		cuenta++;
	}, 1000);
};

const parar = () => {
	console.log('Paramos la cuenta');
	clearInterval(id);
};