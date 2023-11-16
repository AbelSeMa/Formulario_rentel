function opcionesInternet() {
    // Crear un elemento div
    let div = document.createElement('div');
    div.id = "contenedor_estilo_internet";
    div.className = "text-start p-3";
    let div2 = document.createElement('div');
    div2.id = "contenido_internet";
    div2.className = "mx-4"

    let titulo = document.getElementById('titulo_modal').textContent = 'Internet'

    // Crear un elemento h4
    let h4 = document.createElement('h4');
    h4.textContent = 'Servicio contratado';
    div.appendChild(h4);

    // Array para crear los servicios, cada elemento 
    // del array será un radio
    let servicios = ['Alta internet'];
    let labels = ['Alta nueva'];

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

        if (servicios[i] === 'Alta internet') {
            input.onclick = function () {
                let divPadre = document.getElementById('contenido_internet');
                // Comprueba si el div padre tiene hijos
                if (divPadre.hasChildNodes()) {
                    // Si tiene hijos, elimínalos todos
                    while (divPadre.firstChild) {
                        divPadre.removeChild(divPadre.firstChild);
                    }
                }
                permanenciaInternet();
                mostrarProductosInternet();
                direccionInstalacion();

            };
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
    div.className = 'row'

    let divT = document.createElement('div');
    divT.className = 'col-6'

    let divW = document.createElement('div');
    divW.className = 'col-6'


    let titulo = document.createElement('h4');
    titulo.textContent = 'Elige un producto'
    div.appendChild(titulo);

    let tarifas = [
        { tarifa: ' Básico' },
        { tarifa: ' Avanzado'},
        { tarifa: 'Premiun'}
    ];

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


    let tipos = [
        { tipo: 'WiFi' },
        { tipo: 'Fibra' }
    ]

    // Crea el elemento select
    let select2 = document.createElement("select");
    select2.name = "tipo_servicio";
    select2.className = "form-select mb-3";

    tipos.forEach(function (dato) {
        let option = document.createElement("option");
        option.value = dato.tipo;
        option.textContent = dato.tipo;
        select2.appendChild(option);
    })

    divW.appendChild(select2)
    divT.appendChild(select)
    div.appendChild(divW);
    div.appendChild(divT)
    parentElement.appendChild(div)
}

function direccionInstalacion() {

    // Obtén el div en el que quieres insertar el input
    let div = document.getElementById('contenido_internet');
    let div2 = document.createElement('div');
    div2.id = 'direccion_instalacion'  // Reemplaza 'tuDiv' con el id de tu div
    div2.className = "mb-3"
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
    input.name = 'direccion_instalacion'

    // Inserta el nuevo input en el div
    div2.appendChild(titulo)
    div2.appendChild(input);

    div.appendChild(div2)
}

function crearOpcionesPermanencia(permanencia) {
    return permanencia.map(function (dato) {
        var option = document.createElement("option");
        option.value = dato.valor;
        option.text = dato.permanencia;
        return option;
    });
}

function permanenciaInternet() {
    let parentElement = document.getElementById('contenido_internet');
    let div = document.createElement('div');
    div.id = 'permanencia_internet';

    let permanencias = [
        { permanencia: 'Selecciona la permanencia', valor:'' },
        { permanencia: 'Sin permanencia', valor:''},
        { permanencia: '6 meses', valor:'6 meses' },
        { permanencia: '12 meses', valor:'12 meses' },
        { permanencia: '18 meses', valor: '18 meses' },
        { permanencia: '24 meses', valor: '24 meses' }
    ]

    let titulo = document.createElement('h4');
    titulo.textContent = 'Permanencia';
    div.appendChild(titulo)



    // Crea un select con las opciones de permanencia
    let select = document.createElement("select");
    select.name = "permanencia";
    select.className = "form-select mb-3"
        crearOpcionesPermanencia(permanencias).forEach(option => select.appendChild(option));
    div.appendChild(select);
    parentElement.appendChild(div)
}