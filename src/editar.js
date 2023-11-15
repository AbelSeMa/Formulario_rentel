// Cuando se carga la página, verifica si hay datos en sessionStorage
$(document).ready(function() {
    if(sessionStorage.getItem('datosCliente')) {
        var datosCliente = JSON.parse(sessionStorage.getItem('datosCliente'));
        
        // Rellena los campos del formulario con los datos del cliente
        $('#nombre').val(datosCliente.nombre);
        $('#apellido').val(datosCliente.apellido);
        // Asegúrate de hacer esto para todos los campos del formulario
    }
});

// Cuando se envía el formulario, guarda los datos en sessionStorage
$('form').submit(function(e) {
    e.preventDefault();
    
    var datosCliente = {
        nombre: $('#nombre').val(),
        apellido: $('#apellido').val(),
        // Asegúrate de hacer esto para todos los campos del formulario
    };
    
    sessionStorage.setItem('datosCliente', JSON.stringify(datosCliente));
    
    // Redirige al usuario a la página de producto
    window.location.href = 'producto.html';
});
