function opcionesMovil() {
    // Crear un elemento div
    let div = document.createElement('div');
    let div2 = document.createElement('div');
    div2.id = "contenido_movil";

    // Crear un elemento h4
    let h4 = document.createElement('h4');
    h4.textContent = 'Servicio contratado';
    div.appendChild(h4);

    // Array para crear los servicios, cada elemento 
    // del array será un radio
    let servicios = ['alta_movil', 'portabilidad_movil'];
    let labels = ['Alta nueva', 'Portabilidad'];

    for (let i = 0; i < servicios.length; i++) {
        let input = document.createElement('input');
        input.className = 'form-check-input';
        input.type = 'radio';
        input.name = 'servicio_movil';
        input.id = servicios[i];
        input.value = servicios[i];
        input.required = true;

        let label = document.createElement('label');
        label.className = 'form-check-label';
        label.htmlFor = servicios[i];
        label.textContent = labels[i];

        if (servicios[i] === 'alta_movil') {
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

        if (servicios[i] === 'portabilidad_movil') {
            input.onclick = function () {
                let divPadre = document.getElementById('contenido_movil');
                // Comprueba si el div padre tiene hijos
                if (divPadre.hasChildNodes()) {
                    // Si tiene hijos, elimínalos todos
                    while (divPadre.firstChild) {
                        divPadre.removeChild(divPadre.firstChild);
                    }
                }
                crearPortabilidad()
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
    input.name = 'numero_sim_alta';
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
    radioPack.className = "form-check-input";
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
    parentElement.appendChild(h4Movil);

    let inputMovil = document.createElement('input');
    inputMovil.type = 'text';
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
    radioContrato.id = 'contrato';
    radioContrato.className = 'form-check-input';
    radioContrato.onclick = function() {
        eliminarInputsSim();
        crearInputSim('Nº de SIM rentel');
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
    radioPrepago.id = 'prepago';
    radioPrepago.className = 'form-check-input mb-3';
    radioPrepago.onclick = () => {
        eliminarInputsSim();
        crearInputSim('Nº de SIM rentel');
        crearInputSim('Nº de SIM antigua');
    };
    parentElement.appendChild(radioPrepago);


    let labelPrepago = document.createElement('label');
    labelPrepago.setAttribute('for', 'prepago');
    labelPrepago.textContent = 'Prepago';
    parentElement.appendChild(labelPrepago);



    function eliminarInputsSim() {
        let oldInputs = document.querySelectorAll('.input_sim');
        oldInputs.forEach(input => {
            parentElement.removeChild(input.previousSibling);  // Elimina el título
            parentElement.removeChild(input);  // Elimina el input
        });
    }

    function crearInputSim(titulo) {
        // Crea el título y el input para el número de SIM
        let h4Sim = document.createElement('h4');
        h4Sim.textContent = titulo;
        parentElement.appendChild(h4Sim);

        let inputSim = document.createElement('input');
        inputSim.type = 'text';
        inputSim.className = 'input_sim form-control mb-3';
        parentElement.appendChild(inputSim);
    }
}
