function opcionesMovil() {
    // Crear un elemento div
    let div = document.createElement('div');
    div.id = "contenedor_estilo_movil";
    div.className = "text-start p-3";
    let div2 = document.createElement('div');
    div2.id = "contenido_movil";
    div2.className = "mx-4"

    let titulo = document.getElementById('titulo_modal').textContent = 'Línea móvil'

    // Crear un elemento h4
    let h4 = document.createElement('h4');
    h4.textContent = 'Servicio contratado';
    div.appendChild(h4);

    // Array para crear los servicios, cada elemento 
    // del array será un radio
    let servicios = ['Alta movil', 'Portabilidad movil'];
    let labels = ['Alta nueva', 'Portabilidad'];
    var br = document.createElement("br");

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

        if (servicios[i] === 'Alta movil') {
            input.onclick = function () {
                let divPadre = document.getElementById('contenido_movil');
                // Comprueba si el div padre tiene hijos
                if (divPadre.hasChildNodes()) {
                    // Si tiene hijos, elimínalos todos
                    while (divPadre.firstChild) {
                        divPadre.removeChild(divPadre.firstChild);
                    }
                }
                numSim();
                tarifaMovil()

            };
        }

        if (servicios[i] === 'Portabilidad movil') {
            input.onclick = function () {
                let divPadre = document.getElementById('contenido_movil');
                // Comprueba si el div padre tiene hijos
                if (divPadre.hasChildNodes()) {
                    // Si tiene hijos, elimínalos todos
                    while (divPadre.firstChild) {
                        divPadre.removeChild(divPadre.firstChild);
                    }
                }
                titularPortabilidadMovil();
                donanteMovil()
                crearPortabilidad();
                
            };
            input.classList.add('mb-3');
        }

        div.appendChild(input);
        div.appendChild(label);;
        div.appendChild(document.createElement('br'));
    }

    // Añadir div al elemento padre
    document.body.appendChild(div);
    let contenedor = document.getElementById('contenedor');

    contenedor.appendChild(div)
    contenedor.appendChild(div2)
}

function numSim() {

    // Obtén el elemento div
    let div = document.getElementById('contenido_movil');

    // Comprueba si el div está vacío, si no lo está, límpialo
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }

    // Crea el título h4
    let h4 = document.createElement('h4');
    h4.textContent = 'Número de la SIM';
    div.appendChild(h4);

    // Crea el input text
    let input = document.createElement('input');
    input.type = 'text';
    input.name = 'numero_sim';
    input.placeholder = 'Introduce el número de la SIM nueva';
    input.classList.add('form-control', 'mb-3');
    div.appendChild(input);


}


function tarifaMovil() {
    let parentElement = document.getElementById('contenido_movil');

    let individual = [
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

    let pack = [
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

    // Crea los elementos de entrada
    let radioIndividual = document.createElement("input");
    radioIndividual.className = "form-check-input";
    radioIndividual.type = "radio";
    radioIndividual.name = "tarifa";
    radioIndividual.id = "radio_individual";
    radioIndividual.onclick = function () {
        crearSelect(individual);
    };

    let labelIndividual = document.createElement("label");
    labelIndividual.setAttribute("for", "radio_individual");
    labelIndividual.className = "form-check-label";
    labelIndividual.textContent = "Tarifa individual";
    let br = document.createElement('br');

    parentElement.appendChild(radioIndividual);
    parentElement.appendChild(labelIndividual);
    parentElement.appendChild(br);

    let radioPack = document.createElement("input");
    radioPack.className = "form-check-input mb-3";
    radioPack.type = "radio";
    radioPack.name = "tarifa";
    radioPack.id = "radio_pack";
    radioPack.onclick = function () {
        crearSelect(pack);
    };

    let labelPack = document.createElement("label");
    labelPack.setAttribute("for", "radio_pack");
    labelPack.className = "form-check-label label_fibras";
    labelPack.textContent = "Pack megas compartidos";


    parentElement.appendChild(radioPack);
    parentElement.appendChild(labelPack);

    function crearSelect(datos) {
        // Elimina el select anterior si existe
        let oldSelect = document.getElementById('select_tarifa');
        if (oldSelect) {
            parentElement.removeChild(oldSelect);
        }

        // Crea el elemento select
        let select = document.createElement("select");
        select.id = "select_tarifa";
        select.name = "tarifa";
        select.className = "form-select";

        // Crea los options
        datos.forEach(function (dato) {
            let option = document.createElement("option");
            option.value = dato.datos;
            option.textContent = dato.datos + ' - ' + dato.precio;
            select.appendChild(option);
        });

        parentElement.appendChild(select);
    }
}

function crearPortabilidad() {
    let parentElement = document.getElementById('contenido_movil');

    // Crea el título y el input para el número de móvil
    let h4Movil = document.createElement('h4');
    h4Movil.textContent = 'Número al que se le hace la portabilidad';
    h4Movil.className = 'mt-3'
    parentElement.appendChild(h4Movil);

    let inputMovil = document.createElement('input');
    inputMovil.type = 'text';
    inputMovil.name = 'numero_telefono'
    inputMovil.classList.add('form-control', 'mb-3');
    inputMovil.placeholder = 'nº de movil';
    parentElement.appendChild(inputMovil);

    // Crea el título y los radio buttons para el tipo actual
    let h4Tipo = document.createElement('h4');
    h4Tipo.textContent = 'Tipo actual';
    parentElement.appendChild(h4Tipo);

    let radioContrato = document.createElement('input');
    radioContrato.type = 'radio';
    radioContrato.name = 'tipo';
    radioContrato.value = 'Contrato'
    radioContrato.id = 'contrato';
    radioContrato.className = 'form-check-input';
    radioContrato.onclick = function() {
        eliminarInputsSim();
        crearInputSim('Nº de SIM rentel', 'sim_rentel');
        tarifaMovil();
    };
    parentElement.appendChild(radioContrato);

    let labelContrato = document.createElement('label');
    labelContrato.setAttribute('for', 'contrato');
    labelContrato.textContent = 'Contrato';
    parentElement.appendChild(labelContrato);

    let br = document.createElement('br');
    parentElement.appendChild(br);

    let radioPrepago = document.createElement('input');
    radioPrepago.type = 'radio';
    radioPrepago.name = 'tipo';
    radioPrepago.value = 'Prepago'
    radioPrepago.id = 'prepago';
    radioPrepago.className = 'form-check-input mb-3';
    radioPrepago.onclick = () => {
        eliminarInputsSim();
        crearInputSim('Nº de SIM rentel', 'sim_rentel');
        crearInputSim('Nº de SIM antigua', 'sim_antigua');
        tarifaMovil();
    };
    parentElement.appendChild(radioPrepago);


    let labelPrepago = document.createElement('label');
    labelPrepago.setAttribute('for', 'prepago');
    labelPrepago.textContent = 'Prepago';
    parentElement.appendChild(labelPrepago);
    parentElement.appendChild(document.createElement('br'))



    function eliminarInputsSim() {
        let oldInputs = document.querySelectorAll('.input_sim');
        oldInputs.forEach(input => {
            parentElement.removeChild(input.previousSibling);  // Elimina el título
            parentElement.removeChild(input);  // Elimina el input
        });
    }

    function crearInputSim(titulo, name) {
        // Crea el título y el input para el número de SIM
        let h4Sim = document.createElement('h4');
        h4Sim.textContent = titulo;
        parentElement.appendChild(h4Sim);

        let inputSim = document.createElement('input');
        inputSim.type = 'text';
        inputSim.name = name;
        inputSim.className = 'input_sim form-control mb-3';
        parentElement.appendChild(inputSim);
    }
}

function donanteMovil() {
    // Crear un div con id "donante_fijo"
    var donanteDiv = document.createElement("div");
    donanteDiv.id = "donante_movil";

    // Crear un elemento h4 para "Compañia donante"
    var h4Element = document.createElement("h4");
    h4Element.textContent = "Compañia donante";
    h4Element.className = "mt-2";

    // Crear un input para la compañía
    var inputElement = document.createElement("input");
    inputElement.className = "form-control mb-3";
    inputElement.type = "text";
    inputElement.name = "donante_movil";
    inputElement.id = "donante_movil_input"; // Cambiamos el id para evitar duplicados
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
    var parentElement = document.getElementById("contenido_movil"); // Cambia "antiguo_titular_fijo" al elemento padre deseado

    // Añadir el div con id "donante_fijo" al elemento padre
    parentElement.appendChild(donanteDiv);
}

function titularPortabilidadMovil() {
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

                antiguoTitularMovil();
            }
        }
    ];

    // Obtén el div con id "mismo_titular_fijo"
    var mismoTitularDiv = document.createElement('div');
    mismoTitularDiv.id = 'mismo_titular'
    // Crear un elemento h4 para la pregunta
    var preguntaH4 = document.createElement("h4");
    preguntaH4.textContent = "¿La portabilidad se hará sobre el mismo titular?";
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
    document.getElementById('contenido_movil').appendChild(mismoTitularDiv);

    let antiguoTitularDiv = document.createElement('div');
    antiguoTitularDiv.id = "datos_antiguo_titular";

    document.getElementById('contenido_movil').appendChild(antiguoTitularDiv);
}

function antiguoTitularMovil() {
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