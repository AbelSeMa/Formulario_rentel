if (!sessionStorage.getItem('cliente')) {
    sessionStorage.setItem('cliente', JSON.stringify({}));
}


function validarCliente(event) {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let dni = document.getElementById("dni").value;
    let fecha = document.getElementById("fechaNacimiento").value;
    let correo = document.getElementById("correo").value;
    let telefonoFijo = document.getElementById("telefonoFijo").value;
    let telefonoMovil = document.getElementById("telefonoMovil").value;
    let codigoPostal = document.getElementById("codigoPostal").value;
    let direccion = document.getElementById("direccion").value;

    let validacionCorrectaCliente = true;

    if (!validarNombre(nombre)) {
        validacionCorrectaCliente = false;
        event.preventDefault();

    }
    if (!validarApellidos(apellidos)) {
        validacionCorrectaCliente = false;
        event.preventDefault();
    }
    if (!validarDNI(dni)) {
        validacionCorrectaCliente = false;
        event.preventDefault();
    }
    if (!validarCorreo(correo)) {
        validacionCorrectaCliente = false;
        event.preventDefault();

    }
    if (!validarTelefonoFijo(telefonoFijo)) {
        validacionCorrectaCliente = false;
        event.preventDefault();

    }
    if (!validarTelefonoMovil(telefonoMovil)) {
        validacionCorrectaCliente = false;
        event.preventDefault();

    }
    if (!validarCodigoPostal(codigoPostal)) {
        validacionCorrectaCliente = false;
        event.preventDefault();

    }
    if (!validarDireccion(direccion)) {
        validacionCorrectaCliente = false;
        event.preventDefault();

    }

    if (!validarFechaNacimiento(fecha)) {
        validacionCorrectaCliente = false;
        event.preventDefault();
    }
    return validacionCorrectaCliente;
}

function validarClienteFac(event) {

    let nombreFac = document.getElementById("nombreFac").value;
    let apellidosFac = document.getElementById("apellidosFac").value;
    let dniFac = document.getElementById("dniFac").value;
    let correoFac = document.getElementById("correoFac").value;
    let telefonoFijoFac = document.getElementById("telefonoFijoFac").value;
    let telefonoMovilFac = document.getElementById("telefonoMovilFac").value;
    let codigoPostalFac = document.getElementById("codigoPostalFac").value;
    let direccionFac = document.getElementById("direccionFac").value;
    let fecha = document.getElementById("fechaNacimientoFac").value;
    let validacionCorrectaFac = true;

    if (!validarNombreFac(nombreFac)) {
        validacionCorrectaFac = false;
        event.preventDefault();
    }
    if (!validarApellidosFac(apellidosFac)) {
        validacionCorrectaFac = false;
        event.preventDefault();
    }
    if (!validarDNIFac(dniFac)) {
        validacionCorrectaFac = false;
        event.preventDefault();
    }
    if (!validarCorreoFac(correoFac)) {
        validacionCorrectaFac = false;
        event.preventDefault();
    }
    if (!validarTelefonoFijoFac(telefonoFijoFac)) {
        validacionCorrectaFac = false;
        event.preventDefault();
    }
    if (!validarTelefonoMovilFac(telefonoMovilFac)) {
        validacionCorrectaFac = false;
        event.preventDefault();
    }
    if (!validarCodigoPostalFac(codigoPostalFac)) {
        validacionCorrectaFac = false;
        event.preventDefault();
    }
    if (!validarDireccionFac(direccionFac)) {
        validacionCorrectaFac = false;
        event.preventDefault();
    }

    if (!validarFechaNacimientoFac(fecha)) {
        validacionCorrectaFac = false;
        event.preventDefault();
    }

    return validacionCorrectaFac;
}

function validarFormNotis(event) {

    let nombreNoti = document.getElementById("nombreNoti").value;
    let apellidosNoti = document.getElementById("apellidosNoti").value;
    let correoNoti = document.getElementById("correoNoti").value;
    let telefonoMovilNoti = document.getElementById("telefonoMovilNoti").value;
    let validacionCorrectaNoti = true;

    if (!validarNombreNoti(nombreNoti)) {
        validacionCorrectaNoti = false;
        event.preventDefault();
    }
    if (!validarApellidosNoti(apellidosNoti)) {
        validacionCorrectaNoti = false;
        event.preventDefault();
    }

    if (!validarCorreoNoti(correoNoti)) {
        validacionCorrectaNoti = false;
        event.preventDefault();
    }

    if (!validarTelefonoMovilNoti(telefonoMovilNoti)) {
        validacionCorrectaNoti = false;
        event.preventDefault();
    }

    return validacionCorrectaNoti;

}




function validarFormPago(event) {

    let domiciliacion = document.getElementById("domiciliacionBancaria");


    let validacionCorrectaIban = true;

    if (domiciliacion.checked) {
        let iban1 = document.getElementById("primero").value;
        let iban2 = document.getElementById("segundo").value;
        let iban3 = document.getElementById("tercero").value;
        let iban4 = document.getElementById("cuarto").value;
        let iban5 = document.getElementById("quinto").value;
        let iban = iban1 + iban2 + iban3 + iban4 + iban5;
        iban.toUpperCase();

        if (!validarIBAN(iban)) {
            let validacionCorrectaIban = false;
            event.preventDefault();
        }

    }
    return (validacionCorrectaIban);
}


function validarFormCheck(event) {
    let valoresFac = [ "nombre", "apellidos", "sexo", "fechaNacimiento", "dni", "correo", "telefonoFijo", "telefonoMovil", "poblacion", "direccion", "codigoPostal"];

    let valoresNoti = ["nombre", "apellidos", "correo", "telefonoMovil"];
    alert("hola entre en validarFormCheck")
    let error_formulario = [];

    if (!validarCliente(event)) {
        error_formulario.push(1);
    }


    valoresFac.forEach(function(e){
        document.getElementById(e+"Fac").value = document.getElementById(e).value;
    });
    
    valoresNoti.forEach(function(e){
        document.getElementById(e+"Noti").value = document.getElementById(e).value;
    });

    if (error_formulario.length === 0) {
        alert("Validación correcta");
    } else {
        alert("Error en la validacion de datos compruebe los campos");

        error_formulario.sort(function (a, b) {
            return a - b
        });

        let numero = error_formulario[0];
        mostrarFormulario(numero);
    }

}

function validarSinCheck(event) {

    let error_formulario = [];

    if (!validarCliente(event)) {
        error_formulario.push(1);
    }

    if (!validarClienteFac(event)) {
        error_formulario.push(2);
    }

    if (!validarFormNotis(event)) {
        error_formulario.push(3);
    }

    if (!validarFormPago(event)) {
        error_formulario.push(4);
    }

    if (error_formulario.length === 0) {
        alert("Validación correcta");
    } else {
        alert("Error en la validacion de datos compruebe los campos");

        error_formulario.sort(function (a, b) {
            return a - b
        });

        let numero = error_formulario[0];
        mostrarFormulario(numero);
    }

}

function validarFormulario(event) {

    if (solo_cliente) {
        alert("he entrado en validar CON check")
        validarFormCheck(event);
    } else {
        alert("he entrado en validar sin check")
        validarSinCheck(event);
    }

    let activeForm = document.getElementById('formuCliente');
    const data = new FormData(activeForm);

    // Recupera el objeto 'cliente' actual desde sessionStorage
    const cliente = JSON.parse(sessionStorage.getItem('cliente'));

    const formJSON = Object.fromEntries(data.entries());

    // Actualiza el objeto 'cliente' con los datos del formulario
    Object.assign(cliente, formJSON);

    // Actualiza el objeto 'cliente' en sessionStorage
    sessionStorage.setItem('cliente', JSON.stringify(cliente));

}

function limpiar(nombre) {
    let limpi = document.getElementById(nombre);
    limpi.innerHTML = "";
}
