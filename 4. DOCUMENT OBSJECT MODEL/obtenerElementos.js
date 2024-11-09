/*getElementById- favorita
Nos permite obtener un elemento en base a su atributo id
*/

//const contenedor1= document.getElementById('contenedor1');
//console.log(contenedor1);

/*
children
Nos permite obtener los elemntos hijos
*/

//console.log(contenedor1.children);


/*
parentElement
Nos permite obtener el elemento padre de un elemento
*/

//console.log(contenedor1.parentElement);


/*getElementsByTagName
Nos permite obtener una colección de elementos en base a la etiqueta.
Nota:Devuelve una colación HTML. Una colección no es un arreglo.
NO SE USA MUCHO
*/

//const divs= document.getElementsByTagName('div');
//console.log(divs);
//console.log ( `Tenemos ${divs.length} divs en la página`);


/*getElementsByClassName
Nos permite obtener una colección de elementos en base a su clase
Css. Nota: Devuelve una colección HTML
*/

//const contenedores= document.getElementsByClassName('contenedor');

//console.log(contenedores);


/*Favorito

querySelector
Nos devuelve el primer elemento que coincida con un selector estilo Css
Nota: Devuelve un nodelist.
*/

//const caja= document.querySelector('#contenedor1 .caja'); //devuelve el primer elemento que encuentre

//console.log(caja);



/*Favorito

querySelectorAll
Nos devuelve el primer elemento que coincida con un selector estilo Css
Nota: Devuelve un nodelist.
*/


//const cajas= document.querySelectorAll('#contenedor1 .caja'); 

//console.log(cajas);

//cajas.forEach((caja)=>{ //lista de nodos
   // console.log(caja);
//});

/*closest
Nos permite buscar de adentro hacia afuera en busca de un elemento
*/

// const ultimaCaja=document.querySelector('#contenedor2 .caja:last-child');
// console.log(ultimaCaja);

// console.log(ultimaCaja.closest('.contenedor-principal'));


/*Podemos encadenar todos los metodos para obtener elementos
*/

const contenedor2=document.getElementById('contenedor2');

console.log(contenedor2.querySelectorAll('.caja'));




