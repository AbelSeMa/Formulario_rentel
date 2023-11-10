// Función para mostrar el modal
document.getElementById('enviarForm').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
  });
  
  // Función para cerrar el modal
  document.getElementById('cerrarModal').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
  });
  
  // Función para contratar un nuevo producto
/*   document.getElementById('siDatos').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
  }); */
  
  // Función para ir a los datos de pago
  document.getElementById('noDatos').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
  });
  


  function enviarProducto() {
    createJson();
    limpiarContenedor();
    generarTablaProducto();

     // Obtén el modal
     var modal = document.getElementById("modalTablas");
    modal.style.display = "none";

  }