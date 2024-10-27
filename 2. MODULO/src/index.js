
//Named imports

//import {nombre,obtenerPosts} from './namedExports';

//console.log('Mi nombre es '   + nombreImportado);

//console.log(obtenerPosts());

/* Namespace Imports
*/

// import * as datos from './namedExports';
// console.log(datos.nombre);

// console.log(datos.obtenerPosts());

/* Default Imports
*/

//import obtenerUsuario from './defaultExport'; //no es necesario poner llaves

//console.log(obtenerUsuario());


/* Empy Imports
Carga todo el codigo pero sin hacer, ningun objeto
*/

import './empyExports';
import {correo} from '/.empyExport'
console.log(correo);

