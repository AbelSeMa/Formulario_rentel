// Carga los datos del sessionStorage
let productos = JSON.parse(sessionStorage.getItem('productos'));

// Obtiene el elemento div para contener los datos
let divProductos = document.getElementById('datos_productos')

// Recorre cada producto en el array
productos.forEach((producto, index) => {
    // Recorre cada propiedad del producto
    for (let propiedad in producto) {
        // Crea un elemento p para cada propiedad
        if (propiedad === 'producto') {
            let tr = document.createElement('tr')
            let td = document.createElement('td');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');

            td.textContent = producto[propiedad];

            // Crea un elemento <a> para editar
            let aEditar = document.createElement('button');
            aEditar.textContent = 'Editar';
            td1.appendChild(aEditar);

            // Crea un elemento <a> para borrar
            let aBorrar = document.createElement('a');
            aBorrar.href = '/borrar.html?id=' + index;  // Añade el índice al final de la URL
            aBorrar.textContent = 'Borrar';
            td2.appendChild(aBorrar);

            tr.append(td);
            tr.append(td1);
            tr.append(td2);

            divProductos.append(tr)
        }
    }
});