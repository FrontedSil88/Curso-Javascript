//Variables:Espacio de memoria para guardar información



/*Tipos de datos que podemos guardar en las variables:
string-Cadena de texto
number-Numero
boolean_Booleano(verdadero o falso)
object-Objeto
function-Funciones
decimales

null_valor nulo
undefined-Valor sin definir

*/

//Forma antigua
var edad=27; //variable siempre al menos con una letra, puede usarse //$ y _.$
console.log(edad); //variables siempre 1 nombre



//Otra forma- mejores
let nombre='Carlos'; //Cadena de texto, pueden ser comillas simples o dobles
nombre='Fernando'; // Se puede cambiar el valor del atributo
const correo='correo@correo.com'; //No se puede redifinir los valores
console.log(nombre);



let telefono,pais, ID;
telefono=1234456789; //Asigna un valor 
//console.log(telefono);

const resultado=4+4;
//console.log(resultado);


const nombre1='Carlos ';
const nombre2='Arturo ';
const nombreCompleto=nombre1 + nombre2;
console.log(nombreCompleto);


//Las variables no guardan un solo tipo de valor

let miVariable='texto';
miVariable=7;