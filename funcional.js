if (!sessionStorage.getItem('productos')) {
    sessionStorage.setItem('productos', JSON.stringify([]));
}

function mostrarFibra() {
    var info = document.createElement("p");
    info.textContent = 'Elige la velocidad de la fibra:';

/*     document.getElementById('opcionesMovil').style.display = 'none';
 */    document.getElementById('opcionesFibra').style.display = 'block';

}

function mostrarMovil() {
    var info = document.createElement("p");
    info.textContent = 'Has elegido la opción móvil';
    document.getElementById('opcionesFibra').style.display = 'none';
    /*     document.getElementById('opcionesMovil').style.display = 'block';
     */
}

function mostrarAsistencia() {
    var info = document.createElement("p");
    info.textContent = 'Has elegido teleasistencia';
}


function createJson(event) {
    const formData = document.getElementById('form_fibra');
    const data = new FormData(formData);
    const dataTipe = formData.getAttribute('data-tipo');
    data.append('producto', dataTipe);

    const formJSON = Object.fromEntries(data.entries());

    // Recupera el array 'productos' actual desde sessionStorage
    const productosExistentes = JSON.parse(sessionStorage.getItem('productos'));

    // Agrega el nuevo formJSON al array existente
    productosExistentes.push(formJSON);

    // Actualiza el array 'productos' en sessionStorage
    sessionStorage.setItem('productos', JSON.stringify(productosExistentes));

    document.getElementById('contratarProducto').addEventListener('click', function() {
        // Redirige al usuario al formulario de fibra existente
        window.location.href = '/index.html';
      });

      document.getElementById('irAPago').addEventListener('click', function() {
        // Redirige al usuario al formulario de fibra existente
        window.location.href = '/pagos.html';
      });
    obtenerJson();
    
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

function precioCien() {
    var opcionesCien = document.getElementById("precio");
    opcionesCien.innerHTML = ""; // Limpiar contenido anterior si lo hubiera

    // Crear botones de radio adicionales
    opcionesCien.innerHTML = "<h3> Elige la cuota </h3><label for='4_meses'> <input type='radio' name='precio' id='4_meses' value='50'> 50€ cada 4 meses </label><br> <label for='1_mes'> <input type='radio' name='precio' id='1_mes' value='15'> 15€ cada mes </label><br>"
}

function precioTresciento() {
    var opcionesCien = document.getElementById("precio");
    opcionesCien.innerHTML = ""; // Limpiar contenido anterior si lo hubiera

    // Crear botones de radio adicionales
    opcionesCien.innerHTML = "<h3> Elige la cuota </h3><label for='19.90'> <input type='radio' name='precio' id='19.90' value='19.90'> 19'90€ euros al mes </label><br>"
}

function precioSeiscientos() {
    var opcionesCien = document.getElementById("precio");
    opcionesCien.innerHTML = ""; // Limpiar contenido anterior si lo hubiera

    // Crear botones de radio adicionales
    opcionesCien.innerHTML = "<h3> Elige la cuota </h3><label for='4_meses'> <input type='radio' name='precio' id='24'90' value='24'90' > 24'90€ euros al mes </label><br>"
}

function virtual() {
    var fija = document.getElementById('fijaVirtual');
    fija.innerHTML = ""; // Limpiar el contenido anterior si lo hubiera

    fija.innerHTML = "<label for='virtual'> <input type='radio' name='virutal' id='virtual'> La línea virtual va asociada a un número móvil y tiene un coste de 2€ al mes </label><br> <label for='fisica'> <input type='radio' name='virutal' id='fisica'> Se instalará un dispositivo físico para la líneas </label>"
}