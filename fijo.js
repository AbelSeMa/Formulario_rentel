function mostrarFijo() {
    var info = document.createElement("p");
    info.textContent = 'Elige la velocidad de la fibra:';
    document.getElementById('opcionesMovil').style.display = 'none';
    document.getElementById('opcionesInternet').style.display = 'none';

    document.getElementById('opciones_fijo').style.display = 'block';

}

function tarifasFijo() {
    var elementParent = document.getElementById('datos_fijo');
    var tarifaFijo = document.createElement("div");
    tarifaFijo.id = "tarifa_fijo";

    var tarifas = [
        {
            tarifa: ' Estándar - prepago',
        },
        {
            tarifa: '1000 minutos - Postpago',
        },
        {
            tarifa: '2000 minutos - Postpago',
        }
    ]

    // Elimina opciones anteriores si las hay
    // Limpiar el div con id "mismo_titular_fijo"
    if (tarifaFijo.childElementCount > 0) {
        while (tarifaFijo.firstChild) {
            tarifaFijo.removeChild(tarifaFijo.firstChild);
        }
    }

    // crea el h5 para el titulo
    let h5 = document.createElement("h5");
    h5.textContent = "Elige la tarifa del telefono fijo";
    tarifaFijo.appendChild(h5);

    // Agrega las opciones como radio buttons
    for (let i = 0; i < tarifas.length; i++) {
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "tarifa"; // Nombre del grupo de radio buttons
        radio.value = tarifas[i].precio; // Valor del radio button (precio)
        radio.id = "radio_" + i; // ID único para el radio button
        radio.className = "form-check-input"; // Clase CSS para el radio button
        radio.onclick = () => {
            eval(tarifas[i].activador);
        };
        tarifaFijo.appendChild(radio); // Agrega el radio button

        let label = document.createElement("label");
        label.setAttribute("for", "radio_" + i);
        label.className = "form-check-label label_fibras"; // Clase CSS para el radio button
        label.innerHTML = tarifas[i].tarifa; // Texto visible para la tarifa
        tarifaFijo.appendChild(label);

        let br = document.createElement("br"); // Crea un elemento <br>
        tarifaFijo.appendChild(br); // Agrega el <br> después de la etiqueta


    }
    elementParent.appendChild(tarifaFijo);
}

function antiguoTitularFijo() {

    // Obtener el div con id "antiguo_titular_fijo"
    var antiguoTitularDiv = document.createElement("div");
    antiguoTitularDiv.id = "antiguo_titular_fijo";

    // Crear un elemento h6 para "Nombre del antiguo titular"
    var nombreH6 = document.createElement("h6");
    nombreH6.textContent = "Nombre del antiguo titular";

    // Crear un input para el nombre del antiguo titular
    var nombreInput = document.createElement("input");
    nombreInput.className = "form-control";
    nombreInput.type = "text";
    nombreInput.name = "nombre_antiguo_titular_fijo";
    nombreInput.id = "nombre_antiguo_titular_fijo";
    nombreInput.placeholder = "Nombre del antiguo titular";

    // Crear un elemento h6 para "Apellidos del antiguo titular"
    var apellidosH6 = document.createElement("h6");
    apellidosH6.textContent = "Apellidos del antiguo titular";

    // Crear un input para los apellidos del antiguo titular
    var apellidosInput = document.createElement("input");
    apellidosInput.className = "form-control";
    apellidosInput.type = "text";
    apellidosInput.name = "apellidos_antiguo_titular_fijo";
    apellidosInput.id = "apellidos_antiguo_titular_fijo";
    apellidosInput.placeholder = "Apellidos antiguo titular";

    // Crear un elemento h6 para "DNI del antiguo titular"
    var dniH6 = document.createElement("h6");
    dniH6.textContent = "DNI del antiguo titular";

    // Crear un elemento h6 para "DNI del antiguo titular"
    var dniInput = document.createElement("input");
    dniInput.className = "form-control";
    dniInput.type = "text";
    dniInput.name = "DNI_antiguo_titular_fijo";
    dniInput.id = "DNI_antiguo_titular_fijo";
    dniInput.placeholder = "DNI antiguo titular";

    if (antiguoTitularDiv.childElementCount > 0) {
        while (antiguoTitularDiv.firstChild) {
            antiguoTitularDiv.removeChild(antiguoTitularDiv.firstChild);
        }
    }


    // Añadir los elementos creados al div
    antiguoTitularDiv.appendChild(nombreH6);
    antiguoTitularDiv.appendChild(nombreInput);
    antiguoTitularDiv.appendChild(apellidosH6);
    antiguoTitularDiv.appendChild(apellidosInput);
    antiguoTitularDiv.appendChild(dniH6);
    antiguoTitularDiv.appendChild(dniInput);

}

function titularPortabilidadFijo() {
    // Crear un elemento h4 para la pregunta
    var preguntaH4 = document.createElement("h4");
    preguntaH4.textContent = "¿La portabilidad se hará sobre el mismo titular?";

    // Crear el primer radio button "Si"
    var siRadio = document.createElement("input");
    siRadio.className = "form-check-input";
    siRadio.type = "radio";
    siRadio.name = "mismo_titular_fijo";
    siRadio.id = "si_mismo_titular_fijo";
    siRadio.value = "si";

    // Crear la etiqueta para el radio button "Si"
    var siLabel = document.createElement("label");
    siLabel.className = "form-check-label";
    siLabel.setAttribute("for", "si_mismo_titular_fijo");
    siLabel.textContent = "Si, el mismo titular de la línea";


    // Crear un salto de línea
    var lineBreak = document.createElement("br");

    // Crear el segundo radio button "No"
    var noRadio = document.createElement("input");
    noRadio.className = "form-check-input mb-3";
    noRadio.type = "radio";
    noRadio.name = "mismo_titular_fijo";
    noRadio.id = "otro_titular_fijo";
    noRadio.value = "no";
    noRadio.onclick = () => {
        antiguoTitularFijo();
    };

    // Crear la etiqueta para el radio button "No"
    var noLabel = document.createElement("label");
    noLabel.className = "form-check-label";
    noLabel.setAttribute("for", "otro_titular_fijo");
    noLabel.textContent = "No, será un nuevo titular";

    // Obtener el div con id "mismo_titular_fijo"
    var mismoTitularDiv = document.createElement("div");
    mismoTitularDiv.id = "mismo_titular_fijo";

    // Limpiar el div con id "mismo_titular_fijo"
    if (mismoTitularDiv.childElementCount > 0) {
        while (mismoTitularDiv.firstChild) {
            mismoTitularDiv.removeChild(mismoTitularDiv.firstChild);
        }
    }



    // Añadir los elementos creados al div
    mismoTitularDiv.appendChild(preguntaH4);
    mismoTitularDiv.appendChild(siRadio);
    mismoTitularDiv.appendChild(siLabel);
    mismoTitularDiv.appendChild(lineBreak);
    mismoTitularDiv.appendChild(noRadio);
    mismoTitularDiv.appendChild(noLabel);


    let nodeParent = document.getElementById("datos_fijo"); // Cambiam
    nodeParent.appendChild(mismoTitularDiv);
}


function donanteFijo() {
    // Crear un div con id "donante_fijo"
    var donanteDiv = document.createElement("div");
    donanteDiv.id = "donante_fijo";

    // Crear un elemento h4 para "Compañia donante"
    var h4Element = document.createElement("h4");
    h4Element.textContent = "Compañia donante";

    // Crear un input para la compañía
    var inputElement = document.createElement("input");
    inputElement.className = "form-control mb-2";
    inputElement.type = "text";
    inputElement.name = "compañia";
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
    var parentElement = document.getElementById("datos_fijo"); // Cambia "antiguo_titular_fijo" al elemento padre deseado

    // Añadir el div con id "donante_fijo" al elemento padre
    parentElement.appendChild(donanteDiv);
}

/* function crearPortabilidad() {

    donanteFijo();
    titularPortabilidadFijo();
    tarifasFijo();
} */