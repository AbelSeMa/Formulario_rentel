function opcionesInternet() {
    // Crear un elemento div
    let div = document.createElement('div');
    let div2 = document.createElement('div');
    div2.id = "contenido_internet";

    let titulo = document.getElementById('titulo_modal').textContent = 'Internet'

    // Crear un elemento h4
    let h4 = document.createElement('h4');
    h4.textContent = 'Servicio contratado';
    div.appendChild(h4);

    // Array para crear los servicios, cada elemento 
    // del array será un radio
    let servicios = ['alta internet', 'portabilida internet'];
    let labels = ['Alta nueva', 'Portabilidad'];

    for (let i = 0; i < servicios.length; i++) {
        let input = document.createElement('input');
        input.className = 'form-check-input';
        input.type = 'radio';
        input.name = 'servicio';
        input.id = servicios[i];
        input.value = servicios[i];
        input.required = true;

        let label = document.createElement('label');
        label.className = 'form-check-label';
        label.htmlFor = servicios[i];
        label.textContent = labels[i];

        if (servicios[i] === 'alta internet') {
            input.onclick = function () {
                let divPadre = document.getElementById('contenido_internet');
                // Comprueba si el div padre tiene hijos
                if (divPadre.hasChildNodes()) {
                    // Si tiene hijos, elimínalos todos
                    while (divPadre.firstChild) {
                        divPadre.removeChild(divPadre.firstChild);
                    }
                }
                mostrarProductosInternet();
                direccionInstalacion();

            };
        }

        if (servicios[i] === 'portabilida internet') {
            input.onclick = function () {
                let divPadre = document.getElementById('contenido_internet');
                // Comprueba si el div padre tiene hijos
                if (divPadre.hasChildNodes()) {
                    // Si tiene hijos, elimínalos todos
                    while (divPadre.firstChild) {
                        divPadre.removeChild(divPadre.firstChild);
                    }
                }
                donanteInternet();
                mostrarProductosInternet();
                titularPortabilidadInternet();
            };
            input.classList.add('mb-3');
        }

        div.appendChild(input);
        div.appendChild(label);
        div.appendChild(document.createElement('br'));
    }

    // Añadir div al elemento padre
    document.body.appendChild(div);
    let contenedor = document.getElementById('contenedor');

    contenedor.appendChild(div)
    contenedor.appendChild(div2)
}


function mostrarProductosInternet() {
    let parentElement = document.getElementById('contenido_internet');
    let div = document.createElement('div');
    div.id = 'tarifas_internet'

    let divPrecios = document.createElement('div');
    divPrecios.id = 'precios_internet'


    let titulo = document.createElement('h4');
    titulo.textContent = 'Elige un producto'
    div.appendChild(titulo);

    let tarifas = [
        { tarifa: ' Básico', precio: '50€ - 4 meses', tipo: 'wifi' },
        { tarifa: ' Avanzado', precio: '19.90 € - mes', tipo: 'LTU' },
        { tarifa: 'Premiun', precio: '24.00 € - mes', tipo: 'LTU' }
    ];

    // Crea el elemento select
    let select = document.createElement("select");
    select.name = "producto_internet";
    select.className = "form-select mb-3";

    // Crea los elementos de entrada
    tarifas.forEach(function (dato, i) {
        let option = document.createElement("option");
        option.value = dato.tarifa;
        option.textContent = dato.tarifa;
        select.appendChild(option);

        // Agrega un evento de escucha a cada opción
        option.addEventListener('click', function () {
            div.appendChild(divPrecios);

            if (divPrecios !== null) {
                while (divPrecios.firstChild) {
                    divPrecios.removeChild(divPrecios.firstChild);
                }
            }

            divPrecios.appendChild(input);
            divPrecios.appendChild(label2);
            divPrecios.appendChild(document.createElement("br"));
        });
    });

    div.appendChild(select);
    parentElement.appendChild(div)
}

function direccionInstalacion() {

    // Obtén el div en el que quieres insertar el input
    let div = document.getElementById('contenido_internet');
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
    input.placeholder = 'Dirección de instalación'
    input.classList.add('form-control');

    // Inserta el nuevo input en el div
    div2.appendChild(titulo)
    div2.appendChild(input);

    div.appendChild(div2)
}

function permanenciaInternet() {
    let div = document.createElement('div');
    div.id = 'permanencia_internet';

    let permanencias = [
        { permanencia: '12 meses' },
        { permanencia: '18 meses' }
    ]

    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }

    let titulo = document.createElement('h4');
    titulo.textContent = 'Permanencia';
    div.appendChild(titulo)

    // Crea un input de tipo radio por cada permanencia
    permanencias.forEach(function (dato, i) {
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

function donanteInternet() {
    // Crear un div con id "donante_fijo"
    var donanteDiv = document.createElement("div");
    donanteDiv.id = "donante_internet";

    // Crear un elemento h4 para "Compañia donante"
    var h4Element = document.createElement("h4");
    h4Element.textContent = "Compañia donante";
    h4Element.className = "mt-2";

    // Crear un input para la compañía
    var inputElement = document.createElement("input");
    inputElement.className = "form-control mb-2";
    inputElement.type = "text";
    inputElement.name = "donante_internet";
    inputElement.id = "donante_internet_input"; // Cambiamos el id para evitar duplicados
    inputElement.placeholder = "Compañía actual";

    if (donanteDiv.childElementCount > 0) {
        while (donanteDiv.firstChild) {
            donanteDiv.removeChild(donanteDiv.firstChild);
        }
    }

    // Añadir los elementos al div
    donanteDiv.appendChild(h4Element);
    donanteDiv.appendChild(inputElement);

    // Obtener el elemento padre donde deseas agregar el div
    var parentElement = document.getElementById("contenido_internet"); // Cambia "antiguo_titular_fijo" al elemento padre deseado

    // Añadir el div con id "donante_fijo" al elemento padre
    parentElement.appendChild(donanteDiv);
}

function titularPortabilidadInternet() {
    // Define los datos para los elementos de entrada
    var datos = [
        {
            id: 'si_mismo_titular_internet', value: 'si', text: 'Si, se utilizaran los datos del cliente.', onclick: () => {
                let antiguoTitularDiv = document.getElementById('datos_antiguo_titular')
                // Si el div ya tiene hijos, elimínalos todos
                while (antiguoTitularDiv !== null && antiguoTitularDiv.firstChild) {
                    antiguoTitularDiv.removeChild(antiguoTitularDiv.firstChild);
                }
            }
        },
        {
            id: 'otro_titular_internet', value: 'no', text: 'No, será un nuevo titular.', onclick: () => {
                let antiguoTitularDiv = document.getElementById('datos_antiguo_titular')
                // Si el div ya tiene hijos, elimínalos todos
                while (antiguoTitularDiv !== null && antiguoTitularDiv.firstChild) {
                    antiguoTitularDiv.removeChild(antiguoTitularDiv.firstChild);
                }

                antiguoTitularInternet();
            }
        }
    ];

    // Obtén el div con id "mismo_titular_fijo"
    var mismoTitularDiv = document.createElement('div');
    mismoTitularDiv.id = 'mismo_titular'

    // Crear un elemento h4 para la pregunta
    var preguntaH4 = document.createElement("h4");
    preguntaH4.textContent = "¿La portabilidad se hará sobre el mismo titular?";
    preguntaH4.classList.add("mt-2");
    mismoTitularDiv.appendChild(preguntaH4);

    // Crea los elementos de entrada
    datos.forEach(function (dato) {
        var radio = document.createElement("input");
        radio.className = "form-check-input";
        radio.type = "radio";
        radio.name = "mismo_titular_internet";
        radio.id = dato.id;
        radio.value = dato.value;
        radio.onclick = dato.onclick;

        var label = document.createElement("label");
        label.className = "form-check-label";
        label.setAttribute("for", dato.id);
        label.textContent = dato.text;

        mismoTitularDiv.appendChild(radio);
        mismoTitularDiv.appendChild(label);
        mismoTitularDiv.appendChild(document.createElement("br"));
    });

    // Añade el div al elemento con id 'contenido_fijo'
    document.getElementById('contenido_internet').appendChild(mismoTitularDiv);

    let antiguoTitularDiv = document.createElement('div');
    antiguoTitularDiv.id = "datos_antiguo_titular";

    document.getElementById('contenedor').appendChild(antiguoTitularDiv);
}

function antiguoTitularInternet() {
    let antiguoTitularDiv = document.getElementById('datos_antiguo_titular')

    // Si el div ya tiene hijos, elimínalos todos
    while (antiguoTitularDiv.firstChild) {
        antiguoTitularDiv.removeChild(antiguoTitularDiv.firstChild);
    }

    // Define los datos para los elementos de entrada
    var datos = [
        { titulo: 'Nombre del antiguo titular', nombre: 'nombre_antiguo_titular_fijo', placeholder: 'Nombre del antiguo titular' },
        { titulo: 'Apellidos del antiguo titular', nombre: 'apellidos_antiguo_titular_fijo', placeholder: 'Apellidos antiguo titular' },
        { titulo: 'DNI del antiguo titular', nombre: 'DNI_antiguo_titular_fijo', placeholder: 'DNI antiguo titular' }
    ];

    // Crea los elementos de entrada
    datos.forEach(function (dato) {
        var h6 = document.createElement('h6');
        h6.textContent = dato.titulo;

        var input = document.createElement('input');
        input.classList.add('form-control', 'mb-2');
        input.type = 'text';
        input.name = dato.nombre;
        input.id = dato.nombre;
        input.placeholder = dato.placeholder;

        antiguoTitularDiv.appendChild(h6);
        antiguoTitularDiv.appendChild(input);
    });

    // Añade el div al elemento con id 'datos_fijo'
    document.getElementById('contenido_internet').appendChild(antiguoTitularDiv);
}