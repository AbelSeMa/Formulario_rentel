// Carga los datos del sessionStorage
let productos = JSON.parse(sessionStorage.getItem('productos'));

// Crea un elemento div para contener los datos
let divProductos = document.getElementById('datos_productos')

// Recorre cada propiedad del objeto
productos.forEach(producto => {
    // Recorre cada propiedad del producto
    for (let propiedad in producto) {
        // Crea un elemento p para cada propiedad
        let p = document.createElement('p');
        p.textContent = propiedad + ': ' + producto[propiedad];
        divProductos.append(p);
    }
});
