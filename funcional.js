if (!sessionStorage.getItem('productos')) {
    sessionStorage.setItem('productos', JSON.stringify([]));
}

function createJson(event) {
    let activeForm = document.getElementById('form_product')

    const data = new FormData(activeForm);

    // Recupera el array 'productos' actual desde sessionStorage
    const productosExistentes = JSON.parse(sessionStorage.getItem('productos'));

    const formJSON = Object.fromEntries(data.entries());

    // Agrega el nuevo formJSON al array existente
    productosExistentes.push(formJSON);

    // Actualiza el array 'productos' en sessionStorage
    sessionStorage.setItem('productos', JSON.stringify(productosExistentes));

    console.log(JSON.parse(sessionStorage.getItem('productos')))
}


function obtenerJson() {
    const datosJSON = sessionStorage.getItem('contrato')
    const enlaceDescarga = document.createElement('a');

    // Paso 4: Configurar el enlace de descarga
    enlaceDescarga.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(datosJSON));
    enlaceDescarga.setAttribute('Download', 'datos.json');
    enlaceDescarga.innerText = 'Descargar Datos JSON';

    // Agregar el enlace de descarga a la página
    document.body.appendChild(enlaceDescarga);
}


// rellena el select de productos
window.onload = function() {
let elegirProducto = ['Elija producto','Telefonía fija', 'Internet', 'Movil', 'Otros']

// Rellena el select
elegirProducto.forEach((producto) => {
    let opcion = document.createElement('option');
    opcion.value = producto;
    opcion.text = producto;
    document.getElementById('productSelect').appendChild(opcion);
});
}

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

function enviarProducto() {
    createJson();
    limpiarContenedor();
    generarTablaProducto();

     // Obtén el modal
     var modal = document.getElementById("modalTablas");
    modal.style.display = "none";

  }



