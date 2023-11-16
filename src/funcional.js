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
  cliente.numeroCuentaIBAN = numIban;
  sessionStorage.setItem('cliente', JSON.stringify(cliente));
}

function firmar() {
  let domiciliacionBancaria = document.getElementById("domiciliacionBancaria");
  if (domiciliacionBancaria.checked) {
    if (validarFormPago()) {
      let numIban = document.getElementById('ibanOculto').value;
      actualizarCliente(numIban);
    } else {
      actualizarCliente('');
    }
  }
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
