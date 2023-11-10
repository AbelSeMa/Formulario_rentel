function opcionesFijo() {
    // Crear un elemento div
    let div = document.createElement('div');
    div.id = "contenedor_estilo_fijo";
    div.className = "text-start p-3";
    let div2 = document.createElement('div');
    div2.id = "contenido_fijo";
    div2.className = "mx-4";

    // Crear un elemento h4
    let h4 = document.createElement('h4');
    h4.textContent = 'Servicio contratado';
    div.appendChild(h4);

    // Array para crear los servicios, cada elemento 
    // del array será un radio
    let servicios = ['Alta fijo', 'Portabilidad fijo'];
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

        if (servicios[i] === 'Alta fijo') {
            input.onclick = function () {
                let divPadre = document.getElementById('contenido_fijo');
                // Comprueba si el div padre tiene hijos
                if (divPadre.hasChildNodes()) {
                    // Si tiene hijos, elimínalos todos
                    while (divPadre.firstChild) {
                        divPadre.removeChild(divPadre.firstChild);
                    }
                }
                tarifasFijo();
                numTlfnFijo()

            };
        }



        if (servicios[i] === 'Portabilidad fijo') {
            input.onclick = function () {
                let divPadre = document.getElementById('contenido_fijo');
                // Comprueba si el div padre tiene hijos
                if (divPadre.hasChildNodes()) {
                    // Si tiene hijos, elimínalos todos
                    while (divPadre.firstChild) {
                        divPadre.removeChild(divPadre.firstChild);
                    }
                }
                numeroPortabilidadFijo();
                donanteFijo();
                tarifasFijo();
                titularPortabilidadFijo();
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

function tarifasFijo() {
    let parentElement = document.getElementById('contenido_fijo');

    let tarifaFijo = document.createElement("div");
    tarifaFijo.id = 'tarifa_fijo';


    // Define los datos para los elementos de entrada
    var tarifas = [
        { tarifa: ' Estándar - prepago' },
        { tarifa: '1000 minutos - Postpago' },
        { tarifa: '2000 minutos - Postpago' }
    ];

    // Si el div ya tiene hijos, elimínalos todos
    while (tarifaFijo.firstChild) {
        tarifaFijo.removeChild(tarifaFijo.firstChild);
    }

    // Crea el h5 que será el título del div
    let h5 = document.createElement("h5");
    h5.textContent = "Elige la tarifa del telefono fijo";
    tarifaFijo.appendChild(h5);

    // Crea el elemento select
    let select = document.createElement("select");
    select.name = "tarifa";
    select.className = "form-select mb-3";

    // Crea los elementos de entrada
    tarifas.forEach(function (dato, i) {
        let option = document.createElement("option");
        option.value = dato.tarifa;
        option.textContent = dato.tarifa;
        select.appendChild(option);
    });

    tarifaFijo.appendChild(select);
    parentElement.appendChild(tarifaFijo);
}


function numTlfnFijo() {
    var elementParent = document.getElementById('contenido_fijo');
    // crear el div contenedor del campo telefono
    var telefonoDiv = document.createElement("div");
    telefonoDiv.id = "telefono_fijo";

    // crear el h5 para el titulo
    let h5 = document.createElement("h5");
    h5.textContent = "Numero de telefono fijo";

    // Crear un input para el numero de telefono fijo
    var telefonoInput = document.createElement("input");
    telefonoInput.classList.add("form-control", "mb-2");
    telefonoInput.type = "text";
    telefonoInput.name = "numero_telefono";
    telefonoInput.id = "numero_tlfn_fijo";
    telefonoInput.placeholder = "Numero de telefono fijo";

    telefonoDiv.appendChild(h5);
    telefonoDiv.appendChild(telefonoInput);

    elementParent.appendChild(telefonoDiv);
}


function antiguoTitularFijo() {
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
    document.getElementById('contenido_fijo').appendChild(antiguoTitularDiv);
}


function donanteFijo() {
    // Crear un div con id "donante_fijo"
    var donanteDiv = document.createElement("div");
    donanteDiv.id = "donante_fijo";

    // Crear un elemento h4 para "Compañia donante"
    var h4Element = document.createElement("h4");
    h4Element.textContent = "Compañia donante";
    h4Element.className = "mt-2";

    // Crear un input para la compañía
    var inputElement = document.createElement("input");
    inputElement.className = "form-control mb-3";
    inputElement.type = "text";
    inputElement.name = "donante_fijo";
    inputElement.id = "donante_fijo_input"; // Cambiamos el id para evitar duplicados
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
    var parentElement = document.getElementById("contenido_fijo"); // Cambia "antiguo_titular_fijo" al elemento padre deseado

    // Añadir el div con id "donante_fijo" al elemento padre
    parentElement.appendChild(donanteDiv);
}


function cambioTitularFijo() {
    let parentElement = document.getElementById('contenido_fijo');

    let cambioTitular = document.createElement('div');
    cambioTitular.id = 'cambio_titular_fijo';

    // Crea el h4 que será el título del div
    let h4 = document.createElement('h4');
    h4.textContent = 'Datos del antiguo titular';
    cambioTitular.appendChild(h4);

    // Define los datos para los elementos de entrada
    var datos = [
        { titulo: 'Nombre del antiguo titular', nombre: 'nombre_antiguo_titular_fijo', placeholder: 'Nombre antiguo titular' },
        { titulo: 'Apellido del antiguo titular', nombre: 'apellido_antiguo_titular_fijo', placeholder: 'Apellido antiguo titular' },
        { titulo: 'DNI del antiguo titular', nombre: 'DNI_antiguo_titular_fijo', placeholder: 'DNI antiguo titular' },
        { titulo: 'Numero de telefono del antiguo titular', nombre: 'telefono_antiguo_titular_fijo', placeholder: 'Telefono antiguo titular' }
    ];

    // Crea los elementos de entrada
    datos.forEach(function (dato) {
        var h6 = document.createElement('h6');
        h6.textContent = dato.titulo;

        var input = document.createElement('input');
        input.className = 'form-control mb-3';
        input.type = 'text';
        input.name = dato.nombre;
        input.id = dato.nombre;
        input.placeholder = dato.placeholder;

        cambioTitular.appendChild(h6);
        cambioTitular.appendChild(input);
    });

    parentElement.appendChild(cambioTitular);
}


function numeroPortabilidadFijo() {
    let parentElement = document.getElementById('contenido_fijo');

    // Crear un div con id "numero_portabilidad_fijo"
    var numeroPortabilidadDiv = document.createElement("div");
    numeroPortabilidadDiv.id = "numero_portabilidad_fijo";

    // Crear un elemento h4 para la pregunta
    var h4Element = document.createElement("h4");
    h4Element.textContent = "Numero de telefono a portar";
    h4Element.className = "mt-2";

    // Crear un input para el numero de telefono
    var inputElement = document.createElement("input");
    inputElement.className = "form-control mb-3";
    inputElement.type = "text";
    inputElement.name = "numero_portabilidad_fijo";
    inputElement.id = "numero_portabilidad_fijo_input"; // Cambiamos el id para evitar duplicados
    inputElement.placeholder = "Numero de telefono a portar";

    if (numeroPortabilidadDiv.childElementCount > 0) {
        while (numeroPortabilidadDiv.firstChild) {
            numeroPortabilidadDiv.removeChild(numeroPortabilidadDiv.firstChild);
        }
    }

    // Añadir los elementos al div
    numeroPortabilidadDiv.appendChild(h4Element);
    numeroPortabilidadDiv.appendChild(inputElement);

    // Obtener el elemento padre donde deseas agregar el div
    parentElement.appendChild(numeroPortabilidadDiv);
}

function titularPortabilidadFijo() {
    // Define los datos para los elementos de entrada
    var datos = [
        {
            id: 'si_mismo_titular_fijo', value: 'si', text: 'Si, se utilizaran los datos del cliente.', onclick: () => {
                let antiguoTitularDiv = document.getElementById('datos_antiguo_titular')
                // Si el div ya tiene hijos, elimínalos todos
                while (antiguoTitularDiv !== null && antiguoTitularDiv.firstChild) {
                    antiguoTitularDiv.removeChild(antiguoTitularDiv.firstChild);
                }
            }
        },
        {
            id: 'otro_titular_fijo', value: 'no', text: 'No, será un nuevo titular.', onclick: () => {
                let antiguoTitularDiv = document.getElementById('datos_antiguo_titular')
                // Si el div ya tiene hijos, elimínalos todos
                while (antiguoTitularDiv !== null && antiguoTitularDiv.firstChild) {
                    antiguoTitularDiv.removeChild(antiguoTitularDiv.firstChild);
                }

                antiguoTitularFijo();
            }
        }
    ];

    // Obtén el div con id "mismo_titular_fijo"
    var mismoTitularDiv = document.createElement('div');
    mismoTitularDiv.id = 'mismo_titular'
    mismoTitularDiv.className = "text-start p-3"
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
        radio.name = "mismo_titular_fijo";
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
    document.getElementById('contenido_fijo').appendChild(mismoTitularDiv);

    let antiguoTitularDiv = document.createElement('div');
    antiguoTitularDiv.id = "datos_antiguo_titular";

    document.getElementById('contenido_fijo').appendChild(antiguoTitularDiv);
}