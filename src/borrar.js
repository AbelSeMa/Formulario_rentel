// Añade en la página borrar.html el producto que se va a borrar
document.getElementById('producto').textContent = 'Producto a eliminar: ' + producto.servicio



/** 
* Borra el objecto seleccionado anteriormente.
* @summary Recupera de la url la id (en este caso se hace por indexación) para sacar el elemento del sessionStorage.
*          Una vez que se actualiza el json de cliente en el sessionStorage, devuelve al usuario a la página productos.
*/
function borrar() {

    // Obtiene los parámetros de la URL
    let parametrosUrl = new URLSearchParams(window.location.search);

    // Obtiene el id de la variable donde está la URL
    let miParametro = parametrosUrl.get('id');

    // Obtén el array del sessionStorage
    let productos = JSON.parse(sessionStorage.getItem('productos'));


    // Saca del array el objecto. miParametro es la posición de indexación
    // a partir de la que se borra y 1 es el número de elementos que se quitean.
    productos.splice(miParametro, 1);

    // Guarda el array actualizado de nuevo en el sessionStorage
    sessionStorage.setItem('productos', JSON.stringify(productos));

    // Devuelve al usuario a la ruta productos
    window.location.href = '/productos'
}