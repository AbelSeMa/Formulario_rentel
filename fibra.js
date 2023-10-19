function mostrarFibra() {
    var info = document.createElement("p");
    info.textContent = 'Elige la velocidad de la fibra:';

    if (document.getElementById('opcionesMovil').style.display != 'none') {
        document.getElementById('opcionesMovil').style.display = 'none';
    }
    document.getElementById('opcionesFibra').style.display = 'block';

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

    fija.innerHTML = "<h3>¿Deseas que tu linea fija sea virtual?</h3><label for='virtual'> <input type='radio' name='fijo_virtual' id='virtual' value='si' onclick='mostrarInput()'> La línea virtual va asociada a un número móvil y tiene un coste de 2€ al mes </label><br> <label for='fisica'> <input type='radio' name='fijo_virtual' id='fisica' value='no'> Se instalará un dispositivo físico para la línea fija</label> <div id='numAsociado'></div>"

    document.getElementById('fisica').addEventListener('click', () => {
        limpiar('numAsociado')
    })

}

function mostrarInput() {
    var numAsociadoDiv = document.getElementById('numAsociado');
    numAsociadoDiv.innerHTML = '<h3>Introduce el número movil que será la lína fija</h3><input type="tel" id="numeroMovil" name="numeroVirtual" placeholder="Número móvil">';
}

function limpiarInput() {
    var numAsociadoDiv = document.getElementById('numAsociado');
    numAsociadoDiv.innerHTML = ''; // Elimina el contenido del div
}