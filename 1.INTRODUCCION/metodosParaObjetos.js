

const usuario={
    nombre:'Carlos',
    edad:27,
    amigos:['Alejandro','Cesar','Manuel'],
    saludo:() =>{
        console.log('Hola');
    },

};

/* Métodos propios
Los objetos pueden tener métodos personalizados
*/

//usuario.saludo();

/*Object.keys()
Nos devuelve un arreglo con las llaves(keys)del objeto.
*/

//const resultados= Object.keys(usuario);


/*Object.values()
Nos devuelve un arreglo con los valores (values) del objeto 
*/

//const resultados=Object.values(usuario);

/*Object.entries()
Nos devuelve un arreglo con las parejas de clave y valor del objeto.
*/

const resultados=Object.entries(usuario); //objeto es el usuario
console.log(resultados); // devuelve el nombre y el valor 

// entries no lo ha usado mucho, por ejemplo: cuantas propiedades tiene tu metodo

console.log(`El objeto tiene ${resultados.length} propiedades`);






