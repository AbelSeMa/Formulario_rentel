// función para crear las tarífas dinamicamente
function indiSinFibra(htmlId) {
    var id = document.getElementById(htmlId)

    // Obtén el elemento select en HTML
    var selector = "#" + id.id + " select";
    console.log(selector)
    var id = document.querySelector(selector);

    var tarifas = [
        {
            datos: '12 GB',
            precio: '7.90 €',
            llamadas: 'Llamadas ilimitadas'
        },
        {
            datos: '20 GB',
            precio: '9.90 €',
            llamadas: 'Llamadas ilimitadas'
        },
        {
            datos: '70 GB',
            precio: '14.90 €',
            llamadas: 'Llamadas ilimitadas'
        },
        {
            datos: '150 GB',
            precio: '24.90 €',
            llamadas: 'Llamadas ilimitadas'
        }
    ]

    // Elimina opciones anteriores si las hay
    while (id.firstChild) {
        id.removeChild(id.firstChild);
    }

    // Agrega las opciones al select
    for (var tarifa in tarifas) {
        if (tarifas.hasOwnProperty(tarifa)) {
            var option = document.createElement("option");
            option.value = tarifas[tarifa].precio; // Valor de la opción (precio)
            option.text = tarifas[tarifa].datos + " y " + tarifas[tarifa].llamadas + " - " + tarifas[tarifa].precio; // Texto visible en la opción (datos - precio)
            id.appendChild(option); // Agrega la opción al select
        }
    }
}



function indiConFibra(htmlId) {
    var id = document.getElementById(htmlId);
    id.style.display = 'block';

    // Obtén el elemento select en HTML
    var selector = "#" + id.id + " select";
    var id = document.querySelector(selector);

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
    while (id.firstChild) {
        id.removeChild(id.firstChild);
    }

    // Agrega las opciones al select
    for (var tarifa in tarifas) {
        if (tarifas.hasOwnProperty(tarifa)) {
            var option = document.createElement("option");
            option.value = tarifas[tarifa].precio; // Valor de la opción (precio)
            option.text = tarifas[tarifa].datos + " - " + tarifas[tarifa].precio; // Texto visible en la opción (datos - precio)
            id.appendChild(option); // Agrega la opción al select
        }
    }
}

function packSinFibra(htmlId) {
    var id = document.getElementById(htmlId);
    id.style.display = 'block';

    // Obtén el elemento select en HTML
    var selector = "#" + id.id + " select";
    var id = document.querySelector(selector);

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
    while (id.firstChild) {
        id.removeChild(id.firstChild);
    }

    // Agrega las opciones al select
    for (var tarifa in tarifas) {
        if (tarifas.hasOwnProperty(tarifa)) {
            var option = document.createElement("option");
            option.value = tarifas[tarifa].precio; // Valor de la opción (precio)
            option.text = tarifas[tarifa].datos + " - " + tarifas[tarifa].precio; // Texto visible en la opción (datos - precio)
            id.appendChild(option); // Agrega la opción al select
        }
    }

}

function packConFibra(htmlId) {
    var id = document.getElementById(htmlId);
    id.style.display = 'block';

    // Obtén el elemento select en HTML
    var selector = "#" + id.id + " select";
    var id = document.querySelector(selector);

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
    while (id.firstChild) {
        id.removeChild(id.firstChild);
    }

    // Agrega las opciones al select
    for (var tarifa in tarifas) {
        if (tarifas.hasOwnProperty(tarifa)) {
            var option = document.createElement("option");
            option.value = tarifas[tarifa].precio; // Valor de la opción (precio)
            option.text = tarifas[tarifa].datos + " - " + tarifas[tarifa].precio; // Texto visible en la opción (datos - precio)
            id.appendChild(option); // Agrega la opción al select
        }
    }

}

// función que genera las opciones en el desplegable de individual
// según si tiene contratada la fibra óptica o no

function indiTarifa(htmlId) {
    var tieneFibra = "";
    var longitud = Object.keys(JSON.parse(sessionStorage.getItem('productos')));
    var productos = JSON.parse(sessionStorage.getItem('productos'));

    console.log(tieneFibra);


    function esArregloVacio(arr) {
        return arr.length === 0;
    }
    for (let i = 0; i < longitud.length; i++) {
        if (productos[i].producto === 'fibra') {
            tieneFibra = true;
        }

    }
    console.log(tieneFibra);
    if (esArregloVacio(productos)) {
        indiSinFibra(htmlId)
    }
    
    if (!esArregloVacio(productos) && tieneFibra) {
        indiConFibra(htmlId)
    } else {
        indiSinFibra(htmlId)
    }
}

// función que genera las opciones en el desplegable de pack
// según si tiene contratada la fibra óptica o no

function packTarifa(htmlId) {
    var tieneFibra = "";
    var longitud = Object.keys(JSON.parse(sessionStorage.getItem('productos')));
    var productos = JSON.parse(sessionStorage.getItem('productos'));
    console.log(tieneFibra);


    function esArregloVacio(arr) {
        return arr.length === 0;
    }
    for (let i = 0; i < longitud.length; i++) {
        if (productos[i].producto === 'fibra') {
            tieneFibra = true;
        }

    }
    console.log(tieneFibra);
    if (esArregloVacio(productos) || tieneFibra === "") {
        packSinFibra(htmlId)
    }
    
    if (!esArregloVacio(productos) && tieneFibra) {
        packConFibra(htmlId)
    } else {
        packSinFibra(htmlId)
    }
}