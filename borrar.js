// Obtiene los parámetros de la URL
let parametrosUrl = new URLSearchParams(window.location.search);

// Obtiene un parámetro específico
let miParametro = parametrosUrl.get('id');

let div = document.getElementById('get');

// Obtén el array del sessionStorage
let productos = JSON.parse(sessionStorage.getItem('productos'));

productos.splice(miParametro, 1);

// Guarda el array actualizado de nuevo en el sessionStorage
sessionStorage.setItem('productos', JSON.stringify(productos));

window.location.href = '/productos.html'