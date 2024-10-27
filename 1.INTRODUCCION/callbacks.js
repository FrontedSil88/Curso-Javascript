



/*Funciones que podemos pasar como parametro a otra
function, con el fin de poder llamar en otra funcion
*/

const obtenerPostsDeUsuario=(usuario,callbacks)=>{
console.log( `Obteniendo los post de ${usuario}...`);

setTimeout(()=>{
let posts=['Post1','Post2','Post3'];
    callbacks(posts);
}, 2000);
}
obtenerPostsDeUsuario('Carlos',(posts)=>{ //callbacks
    console.log(posts);
});

//funcion que devuelve informacion inmediata 




