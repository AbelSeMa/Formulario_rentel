function mostrarMovil() {
    var info = document.createElement("p");
    info.textContent = 'Has elegido la opción móvil';
    document.getElementById('opcionesInternet').style.display = 'none';
    document.getElementById('opciones_fijo').style.display = 'none';

    document.getElementById('opcionesMovil').style.display = 'block';

}

// genera el formulario de tarifas cuando selecciona portabilidad
// como producto contratado.

function generarCamposTarifaPortabilidad() {
    let contenedor = document.getElementById("tipo_tarifa");

    let h3 = document.createElement("h3");
    h3.textContent = "Elige la tarifa";

    let tarifasIndividual = document.createElement("input");
    tarifasIndividual.type = "radio";
    tarifasIndividual.name = "tarifas";
    tarifasIndividual.id = "porta_indi";
    tarifasIndividual.value = "individual";
    tarifasIndividual.className = "form-check-input";
    tarifasIndividual.onclick = function () {
        indiTarifa('tarifasPortabilidad');
    };

    let labelIndividual = document.createElement("label");
    labelIndividual.setAttribute("for", "porta_indi");
    labelIndividual.textContent = "Tarifa individual";

    let tarifasPack = document.createElement("input");
    tarifasPack.type = "radio";
    tarifasPack.name = "tarifas";
    tarifasPack.className = "form-check-input";
    tarifasPack.id = "porta_pack";
    tarifasPack.value = "pack";
    tarifasPack.onclick = function () {
        packTarifa('tarifasPortabilidad');
    };

    let labelPack = document.createElement("label");
    labelPack.setAttribute("for", "porta_pack");
    labelPack.textContent = "Pack megas compartidos";

    if (contenedor !== null) {
        while (contenedor.firstChild) {
            contenedor.removeChild(contenedor.firstChild);
        }
    }

    let br1 = document.createElement("br");

    contenedor.appendChild(h3);
    contenedor.appendChild(tarifasIndividual);
    contenedor.appendChild(labelIndividual);
    contenedor.appendChild(br1);
    contenedor.appendChild(tarifasPack);
    contenedor.appendChild(labelPack);

    document.getElementById('porta_indi').addEventListener('click', () => {
        document.getElementById('tarifasPortabilidad').removeAttribute('hidden');
    });;

}

// genera el formulario de tarifas cuando selecciona alta nueva
// como producto contratado.

function generarCamposTarifaAlta() {
    let contenedor = document.getElementById("tipo_tarifa_individual");
    console.log(contenedor);

    let h3 = document.createElement("h3");
    h3.textContent = "Elige la tarifa";

    let tarifasIndividual = document.createElement("input");
    tarifasIndividual.type = "radio";
    tarifasIndividual.name = "tarifas";
    tarifasIndividual.id = "tarifa_individual";
    tarifasIndividual.value = "individual";
    tarifasIndividual.className = "form-check-input";
    tarifasIndividual.onclick = function () {
        indiTarifa('alta_nueva');
    };

    let labelIndividual = document.createElement("label");
    labelIndividual.setAttribute("for", "tarifa_individual");
    labelIndividual.textContent = "Tarifa individual";

    let tarifasPack = document.createElement("input");
    tarifasPack.type = "radio";
    tarifasPack.name = "tarifas";
    tarifasPack.id = "pack_alta_nueva";
    tarifasPack.value = "pack";
    tarifasPack.className = "form-check-input";
    tarifasPack.onclick = function () {
        packTarifa('alta_nueva');
    };

    let labelPack = document.createElement("label");
    labelPack.setAttribute("for", "pack_alta_nueva");
    labelPack.textContent = "Pack megas compartidos";

    if (contenedor !== null) {
        while (contenedor.firstChild) {
            contenedor.removeChild(contenedor.firstChild);
        }
    }

    let br1 = document.createElement("br");

    contenedor.appendChild(h3);
    contenedor.appendChild(tarifasIndividual);
    contenedor.appendChild(labelIndividual);
    contenedor.appendChild(br1);
    contenedor.appendChild(tarifasPack);
    contenedor.appendChild(labelPack);

}

// genera el formulario de antiguo cliente cuando se selecciona
// la portabilidad con un nuevo titular
function genererDatosAntiguoCliente() {
    let contenedor = document.getElementById("antiguo_titular");

    let h3 = document.createElement("h3");
    h3.textContent = "Elige el titular";

    let nombreAntiguoTitular = document.createElement("input");
    nombreAntiguoTitular.type = "text";
    nombreAntiguoTitular.className = "form-control mb-2";
    nombreAntiguoTitular.name = "nomber_antiguo_titular";
    nombreAntiguoTitular.id = "antiguo_titular";
    nombreAntiguoTitular.placeholder = "Nombre";

    let apellidoAntiguoTitular = document.createElement("input");
    apellidoAntiguoTitular.type = "text";
    apellidoAntiguoTitular.className = "form-control mb-2";
    apellidoAntiguoTitular.name = "apellido_antiguo_titular";
    apellidoAntiguoTitular.id = "apellido_antiguo_titular";
    apellidoAntiguoTitular.placeholder = "Apellido";

    let dniAntiguoTitular = document.createElement("input");
    dniAntiguoTitular.type = "text";
    dniAntiguoTitular.className = "form-control mb-2";
    dniAntiguoTitular.name = "dni_antiguo_titular";
    dniAntiguoTitular.id = "dni_antiguo_titular";
    dniAntiguoTitular.placeholder = "DNI";

    let labelNombre = document.createElement("label");
    labelNombre.setAttribute("for", "nombre_titular");
    labelNombre.textContent = "Nombre antiguo titular";

    let labelApellido = document.createElement("label");
    labelApellido.setAttribute("for", "apellido_titular");
    labelApellido.textContent = "Apellido antiguo titular";

    let labelDni = document.createElement("label");
    labelDni.setAttribute("for", "dni_titular");
    labelDni.textContent = "DNI antiguo titular";

    // Crear elementos <br> para los espacios entre los elementos
    let br1 = document.createElement("br");
    let br2 = document.createElement("br");
    let br3 = document.createElement("br");
    let br4 = document.createElement("br");
    let br5 = document.createElement("br");
    let br6 = document.createElement("br");

    if (contenedor !== null) {
        while (contenedor.firstChild) {
            contenedor.removeChild(contenedor.firstChild);
        }
    }

    contenedor.appendChild(h3);
    contenedor.appendChild(labelNombre);
    contenedor.appendChild(br1);  // Agregar <br> después del primer par de elementos
    contenedor.appendChild(nombreAntiguoTitular);
    contenedor.appendChild(br2);  // Agregar <br> después del segundo par de elementos
    contenedor.appendChild(labelApellido);
    contenedor.appendChild(br3);
    contenedor.appendChild(apellidoAntiguoTitular);
    contenedor.appendChild(br4);
    contenedor.appendChild(labelDni);
    contenedor.appendChild(br5);
    contenedor.appendChild(dniAntiguoTitular);
    contenedor.appendChild(br6);

}