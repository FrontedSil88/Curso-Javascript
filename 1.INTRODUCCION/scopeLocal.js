/*Local scope o variables locales
- Son las variables declaradas dentro de una funcion
- Solo podemos acceder a ellas desde dentro de la función
*/

var numero=1; //variables globales


var obtenerNumeroLetras=(nombre)=>{

    var numero= nombre.length; //variable donde se guarda el numero de letras
// variable local dentro de la funcion, se accede en una funcion


    console.log( `${nombre} tiene ${numero} letras`);

    var funcionAnidada=()=>{
        console.log(numero); //invocarla
    }
};

obtenerNumeroLetras('Carlos');

console.log(numero);

// se puede repetir el nombre en variables locales
