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
  let elegirProducto = ['Elija producto', 'Telefonía fija', 'Internet', 'Movil', 'Otros']

  // Rellena el select
  elegirProducto.forEach((producto) => {
    let opcion = document.createElement('option');
    opcion.value = producto;
    opcion.text = producto;
    opcion.classList.add('font-weight-bold');
    document.getElementById('productSelect').appendChild(opcion);
  });
}


function obtenerJson() {
  // Recupera tus datos del sessionStorage
  let misDatos = JSON.parse(sessionStorage.getItem("productos"));

  // Inicializa tu nuevo objeto
  let nuevoJson = {
    "productos": {
      "linea movil": {},
      "Internet": {},
      "linea fija": {}
    }
  };


  let contadorMovil = 0;
  let contadorInternet = 0;
  let contadorFijo = 0;
  let contadorOtros = 0;

  // Itera sobre tus datos
  for (let i = 0; i < misDatos.length; i++) {
    let dato = misDatos[i];


    // Decide a qué categoría pertenece cada producto
    let categoria;
    if (dato.producto === "Movil") {
      categoria = "linea movil";
      contadorMovil += 1;

      // Inicializa el objeto antes de asignarle propiedades
      nuevoJson.productos[categoria][categoria + contadorMovil] = {};

      // Añade el producto a la categoría correspondiente
      nuevoJson.productos[categoria][categoria + contadorMovil]["Datos línea" + contadorMovil] = dato.servicio;
      nuevoJson.productos[categoria][categoria + contadorMovil]["Nº.teléfono móvil que contrata línea " + contadorMovil] = dato.numero_telefono;
      nuevoJson.productos[categoria][categoria + contadorMovil]["Nº. de la tarjeta SIM línea " + contadorMovil] = dato.sim_rentel;
      nuevoJson.productos[categoria][categoria + contadorMovil]["Mismo titular línea" + contadorMovil + " "] = dato.mismo_titular_movil;
      nuevoJson.productos[categoria][categoria + contadorMovil]["Nombre portabilidad línea" + contadorMovil + " "] = dato.nombre_antiguo_tiular_movil;
      nuevoJson.productos[categoria][categoria + contadorMovil]["Apellidos portabilidad línea" + contadorMovil + " "] = dato.apellidos_antiguo_tiular_movil;
      nuevoJson.productos[categoria][categoria + contadorMovil]["DNI portabilidad línea" + contadorMovil + " "] = dato.DNI_antiguo_tiular_movil;
      nuevoJson.productos[categoria][categoria + contadorMovil]["Operador donante línea" + contadorMovil] = dato.donante_movil;
      nuevoJson.productos[categoria][categoria + contadorMovil]["Nº.tarjeta SIM donante línea1" + contadorMovil] = dato.sim_antigua;
      nuevoJson.productos[categoria][categoria + contadorMovil]["Origen línea" + contadorMovil] = dato.tipo;
      nuevoJson.productos[categoria][categoria + contadorMovil]["Tarifas línea " + contadorMovil] = dato.tarifa;
      
    } else if (dato.producto === "Internet") {
      categoria = "Internet";
      contadorInternet += 1

      // Añade el producto a la categoría correspondiente
      nuevoJson.productos[categoria][categoria + contadorInternet] = dato;
    } else if (dato.producto === "Telefonía fija") {
      categoria = "linea fija";
      contadorFijo += 1

      // Añade el producto a la categoría correspondiente
      nuevoJson.productos[categoria][categoria + contadorFijo] = dato;
    }

  }

  // Ahora, nuevoJson tiene la estructura que deseas
  console.log(nuevoJson);
}
