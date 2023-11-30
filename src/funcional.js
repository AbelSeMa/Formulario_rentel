// Comprueba si el array de productos existe, si no lo crea
if (!sessionStorage.getItem('productos')) {
  sessionStorage.setItem('productos', JSON.stringify([]));
}

// Comprueba si el array de cliente existe, si no lo crea
if (!sessionStorage.getItem('cliente')) {
  sessionStorage.setItem('cliente', JSON.stringify({}));
}

/** 
* Brief description of the function here.
* @summary If the description is long, write your summary here. Otherwise, feel free to remove this.
* @param {ParamDataTypeHere} parameterNameHere - Brief description of the parameter here. Note: For other notations of data types, please refer to JSDocs: DataTypes command.
* @return {ReturnValueDataTypeHere} Brief description of the returning value here.
*/
function createJson() {
  let activeForm = document.getElementById('form_product')

  const data = new FormData(activeForm);
  // Recupera el array 'productos' actual desde sessionStorage
  const productosExistentes = JSON.parse(sessionStorage.getItem('productos'));

  const formJSON = Object.fromEntries(data.entries());

  // Agrega el nuevo formJSON al array existente
  productosExistentes.push(formJSON);

  // Actualiza el array 'productos' en sessionStorage
  sessionStorage.setItem('productos', JSON.stringify(productosExistentes));

  console.log(JSON.parse(sessionStorage.getItem('productos')))
}

function limpiarContenedor() {
  // Obtén el div por su id
  let contenedor = document.getElementById('contenedor');

  // Comprueba si el div tiene hijos
  if (contenedor.hasChildNodes()) {
    // Si tiene hijos, elimínalos todos
    while (contenedor.firstChild) {
      contenedor.removeChild(contenedor.firstChild);
    }
  }
}

function enviarProducto() {
  let fallo = 0;
  if (!dniContrato('DNI_antiguo_titular_movil')) {
    fallo++;

  }

  if (!dniContrato('DNI_antiguo_titular_fijo')) {
    fallo++;

  }

  if (!telFijoContrato()) {
    fallo++;

  }

  if (!validarCampos(['nombre_antiguo_titular_fijo', 
                      'apellidos_antiguo_titular_fijo', 
                      'nombre_antiguo_titular_movil',
                      'apellidos_antiguo_titular_movil'])) {
    fallo++;
  }

  if (fallo === 0) {
    createJson();
    // Obtén el modal
    var modal = document.getElementById("modalTablas");
    modal.style.display = "none";
    window.location.href = '/productos'
    return true;
  }
}

function actualizarCliente(numIban) {
  let cliente = JSON.parse(sessionStorage.getItem('cliente'));
  cliente['Número de cuenta-IBAN '] = numIban;
  sessionStorage.setItem('cliente', JSON.stringify(cliente));
}

function actualizarFormaPago() {
  let jsonCliente = JSON.parse(sessionStorage.getItem('cliente'));
  let formaPago;
  let opcionesPago = document.getElementsByName('formaPago')

  for (var i = 0, length = opcionesPago.length; i < length; i++) {
    if (opcionesPago[i].checked) {
      // recoge el valor del radio seleccionado
      formaPago = opcionesPago[i].value;
      // rompe el bucle porque ya encontraste el radio seleccionado
      break;
    }
  }

  jsonCliente['Forma de pago'] = formaPago;
  // Guarda el objeto actualizado de nuevo en sessionStorage
  sessionStorage.setItem('cliente', JSON.stringify(jsonCliente));
}
async function enviarFormulario() {
  let json = obtenerJson();

  let url = '/envio_formulario/'; // la URL del servidor al que quieres enviar el JSON

  document.getElementById('card').setAttribute('hidden', 'hidden')
  document.getElementById('spinner').removeAttribute('hidden')
  try {
    let response = await fetch(url, {
      method: 'POST', // o 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(json), // convierte el objeto JSON en una cadena
    });


    if (!response.ok) {
      throw new Error('Error HTTP: ' + response.status);
    }

    let jsonRespuesta = await response.json();

    console.log('Éxito:', jsonRespuesta);
    document.getElementById('spinner').setAttribute('hidden', 'hidden');
    document.getElementById('card').removeAttribute('hidden');
    sessionStorage.setItem("cliente", JSON.stringify({}));
    sessionStorage.setItem('productos', JSON.stringify([]));
    sessionStorage.setItem('alert', 'ok');
    $('.alert').alert();

    window.location.href = '/';
  } catch (error) {
    console.error('Error:', error);
    sessionStorage.setItem('alert', 'error')
    document.getElementById('spinner').setAttribute('hidden', 'hidden');
    document.getElementById('card').removeAttribute('hidden');
    window.location.href = '/';
  }
}

function firmar() {
  let domiciliacionBancaria = document.getElementById("domiciliacionBancaria");
  if (domiciliacionBancaria.checked) {
    if (validarFormPago()) {
      let numIban = document.getElementById('ibanOculto').value;
      actualizarCliente(numIban);
    }
  } else {
    actualizarCliente('');
  }
  actualizarFormaPago();

  enviarFormulario();
}

function validarIBAN(iban) {
  let regexIBAN = /^ES\d{22}$/;
  let contenedorIban = document.getElementById("contenedorIban");

  if (!fn_ValidateIBAN(iban)) {
    contenedorIban.classList.add("has-danger");
    ["primero", "segundo", "tercero", "cuarto", "quinto"].forEach(id => document.getElementById(id).value = "");
    return false;
  }
  return true;
}

function fn_ValidateIBAN(IBAN) {

  //Se pasa a Mayusculas
  IBAN = IBAN.toUpperCase();
  //Se quita los blancos de principio y final.
  IBAN = IBAN.trim();
  IBAN = IBAN.replace(/\s/g, ""); //Y se quita los espacios en blanco dentro de la cadena

  var letra1, letra2, num1, num2;
  var isbanaux;
  var numeroSustitucion;
  //La longitud debe ser siempre de 24 caracteres
  if (IBAN.length != 24) {
    return false;
  }

  // Se coge las primeras dos letras y se pasan a números
  letra1 = IBAN.substring(0, 1);
  letra2 = IBAN.substring(1, 2);
  num1 = getnumIBAN(letra1);
  num2 = getnumIBAN(letra2);
  //Se sustituye las letras por números.
  isbanaux = String(num1) + String(num2) + IBAN.substring(2);
  // Se mueve los 6 primeros caracteres al final de la cadena.
  isbanaux = isbanaux.substring(6) + isbanaux.substring(0, 6);

  //Se calcula el resto, llamando a la función modulo97, definida más abajo
  resto = modulo97(isbanaux);
  if (resto == 1) {
    return true;
  } else {
    return false;
  }
}

function modulo97(iban) {
  var parts = Math.ceil(iban.length / 7);
  var remainer = "";

  for (var i = 1; i <= parts; i++) {
    remainer = String(parseFloat(remainer + iban.substr((i - 1) * 7, 7)) % 97);
  }

  return remainer;
}

function getnumIBAN(letra) {
  ls_letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return ls_letras.search(letra) + 10;
}

function validarFormPago(event) {
  let validacionCorrectaIban = true;
  let domiciliacion = document.getElementById("domiciliacionBancaria");
  if (domiciliacion.checked) {
    let iban = ["primero", "segundo", "tercero", "cuarto", "quinto"].map(id => document.getElementById(id).value).join('');
    iban = iban.toUpperCase();
    if (!validarIBAN(iban)) {
      validacionCorrectaIban = false;
      event.preventDefault();
    }
    document.getElementById("ibanOculto").value = iban;
  }
  return validacionCorrectaIban;
}

/** 
* Función que determina si un número de SIM es correcto o no.
* @summary Mediante el algoritmo de Luhn comprueba si el valo es correcto o no. En caso de ser correcto cambia su clase para mostrar un check verde
*         En caso de ser incorrecto, cambia sus clases y muestra una exclamación roja.
* @param {String} nombre - Recibe como parametro el nombre del input que tiene que hacer la comprobación
* @return {boolean} Devuelve True o False
*/
function algoritmoLuhn(nombre) {
  let sim = document.getElementById(nombre).value
  console.log(sim)
  if (sim.length == 19) {
    let arrayNum = Array.from(sim).map(x => parseInt(x));
    let numControl = arrayNum.pop();
    let resultado = 0;

    for (let i = 0; i < arrayNum.length; i++) {
      if (i % 2 != 0) {
        arrayNum[i] *= 2;
        if (arrayNum[i] > 10) {
          arrayNum[i] = arrayNum[i].toString().split('').reduce((a, b) => a + parseInt(b), 0);
        }
      }
      resultado += arrayNum[i];

    }

    resultado *= 9

    if (Array.from(resultado.toString()).pop() == numControl) {
      document.getElementById(nombre).classList.remove('is-invalid');
      document.getElementById(nombre).classList.add('is-valid');

      return true
    }

  }
  document.getElementById(nombre).classList.remove('is-valid');
  document.getElementById(nombre).classList.add('is-invalid');
  return false;
}

// Genera las opciones del select de productos.
window.onload = function () {
  let elegirProducto = ['Productos', 'Telefonía fija', 'Internet', 'Movil', 'Otros']

  // Rellena el select con cada opción del array
  elegirProducto.forEach((producto) => {
    let opcion = document.createElement('option');
    opcion.value = producto;
    opcion.text = producto;
    opcion.classList.add('font-weight-bold');
    document.getElementById('productSelect').appendChild(opcion);
    if (producto == 'Productos') {
      opcion.defaultSelected = true;
    }
  });
}

document.getElementById("form_product").addEventListener("submit", function (event) {
  var valido = true;

  // Aquí va tu código de validación
  // Cambia el valor de 'valido' según el resultado de tu validación

  if (!valido) {
    event.preventDefault();
  }
});