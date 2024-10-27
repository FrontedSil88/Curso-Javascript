/* Block Scope/Alcance de tipo bloque
- Pertenecen las variables declaradas con const o let dentro de un bloque{}
- Solo podemos acceder a ellas dentro del bloque 
*/

// const edad=19;
// //let accesoPermitido=false;
// if (edad>=18){
//     const accesoPermitido=true;
//     console.log(accesoPermitido);

//     if(true){
//         console.log(accesoPermitido);
//     }

//     const miFuncion=()=>{
//         console.log(accesoPermitido);
//     };
//     miFuncion();

// }

// const accesoPermitido='Si'; //se puede definir la variable fuera de la funcion con el mismo nombre
// //console.log(accesoPermitido); no puede acceder a 
// //buscar en el bloque


if(true){
    var nombre='Carlos'; // tiene esta desventaja se puede accesar en el bloque y fuera del bloque
    //console.log(nombre);
}

console.log(nombre); //siempre usar let o const