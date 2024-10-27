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

//Ejemplos

//Cadena de texto 

const nombre='Carlos'; 
const parrafo="Este es un 'parrafo'";

const parrafo2='Este es un "parrafo"';

// const parrafo3='Este es un \'parrafo\'';


//Numero
const numero=4;
const numero2=-4.123;


//Boleano- importante para condiciones

const usuarioConectado='false';

const mayorQue=1>2; //operadores para hacer comparaciones
console.log(mayorQue);




//Arrays-Arreglos: Se puede tener varios elementos

//const arreglo=[1,10,5]; //Brackers se especifica los valores
const arreglo=['texto', 456, true, {propiedad: 'valor'}[1,2,3]];
console.log(arreglo); //se puede guardar mucha informacion pero no se sabe que es cada uno

//Objetos- Guarda información propiedad y valor 

const persona={

    nombre:'Carlos',   //Propiedad y valor
    edad:27,
    carro:{
            marca:'Cherolet',
            color:'negro',
    },
};

console.log(persona.carro.color);



// Funciones. BOLQUE DE CODIGOS QUE DE DEBEMOS UTILIZAR

//console.log('HOLA');


function hola(){   //Defino la funcion
    console.log('Hola');
}

//Ejecutar la funcion - Se llama la funcion

hola();

//Null
//Normalmente lo usamos cuando queremos especificar que un valor sea nulo

//Ejemplo

const miVariable=null;

//Undefined
//Undefined se usa para indicarnos que un valor no esta defiinido.

const miVariable2=Underfined; //Lo usa Javascript para indicar cuando una varible no tiene un tipo de valor 


