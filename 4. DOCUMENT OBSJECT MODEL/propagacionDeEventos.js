// Propagacion, pasa de hijos a padres

const contenedor = document.getElementById('contenedor1');
contenedor.addEventListener('click', (e) => {
	console.log('Hiciste click en el contenedor');
});

const primeraCaja = document.querySelector('.caja');
primeraCaja.addEventListener('click', (e) => {
	e.stopPropagation(); //parar la propagacion en este hijo
	console.log('Hiciste click en la caja1');
});