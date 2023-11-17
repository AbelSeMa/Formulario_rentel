if (!sessionStorage.getItem('productos')) {
  sessionStorage.setItem('productos', JSON.stringify([]));
}

if (!sessionStorage.getItem('cliente')) {
  sessionStorage.setItem('cliente', JSON.stringify({}));
}

function createJson(event) {
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
  createJson();
  // Obtén el modal
  var modal = document.getElementById("modalTablas");
  modal.style.display = "none";
  window.location.href = '/productos.html'

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

function enviarFormulario() {
  let json = obtenerJson();

  let url = 'https://ejemplo.com/api'; // la URL del servidor al que quieres enviar el JSON

  fetch(url, {
    method: 'POST', // o 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(json), // convierte el objeto JSON en una cadena
  })
    .then((response) => response.json())
    .then((json) => {
      console.log('Éxito:', json);
      alert('exito')
    })
    .catch((error) => {
      console.error('Error:', error);
    });
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
  if (!regexIBAN.test(iban)) {
    contenedorIban.classList.add("has-danger");
    ["primero", "segundo", "tercero", "cuarto", "quinto"].forEach(id => document.getElementById(id).value = "");
    return false;
  }
  return true;
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

// rellena el select de productos
window.onload = function () {
  let elegirProducto = ['Productos', 'Telefonía fija', 'Internet', 'Movil', 'Otros']

  // Rellena el select
  elegirProducto.forEach((producto) => {
    let opcion = document.createElement('option');
    opcion.value = producto;
    opcion.text = producto;
    opcion.classList.add('font-weight-bold');
    document.getElementById('productSelect').appendChild(opcion);
  });
}
