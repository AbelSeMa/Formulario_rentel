/** Función que muestra el formulario del producto 'movil'
* @summary Cuando el usuario selecciona el producto se abre el modal donde se inserta las opciones.
*          La función se construye dinámicamente en función de las opciones que el usuario va eligiendo.
* @return No se devuelve nada, la función inserta los elementos en el div padre.
*/
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
    let servicios = ['Línea nueva', 'Línea portada'];
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

        if (servicios[i] === 'Línea nueva') {
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

        if (servicios[i] === 'Línea portada') {
            input.onclick = function () {
                let divPadre = document.getElementById('contenido_movil');
                // Comprueba si el div padre tiene hijos
                if (divPadre.hasChildNodes()) {
                    // Si tiene hijos, elimínalos todos
                    while (divPadre.firstChild) {
                        divPadre.removeChild(divPadre.firstChild);
                    }
                }
                donanteMovil()
                crearPortabilidad();
                titularPortabilidadMovil();
                tarifaMovil();

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


/** 
* funcion que genera el input:text para el número de número sim.
* @summary Crea dinámicamente el input:text que recoge el número de la sim cuando la línea móvil es nueva
* @return No devuelve nada. Sólo genera el input:text
*/
function numSim() {

    // Obtén el elemento div
    let contenidoMovil = document.getElementById('contenido_movil');
    let row = document.createElement('div');
    row.classList.add('row')

    let col1 = document.createElement('div');
    col1.classList.add('col-12')

    let col2 = document.createElement('div')
    col2.classList.add('col')

    // Comprueba si el div está vacío, si no lo está, límpialo
    while (contenidoMovil.firstChild) {
        contenidoMovil.removeChild(contenidoMovil.firstChild);
    }

    // Crea el título h4
    let h4 = document.createElement('h4');
    h4.textContent = 'SIM rentel';
    contenidoMovil.appendChild(h4);

    // Crea el input text
    let input = document.createElement('input');
    input.type = 'text';
    input.name = 'sim_rentel';
    input.id = 'simRentel'
    input.maxLength = 19;
    input.placeholder = 'Nº sim';
    input.classList.add('form-control', 'mb-3');
    col1.appendChild(input);

    let boton = document.createElement('button');
    boton.type = 'button';
    boton.textContent = 'Verificar';
    boton.classList.add('btn', 'btn-primary', 'btn-sm', 'mb-3');
    boton.onclick = function () {
        algoritmoLuhn('simRentel');
    }

    col2.appendChild(boton)

    row.appendChild(col1)
    row.appendChild(col2)
    contenidoMovil.appendChild(row)

}

/** 
* Crea los select de tarifas móvil.
* @summary Función asincrona que manda una petición al servidor para que le devuelva las tarifas de movil, y a partir de ellas crea el select
* @return No devuelve nada, sólo genera la información en el DOM.
*/
async function tarifaMovil() {
    let parentElement = document.getElementById('contenido_movil');

    let tarifas_moviles = await get_tarifas_moviles();

    //Div contenedor del select para elegir el tipo de tarifa
    let tarifasMoviles = document.createElement('div');
    tarifasMoviles.id = 'tarifasMoviles'


    if (tarifasMoviles.hasChildNodes()) {
        // Si tiene hijos, elimínalos todos
        while (tarifasMoviles.firstChild) {
            tarifasMoviles.removeChild(tarifasMoviles.firstChild);
        }
    }


    let h4 = document.createElement('h4');
    h4.textContent = 'Elige la tarifa de la línea móvil';
    tarifasMoviles.appendChild(h4);

    
    crearSelectTarifasMovilesTodas(tarifas_moviles);
    function crearSelectTarifasMovilesTodas(datos) {

        // Crea el elemento select
        let select = document.createElement("select");
        select.id = "select_tarifa";
        select.name = "tarifa";
        select.className = "form-select mb-2";
        
        // Crea los options
        datos.tarifas_moviles.forEach(function (dato) {
            let option = document.createElement("option");
            option.value = `${dato.NomTarifa} ${dato.PvpCuota}€`;
            option.textContent = `${dato.NomTarifa} ${dato.PvpCuota}€`;
            select.appendChild(option);
        });
        
        tarifasMoviles.appendChild(select);
    }
    parentElement.appendChild(tarifasMoviles);
}

/** 
* Función que genera los campos para la portabilidad móvil.
* @summary Crea dinámicamente todos los inputs, cuando el usuario selecciona 'portabilidad'.
*/
function crearPortabilidad() {
    // Recupera el elemento div padre
    let parentElement = document.getElementById('contenido_movil');

    // Crea el div donde irá todo los elementos generados
    let contenido_portabilidad = document.createElement('div');
    contenido_portabilidad.id = 'contenido_portabilidad';

    // Crea el título y sus propiedades para el número de móvil
    let h4Movil = document.createElement('h4');
    h4Movil.textContent = 'Número a portar';
    h4Movil.className = 'mt-3'
    contenido_portabilidad.appendChild(h4Movil);

    // Crea el elemento input:text y sus propiedades para el número de movil
    let inputMovil = document.createElement('input');
    inputMovil.type = 'text';
    inputMovil.min = 1;
    inputMovil.maxLength = 9;
    inputMovil.name = 'numero_telefono';
    inputMovil.classList.add('form-control', 'mb-3');
    inputMovil.placeholder = 'nº de movil';
    contenido_portabilidad.appendChild(inputMovil);

    // Crea el título para el tipo actual (contrato o prepago)
    let h4Tipo = document.createElement('h4');
    h4Tipo.textContent = 'Tipo actual';
    contenido_portabilidad.appendChild(h4Tipo);

    // Crea el radio de contrato y sus propiedades
    let radioContrato = document.createElement('input');
    radioContrato.type = 'radio';
    radioContrato.name = 'tipo';
    radioContrato.value = 'Contrato'
    radioContrato.id = 'contrato';
    radioContrato.className = 'form-check-input';
    radioContrato.onclick = function () {
        eliminarInputsSim(); // Elimina los inputs si los hubiera previamente
        eliminarBotonValidar(); // Elimina los botones de validar si los hubiera previamente
        crearInputSim('Nº de SIM rentel', 'sim_rentel'); // Crea el primer input para la sim rentel
        crearBotonValidar('sim_rentel') // Crea el botón que verifica sim rentel
    };
    contenido_portabilidad.appendChild(radioContrato);

    let labelContrato = document.createElement('label');
    labelContrato.setAttribute('for', 'contrato');
    labelContrato.textContent = 'Contrato';
    contenido_portabilidad.appendChild(labelContrato);

    let br = document.createElement('br');
    contenido_portabilidad.appendChild(br);

    // Crea el radio de prepago y sus propiedades
    let radioPrepago = document.createElement('input');
    radioPrepago.type = 'radio';
    radioPrepago.name = 'tipo';
    radioPrepago.value = 'Prepago'
    radioPrepago.id = 'prepago';
    radioPrepago.className = 'form-check-input mb-3';
    radioPrepago.onclick = () => {
        eliminarInputsSim(); // Elimina los inputs si los hubiera previamente
        eliminarBotonValidar(); // Elimina los botones de validar si los hubiera previamente
        crearInputSim('Nº de SIM rentel', 'sim_rentel'); // Crea el primer input para la sim rentel
        crearBotonValidar('sim_rentel'); // Crea el botón que verifica sim rentel
        crearInputSim('Nº de SIM antigua', 'sim_antigua'); // crea el segundo input para la sim antigua
        crearBotonValidar('sim_antigua'); // Crea el botón que verifica sim antigua

    };
    contenido_portabilidad.appendChild(radioPrepago);


    let labelPrepago = document.createElement('label');
    labelPrepago.setAttribute('for', 'prepago');
    labelPrepago.textContent = 'Prepago';
    contenido_portabilidad.appendChild(labelPrepago);
    contenido_portabilidad.appendChild(document.createElement('br'))


    /** 
    * Elimina los input:text de la sim
    * @summary Elimina los elementos con la clase '.imput_sim', 
    *          para que cada vez que se pulse la opción de 'contrato' o 'prepago' no genere más input duplicados.
    */
    function eliminarInputsSim() {
        let oldInputs = document.querySelectorAll('.input_sim');
        oldInputs.forEach(input => {
            contenido_portabilidad.removeChild(input.previousSibling);  // Elimina el título
            contenido_portabilidad.removeChild(input);  // Elimina el input
        });

    }

    /** 
    * Elimina el botón que valida el número de la sim
    * @summary Elimina el botón que comprueba que el número de la sim es válido, para cada vez que pulse no genere más de un botón.
    */
    function eliminarBotonValidar() {
        let oldButton = document.querySelectorAll('.verificar');
        oldButton.forEach(button => {
            contenido_portabilidad.removeChild(button);  // Elimina el input
        });

    }
    /** 
    * Función que genera un input:text
    * @summary Crea un input y su titulo para recoger el número de la sim de la opciones 'contrato' y 'prepago'
    * @param {string} titulo - Cadena que será utilizada para crear el h4 que será el titulo del input
    * @param {string} name - Cadena que será utilizada para crear las propiedades de 'name' e 'id'
    */
    function crearInputSim(titulo, name) {
        // Crea el título y el input para el número de SIM
        let h4Sim = document.createElement('h4');
        h4Sim.textContent = titulo;
        contenido_portabilidad.appendChild(h4Sim);

        let inputSim = document.createElement('input');
        inputSim.type = 'text';
        inputSim.name = name;
        inputSim.id = name;
        inputSim.maxLength = 19;
        inputSim.minLength = 19;
        inputSim.className = 'input_sim form-control mb-3';
        contenido_portabilidad.appendChild(inputSim);
    }

    /** 
    * Función que genera el botón para validar el número sim introducido
    * @param {string} name - Parámetro que indica la propiedad 'name' que se va a comprobar
    */
    function crearBotonValidar(name) {
        let boton = document.createElement('button');
        boton.type = 'button';
        boton.textContent = 'Verificar';
        boton.classList.add('btn', 'btn-primary', 'btn-sm', 'mb-3', 'verificar');
        boton.onclick = function () {
            algoritmoLuhn(name);
        }
        contenido_portabilidad.appendChild(boton);
    }

    parentElement.appendChild(contenido_portabilidad)
}

/** 
* Función que genera el input:text para recoger el dato 'compañia donante'.
*/
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

/** 
* Función que genera todos los inputs y sus propiedades para el titular de la portabilidad.
* @summary Crea dinámicamente los inputs que se necesitan a medida que el ususario interactua con el formulario. 
*/
function titularPortabilidadMovil() {
    // Define los datos para los radios del apartado ¿portabilidad se hará sobre el mismo titular?
    // la key 'onclick' añade la función a la propiedad, no se usa en el objeto
    var datos = [
        {
            id: 'si_mismo_titular_movil', value: 'Si', text: 'Si, se utilizaran los datos del cliente.', onclick: () => {
                let antiguoTitularDiv = document.getElementById('datos_antiguo_titular')
                // Si el div ya tiene hijos, elimínalos todos
                while (antiguoTitularDiv !== null && antiguoTitularDiv.firstChild) {
                    antiguoTitularDiv.removeChild(antiguoTitularDiv.firstChild);
                }
            }
        },
        {
            id: 'otro_titular_movil', value: 'no', text: 'No, será un nuevo titular.', onclick: () => {
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

    // Por cada objeto en el array crea un radio con las propiedades definidas y su correspondiente label
    datos.forEach(function (dato) {
        var radio = document.createElement("input");
        radio.className = "form-check-input mb-2";
        radio.type = "radio";
        radio.name = "mismo_titular_movil";
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

    // Crea el div que contendrá todos los elementos generados en portabilidad
    let antiguoTitularDiv = document.createElement('div');
    antiguoTitularDiv.id = "datos_antiguo_titular";

    document.getElementById('contenido_movil').appendChild(antiguoTitularDiv);
}
/** 
* Función que genera los input de antiguo titular movil
* @summary Crea dinámicamente los campos input a partir de los datos obtenidos del array
*/
function antiguoTitularMovil() {
    let antiguoTitularDiv = document.getElementById('datos_antiguo_titular')

    // Si el div ya tiene hijos, elimínalos todos
    while (antiguoTitularDiv.firstChild) {
        antiguoTitularDiv.removeChild(antiguoTitularDiv.firstChild);
    }

    // Define los datos para crear cada input
    var datos = [
        { titulo: 'Nombre del antiguo titular', nombre: 'nombre_antiguo_titular_movil', placeholder: 'Nombre del antiguo titular' },
        { titulo: 'Apellidos del antiguo titular', nombre: 'apellidos_antiguo_titular_movil', placeholder: 'Apellidos antiguo titular' },
        { titulo: 'DNI del antiguo titular', nombre: 'DNI_antiguo_titular_movil', placeholder: 'DNI antiguo titular' }
    ];

    // Crea los elementos con cada objeto del array y sus propiedades
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

    // Añade el div al elemento con id 'datos_moviles'
    document.getElementById('mismo_titular').appendChild(antiguoTitularDiv);
}


//Petición a Fast api para obtener tarifas de moviles
async function get_tarifas_moviles() {
    try {
        const response = await fetch('/tarifas_moviles');

        // Verifica si la respuesta es exitosa (código de estado 200)
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        return data
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}