

class Usuario{
    constructor(nombre, correo){
        this.nombre=nombre;
        this.correo=correo;

    }

    static borrar(id_usuario){
        console.log( `El usuario con el id:${id_usuario} ha sido borrado de la base de datos`);


    }

    static registrado=1000;
}

// const usuario= new Usuario('Carlos','correo@correo.com');
// usuario.borrarUsuario(1);

Usuario.borrar(1);

// Se puede borrar un usuario sin tener que inicializarlo,
//solo con el metodo estatico

console.log(Usuario.registrado);