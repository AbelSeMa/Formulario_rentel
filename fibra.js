function mostrarFibra() {
    var info = document.createElement("p");
    info.textContent = 'Elige la velocidad de la fibra:';
    document.getElementById('opcionesMovil').style.display = 'none';
    document.getElementById('opciones_fijo').style.display = 'none';
    document.getElementById('otros_productos').style.display = 'none';


    document.getElementById('opcionesInternet').style.display = 'block';

}

function precioWifi() {
    var opcionesCien = document.getElementById("precio");
    opcionesCien.innerHTML = ""; // Limpiar contenido anterior si lo hubiera

    // Crear botones de radio adicionales
    opcionesCien.innerHTML = "<h3> Elige la cuota </h3><label class='form-check-label' for='4_meses'> <input class='form-check-input' type='radio' name='precio' id='wifi' value='50'> 50€ / 4 meses </label><br>"
}

function precioBasico() {
    var opcionesCien = document.getElementById("precio");
    opcionesCien.innerHTML = ""; // Limpiar contenido anterior si lo hubiera

    // Crear botones de radio adicionales
    opcionesCien.innerHTML = "<h3> Elige la cuota </h3><label class='form-check-label' for='4_meses'> <input class='form-check-input' type='radio' name='precio' id='wifi' value='19.90'> 19.90€ / mensual </label><br>"
}

function precioAvanzado() {
    var opcionesCien = document.getElementById("precio");
    opcionesCien.innerHTML = ""; // Limpiar contenido anterior si lo hubiera

    // Crear botones de radio adicionales
    opcionesCien.innerHTML = "<h3> Elige la cuota </h3><label class='form-check-label' for='4_meses'> <input class='form-check-input' type='radio' name='precio' id='wifi' value='24.90'> 24.90€ / mensual </label><br>"
}

function precioCien() {
    var opcionesCien = document.getElementById("precio");
    opcionesCien.innerHTML = ""; // Limpiar contenido anterior si lo hubiera

    // Crear botones de radio adicionales
    opcionesCien.innerHTML = "<h3> Elige la cuota </h3><label class='form-check-label' for='4_meses'> <input class='form-check-input' type='radio' name='precio' id='4_meses' value='50'> 50€ / 4 meses </label><br> <label class='form-check-label' for='1_mes'> <input class='form-check-input' type='radio' name='precio' id='1_mes' value='15'> 15€ / mensual </label><br>"
}

function precioTresciento() {
    var opcionesCien = document.getElementById("precio");
    opcionesCien.innerHTML = ""; // Limpiar contenido anterior si lo hubiera

    // Crear botones de radio adicionales
    opcionesCien.innerHTML = "<h3> Elige la cuota </h3><label class='form-check-label' for='19.90'> <input class='form-check-input' type='radio' name='precio' id='19.90' value='19.90'> 19'90€ / mensual </label><br>"
}

function precioSeiscientos() {
    var opcionesCien = document.getElementById("precio");
    opcionesCien.innerHTML = ""; // Limpiar contenido anterior si lo hubiera

    // Crear botones de radio adicionales
    opcionesCien.innerHTML = "<h3> Elige la cuota </h3><label class='form-check-label' for='4_meses'> <input class='form-check-input' type='radio' name='precio' id='24'90' value='24'90' > 24'90€ / mensual </label><br>"
}

function mostrarProductosInternet(htmlId) {
    var id = document.getElementById(htmlId);
    id.style.display = 'block';

    // Obtén el elemento div que contendrá los radio buttons
    var productosInternet = document.getElementById('productos_internet');

    var tarifas = [
        {
            tarifa: 'Básico',
            precio: '50€ - 4 meses',
            activador: 'precioWifi()'
        },
        {
            tarifa: ' Avanzado',
            precio: '19.90 €',
            activador: 'precioBasico()'
        },
        {
            tarifa: ' Premiun',
            precio: '24.00 €',
            activador: 'precioAvanzado()'
        }
    ]

    // Elimina opciones anteriores si las hay
    while (productosInternet.firstChild) {
        productosInternet.removeChild(productosInternet.firstChild);
    }

       // Crea el elemento select
       let select = document.createElement("select");
       select.name = "tarifa"; // Nombre del grupo de options
       select.className = "form-select"; // Clase CSS para el select
   
       // Agrega las opciones
       for (let i = 0; i < tarifas.length; i++) {
           let option = document.createElement("option");
           option.value = tarifas[i].precio; // Valor del option (precio)
           option.innerHTML = tarifas[i].tarifa; // Texto visible para la tarifa
           option.setAttribute("onclick", tarifas[i].activador); // Función al seleccionar el option
           select.appendChild(option); // Agrega el option al select
       }
       productosInternet.appendChild(select); // Agrega el select

       productosInternet.className = "mb-2";
}

function virtual() {
    var fija = document.getElementById('fijaVirtual');
    fija.innerHTML = ""; // Limpiar el contenido anterior si lo hubiera

    fija.innerHTML = "<h3>¿Deseas que tu linea fija sea virtual?</h3><label class='form-check-label' for='virtual'> <input class='form-check-input' type='radio' name='fijo_virtual' id='virtual' value='si' onclick='mostrarInput()'> La línea virtual va asociada a un número móvil y tiene un coste de 2€ al mes </label><br> <label class='form-check-label' for='fisica'> <input class='form-check-input mb-3' type='radio' name='fijo_virtual' id='fisica' value='no'> Se instalará un dispositivo físico para la línea fija</label> <div id='numAsociado'></div>"

    document.getElementById('fisica').addEventListener('click', () => {
        limpiar('numAsociado')
    })

}

function mostrarInput() {
    var numAsociadoDiv = document.getElementById('numAsociado');
    numAsociadoDiv.innerHTML = '<h3>Introduce el número movil que será la lína fija</h3><input class="form-control mb-3" type="tel" id="numeroMovil" name="numeroVirtual" placeholder="Número móvil">';
}

function limpiarInput() {
    var numAsociadoDiv = document.getElementById('numAsociado');
    numAsociadoDiv.innerHTML = ''; // Elimina el contenido del div
}