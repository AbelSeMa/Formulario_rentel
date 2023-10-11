function validarNombre(nombre) {
    var regexCaracteres = /^[A-Za-z]+$/;
    var error = document.getElementById("errorNombre");

    if (!regexCaracteres.test(nombre)) {
        error.textContent = "Nombre debe contener solo letras.";
        document.getElementById("nombreFac").value = ''; // Establecer el valor a vacío
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
        document.getElementById("apellidosFac").value = ''; // Establecer el valor a vacío
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
        document.getElementById("dniFac").value = ''; // Establecer el valor a vacío
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
            document.getElementById("correoFac").value = ''; // Establecer el valor a vacío
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
            document.getElementById("telefonoFijoFac").value = ''; // Establecer el valor a vacío
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
        document.getElementById("telefonoMovilFac").value = ''; // Establecer el valor a vacío
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
        document.getElementById("codigoPostalFac").value = ''; // Establecer el valor a vacío
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
        document.getElementById("direccionFac").value = ''; // Establecer el valor a vacío
        return false;
    } else {
        error.textContent = ""
        return true;
    }
}

function validarFormularioFac(event) {
    var nombreFac = document.getElementById("nombreFac").value;
    var apellidosFac = document.getElementById("apellidosFac").value;
    var dniFac = document.getElementById("dniFac").value;
    var correoFac = document.getElementById("correoFac").value;
    var telefonoFijoFac = document.getElementById("telefonoFijoFac").value;
    var telefonoMovilFac = document.getElementById("telefonoMovilFac").value;
    var codigoPostalFac = document.getElementById("codigoPostalFac").value;
    var direccionFac = document.getElementById("direccionFac").value;

    var validacionCorrecta = true;

    if (!validarNombre(nombreFac)) {
        validacionCorrecta = false;
        event.preventDefault();
    }
    if (!validarApellidos(apellidosFac)) {
        validacionCorrecta = false;
        event.preventDefault();
    }
    if (!validarDNI(dniFac)) {
        validacionCorrecta = false;
        event.preventDefault();
    }
    if (!validarCorreo(correoFac)) {
        validacionCorrecta = false;
        event.preventDefault();
    }
    if (!validarTelefonoFijo(telefonoFijoFac)) {
        validacionCorrecta = false;
        event.preventDefault();
    }
    if (!validarTelefonoMovil(telefonoMovilFac)) {
        validacionCorrecta = false;
        event.preventDefault();
    }
    if (!validarCodigoPostal(codigoPostalFac)) {
        validacionCorrecta = false;
        event.preventDefault();
    }
    if (!validarDireccion(direccionFac)) {
        validacionCorrecta = false;
        event.preventDefault();
    }

    if (validacionCorrecta) {
        alert("Validación correcta");
    }
}
