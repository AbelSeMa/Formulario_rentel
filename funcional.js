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
    } else if (document.getElementById('opciones_fijo').style.display !== 'none') {
        activeForm = document.querySelector('#opciones_fijo form');
    } else if (document.getElementById('otros_productos').style.display !== 'none') {
        activeForm = document.querySelector('#otros_productos form');
    }

    const data = new FormData(activeForm);
    const dataTipe = activeForm.getAttribute('data-tipo');
    data.append('producto', dataTipe);

   let jsonCliente = JSON.parse(sessionStorage.getItem('cliente'));
   let claves = Object.keys(jsonCliente);
   let valor = Object.values(jsonCliente);

   for (let i = 0; i < claves.length; i++) {
    data.append(claves[i], valor[i]);    
   }

   

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


function combinarJson() {
    var clienteData = sessionStorage.getItem("cliente");
    var productosData = sessionStorage.getItem("productos");
    
    // Parsear los datos JSON
    var cliente = JSON.parse(clienteData);
    var productos = JSON.parse(productosData);
    
    // Crear el JSON final con un bucle
    var jsonFinal = {};
    
    for (var clave in cliente) {
        jsonFinal[clave] = cliente[clave];
    }
    
    jsonFinal.productos = productos; // Agregar el campo de productos
    
    // Convertir el JSON final a una cadena JSON
    var jsonFinalString = JSON.stringify(jsonFinal);
    
    // Puedes imprimir el JSON final o hacer lo que necesites con él
    console.log(jsonFinalString);

    sessionStorage.setItem('contrato', jsonFinalString);

    obtenerJson();

}

function limpiar(nombre) {
    var limpi = document.getElementById(nombre);
    limpi.innerHTML = "";
}


