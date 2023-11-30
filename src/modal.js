// Función para mostrar el modal
//El botón ir a productos en el formulario de notificaciones es enviarForm que abre el mismo modal que enviarForm1
document.getElementById('enviarForm').addEventListener('click', function() {
  document.getElementById('myModal').style.display = 'block';
  });
//El botón ir a productos en el formulario de datos clientes es enviarForm1 que abre el mismo modal que enviarForm
  document.getElementById('enviarForm1').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
  });
  
  // Función para cerrar el modal
  document.getElementById('cerrarModal').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
  });
  
  // Función para ir a los datos de pago
  document.getElementById('noDatos').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
  });
  