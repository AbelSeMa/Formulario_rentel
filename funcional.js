if (!sessionStorage.getItem('productos')) {
    sessionStorage.setItem('productos', JSON.stringify([]));
}

function mostrarMovil() {
    var info = document.createElement("p");
    info.textContent = 'Has elegido la opción móvil';
    document.getElementById('opcionesFibra').style.display = 'none';
    document.getElementById('opcionesMovil').style.display = 'block';

}

function mostrarAsistencia() {
    var info = document.createElement("p");
    info.textContent = 'Has elegido teleasistencia';
}


function createJson(event) {
    let activeForm;
    if (document.getElementById('opcionesFibra').style.display !== 'none') {
        activeForm = document.querySelector('#opcionesFibra form');
    } else if (document.getElementById('opcionesMovil').style.display !== 'none') {
        activeForm = document.querySelector('#opcionesMovil form');
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


