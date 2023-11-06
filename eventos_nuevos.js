function limpiarContenedor() {
    // Obtén el div por su id
    let contenedor = document.getElementById('contenedor');

    // Comprueba si el div tiene hijos
    if (contenedor.hasChildNodes()) {
        // Si tiene hijos, elimínalos todos
        while (contenedor.firstChild) {
            contenedor.removeChild(contenedor.firstChild);
        }
    }
}


// evento que crea el formulario de telefono fijo
document.getElementById('telefono_fijo').addEventListener('click', () => {
    limpiarContenedor();
    opcionesFijo();

})

// evento que crea el formulario de internet
document.getElementById('internet').addEventListener('click', () => {
    limpiarContenedor();
    mostrarProductosInternet();
    direccionInstalacion();
    permanenciaInternet();

})
