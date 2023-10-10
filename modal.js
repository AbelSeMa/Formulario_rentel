// Función para mostrar el modal
document.getElementById('abrirModal').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
  });
  
  // Función para cerrar el modal
  document.getElementById('cerrarModal').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
  });
  
  // Función para contratar un nuevo producto
  document.getElementById('contratarProducto').addEventListener('click', function() {
    document.getElementById('opcionesFibra').style.display = 'block';
    document.getElementById('myModal').style.display = 'none';
  });
  
  // Función para ir a los datos de pago
  document.getElementById('irAPago').addEventListener('click', function() {
    window.location.href = '/datos-de-pago.html';
    alert('Redireccionando a los datos de pago...');
    document.getElementById('myModal').style.display = 'none';
  });
  