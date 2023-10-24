//VALIDACION CAMPOS DE CLIENTE

function validarNombre(nombre) {
    let regexCaracteres = /^[A-Za-z]+$/;
    let error = document.getElementById("errorNombre");

    if (!regexCaracteres.test(nombre)) {
        error.textContent = "Nombre debe contener solo letras.";
        document.getElementById("nombre").value = ''; // Establecer el valor a vacío
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarApellido1(apellidos) {
    let regexCaracteres = /^[A-Za-z]+$/;
    let error = document.getElementById("errorApellido1");

    if (!regexCaracteres.test(apellidos)) {
        error.textContent = "Apellidos deben contener solo letras.";
        document.getElementById("apellido1").value = ''; // Establecer el valor a vacío
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}


function validarApellido2(apellidos) {
    let regexCaracteres = /^[A-Za-z]+$/;
    let error = document.getElementById("errorApellido2");

    if (!regexCaracteres.test(apellidos)) {
        error.textContent = "Apellidos deben contener solo letras.";
        document.getElementById("apellido2").value = ''; // Establecer el valor a vacío
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}


function validarDNI(dni) {
    let regexDNI = /^\d{8}[A-Za-z]$/;
    let error = document.getElementById("errorDni");
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
    let regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let error = document.getElementById("errorCorreo");

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
    let regexTelefono = /^\d{9}$/;
    let error = document.getElementById("errorTlfFijo");

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
    let regexTelefono = /^\d{9}$/;
    let error = document.getElementById("errorTlfMovil");
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
    let regexCodigoPostal = /^\d{5}$/;
    let error = document.getElementById("errorCodPost");
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
    let error = document.getElementById("errorDireccion");
    if (direccion.length < 5) {
        error.textContent = "La dirección debe tener al menos 5 caracteres.";
        document.getElementById("direccion").value = ''; // Establecer el valor a vacío
        return false;
    } else {
        error.textContent = ""
        return true;
    }
}

function validarFechaNacimiento(fechaNacimiento) {
    let inputFecha = new Date(fechaNacimiento);
    let error = document.getElementById("errorFechaNacimiento");

    if (isNaN(inputFecha)) {
        error.textContent = "Fecha de nacimiento no válida.";
        return false;
    } else {
        let fechaActual = new Date();
        if (inputFecha > fechaActual) {
            error.textContent = "La fecha de nacimiento no puede ser en el futuro.";
            return false;
        } else {
            error.textContent = "";
            return true;
        }
    }
}


//VALIDACION CMAPOS FACTURACION

function validarNombreFac(nombre) {
    let regexCaracteres = /^[A-Za-z]+$/;
    let error = document.getElementById("errorNombreFac");

    if (!regexCaracteres.test(nombre)) {
        error.textContent = "Nombre debe contener solo letras.";
        document.getElementById("nombreFac").value = ''; // Establecer el valor a vacío
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarApellido1Fac(apellidos) {
    let regexCaracteres = /^[A-Za-z]+$/;
    let error = document.getElementById("errorApellido1Fac");

    if (!regexCaracteres.test(apellidos)) {
        error.textContent = "Apellidos deben contener solo letras.";
        document.getElementById("apellido1Fac").value = ''; // Establecer el valor a vacío
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarApellido2Fac(apellidos) {
    let regexCaracteres = /^[A-Za-z]+$/;
    let error = document.getElementById("errorApellido2Fac");

    if (!regexCaracteres.test(apellidos)) {
        error.textContent = "Apellidos deben contener solo letras.";
        document.getElementById("apellido2Fac").value = ''; // Establecer el valor a vacío
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarDNIFac(dni) {
    let regexDNI = /^\d{8}[A-Za-z]$/;
    let error = document.getElementById("errorDniFac");

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
    let regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let error = document.getElementById("errorCorreoFac");

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
    let regexTelefono = /^\d{9}$/;
    let error = document.getElementById("errorTlfFijoFac");

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
    let regexTelefono = /^\d{9}$/;
    let error = document.getElementById("errorTlfMovilFac");

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
    let regexCodigoPostal = /^\d{5}$/;
    let error = document.getElementById("errorCodPostFac");

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
    let error = document.getElementById("errorDireccionFac");

    if (direccion.length < 5) {
        error.textContent = "La dirección debe tener al menos 5 caracteres.";
        document.getElementById("direccionFac").value = ''; // Establecer el valor a vacío
        return false;
    } else {
        error.textContent = ""
        return true;
    }
}


function validarFechaNacimientoFac(fechaNacimiento) {
    let inputFecha = new Date(fechaNacimiento);
    let error = document.getElementById("errorFechaNacimientoFac");

    if (isNaN(inputFecha)) {
        error.textContent = "Fecha de nacimiento no válida.";
        return false;
    } else {
        let fechaActual = new Date();
        if (inputFecha > fechaActual) {
            error.textContent = "La fecha de nacimiento no puede ser en el futuro.";
            return false;
        } else {
            error.textContent = "";
            return true;
        }
    }
}


//VALIDACION CAMPOS NOTIFICACIONES

function validarNombreNoti(nombre) {
    let regexCaracteres = /^[A-Za-z]+$/;
    let error = document.getElementById("errorNombreNoti");

    if (!regexCaracteres.test(nombre)) {
        error.textContent = "Nombre debe contener solo letras.";
        document.getElementById("nombre").value = ''; // Establecer el valor a vacío
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarApellido1Noti(apellidos) {
    let regexCaracteres = /^[A-Za-z]+$/;
    let error = document.getElementById("errorApellido1Noti");

    if (!regexCaracteres.test(apellidos)) {
        error.textContent = "Apellidos deben contener solo letras.";
        document.getElementById("apellido1Noti").value = ''; // Establecer el valor a vacío
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarApellido2Noti(apellidos) {
    let regexCaracteres = /^[A-Za-z]+$/;
    let error = document.getElementById("errorApellido2Noti");

    if (!regexCaracteres.test(apellidos)) {
        error.textContent = "Apellidos deben contener solo letras.";
        document.getElementById("apellido2Noti").value = ''; // Establecer el valor a vacío
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}


function validarTelefonoMovilNoti(telefonoMovil) {
    let regexTelefono = /^\d{9}$/;
    let error = document.getElementById("errorTlfMovilNoti");
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
    let regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let error = document.getElementById("errorCorreoNoti");

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
    let contenedorIban = document.getElementById("contenedorIban");
    let domiciliacionBancaria = document.getElementById("domiciliacionBancaria");

    if (domiciliacionBancaria.checked) {
        contenedorIban.style.display = "block"; // Mostrar el div
    } else {
        contenedorIban.style.display = "none"; // Ocultar el div
    }
}

function validarIBAN(iban) {
    let regexIBAN = /^ES\d{22}$/;
    let error = document.getElementById("errorIban");

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
