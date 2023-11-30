function dniContrato(id) {
  if (document.getElementById(id) != null) {
    let regexDNI = /^\d{8}[A-Z]$/;
    let input = document.getElementById(id);

    if (!regexDNI.test(input.value) || !algoritmoDni(input.value)) {
      input.value = ""; // Establecer el valor a vacío
      input.classList.add("is-invalid");
      return false;
    } else {
      input.classList.remove("is-invalid");
      return true;
    }
  }
  return true;
}

function algoritmoDni(dni) {
  let numero = dni.slice(0, 8);
  let letra = dni.charAt(8);

  let letras = 'TRWAGMYFPDXBNJZSQVHLZKE';
  let indice = numero % 23;

  // Verfica la letra del DNI

  return letra.toUpperCase() === letras.charAt(indice);
}

function telFijoContrato() {
  let regexFijo = /^[89]\d{8}$/;
  if (document.getElementById('numero_portabilidad_fijo_input') != null) {
    let input = document.getElementById('numero_portabilidad_fijo_input')
    if (!regexFijo.test(input.value)) {
      input.value = ""; // Establecer el valor a vacío
      input.classList.add("is-invalid");
      return false;
    }
    input.classList.remove("is-invalid");
    return true;
  }
  return true;
}

function validarCadena(id) {
  let regexCaracteres = /^[A-Za-záéíóúÁÉÍÓÚÑñ]+$/;
  if (document.getElementById(id) != null) {
    let regexDNI = /^\d{8}[A-Z]$/;
    let input = document.getElementById(id);

    if (!regexCaracteres.test(input.value)) {
      input.value = ""; // Establecer el valor a vacío
      input.classList.add("is-invalid");
      return false;
    } else {
      input.classList.remove("is-invalid");
      return true;
    }
  }
  return true;
}
function validarCampos(ids) {
  for (let i = 0; i < ids.length; i++) {
    validarCadena(ids[i]);
  }
}