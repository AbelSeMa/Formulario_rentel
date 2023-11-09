if (!sessionStorage.getItem("cliente")) {
  sessionStorage.setItem("cliente", JSON.stringify({}));
}

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

  if (!validarNombre(nombre)) {
    validacionCorrectaCliente = false;
    event.preventDefault();
  }
  if (!validarApellido1(apellido1)) {
    validacionCorrectaCliente = false;
    event.preventDefault();
  }
  if (!validarApellido2(apellido2)) {
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

  if (!validarNombreFac(nombreFac)) {
    validacionCorrectaFac = false;
    event.preventDefault();
  }
  if (!validarApellido1Fac(apellido1Fac)) {
    validacionCorrectaFac = false;
    event.preventDefault();
  }
  if (!validarApellido2Fac(apellido2Fac)) {
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
  let apellido1Noti = document.getElementById("apellido1Noti").value;
  let apellido2Noti = document.getElementById("apellido2Noti").value;
  let correoNoti = document.getElementById("correoNoti").value;
  let telefonoMovilNoti = document.getElementById("telefonoMovilNoti").value;
  let telefonoFijoNoti = document.getElementById("telefonoFijoNoti").value;
  let validacionCorrectaNoti = true;

  if (!validarNombreNoti(nombreNoti)) {
    validacionCorrectaNoti = false;
    event.preventDefault();
  }
  if (!validarApellido1Noti(apellido1Noti)) {
    validacionCorrectaNoti = false;
    event.preventDefault();
  }
  if (!validarApellido2Noti(apellido2Noti)) {
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
  if (!validarTelefonoFijoNoti(telefonoFijoNoti)) {
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
      validacionCorrectaIban = false;
      event.preventDefault();
    }
    document.getElementById("IbanOculto").value = iban;
  }
  return validacionCorrectaIban;
}

function validarFormCheck(event) {
  let valoresFac = [
    "nombre",
    "apellido1",
    "apellido2",
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

  if (!validarFormPago(event)) {
    error_formulario.push(4);
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
    alert("Validación correcta");
/*     excel();
 */  } else {
    alert("Error en la validacion de datos compruebe los campos");

    error_formulario.sort(function (a, b) {
      return a - b;
    });

    let numero = error_formulario[0];
    mostrarFormulario(numero);
  }
}

function validarSinCheck(event) {
  let error_formulario = [];

  if (!validarComercial()){
    error_formulario.push(1);
  }

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

  let valor_Poblacion = document.getElementById("poblacionFacFalsa").value;
  document.getElementById("poblacionFac").value = valor_Poblacion;

  if (error_formulario.length === 0) {
    alert("Validación correcta");
/*     excel(); */
  } else {
    alert("Error en la validacion de datos compruebe los campos");

    error_formulario.sort(function (a, b) {
      return a - b;
    });

    let numero = error_formulario[0];
    mostrarFormulario(numero);
  }
}

function validarFormulario(event) {
  if (solo_cliente) {
    validarFormCheck(event);

  } else {
    validarSinCheck(event);
  }

  document.getElementById('pintar_cliente').setAttribute('hidden', 'hidden')
  document.getElementById('pintar_tablas').removeAttribute('hidden')

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
}

function limpiar(nombre) {
  let limpi = document.getElementById(nombre);
  limpi.innerHTML = "";
}



/* function excel(){
    const form = document.getElementById("myForm");
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const formData = new FormData(form);
            fetch("https://script.google.com/macros/s/AKfycbyJP6B3zQRY65zTWTa_Vo_w7sBhwhUgfev--dDcK48fkZXOxkWwlsl9GJkOTqPqVBqBug/exec", {
                method: "POST",
                body: formData,
            })
                .then(response => response.text())
                .then(data => {
                    console.log(data);
                    window.top.location.href = "http://127.0.0.1:5501/productos.html";

                })
                .catch(error => {
                    console.error("Error:", error);
                });
        });
} */