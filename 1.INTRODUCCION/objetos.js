
// Los arreglos tienen un problema es: se guarda la informacion pero no se puede organizar
const personaArreglo=['Carlos',27, 'correo',true,true];


//ejemplo de objeto- (propiedad: variable) y valor 

const persona={
    nombre:'Carlos',
    edad:27,
    correo:'correo@correo.com',
    suscripciones:{
    Web:true,
    Correo:true
},

coloresFavoritos:['Negro','Rojo'],
saludo:function(){
    alert('Hola');
}
};

console.log(persona.nombre);
console.log(persona['edad']);

const variable='correo';
persona[variable];

console.log(persona[variable]);

const variable1='suscripciones';
persona[variable1];

console.log(persona[variable1]);


const variable2='suscripciones';
persona[variable2];

//console.log(persona.suscripciones.Correo);

//agregar otros valores
persona.pais='Mexico';
persona.pais='España'; //sobreescribir
console.log(persona);

// funciones dentro de un objeto son metodos

persona.saludo(); // A los metodos se usan () siempre para poder acceder



