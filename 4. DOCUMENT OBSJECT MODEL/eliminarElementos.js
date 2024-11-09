
const eliminarCaja = () => {
	const padre = document.getElementById('contenedor1'); // guarda el contenedor padre 
	const cajaAEliminar = padre.querySelector('.caja'); //hija para eliminar

	if (cajaAEliminar) {
		padre.removeChild(cajaAEliminar);
	}
};

