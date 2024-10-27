

class Usuario{
    constructor(usuario,password){
        this.usuario=usuario;
        this.password=password;

    }

    obtenerPosts(){
        const posts=['post1','post2'];
        return posts;
    }
}


class Moderador extends Usuario{  //herencia
constructor(usuario,password,permisos){
    super(usuario,password); //copias metodos y propiedades y constructor
    this.permisos=permisos;

}

borrarPost(id){
    if(this.permisos.includes('borrar')){
        console.log(` El post con el ${id} ha sido borraro` );


    }else{
        console.log('No tienes los permisos para borrar post');
    }
}

}
const usuario= new Usuario('Carlos','123');
console.log(usuario.obtenerPosts());

const usuario2=new Moderador('Arturo','456',['borrar','edirar']);
console.log(usuario2.obtenerPosts());
console.log(usuario2.permisos);
usuario2.borrarPost(7);




