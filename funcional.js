if (!sessionStorage.getItem('productos')) {
    sessionStorage.setItem('productos', JSON.stringify([]));
}

function mostrarFibra() {
    var info = document.createElement("p");
    info.textContent = 'Elige la velocidad de la fibra:';

    if (document.getElementById('opcionesMovil').style.display != 'none') {
        document.getElementById('opcionesMovil').style.display = 'none';
    }
    document.getElementById('opcionesFibra').style.display = 'block';

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



function limpiar(nombre) {
    var limpi = document.getElementById(nombre);
    limpi.innerHTML = "";
}


// función para crear las tarífas dinamicamente
function indi() {
    var individual = document.getElementById("individual");
    individual.style.display = 'block';

    // Obtén el elemento select en HTML
    var individuales = document.querySelector('#individual select');

    var tarifas = [
        {
            datos: '12 GB',
            precio: '7.90 €'
        },
        {
            datos: '20 GB',
            precio: '9.90 €'
        },
        {
            datos: '70 GB',
            precio: '14.90 €'
        },
        {
            datos: '150 GB',
            precio: '24.90 €'
        }
    ]

    // Elimina opciones anteriores si las hay
    while (individuales.firstChild) {
        individuales.removeChild(individuales.firstChild);
    }

    // Agrega las opciones al select
    for (var tarifa in tarifas) {
        if (tarifas.hasOwnProperty(tarifa)) {
            var option = document.createElement("option");
            option.value = tarifas[tarifa].precio; // Valor de la opción (precio)
            option.text = tarifas[tarifa].datos + " - " + tarifas[tarifa].precio; // Texto visible en la opción (datos - precio)
            individuales.appendChild(option); // Agrega la opción al select
        }
    }
}



function indiSiFibra() {
    var individual = document.getElementById("individual");
    individual.style.display = 'block';

    // Obtén el elemento select en HTML
    var individuales = document.querySelector('#individual select');

    var tarifas = [
        {
            datos: '17 GB',
            precio: '7.90 €'
        },
        {
            datos: '30 GB',
            precio: '9.90 €'
        },
        {
            datos: '90 GB',
            precio: '14.90 €'
        },
        {
            datos: '200 GB',
            precio: '24.90 €'
        }
    ]

    // Elimina opciones anteriores si las hay
    while (individuales.firstChild) {
        individuales.removeChild(individuales.firstChild);
    }

    // Agrega las opciones al select
    for (var tarifa in tarifas) {
        if (tarifas.hasOwnProperty(tarifa)) {
            var option = document.createElement("option");
            option.value = tarifas[tarifa].precio; // Valor de la opción (precio)
            option.text = tarifas[tarifa].datos + " - " + tarifas[tarifa].precio; // Texto visible en la opción (datos - precio)
            individuales.appendChild(option); // Agrega la opción al select
        }
    }
}

function precioPack() {
    var individual = document.getElementById("individual");
    individual.style.display = 'block';

    // Obtén el elemento select en HTML
    var individuales = document.querySelector('#individual select');

    var tarifas = [
        {
            datos: '100 GB',
            precio: '21.90 €'
        },
        {
            datos: '150 GB',
            precio: '26.90 €'
        },
        {
            datos: '200 GB',
            precio: '36.90 €'
        }
    ]

    // Elimina opciones anteriores si las hay
    while (individuales.firstChild) {
        individuales.removeChild(individuales.firstChild);
    }

    // Agrega las opciones al select
    for (var tarifa in tarifas) {
        if (tarifas.hasOwnProperty(tarifa)) {
            var option = document.createElement("option");
            option.value = tarifas[tarifa].precio; // Valor de la opción (precio)
            option.text = tarifas[tarifa].datos + " - " + tarifas[tarifa].precio; // Texto visible en la opción (datos - precio)
            individuales.appendChild(option); // Agrega la opción al select
        }
    }

}

function packSiFibra() {
    var individual = document.getElementById("individual");
    individual.style.display = 'block';

    // Obtén el elemento select en HTML
    var individuales = document.querySelector('#individual select');

    var tarifas = [
        {
            datos: '150 GB',
            precio: '21.90 €'
        },
        {
            datos: '200 GB',
            precio: '26.90 €'
        },
        {
            datos: '300 GB',
            precio: '36.90 €'
        }
    ]

    // Elimina opciones anteriores si las hay
    while (individuales.firstChild) {
        individuales.removeChild(individuales.firstChild);
    }

    // Agrega las opciones al select
    for (var tarifa in tarifas) {
        if (tarifas.hasOwnProperty(tarifa)) {
            var option = document.createElement("option");
            option.value = tarifas[tarifa].precio; // Valor de la opción (precio)
            option.text = tarifas[tarifa].datos + " - " + tarifas[tarifa].precio; // Texto visible en la opción (datos - precio)
            individuales.appendChild(option); // Agrega la opción al select
        }
    }

}


function indiTarifa() {
    var tieneFibra = "";
    var productos = JSON.parse(sessionStorage.getItem('productos'));
    console.log(tieneFibra);


    function esArregloVacio(arr) {
        return arr.length === 0;
    }
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].producto === 'fibra') {
            tieneFibra = true;
        }

    }
    console.log(tieneFibra);
    if (!esArregloVacio(productos) || tieneFibra) {
        indiSiFibra()
    } else {
        indi();
    }
    document.getElementById('movilesTarifa').style.display = 'none'
}


function packTarifa() {
    var tieneFibra = "";
    var productos = JSON.parse(sessionStorage.getItem('productos'));
    console.log(tieneFibra);


    function esArregloVacio(arr) {
        return arr.length === 0;
    }
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].producto === 'fibra') {
            tieneFibra = true;
        }

    }
    console.log(tieneFibra);
    if (!esArregloVacio(productos) || tieneFibra) {
        packSiFibra()
    } else {
        precioPack();
        document.getElementById('movilesTarifa').style.display = 'block'
    }
}