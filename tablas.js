

// Obtén los datos del sessionStorage
let datosCliente = JSON.parse(sessionStorage.getItem('cliente')) != null ? JSON.parse(sessionStorage.getItem('cliente')) : '' ;
let datosProducto = JSON.parse(sessionStorage.getItem('productos'));

// Ordenar el array basándose en el nombre del producto
datosProducto.sort(function(a, b) {
  var nombreA = a.producto.toUpperCase(); // Ignorar mayúsculas y minúsculas
  var nombreB = b.producto.toUpperCase(); // Ignorar mayúsculas y minúsculas
  if (nombreA < nombreB) {
    return -1;
  }
  if (nombreA > nombreB) {
    return 1;
  }
  return 0;  // Los nombres son iguales
});

// Actualizar el sessionStorage con el array ordenado
sessionStorage.setItem('productos', JSON.stringify(datosProducto));

// Rellena la tabla de clientes
if (datosCliente != '') {
    let dni = 'DNI/CIF'
    let tablaClientes = document.getElementById('tabla_cliente');
    let fila = tablaClientes.insertRow(-1);
    let celdaNombre = fila.insertCell(0);
    let celdaApellido = fila.insertCell(1);
    let celdaDNI = fila.insertCell(2);
    celdaNombre.textContent = datosCliente.Nombre;
    celdaApellido.textContent = datosCliente.Apellidos;
    celdaDNI.textContent = datosCliente['DNI/CIF'];
} else {
    let tablaClientes = document.getElementById('tabla_cliente');
    let fila = tablaClientes.insertRow(-1);
    let texto = fila.insertCell(0);    
    texto.textContent = 'No has rellenado la información del cliente'
}


// Rellena la tabla de productos
let tablaProductos = document.getElementById('tabla_productos');

// Elimina las filas existentes excepto la fila de encabezados
for (let i = tablaProductos.rows.length - 1; i > 0; i--) {
    tablaProductos.deleteRow(i);
}

datosProducto.forEach((producto, index) => {
    console.log(producto.producto)
    let fila = tablaProductos.insertRow(-1);
    let celdaServicio = fila.insertCell(0);
    let celdaOpciones = fila.insertCell(1);

    if (producto.tipo !== undefined) {
        celdaServicio.textContent = producto.numero_telefono + ' - ' + producto.servicio + ' - ' + producto.tipo;
    }

    if (producto.producto === "Telefonía fija") {
        if (producto.numero_telefono !== undefined) {
            celdaServicio.textContent = producto.numero_telefono + ' - ' + producto.servicio
        } else {
            celdaServicio.textContent = producto.numero_portabilidad_fijo + ' - ' + producto.servicio
        }
    }

    if (producto.producto === "Movil") {
        if (producto.numero_sim !== undefined) {
            celdaServicio.textContent = producto.numero_sim + ' - ' + producto.servicio
        } else {
            celdaServicio.textContent = producto.sim_rentel + ' - ' + producto.servicio
        }
    }

    // Agrega los iconos de modificar y borrar
/*     let iconoModificar = document.createElement('button');
    iconoModificar.href = '/productos.html'
    iconoModificar.classList.add('btn', 'btn-primary', 'pr-1', 'btn-sm')
    iconoModificar.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
         <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
        </svg>`
 */
    let iconoBorrar = document.createElement('a');
    iconoBorrar.href = '/borrar.html?id=' + index;  // Añade el índice al final de la URL
    iconoBorrar.classList.add('btn', 'btn-danger', 'btn-sm');
    iconoBorrar.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                    </svg>`



    // Agrega los iconos a la celda de opciones
    /* celdaOpciones.appendChild(iconoModificar); */
    celdaOpciones.appendChild(iconoBorrar);
});
