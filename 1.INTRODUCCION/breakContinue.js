
/* Break 
La sentencia break nos sirve para salir de bloques de tipo Switch.
Pero tambien nos sirve para forzar la salida de un ciclo
*/

// const nombres= ['Arturo','Andres', 'Alejandro','Roberto','Adrian','Antonio','Angel'];

// for(let i=0;i<nombres.length; i++){ //variable indice i, condicion,  incrementarla
//     if(nombres[i][0]!=='A'){ // si quiero todos los nombres por la letra A- condicion
//         console.log('ALTO! Hay un nombre que no empieza por la letra A');
//         console.log(nombres[i]+'no empieza por la letra A');
//         break; //rompe la ejecucion del ciclo

//     }

//     console.log(nombres[i]);
// }


/*Continue 
La sentencia continue nos sirve para saltar a la siguiente iteración.

*/


const invitados=['Carlos','Christian','Christoher','Jorge','Estefania','Erika','Manuel'];

console.log('Lista de personas aceptadas:');

for(let i=0;i<invitados.length;i++){
    if(invitados[i]==='Jorge'){
        continue;

    }
    console.log(invitados[i]); // se utilizad poco esta sentencia

}




