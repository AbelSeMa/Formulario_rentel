/** Función que muestra el formulario del producto 'Internet'
* @summary Cuando el usuario selecciona el producto se abre el modal donde se inserta las opciones.
*          La función se construye dinámicamente en función de las opciones que el usuario va eligiendo.
* @return No se devuelve nada, la función inserta los elementos en el div padre.
*/
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

/** 
* Crea los select de tipo de internet (Wi-Fi y Fibra) y tarifas de internet.
* @summary Función asincrona que manda una petición al servidor para que le devuelva las tarifas de internet, y a partir de ellas crea el select
* @return No devuelve nada, sólo genera la información en el DOM.
*/
async function mostrarProductosInternet() {
    let parentElement = document.getElementById('contenido_internet');
    let div = document.createElement('div');
    div.id = 'tarifas_internet'
    div.className = 'row'


    // crea el div para los elementos de tarifa
    let divT = document.createElement('div');
    divT.className = 'col-9'

    // Cre el div para los elementos de tipo (wifi y fibra)
    let divW = document.createElement('div');
    divW.className = 'col-3'


    let titulo = document.createElement('h4');
    titulo.textContent = 'Elige un producto'
    div.appendChild(titulo);

    
    // Crea el elemento select para las tarifas
    let select = document.createElement("select");
    select.name = "tarifa";
    select.className = "form-select mb-3";
    
    // petición al servidor para recoger las tarifas
    let tarifas = await get_tarifas_internet();

    
    // Crea lo options y los va incorporando al select con los datos recibidos.
    tarifas.tarifas_internet.forEach(function (dato, i) {
        let option = document.createElement("option");
        option.value = `${dato.Descripcion} ${dato.PVPConIva}€`;
        option.textContent = `${dato.Descripcion} ${dato.PVPConIva}€`;
        select.appendChild(option);
        });
    
    
    let tipos = [
        { tipo: 'WiFi' },
        { tipo: 'Fibra' }
    ]

    // Crea el elemento select para el tipo de servicio
    let select2 = document.createElement("select");
    select2.name = "tipo_servicio";
    select2.className = "form-select mb-3";

    // crea las opciones para cada tipo de servicio (wifi y fibra)
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

/** 
*Crea el input:text para recoger los datos de 'dirección de instalación'.
* @summary Crea dinámicamente el input:text que recoge la dirección de instalación del servicio internet.
*/
function direccionInstalacion() {

    // Obtén el div en el que quieres insertar el input
    let div = document.getElementById('contenido_internet');

    let div2 = document.createElement('div');
    div2.id = 'direccion_instalacion' 
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

/** 
* Función que crea los option para el select de permanencia
* @summary Función que recorre un array de objetos y a partir de los objetos crea un elemento option.
           La función retorna el array creado a partir del map con todos los option.
* @param {Array} permanencias - Array de objetos donde está la información de cada permanencia
* @return {array} Retorna el array con todos los option creado
*/
function crearOpcionesPermanencia(permanencias) {
    // Retorna el array de option creado con el map
    return permanencias.map(function (dato) {
        var option = document.createElement("option");
        option.value = dato.valor;
        option.text = dato.permanencia;
        // retorna el option que será añadido al array creado por el map 
        return option;
    });
}

/** 
* Función que crea el select con las permanencias de internet
* @summary Hace uso de la función 'crearOpcionesPermanencia' sobre el array de permanencias, que a su vez se le 
*          pasa un foreach que añade cada option devuelto por la funcion 'crearOpcionesPermanencia'
*/
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
    crearOpcionesPermanencia(permanencias).forEach(option => select.appendChild(option)); // añade al select cada option devuelto por el foreach
    div.appendChild(select);
    parentElement.appendChild(div)
}

//Petición a Fast api para obtener tarifas de internet
async function get_tarifas_internet() {
    try {
        const response = await fetch('/tarifas_internet');

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


