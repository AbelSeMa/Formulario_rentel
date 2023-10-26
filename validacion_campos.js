//VALIDACION CAMPOS DE CLIENTE

function validarNombre(nombre) {
  let regexCaracteres = /^[A-Za-z]+$/;
  let input = document.getElementById("nombre");
  let div = document.getElementById("divNombre");

  if (!regexCaracteres.test(nombre)) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  return true;
}

function validarApellido1(apellidos) {
  let regexCaracteres = /^[A-Za-z]+$/;
  let input = document.getElementById("apellido1");
  let div = document.getElementById("divApellido1");

  if (!regexCaracteres.test(apellidos)) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  return true;
}

function validarApellido2(apellidos) {
  let regexCaracteres = /^[A-Za-z]+$/;
  let input = document.getElementById("apellido2");
  let div = document.getElementById("divApellido2");

  if (!regexCaracteres.test(apellidos)) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.remove("form-control", "mb-3");
    input.classList.add("form-control", "mb-3", "is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  return true;
}

function validarFechaNacimiento(fechaNacimiento) {
  let inputFecha = new Date(fechaNacimiento);
  let input = document.getElementById("fechaNacimiento");
  var div = document.getElementById("divFechaNacimiento");

  if (isNaN(inputFecha)) {
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  } else {
    let fechaActual = new Date();
    if (inputFecha > fechaActual) {
      input.classList.add("is-invalid");
      div.classList.add("has-danger");
      return false;
    }
  }
  return true;
}

function validarDNI(dni) {
  let regexDNI = /^\d{8}[A-Za-z]$/;
  let input = document.getElementById("dni");
  var div = document.getElementById("divDni");

  if (!regexDNI.test(dni)) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  return true;
}

function validarCorreo(correo) {
  let regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let input = document.getElementById("correo");
  var div = document.getElementById("divCorreo");
  if (correo != "") {
    if (!regexCorreo.test(correo)) {
      input.value = ""; // Establecer el valor a
      input.classList.add("is-invalid");
      div.classList.add("has-danger");
      return false;
    }
  }
  return true;
}

function validarTelefonoFijo(telefonoFijo) {
  let regexTelefono = /^\d{9}$/;
  let input = document.getElementById("telefonoFijo");
  var div = document.getElementById("divTlfFijo");

  if (telefonoFijo != "") {
    if (!regexTelefono.test(telefonoFijo)) {
      input.value = ""; // Establecer el valor a vacío
      input.classList.add("is-invalid");
      div.classList.add("has-danger");
      return false;
    }
  }
  return true;
}

function validarTelefonoMovil(telefonoMovil) {
  let regexTelefono = /^\d{9}$/;
  let input = document.getElementById("telefonoMovil");
  var div = document.getElementById("divTlfMovil");
  if (!regexTelefono.test(telefonoMovil)) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  return true;
}

function validarCodigoPostal(codigoPostal) {
  let regexCodigoPostal = /^\d{5}$/;
  let input = document.getElementById("codigoPostal");
  var div = document.getElementById("divCodPostal");
  if (!regexCodigoPostal.test(codigoPostal)) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  return true;
}

function validarDireccion(direccion) {
  let input = document.getElementById("direccion");
  var div = document.getElementById("divDireccion");
  if (direccion.length < 5) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  return true;
}

//VALIDACION CMAPOS FACTURACION

function validarNombreFac(nombre) {
  let regexCaracteres = /^[A-Za-z]+$/;
  let input = document.getElementById("nombreFac");
  let div = document.getElementById("divNombreFac");

  if (!regexCaracteres.test(nombre)) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  return true;
}

function validarApellido1Fac(apellidos) {
  let regexCaracteres = /^[A-Za-z]+$/;
  let input = document.getElementById("apellido1Fac");
  let div = document.getElementById("divApellido1Fac");

  if (!regexCaracteres.test(apellidos)) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  return true;
}

function validarApellido2Fac(apellidos) {
  let regexCaracteres = /^[A-Za-z]+$/;
  let input = document.getElementById("apellido2Fac");
  let div = document.getElementById("divApellido2Fac");

  if (!regexCaracteres.test(apellidos)) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  return true;
}

function validarDNIFac(dni) {
  let regexDNI = /^\d{8}[A-Za-z]$/;
  let input = document.getElementById("dniFac");
  let div = document.getElementById("divDniFac");

  if (!regexDNI.test(dni)) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  return true;
}

function validarCorreoFac(correo) {
  let regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let input = document.getElementById("correoFac");
  let div = document.getElementById("divCorreoFac");

  if (correo != "") {
    if (!regexCorreo.test(correo)) {
      input.value = ""; // Establecer el valor a vacío
      input.classList.add("is-invalid");
      div.classList.add("has-danger");
      return false;
    }
  }
  return true;
}

function validarTelefonoFijoFac(telefonoFijo) {
  let regexTelefono = /^\d{9}$/;
  let input = document.getElementById("telefonoFijoFac");
  let div = document.getElementById("divTelefonoFijoFac");
  if (telefonoFijo != "") {
    if (!regexTelefono.test(telefonoFijo)) {
      input.value = ""; // Establecer el valor a vacío
      input.classList.add("is-invalid");
      div.classList.add("has-danger");
      return false;
    }
  }
  return true;
}

function validarTelefonoMovilFac(telefonoMovil) {
  let regexTelefono = /^\d{9}$/;
  let input = document.getElementById("telefonoMovilFac");
  let div = document.getElementById("divTelefonoMovilFac");
  if (!regexTelefono.test(telefonoMovil)) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  return true;
}

function validarCodigoPostalFac(codigoPostal) {
  let regexCodigoPostal = /^\d{5}$/;
  let input = document.getElementById("codigoPostalFac");
  let div = document.getElementById("divCodigoPostalFac");

  if (!regexCodigoPostal.test(codigoPostal)) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  return true;
}

function validarDireccionFac(direccion) {
  let input = document.getElementById("direccionFac");
  let div = document.getElementById("divDireccionFac");
  if (direccion.length < 5) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  return true;
}

function validarFechaNacimientoFac(fechaNacimiento) {
  let inputFecha = new Date(fechaNacimiento);
  let input = document.getElementById("fechaNacimientoFac");
  let div = document.getElementById("divFechaNacimientoFac");
  if (isNaN(inputFecha)) {
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  } else {
    let fechaActual = new Date();
    if (inputFecha > fechaActual) {
      input.classList.add("is-invalid");
      div.classList.add("has-danger");
      return false;
    }
  }
  return true;
}

//VALIDACION CAMPOS NOTIFICACIONES

function validarNombreNoti(nombre) {
  let regexCaracteres = /^[A-Za-z]+$/;
  let input = document.getElementById("nombreNoti");
  let div = document.getElementById("divNombreNoti");

  if (!regexCaracteres.test(nombre)) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  return true;
}

function validarApellido1Noti(apellidos) {
  let regexCaracteres = /^[A-Za-z]+$/;
  let input = document.getElementById("apellido1Noti");
  let div = document.getElementById("divApellido1Noti");
  if (!regexCaracteres.test(apellidos)) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  return true;
}

function validarApellido2Noti(apellidos) {
  let regexCaracteres = /^[A-Za-z]+$/;
  let input = document.getElementById("apellido2Noti");
  let div = document.getElementById("divApellido2Noti");
  if (!regexCaracteres.test(apellidos)) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  return true;
}

function validarTelefonoFijoNoti(telefonoFijo) {
  let regexTelefono = /^\d{9}$/;
  let input = document.getElementById("telefonoFijoNoti");
  let div = document.getElementById("divTelefonoFijoNoti");

  if (telefonoFijo != "") {
    if (!regexTelefono.test(telefonoFijo)) {
      input.value = ""; // Establecer el valor a vacío
      input.classList.add("is-invalid");
      div.classList.add("has-danger");
      return false;
    }
  }
  return true;
}

function validarTelefonoMovilNoti(telefonoMovil) {
  let regexTelefono = /^\d{9}$/;
  let input = document.getElementById("telefonoMovilNoti");
  let div = document.getElementById("divTelefonoMovilNoti");
  if (!regexTelefono.test(telefonoMovil)) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  return true;
}

function validarCorreoNoti(correo) {
  let regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let input = document.getElementById("correoNoti");
  let div = document.getElementById("divCorreoNoti");

  if (correo != "") {
    if (!regexCorreo.test(correo)) {
      input.value = ""; // Establecer el valor a vacío
      input.classList.add("is-invalid");
      div.classList.add("has-danger");
      return false;
    }
  }
  return true;
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
  let contenedorIban = document.getElementById("contenedorIban");

  if (!regexIBAN.test(iban)) {
    contenedorIban.classList.add("has-danger");
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
