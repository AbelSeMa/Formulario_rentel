if (!sessionStorage.getItem('productos')) {
    sessionStorage.setItem('productos', JSON.stringify([]));
}

function mostrarAsistencia() {
    var info = document.createElement("p");
    info.textContent = 'Has elegido teleasistencia';
}


function createJson(event) {
    let activeForm;
    if (document.getElementById('opcionesInternet').style.display !== 'none') {
        activeForm = document.querySelector('#opcionesInternet form');
    } else if (document.getElementById('opcionesMovil').style.display !== 'none') {
        activeForm = document.querySelector('#opcionesMovil form');
    } else if (document.getElementById('opciones_fijo').style.display!== 'none') {
        activeForm = document.querySelector('#opciones_fijo form');
    }

    const data = new FormData(activeForm);
    const dataTipe = activeForm.getAttribute('data-tipo');
    data.append('producto', dataTipe);

    // Recupera el array 'productos' actual desde sessionStorage
    const productosExistentes = JSON.parse(sessionStorage.getItem('productos'));

    const formJSON = Object.fromEntries(data.entries());

    // Agrega el nuevo formJSON al array existente
    productosExistentes.push(formJSON);

    // Actualiza el array 'productos' en sessionStorage
    sessionStorage.setItem('productos', JSON.stringify(productosExistentes));


}


function obtenerJson() {
    const datosJSON = sessionStorage.getItem('productos')
    const enlaceDescarga = document.createElement('a');

    // Paso 4: Configurar el enlace de descarga
    enlaceDescarga.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(datosJSON));
    enlaceDescarga.setAttribute('download', 'datos.json');
    enlaceDescarga.innerText = 'Descargar Datos JSON';

    // Agregar el enlace de descarga a la página
    document.body.appendChild(enlaceDescarga);
}

function limpiar(nombre) {
    var limpi = document.getElementById(nombre);
    limpi.innerHTML = "";
}


