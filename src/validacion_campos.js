//VALIDACION CAMPOS DE CLIENTE

function validarNombre(nombre) {
  let regexCaracteres = /^[A-Za-z\sáéíóúÁÉÍÓÚÑñ]+$/;
  let input = document.getElementById(nombre);
  let div = document.getElementById("div" + nombre);
  alert("entre en validar nombre")
  if (!regexCaracteres.test(input.value)) {
    alert("el nombre esta mal")
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");

    return false;
  }
  input.classList.remove("is-invalid");
  div.classList.remove("has-danger");
  return true;
}

function validarApellido1(apellido1) {
  let regexCaracteres = /^[A-Za-záéíóúÁÉÍÓÚÑñ]+$/;
  let input = document.getElementById(apellido1);
  let div = document.getElementById("div" + apellido1);

  if (!regexCaracteres.test(input.value)) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  input.classList.remove("is-invalid");
  div.classList.remove("has-danger");
  return true;
}

function validarApellido2(apellido2) {
  let regexCaracteres = /^[A-Za-záéíóúÁÉÍÓÚÑñ]+$/;
  let input = document.getElementById(apellido2);
  let div = document.getElementById("div" + apellido2);

  if (!regexCaracteres.test(input.value)) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.remove("form-control", "mb-3");
    input.classList.add("form-control", "mb-3", "is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  input.classList.remove("is-invalid");
  div.classList.remove("has-danger");
  return true;
}

function validarFechaNacimiento(fechaNacimiento) {
  let inputFecha = new Date(fechaNacimiento.value);
  let input = document.getElementById(fechaNacimiento);
  var div = document.getElementById("div" + fechaNacimiento);

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
  input.classList.remove("is-invalid");
  div.classList.remove("has-danger");
  return true;
}

function validarDNI(dni) {
  let regexDNI = /^\d{8}[A-Z]$/;
  let input = document.getElementById(dni);
  var div = document.getElementById("div" +dni);

  if (!regexDNI.test(input.value) || !algoritmoDni(input.value)) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  input.classList.remove("is-invalid");
  div.classList.remove("has-danger");
  return true;
}

function algoritmoDni(dni) {
  let numero = dni.slice(0, 8);
  let letra = dni.charAt(8);

  let letras = 'TRWAGMYFPDXBNJZSQVHLZKE';
  let indice = numero % 23;

  // Verfica la letra del DNI

  return letra.toUpperCase() === letras.charAt(indice) ;

}

function validarCorreo(correo) {
  let regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let input = document.getElementById(correo);
  var div = document.getElementById("div" + correo);
    if (!regexCorreo.test(input.value)) {
      input.value = ""; // Establecer el valor a
      input.classList.add("is-invalid");
      div.classList.add("has-danger");
      return false;
    }
  input.classList.remove("is-invalid");
  div.classList.remove("has-danger");
  return true;
}

function validarTelefonoFijo(telefonoFijo) {
  let regexTelefono = /^\d{9}$/;
  let input = document.getElementById(telefonoFijo);
  var div = document.getElementById("div" + telefonoFijo);

  if (input.value != "") {
    if (!regexTelefono.test(input.value)) {
      input.value = ""; // Establecer el valor a vacío
      input.classList.add("is-invalid");
      div.classList.add("has-danger");
      return false;
    }
  }
  input.classList.remove("is-invalid");
  div.classList.remove("has-danger");
  return true;
}

function validarTelefonoMovil(telefonoMovil) {
  let regexTelefono = /^\d{9}$/;
  let input = document.getElementById(telefonoMovil);
  var div = document.getElementById("div"+ telefonoMovil);
  if (!regexTelefono.test(input.value)) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  input.classList.remove("is-invalid");
  div.classList.remove("has-danger");
  return true;
}

function validarCodigoPostal(codigoPostal) {
  let regexCodigoPostal = /^\d{5}$/;
  let input = document.getElementById(codigoPostal);
  var div = document.getElementById("div" + codigoPostal);
  if (!regexCodigoPostal.test(input.value)) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  input.classList.remove("is-invalid");
  div.classList.remove("has-danger");
  return true;
}

function validarDireccion(direccion) {
  let input = document.getElementById(direccion);
  var div = document.getElementById("div" + direccion);
  if (input.value.length < 5) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  input.classList.remove("is-invalid");
  div.classList.remove("has-danger");
  return true;
}

//VALIDACION CMAPOS FACTURACION
/* 
function validarNombreFac(nombre) {
  let regexCaracteres = /^[A-Za-z\sáéíóúÁÉÍÓÚÑñ]+$/;
  let input = document.getElementById("nombreFac");
  let div = document.getElementById("divNombreFac");

  if (!regexCaracteres.test(nombre)) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  input.classList.remove("is-invalid");
  div.classList.remove("has-danger");
  return true;
}

function validarApellido1Fac(apellidos) {
  let regexCaracteres = /^[A-Za-záéíóúÁÉÍÓÚÑñ]+$/;
  let input = document.getElementById("apellido1Fac");
  let div = document.getElementById("divApellido1Fac");

  if (!regexCaracteres.test(apellidos)) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  input.classList.remove("is-invalid");
  div.classList.remove("has-danger");
  return true;
}

function validarApellido2Fac(apellidos) {
  let regexCaracteres = /^[A-Za-záéíóúÁÉÍÓÚÑñ]+$/;
  let input = document.getElementById("apellido2Fac");
  let div = document.getElementById("divApellido2Fac");

  if (!regexCaracteres.test(apellidos)) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  input.classList.remove("is-invalid");
  div.classList.remove("has-danger");
  return true;
}

function validarDNIFac(dni) {
  let regexDNI = /^\d{8}[A-Z]$/;
  let input = document.getElementById("dniFac");
  let div = document.getElementById("divDniFac");

  if (!regexDNI.test(dni) || !algoritmoDni(dni)) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  input.classList.remove("is-invalid");
  div.classList.remove("has-danger");
  return true;
}

function validarCorreoFac(correo) {
  let regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let input = document.getElementById("correoFac");
  let div = document.getElementById("divCorreoFac");

  
    if (!regexCorreo.test(correo)) {
      input.value = ""; // Establecer el valor a vacío
      input.classList.add("is-invalid");
      div.classList.add("has-danger");
      return false;
    
  }
  input.classList.remove("is-invalid");
  div.classList.remove("has-danger");
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
  input.classList.remove("is-invalid");
  div.classList.remove("has-danger");
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
  input.classList.remove("is-invalid");
  div.classList.remove("has-danger");
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
  input.classList.remove("is-invalid");
  div.classList.remove("has-danger");
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
  input.classList.remove("is-invalid");
  div.classList.remove("has-danger");
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
  input.classList.remove("is-invalid");
  div.classList.remove("has-danger");
  return true;
}

//VALIDACION CAMPOS NOTIFICACIONES

function validarNombreNoti(nombre) {
  let regexCaracteres = /^[A-Za-z\sáéíóúÁÉÍÓÚÑñ]+$/;
  let input = document.getElementById("nombreNoti");
  let div = document.getElementById("divNombreNoti");

  if (!regexCaracteres.test(nombre)) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  input.classList.remove("is-invalid");
  div.classList.remove("has-danger");
  return true;
}

function validarApellido1Noti(apellidos) {
  let regexCaracteres = /^[A-Za-záéíóúÁÉÍÓÚÑñ]+$/;
  let input = document.getElementById("apellido1Noti");
  let div = document.getElementById("divApellido1Noti");
  if (!regexCaracteres.test(apellidos)) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  input.classList.remove("is-invalid");
  div.classList.remove("has-danger");
  return true;
}

function validarApellido2Noti(apellidos) {
  let regexCaracteres = /^[A-Za-záéíóúÁÉÍÓÚÑñ]+$/;
  let input = document.getElementById("apellido2Noti");
  let div = document.getElementById("divApellido2Noti");
  if (!regexCaracteres.test(apellidos)) {
    input.value = ""; // Establecer el valor a vacío
    input.classList.add("is-invalid");
    div.classList.add("has-danger");
    return false;
  }
  input.classList.remove("is-invalid");
  div.classList.remove("has-danger");
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
  input.classList.remove("is-invalid");
  div.classList.remove("has-danger");
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
  input.classList.remove("is-invalid");
  div.classList.remove("has-danger");
  return true;
}

function validarCorreoNoti(correo) {
  let regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let input = document.getElementById("correoNoti");
  let div = document.getElementById("divCorreoNoti");

  
    if (!regexCorreo.test(correo)) {
      input.value = ""; // Establecer el valor a vacío
      input.classList.add("is-invalid");
      div.classList.add("has-danger");
      return false;
    }
  input.classList.remove("is-invalid");
  div.classList.remove("has-danger");
  return true;
}

function validarComercial(){
  let input = document.getElementById("comercial");
  let error = document.getElementById("errorComercial");
  if (input.value === "") {
    error.removeAttribute("hidden");
    return false;
  } else{
    error.setAttribute("hidden", "");
    return true;
  }
}

const selectComerial = document.getElementById("comercial");
selectComerial.onchange =  function() {
  document.getElementById("formulario1").removeAttribute("hidden");
};
*/
/* Funcion que comprueba si el radio esta seleccionado de mismos datos si mismos datos no */

function validarRadio(){
  let no = document.getElementById("mismosDatosNo");
  let error = document.getElementById("errorDatos");

  if (!(no.checked)){
    error.removeAttribute("hidden");
    return false;
  }
  return true;
} 

function validarComercial(){
  let input = document.getElementById("comercial");
  let error = document.getElementById("errorComercial");
  if (input.value === "") {
    error.removeAttribute("hidden");
    return false;
  } else{
    error.setAttribute("hidden", "");
    return true;
  }
}

const selectComerial = document.getElementById("comercial");
selectComerial.onchange =  function() {
  document.getElementById("formulario1").removeAttribute("hidden");
};