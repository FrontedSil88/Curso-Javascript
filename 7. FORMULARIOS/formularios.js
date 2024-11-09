
/* Formularios
Tenemos dos formas de acceder a los formularios.
-Mediante el objeto forms
- Mediante métodos del DOM
*/


//console.log(document.forms); // coleccion de formularios


//console.log(document.forms['formulario-donacion']); //id de formulario devuelve- vario


//console.log(document.forms['formulario-donacion']['correo']);// accede al correo 


// console.log(document.forms['formulario-donacion']['correo'] .value); //accede al correo en si


/* Forma 1
const correo=document.querySelector('#formulario-donacion #correo');

console.log(correo);

*/

/*Forma 2

const correo = document.querySelector('#formulario-donacion [name="correo"]');
console.log(correo.value);

*/


const correo= document.getElementById('btnEnviar').addEventListener('click', (e) => {
	e.preventDefault();

    const correo = document.querySelector('#formulario-donacion [name="correo"]');
    console.log(correo.value);

    
    const formulario = document.forms['formulario-donacion'];
	console.log(formulario['donacion'].value);

    console.log(formulario.fecha.value);

	console.log(formulario['terminos-y-condiciones'].checked);
});
});