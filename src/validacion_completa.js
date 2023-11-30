if (!sessionStorage.getItem("cliente")) {
  sessionStorage.setItem("cliente", JSON.stringify({}));
}


/*Función que valda los datos del formulario e la parte de SOLO cliente */

function validarCliente(event) {
  let nombre = document.getElementById("nombre").value;
  let apellido1 = document.getElementById("apellido1").value;
  let apellido2 = document.getElementById("apellido2").value;
  let dni = document.getElementById("dni").value;
  let fecha = document.getElementById("fechaNacimiento").value;
  let correo = document.getElementById("correo").value;
  let telefonoFijo = document.getElementById("telefonoFijo").value;
  let telefonoMovil = document.getElementById("telefonoMovil").value;
  let codigoPostal = document.getElementById("codigoPostal").value;
  let direccion = document.getElementById("direccion").value;

  let validacionCorrectaCliente = true;

  if (!validarNombre("nombre")) {
    validacionCorrectaCliente = false;
    event.preventDefault();
  }
  if (!validarApellido1("apellido1")) {
    validacionCorrectaCliente = false;
    event.preventDefault();
  }
  if (!validarApellido2("apellido2")) {
    validacionCorrectaCliente = false;
    event.preventDefault();
  }

  document.getElementById("apellidos").value = apellido1 + " " + apellido2;

  if (!validarDNI("dni")) {
    validacionCorrectaCliente = false;
    event.preventDefault();
  }
  if (!validarCorreo("correo")) {
    validacionCorrectaCliente = false;
    event.preventDefault();
  }
  if (!validarTelefonoFijo("telefonoFijo")) {
    validacionCorrectaCliente = false;
    event.preventDefault();
  }
  if (!validarTelefonoMovil("telefonoMovil")) {
    validacionCorrectaCliente = false;
    event.preventDefault();
  }
  if (!validarCodigoPostal("codigoPostal")) {
    validacionCorrectaCliente = false;
    event.preventDefault();
  }
  if (!validarDireccion("direccion")) {
    validacionCorrectaCliente = false;
    event.preventDefault();
  }

  if (!validarFechaNacimiento("fechaNacimiento")) {
    validacionCorrectaCliente = false;
    event.preventDefault();
  }
  return validacionCorrectaCliente;
}

/* Función que valida los datos del cliente de FACTURACION  */

function validarClienteFac(event) {
  let nombreFac = document.getElementById("nombreFac").value;
  let apellido1Fac = document.getElementById("apellido1Fac").value;
  let apellido2Fac = document.getElementById("apellido2Fac").value;
  let dniFac = document.getElementById("dniFac").value;
  let correoFac = document.getElementById("correoFac").value;
  let telefonoFijoFac = document.getElementById("telefonoFijoFac").value;
  let telefonoMovilFac = document.getElementById("telefonoMovilFac").value;
  let codigoPostalFac = document.getElementById("codigoPostalFac").value;
  let direccionFac = document.getElementById("direccionFac").value;
  let fecha = document.getElementById("fechaNacimientoFac").value;
  let validacionCorrectaFac = true;

  if (!validarNombre("nombreFac")) {
    validacionCorrectaFac = false;
    event.preventDefault();
  }
  if (!validarApellido1("apellido1Fac")) {
    validacionCorrectaFac = false;
    event.preventDefault();
  }
  if (!validarApellido2("apellido2Fac")) {
    validacionCorrectaFac = false;
    event.preventDefault();
  }

  document.getElementById("apellidosFac").value = apellido1Fac + " " + apellido2Fac;

  if (!validarDNI("dniFac")) {
    validacionCorrectaFac = false;
    event.preventDefault();
  }
  if (!validarCorreo("correoFac")) {
    validacionCorrectaFac = false;
    event.preventDefault();
  }
  if (!validarTelefonoFijo("telefonoFijoFac")) {
    validacionCorrectaFac = false;
    event.preventDefault();
  }
  if (!validarTelefonoMovil("telefonoMovilFac")) {
    validacionCorrectaFac = false;
    event.preventDefault();
  }
  if (!validarCodigoPostal("codigoPostalFac")) {
    validacionCorrectaFac = false;
    event.preventDefault();
  }
  if (!validarDireccion("direccionFac")) {
    validacionCorrectaFac = false;
    event.preventDefault();
  }

  if (!validarFechaNacimiento("fechaNacimientoFac")) {
    validacionCorrectaFac = false;
    event.preventDefault();
  }

  return validacionCorrectaFac;
}


/*Funcion que valida los datos de notificación y solo los de notificacíon */

function validarFormNotis(event) {
  let nombreNoti = document.getElementById("nombreNoti").value;
  let apellido1Noti = document.getElementById("apellido1Noti").value;
  let apellido2Noti = document.getElementById("apellido2Noti").value;
  let correoNoti = document.getElementById("correoNoti").value;
  let telefonoMovilNoti = document.getElementById("telefonoMovilNoti").value;
  let telefonoFijoNoti = document.getElementById("telefonoFijoNoti").value;
  let validacionCorrectaNoti = true;

  if (!validarNombre("nombreNoti")) {
    validacionCorrectaNoti = false;
    event.preventDefault();
  }
  if (!validarApellido1("apellido1Noti")) {
    validacionCorrectaNoti = false;
    event.preventDefault();
  }
  if (!validarApellido2("apellido2Noti")) {
    validacionCorrectaNoti = false;
    event.preventDefault();
  }

  document.getElementById("apellidosNoti").value = apellido1Noti + " " + apellido2Noti;

  if (!validarCorreo("correoNoti")) {
    validacionCorrectaNoti = false;
    event.preventDefault();
  }

  if (!validarTelefonoMovil("telefonoMovilNoti")) {
    validacionCorrectaNoti = false;
    event.preventDefault();
  }
  if (!validarTelefonoFijo("telefonoFijoNoti")) {
    validacionCorrectaNoti = false;
    event.preventDefault();
  }

  return validacionCorrectaNoti;
}



/*En esta funcion lo que se hace es igualar el formulario de cliente facturacion con los datos de cliente normal, por si 
se selecciona si tiene los mismos datos o no */

function validarFormCheck(event) {
  let valoresFac = [
    "nombre",
    "apellido1",
    "apellido2",
    "apellidos",
    "sexo",
    "fechaNacimiento",
    "dni",
    "correo",
    "telefonoFijo",
    "telefonoMovil",
    "pais",
    "provincia",
    "direccion",
    "codigoPostal",
  ];

  let valoresNoti = [
    "nombre",
    "apellido1",
    "apellido2",
    "apellidos",
    "correo",
    "telefonoMovil",
  ];
  let error_formulario = [];

  if (!validarComercial()){
    error_formulario.push(1);
  }

  if (!validarCliente(event)) {
    error_formulario.push(1);
  }
  

  valoresFac.forEach(function (e) {
    document.getElementById(e + "Fac").value = document.getElementById(e).value;
  });

  valoresNoti.forEach(function (e) {
    document.getElementById(e + "Noti").value =
      document.getElementById(e).value;
  });

  let valor_Poblacion = document.getElementById("poblacion").value;
  document.getElementById("poblacionFac").value = valor_Poblacion;

  if (error_formulario.length === 0) {
    document.getElementById('myModal').style.display = 'none';

    let activeForm = document.getElementById("myForm");
    const data = new FormData(activeForm);
  
    // Recupera el objeto 'cliente' actual desde sessionStorage
    const cliente = JSON.parse(sessionStorage.getItem("cliente"));
  
    const formJSON = Object.fromEntries(data.entries());
  
    // Actualiza el objeto 'cliente' con los datos del formulario
    Object.assign(cliente, formJSON);
  
    // Actualiza el objeto 'cliente' en sessionStorage
    sessionStorage.setItem("cliente", JSON.stringify(cliente));
/*     excel();
 */  } else {

    error_formulario.sort(function (a, b) {
      return a - b;
    });

    let numero = error_formulario[0];
    mostrarFormulario(numero);
  }
}


/*En esta funcion se llama a todas als funciones creadas anteriopr meente para validar si se ha seleccionado que no quiere usar los mismos datos */

function validarSinCheck(event) {

  let error_formulario = [];

  if (!validarComercial()){
    error_formulario.push(1);
  }

  if (!validarCliente(event)) {
    error_formulario.push(1);
  }

  if (!validarRadio()){
    error_formulario.push(1);
  }

  if (!validarClienteFac(event)) {
    error_formulario.push(2);
  }

  if (!validarFormNotis(event)) {
    error_formulario.push(3);
  }


  let valor_Poblacion = document.getElementById("poblacionFacFalsa").value;
  document.getElementById("poblacionFac").value = valor_Poblacion;

  if (error_formulario.length === 0) {
    document.getElementById('myModal').style.display = 'none';

    let activeForm = document.getElementById("myForm");
    const data = new FormData(activeForm);
  
    // Recupera el objeto 'cliente' actual desde sessionStorage
    const cliente = JSON.parse(sessionStorage.getItem("cliente"));
  
    const formJSON = Object.fromEntries(data.entries());
  
    // Actualiza el objeto 'cliente' con los datos del formulario
    Object.assign(cliente, formJSON);
  
    // Actualiza el objeto 'cliente' en sessionStorage
    sessionStorage.setItem("cliente", JSON.stringify(cliente));

  } else {

    error_formulario.sort(function (a, b) {
      return a - b;
    });

    let numero = error_formulario[0];
    mostrarFormulario(numero);
  }
}


/*Esta es la funcion en la cual se elige que metodo de validación se quiere usar segun el chekc seleccionado */
function validarFormulario(event) {
  if (check) {
    validarFormCheck(event);
  } else {
    validarSinCheck(event);
  }

  document.getElementById('myModal').style.display = 'none';
  
}

function limpiar(nombre) {
  let limpi = document.getElementById(nombre);
  limpi.innerHTML = "";
}