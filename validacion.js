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
function validarFormulario(event) {

    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var dni = document.getElementById("dni").value;
    var correo = document.getElementById("correo").value;
    var telefonoFijo = document.getElementById("telefonoFijo").value;
    var telefonoMovil = document.getElementById("telefonoMovil").value;
    var codigoPostal = document.getElementById("codigoPostal").value;
    var direccion = document.getElementById("direccion").value;

    var validacionCorrecta = true;

    if (!validarNombre(nombre)) {
        validacionCorrecta = false;
        event.preventDefault();

    }
    if (!validarApellidos(apellidos)) {
        validacionCorrecta = false;
        event.preventDefault();
    }
    if (!validarDNI(dni)) {
        validacionCorrecta = false;
        event.preventDefault();
    }
    if (!validarCorreo(correo)) {
        validacionCorrecta = false;
        event.preventDefault();

    }
    if (!validarTelefonoFijo(telefonoFijo)) {
        validacionCorrecta = false;
        event.preventDefault();

    }
    if (!validarTelefonoMovil(telefonoMovil)) {
        validacionCorrecta = false;
        event.preventDefault();

    }
    if (!validarCodigoPostal(codigoPostal)) {
        validacionCorrecta = false;
        event.preventDefault();

    }
    if (!validarDireccion(direccion)) {
        validacionCorrecta = false;
        event.preventDefault();

    }

    if (validacionCorrecta) {
        alert("Validación correcta");
    }

}

function cambioAction() {
    var rsi = document.getElementById("radioSi");
    var rno = document.getElementById("radioNo");

    document.forms.formularioCliente.addEventListener('submit', e => {
        if (rsi.checked) {
            e.target.action = "datosPago.html";
        }

        if (rno.checked) {
            e.target.action = "formularioFacturacion.html";
        }
    });
}