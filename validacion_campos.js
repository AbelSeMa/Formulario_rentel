//VALIDACION CAMPOS DE CLIENTE

function validarNombre(nombre) {
    var regexCaracteres = /^[A-Za-z]+$/;
    var error = document.getElementById("errorNombre");

    if (!regexCaracteres.test(nombre)) {
        error.textContent = "Nombre debe contener solo letras.";
        document.getElementById("nombre").value = ''; // Establecer el valor a vacío
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarApellidos(apellidos) {
    var regexCaracteres = /^[A-Za-z]+$/;
    var error = document.getElementById("errorApellido");

    if (!regexCaracteres.test(apellidos)) {
        error.textContent = "Apellidos deben contener solo letras.";
        document.getElementById("apellidos").value = ''; // Establecer el valor a vacío
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}


function validarDNI(dni) {
    var regexDNI = /^\d{8}[A-Za-z]$/;
    var error = document.getElementById("errorDni");
    if (!regexDNI.test(dni)) {
        error.textContent = "DNI no válido. Debe tener 8 dígitos seguidos de una letra.";
        document.getElementById("dni").value = ''; // Establecer el valor a vacío
        return false;
    } else {
        error.textContent = ""
        return true;
    }

}

function validarCorreo(correo) {
    var regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var error = document.getElementById("errorCorreo");

    if (correo != "") {

        if (!regexCorreo.test(correo)) {
            error.textContent = "Correo electrónico no válido.";
            document.getElementById("correo").value = ''; // Establecer el valor a vacío
            return false;
        } else {
            error.textContent = ""
            return true;
        }
    }
}

function validarTelefonoFijo(telefonoFijo) {
    var regexTelefono = /^\d{9}$/;
    var error = document.getElementById("errorTlfFijo");

    if (telefonoFijo != "") {

        if (!regexTelefono.test(telefonoFijo)) {
            error.textContent = "Teléfono fijo debe tener 9 números.";
            document.getElementById("telefonoFijo").value = ''; // Establecer el valor a vacío
            return false;
        } else {
            error.textContent = ""
            return true;
        }
    }
}


function validarTelefonoMovil(telefonoMovil) {
    var regexTelefono = /^\d{9}$/;
    var error = document.getElementById("errorTlfMovil");
    if (!regexTelefono.test(telefonoMovil)) {
        error.textContent = "Teléfono móvil debe tener 9 números.";
        document.getElementById("telefonoMovil").value = ''; // Establecer el valor a vacío
        return false;
    } else {
        error.textContent = ""
        return true;
    }
}

function validarCodigoPostal(codigoPostal) {
    var regexCodigoPostal = /^\d{5}$/;
    var error = document.getElementById("errorCodPost");
    if (!regexCodigoPostal.test(codigoPostal)) {
        error.textContent = "Código postal no válido. Debe tener al menos 5 dígitos.";
        document.getElementById("codigoPostal").value = ''; // Establecer el valor a vacío
        return false;
    } else {
        error.textContent = ""
        return true;
    };
}

function validarDireccion(direccion) {
    var error = document.getElementById("errorDireccion");
    if (direccion.length < 5) {
        error.textContent = "La dirección debe tener al menos 5 caracteres.";
        document.getElementById("direccion").value = ''; // Establecer el valor a vacío
        return false;
    } else {
        error.textContent = ""
        return true;
    }
}



//VALIDACION CMAPOS FACTURACION

function validarNombreFac(nombre) {
    var regexCaracteres = /^[A-Za-z]+$/;
    var error = document.getElementById("errorNombreFac");

    if (!regexCaracteres.test(nombre)) {
        error.textContent = "Nombre debe contener solo letras.";
        document.getElementById("nombreFac").value = ''; // Establecer el valor a vacío
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarApellidosFac(apellidos) {
    var regexCaracteres = /^[A-Za-z]+$/;
    var error = document.getElementById("errorApellidoFac");

    if (!regexCaracteres.test(apellidos)) {
        error.textContent = "Apellidos deben contener solo letras.";
        document.getElementById("apellidosFac").value = ''; // Establecer el valor a vacío
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarDNIFac(dni) {
    var regexDNI = /^\d{8}[A-Za-z]$/;
    var error = document.getElementById("errorDniFac");

    if (!regexDNI.test(dni)) {
        error.textContent = "DNI no válido. Debe tener 8 dígitos seguidos de una letra.";
        document.getElementById("dniFac").value = ''; // Establecer el valor a vacío
        return false;
    } else {
        error.textContent = ""
        return true;
    }
}

function validarCorreoFac(correo) {
    var regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var error = document.getElementById("errorCorreoFac");

    if (correo != "") {
        if (!regexCorreo.test(correo)) {
            error.textContent = "Correo electrónico no válido.";
            document.getElementById("correoFac").value = ''; // Establecer el valor a vacío
            return false;
        } else {
            error.textContent = ""
            return true;
        }
    }
}

function validarTelefonoFijoFac(telefonoFijo) {
    var regexTelefono = /^\d{9}$/;
    var error = document.getElementById("errorTlfFijoFac");

    if (telefonoFijo != "") {
        if (!regexTelefono.test(telefonoFijo)) {
            error.textContent = "Teléfono fijo debe tener 9 números.";
            document.getElementById("telefonoFijoFac").value = ''; // Establecer el valor a vacío
            return false;
        } else {
            error.textContent = ""
            return true;
        }
    }
}

function validarTelefonoMovilFac(telefonoMovil) {
    var regexTelefono = /^\d{9}$/;
    var error = document.getElementById("errorTlfMovilFac");

    if (!regexTelefono.test(telefonoMovil)) {
        error.textContent = "Teléfono móvil debe tener 9 números.";
        document.getElementById("telefonoMovilFac").value = ''; // Establecer el valor a vacío
        return false;
    } else {
        error.textContent = ""
        return true;
    }
}

function validarCodigoPostalFac(codigoPostal) {
    var regexCodigoPostal = /^\d{5}$/;
    var error = document.getElementById("errorCodPostFac");

    if (!regexCodigoPostal.test(codigoPostal)) {
        error.textContent = "Código postal no válido. Debe tener al menos 5 dígitos.";
        document.getElementById("codigoPostalFac").value = ''; // Establecer el valor a vacío
        return false;
    } else {
        error.textContent = ""
        return true;
    };
}

function validarDireccionFac(direccion) {
    var error = document.getElementById("errorDireccionFac");

    if (direccion.length < 5) {
        error.textContent = "La dirección debe tener al menos 5 caracteres.";
        document.getElementById("direccionFac").value = ''; // Establecer el valor a vacío
        return false;
    } else {
        error.textContent = ""
        return true;
    }
}


//VALIDACION CAMPOS NOTIFICACIONES

function validarNombreNoti(nombre) {
    var regexCaracteres = /^[A-Za-z]+$/;
    var error = document.getElementById("errorNombreNoti");

    if (!regexCaracteres.test(nombre)) {
        error.textContent = "Nombre debe contener solo letras.";
        document.getElementById("nombre").value = ''; // Establecer el valor a vacío
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarApellidosNoti(apellidos) {
    var regexCaracteres = /^[A-Za-z]+$/;
    var error = document.getElementById("errorApellidoNoti");

    if (!regexCaracteres.test(apellidos)) {
        error.textContent = "Apellidos deben contener solo letras.";
        document.getElementById("apellidos").value = ''; // Establecer el valor a vacío
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarTelefonoMovilNoti(telefonoMovil) {
    var regexTelefono = /^\d{9}$/;
    var error = document.getElementById("errorTlfMovilNoti");
    if (!regexTelefono.test(telefonoMovil)) {
        error.textContent = "Teléfono móvil debe tener 9 números.";
        document.getElementById("telefonoMovil").value = ''; // Establecer el valor a vacío
        return false;
    } else {
        error.textContent = ""
        return true;
    }
}


function validarCorreoNoti(correo) {
    var regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var error = document.getElementById("errorCorreoNoti");

    if (correo != "") {
        if (!regexCorreo.test(correo)) {
            error.textContent = "Correo electrónico no válido.";
            document.getElementById("correo").value = ''; // Establecer el valor a vacío
            return false;
        } else {
            error.textContent = ""
            return true;
        }
    }
}


//VALIDACION FROMA DE PAGO



function mostrarIban() {
    var contenedorIban = document.getElementById("contenedorIban");
    var domiciliacionBancaria = document.getElementById("domiciliacionBancaria");

    if (domiciliacionBancaria.checked) {
        contenedorIban.style.display = "block"; // Mostrar el div
    } else {
        contenedorIban.style.display = "none"; // Ocultar el div
    }
}

function validarIBAN(iban) {
    var regexIBAN = /^ES\d{22}$/;
    var error = document.getElementById("errorIban");

    if (!regexIBAN.test(iban)) {
        error.textContent = "Formato de IBAN incorrecto";
        document.getElementById("primero").value = "";
        document.getElementById("segundo").value = "";
        document.getElementById("tercero").value = "";
        document.getElementById("cuarto").value = "";
        document.getElementById("quinto").value = "";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}



function validacionPago() {
    var domiciliacion = document.getElementById("domiciliacionBancaria");

    if (domiciliacion.checked) {
        var iban1 = document.getElementById("primero").value;
        var iban2 = document.getElementById("segundo").value;
        var iban3 = document.getElementById("tercero").value;
        var iban4 = document.getElementById("cuarto").value;
        var iban5 = document.getElementById("quinto").value;
        var iban = iban1 + iban2 + iban3 + iban4 + iban5;
        var iban = iban.toUpperCase();
    }

}

