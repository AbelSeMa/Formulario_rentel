/** 
* Función que muestra el formulario del producto 'Línea fija'
* @summary Cuando el usuario selecciona el producto se abre el modal donde se inserta las opciones.
*          La función se construye dinámicamente en función de las opciones que el usuario va eligiendo.
* @return No se devuelve nada, la función inserta los elementos en el div padre.
*/
function opcionesFijo() {
    // Crear un elemento div y sus propiedades, donde se inserta todos los elementos 'Línea nueva' y 'Portabilidad'
    let div = document.createElement('div');
    div.id = "servicios_contratados";
    div.className = "text-start p-3";

    // Crea el div y sus propiedades, donde se inserta los elementos creados dinámicamente
    let div2 = document.createElement('div');
    div2.id = "contenido_fijo";
    div2.className = "mx-4";
    
    // Cambia el contenido del h4 del modal que indica el producto que estás rellenando.
    document.getElementById('titulo_modal').textContent = 'Línea fija'

    // Crear un elemento h4 que será el encabezado.
    let h4 = document.createElement('h4');
    h4.textContent = 'Servicio contratado';
    div.appendChild(h4);

    // Array para crear los servicios, cada elemento del array será un radio creado dinámicamente.
    let servicios = ['Línea nueva', 'Línea portada'];

    // Array que se utiliza para los nombre de los labels.
    let labels = ['Alta nueva', 'Portabilidad'];

    // Por cada elemento en el array de servicios se crea un input:radio con sus propiedades.
    for (let i = 0; i < servicios.length; i++) {
        let input = document.createElement('input');
        input.className = 'form-check-input';
        input.type = 'radio';
        input.name = 'servicio';
        input.id = servicios[i];
        input.value = servicios[i];
        input.required = true;

        // Se crea el label con cada elemento del array de labels
        let label = document.createElement('label');
        label.className = 'form-check-label';
        label.htmlFor = servicios[i];
        label.textContent = labels[i];

        // Se añade la propiedad 'onclick' a radio que coincide con 'Línea nueva'
        if (servicios[i] === 'Línea nueva') {
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
                recarga();

            };
        }


        // Se añade la propiedad 'onclick' a radio que coincide con 'Línea portada'
        if (servicios[i] === 'Línea portada') {
            input.onclick = function () {
                let divPadre = document.getElementById('contenido_fijo');
                // Comprueba si el div padre tiene hijos
                if (divPadre.hasChildNodes()) {
                    // Si tiene hijos, elimínalos todos
                    while (divPadre.firstChild) {
                        divPadre.removeChild(divPadre.firstChild);
                    }
                }
                donanteFijo();
                numeroPortabilidadFijo();
                recarga();
                titularPortabilidadFijo();
                tarifasFijo();
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

/** 
* Función que genera el select de tarifas
* @summary Crea dinámicamente el select a partir de los datos recibido de la base de datos
* @return No devuelve nada. Sólo genera el select
*/
async function tarifasFijo() {
    let parentElement = document.getElementById('contenido_fijo');

    // crea un div y sus propiedades para crear dinámicamente el contenido de las tarifas
    let tarifaFijo = document.createElement("div");
    tarifaFijo.id = 'tarifa_fijo';

    //Obtenemos tarifas de Fijos
    let tarifas = await get_tarifas_tel_fijos()

    // Si el div ya tiene hijos, elimínalos todos
    while (tarifaFijo.firstChild) {
        tarifaFijo.removeChild(tarifaFijo.firstChild);
    }

    // Crea el h5 que será el título del div
    let h5 = document.createElement("h4");
    h5.textContent = "Elige la tarifa del telefono fijo";
    tarifaFijo.appendChild(h5);

    // Crea el elemento select
    let select = document.createElement("select");
    select.name = "tarifa";
    select.className = "form-select mb-3";

    // Crea los option
    tarifas.tarifas_tel_fijos.forEach(function (tarifa, i) {
        let option = document.createElement("option");
        option.value = `${tarifa.descripcion} ${tarifa.precio}€`;
        option.textContent = `${tarifa.descripcion} ${tarifa.precio}€`;
        select.appendChild(option);
    });
    tarifaFijo.appendChild(select);
    parentElement.appendChild(tarifaFijo);
}

/** 
* funcion que genera el input:text para el número de telefono fijo.
* @summary Crea dinámicamente el input:text que recoge el número de telefono de las líneas móviles.
* @return No devuelve nada. Sólo genera el input:text
*/
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
    telefonoInput.maxLength = 9;
    telefonoInput.name = "numero_telefono";
    telefonoInput.id = "numero_tlfn_fijo";
    telefonoInput.placeholder = "Numero de telefono fijo";

    telefonoDiv.appendChild(h5);
    telefonoDiv.appendChild(telefonoInput);

    elementParent.appendChild(telefonoDiv);
}

/** 
* Función que genera los input:text para antiguo cliente.
* @summary Crea dinámicamenet los tres input:text que recogen los datos del antiguo cliente, en caso de que el usuario
*           haya marcado la opción de 'No, será un nuevo titular'.
* @return No devuelve nada. Sólo genera los input:text
*/
function antiguoTitularFijo() {
    let antiguoTitularDiv = document.getElementById('datos_antiguo_titular')

    // Si el div ya tiene hijos, elimínalos todos
    while (antiguoTitularDiv.firstChild) {
        antiguoTitularDiv.removeChild(antiguoTitularDiv.firstChild);
    }

    // Define los datos para cada input:text
    var datos = [
        { titulo: 'Nombre del antiguo titular', nombre: 'nombre_antiguo_titular_fijo', placeholder: 'Nombre', pattern:'[A-Za-z\sáéíóúÁÉÍÓÚÑñ]{3,}' },
        { titulo: 'Apellidos del antiguo titular', nombre: 'apellidos_antiguo_titular_fijo', placeholder: 'Apellidos', pattern:'[A-Za-z\sáéíóúÁÉÍÓÚÑñ]{3,}' },
        { titulo: 'DNI del antiguo titular', nombre: 'DNI_antiguo_titular_fijo', placeholder: 'DNI', }
    ];

    // Crea los input:text para cada caso del array datos
    datos.forEach(function (dato) {
        var h6 = document.createElement('h6');
        h6.textContent = dato.titulo;

        var input = document.createElement('input');
        input.classList.add('form-control', 'mb-2');
        input.type = 'text';
        if (dato.titulo == 'DNI del antiguo titular' ) {
            input.maxLength = 9;        
        }
/*         input.pattern = dato?.pattern || '';
 */        input.name = dato.nombre;
        input.id = dato.nombre;
        input.placeholder = dato.placeholder;

        antiguoTitularDiv.appendChild(h6);
        antiguoTitularDiv.appendChild(input);
    });

    // Añade al div padre el div creado con los elementos creados
    document.getElementById('mismo_titular').appendChild(antiguoTitularDiv);
}

/** 
* Función que genera el input:text para la compañia donante.
* @summary Crea dinámicamente el input:text que recoge los datos de la compañia donante del telefono fijo.
* @return No devuelve nada. Sólo genera los input:text
*/
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

/** 
* Función que genera el input:text para el número de la portabilidad fija.
* @summary Crea dinámicamente el input:text que recoge los datos del número al que se le hace la portabildiad del fijo
* @return No devuelve nada. Sólo genera los input:text
*/
function numeroPortabilidadFijo() {
    let parentElement = document.getElementById('contenido_fijo');

    // Crear un div con id "numero_portabilidad_fijo"
    var numeroPortabilidadDiv = document.createElement("div");
    numeroPortabilidadDiv.id = "numero_portabilidad_fijo";

    // Crear un elemento h4 titulo del input
    var h4Element = document.createElement("h4");
    h4Element.textContent = "Numero de telefono a portar";
    h4Element.className = "mt-2";

    // Crear un input para el numero de telefono
    var inputElement = document.createElement("input");
    inputElement.className = "form-control mb-3";
    inputElement.type = "text";
    inputElement.maxLength = 9;
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


/** 
* Función que crea los radios de 'Si' y 'No' del mismo cliente.
* @summary Crea los inputs:radio y le añade sus propiedades. Cada opción está especificada en el array de datos.
*          La propiedad 'onclick' del objeto es la propia función que se utilizará para dar la propiedad 'onclick' al input.
*/
function titularPortabilidadFijo() {
    // Define los datos para los inputs generados.
    var datos = [
        {
            id: 'si_mismo_titular_fijo', value: 'Si', text: 'Si, se utilizaran los datos del cliente.', onclick: () => {
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

    // Crea el div con id "mismo_titular_fijo"
    var mismoTitularDiv = document.createElement('div');
    mismoTitularDiv.id = 'mismo_titular'

    // Crear un elemento h4 para la pregunta y lo añade al div
    var preguntaH4 = document.createElement("h4");
    preguntaH4.textContent = "¿La portabilidad se hará sobre el mismo titular?";
    preguntaH4.classList.add("mt-2");
    mismoTitularDiv.appendChild(preguntaH4);

    // Crea los elementos input a partir de los objetos del array
    datos.forEach(function (dato) {
        var radio = document.createElement("input");
        radio.className = "form-check-input";
        radio.type = "radio";
        radio.name = "mismo_titular_fijo";
        radio.id = dato.id;
        radio.value = dato.value;
        radio.onclick = dato.onclick;

        var label = document.createElement("label");
        label.className = "form-check-label mb-3";
        label.setAttribute("for", dato.id);
        label.textContent = dato.text;


        // Añade los elementos al div creado previamente
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

/** 
* Función que crea los dos input:number para el saldo del fijo
* @summary Crea los input:number y le añade sus propiedades para recoger el valor de la recarga del telefono fijo. Recoge 'Saldo inferior a' y 'Saldo a recargar'
* @return {ReturnValueDataTypeHere} No devuelve nada. Sólo genera los input:number
*/
function recarga() {
    let parentElement = document.getElementById('contenido_fijo');

    let recarga = document.createElement("div");
    recarga.id = 'recarga_salgo';

    // Si el div ya tiene hijos, elimínalos todos
    while (recarga.firstChild) {
        recarga.removeChild(recarga.firstChild);
    }

    // Crea el h5 que será el título del div
    let h5 = document.createElement("h5");
    h5.textContent = "Recarga automática línea fija.";
    h5.classList.add('mt-2')
    recarga.appendChild(h5);
  

    // crea el input de de saldo inferior
    let saldoInferior = document.createElement('input');
    saldoInferior.type = 'number';
    saldoInferior.name = 'saldo_inferior';
    saldoInferior.id = 'saldo_infe';
    saldoInferior.placeholder = 'Saldo inferior a..'
    saldoInferior.classList.add("form-control", "mb-2");


    // crea el input de de saldo inferior
    let recargaFijo = document.createElement('input');
    recargaFijo.type = 'number';
    recargaFijo.name = 'recarga_saldo';
    recargaFijo.id = 'recarga_fijo';
    recargaFijo.placeholder = 'Saldo a recargar €'
    recargaFijo.classList.add("form-control", "mb-2")



    recarga.appendChild(saldoInferior);
    recarga.appendChild(recargaFijo);

    parentElement.appendChild(recarga);
}

//Petición a Fast api para obtener tarifas de Teléfonos Fijos
async function get_tarifas_tel_fijos() {
    try {
        const response = await fetch('/tarifas_tel_fijos');

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