

//codigo se ejecuta cuando un valor es igual a otro

//Ejemplo #1

const usuario={
    nombre:'Carlos',
    pais:'Venezuela',


};

switch(usuario.pais){
    case'mexico':
    console.log('El usuario es mexicano');
    break;
    case'españa':
    console.log('El usuario es español');
    break;
    case'argentina':
    console.log('El usuario es argentino');
    break;
    default:
        console.log('El usuario es de otro pais');
} // codigo mas limpio - mas facil de leer

