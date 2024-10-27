const arreglos=['Texto', 456.10, false, {propiedad:'valor'}, [1,2,3]] //Const no puedes sobreescribir la variable, let si
console.log(arreglos);


//ejemplo si se quiere acceder a un elemento

const amigos=['Alejandro','Manuel','Cesar'];
console.log(amigos[1]);

// como se puede acceder a los varlore- se coloca brackers console.log(amigos[1]);
// arreglos son:0,1,2,3....


const colores=[]; //vacio el arreglo, y vamos escogiendo

colores[0]='ROjo'; // vamos llenando el arreglo

colores[1]='Verde';
colores[3]='Blanco';
//no tan comun esa forma
//se puede sobreescribir los vallores de arreglo
colores[3]='Amarillo';

//Arreglos son objetos, tienen propiedades y metodos, es un
//poco complejo pero vamos a verlo. un valor pertenece au n arreglo



//console.log(colores.length); //Propiedad length


console.log('El arreglo colores tiene:' + colores.length  + 'colores');

//arreglos tambien tienen metodos que son funciones

colores.push('Azul'); // metodo, funcion para trabajr con arreglos

console.log(colores);

