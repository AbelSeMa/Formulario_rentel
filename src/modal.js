// Función para mostrar el modal
document.getElementById('enviarForm').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
  });

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
  