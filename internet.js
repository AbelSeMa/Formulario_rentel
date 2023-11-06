function mostrarProductosInternet() {
    let parentElement = document.getElementById('contenedor');
    let div = document.createElement('div');
    div.id = 'tarifas_internet'

    let divPrecios = document.createElement('div');
    divPrecios.id = 'precios_internet'


    let titulo = document.createElement('h2');
    titulo.textContent = 'Elige un producto'
    div.appendChild(titulo);

    let tarifas = [
        { tarifa: ' Wifi básico - 15 megas', precio: '50€ - 4 meses', tipo: 'wifi' },
        { tarifa: ' Básico LTU - 50 megas', precio: '19.90 € - mes', tipo: 'LTU' },
        { tarifa: ' Avanzado LTU - 100 megas', precio: '24.00 € - mes', tipo: 'LTU' },
        { tarifa: ' Fibra óptica - 100 megas', precio: '15€ - mes', tipo: 'fibra' },
        { tarifa: ' Fibra óptica - 300 megas', precio: '19.90€ - mes', tipo: 'fibra' },
        { tarifa: ' Fibra óptica - 600 megas', precio: '24.90 € - mes', tipo: 'fibra' }
    ];

    // Crea los elementos de entrada
    tarifas.forEach(function (dato, i) {
        var radio = document.createElement("input");
        radio.className = "form-check-input";
        radio.type = "radio";
        radio.name = "producto_internet";
        radio.value = dato.tipo;
        radio.id = "radio_" + i;

        var label = document.createElement("label");
        label.setAttribute("for", "radio_" + i);
        label.className = "form-check-label label_fibras";
        label.textContent = dato.tarifa;

        div.appendChild(radio);
        div.appendChild(label);
        div.appendChild(document.createElement("br"));

        // Agrega un evento de escucha a cada botón de opción
        radio.addEventListener('click', function () {
            div.appendChild(divPrecios);

            if (divPrecios !== null) {
                while (divPrecios.firstChild) {
                    divPrecios.removeChild(divPrecios.firstChild);
                }
            }

            let h4 = document.createElement('h4');
            h4.textContent = "Elige la cuota"
            divPrecios.appendChild(h4)

            let input = document.createElement('input');
            input.type = 'radio';
            input.name = 'tarifa_internet';
            input.value = dato.precio;
            input.id = "radio_precio_" + i;

            var label2 = document.createElement("label");
            label2.setAttribute("for", "radio_precio_" + i);
            label2.className = "form-check-label label_fibras";
            label2.textContent = dato.precio;

            divPrecios.appendChild(input);
            divPrecios.appendChild(label2);
            divPrecios.appendChild(document.createElement("br"));
        });
    });

    // Añade la clase mb-2 al último elemento label
    div.lastChild.classList.add("mb-2");

    parentElement.appendChild(div)
}

function direccionInstalacion() {

    // Obtén el div en el que quieres insertar el input
    let div = document.getElementById('contenedor');
    let div2 = document.createElement('div');
    div2.id = 'direccion_instalacion' // Reemplaza 'tuDiv' con el id de tu div

    // Verifica si el div ya tiene contenido y, si es así, lo borra
    while (div2.firstChild) {
        div2.removeChild(div2.firstChild);
    }

    // crea un h4 que será el titulo
    let titulo = document.createElement('h4');
    titulo.textContent = 'Indica la dirección de instalación'

    // Crea un nuevo input de texto
    let input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'dirección de instalación'

    // Inserta el nuevo input en el div
    div2.appendChild(titulo)
    div2.appendChild(input);

    div.appendChild(div2)
}

function permanenciaInternet() {
    let div = document.createElement('div');
    div.id = 'permanencia_internet';

    let permanencias = [
        { permanencia: '12 meses'},
        { permanencia: '18 meses'}
    ]

    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }

    let titulo = document.createElement('h4');
    titulo.textContent = 'Permanencia';
    div.appendChild(titulo)

    // Crea un input de tipo radio por cada permanencia
    permanencias.forEach(function(dato, i) {
        var radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "permanencia";
        radio.value = dato.permanencia;
        radio.id = "radio_" + i;

        var label = document.createElement("label");
        label.setAttribute("for", "radio_" + i);
        label.textContent = dato.permanencia;

        div.appendChild(radio);
        div.appendChild(label);
        div.appendChild(document.createElement("br"));
    });

    // Añade el div al documento
    document.body.appendChild(div);


}