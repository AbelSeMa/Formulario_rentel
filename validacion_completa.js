

function validarCliente(event) {
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var dni = document.getElementById("dni").value;
    var correo = document.getElementById("correo").value;
    var telefonoFijo = document.getElementById("telefonoFijo").value;
    var telefonoMovil = document.getElementById("telefonoMovil").value;
    var codigoPostal = document.getElementById("codigoPostal").value;
    var direccion = document.getElementById("direccion").value;

    var validacionCorrectaCliente = true;

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
    return validacionCorrectaCliente;
}

function validarClienteFac(event) {

    var nombreFac = document.getElementById("nombreFac").value;
    var apellidosFac = document.getElementById("apellidosFac").value;
    var dniFac = document.getElementById("dniFac").value;
    var correoFac = document.getElementById("correoFac").value;
    var telefonoFijoFac = document.getElementById("telefonoFijoFac").value;
    var telefonoMovilFac = document.getElementById("telefonoMovilFac").value;
    var codigoPostalFac = document.getElementById("codigoPostalFac").value;
    var direccionFac = document.getElementById("direccionFac").value;

    var validacionCorrectaFac = true;

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

    return validacionCorrectaFac;
}

function validarFormNotis(event) {

    var nombreNoti = document.getElementById("nombreNoti").value;
    var apellidosNoti = document.getElementById("apellidosNoti").value;
    var correoNoti = document.getElementById("correoNoti").value;
    var telefonoMovilNoti = document.getElementById("telefonoMovilNoti").value;
    var validacionCorrectaNoti = true;

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
    var domiciliacion = document.getElementById("domiciliacionBancaria");

    var validacionCorrectaIban = true;

    if (domiciliacion.checked) {
        var iban1 = document.getElementById("primero").value;
        var iban2 = document.getElementById("segundo").value;
        var iban3 = document.getElementById("tercero").value;
        var iban4 = document.getElementById("cuarto").value;
        var iban5 = document.getElementById("quinto").value;
        var iban = iban1 + iban2 + iban3 + iban4 + iban5;
        var iban = iban.toUpperCase();



        if (!validarIBAN(iban)) {
            var validacionCorrectaIban = false;
            event.preventDefault();
        }

    }
    return validacionCorrectaIban;
}


function validarFormCheck(event) {
    alert("hola entre en validarFormCheck")
    var error_formulario = [];

    if (!validarCliente(event)) {
        error_formulario.push(1);
    }

    document.getElementById("nombreFac").value = document.getElementById("nombre").value
    alert(document.getElementById("nombreFac").value)



    if (error_formulario.length === 0) {
        alert("Validación correcta");
    } else {
        alert("Error en la validacion de datos compruebe los campos");

        error_formulario.sort(function (a, b) {
            return a - b
        });

        var numero = error_formulario[0];
        mostrarFormulario(numero);
    }

}

function validarSinCheck(event) {

    var error_formulario = [];

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

        var numero = error_formulario[0];
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

}