

const formulario = document.getElementById('formulario-donacion');

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const datos = { //objeto- obtener datos
		correo: formulario.correo.value, //guardado en la variable
		pais: formulario.pais.value,
		donacion: formulario.donacion.value,
		fecha: formulario.fecha.value,
		terminos: formulario['terminos-y-condiciones'].checked, // otra sintaxi por - 
	};


    //validaciones


	// Comprobamos correo
	if (datos.correo.length <= 2) { //cantidad de caracteres feo
		console.log('Correo invalido');
		return; //de la ejecucion de la funcion- se corta la funcion, comprueba que tenga 2 caracteres
	}

	// Comprobamos el país
	if (datos.pais === '') {
		console.log('País invalido');
		return;
	}

	if (datos.donacion === '') {
		console.log('Selecciona una cantidad a donar');
		return;
	}

	if (datos.fecha === '') {
		console.log('Selecciona una fecha');
		return;
	}

	if (!datos.terminos) {
		console.log('Acepta los terminos y condiciones');
		return;
	}

	console.log(datos); // se envia en todo si esta corrrecto
    
	console.log('Enviando datos...');
});