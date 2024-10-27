

/* Estructuras de una clase
- Definicion 
- Propiedades:La clase puede contener variables.
    Dentro de una clase se llaman propiedades.
-Constructor:Es un metodo especial para inicializar un objeto creado a partir
    de una clase
- Metodos: La calse puede contener funciones.Dentro de una clase se lllaman metodos

*/

class Usuario{ //defincion de clases mayuscula la primera
    tipo='usuario'; //crear un objeto, con = propiedades


    constructor(nombre,apellido){ //metodo
        this.nombre=nombre; //hace referencia al propiedad de la clase
        this.apellido=apellido; // quiere entrar a a la clase

        console.log('Nuevo usuario registrado!');
    }

    obtenerNombreCompleto(){ //  metodo personalizado- funcion
        console.log('obteniendo datos...');
        return  `${this.nombre} ${this.apellido}`; //cadena de texto, devuelve
    }
}

const  usuario=new Usuario('Carlos Arturo','Esparza'); // new crea un objeto
console.log (usuario.obtenerNombreCompleto()); //Metodo


const  usuario2=new Usuario('Alejandro','Garcia'); 
console.log(usuario2.nombre);


console.log (usuario2.obtenerNombreCompleto()); 

// se puede tener metodos y los metodos que son las  clases
//Encapsula datos 

