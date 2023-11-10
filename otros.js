function opcionesOtros() {
       // Crear un elemento div
       let div = document.createElement('div');
       div.id = "contenedor_estilo_otros";
       div.className = "text-start p-3";
       let div2 = document.createElement('div');
       div2.id = "contenido_otros";
       div2.className = "mx-4"
   
       // Crear un elemento h4
       let h4 = document.createElement('h4');
       h4.textContent = 'Servicio contratado';
       div.appendChild(h4);
   
       // Array para crear los servicios, cada elemento 
       // del array será un radio
       let servicios = ['ZAPI', 'IP fija', 'Teleasistencia'];
       let labels = ['ZAPI', 'IP fija', 'Teleasistencia'];
   
       for (let i = 0; i < servicios.length; i++) {
           let input = document.createElement('input');
           input.className = 'form-check-input';
           input.type = 'radio';
           input.name = 'servicio';
           input.id = servicios[i];
           input.value = servicios[i];
           input.required = true;
   
           let label = document.createElement('label');
           label.className = 'form-check-label';
           label.htmlFor = servicios[i];
           label.textContent = labels[i];
   
           if (servicios[i] === 'ZAPI') {
               input.onclick = function () {
                   let divPadre = document.getElementById('contenido_otros');
                   // Comprueba si el div padre tiene hijos
                   if (divPadre.hasChildNodes()) {
                       // Si tiene hijos, elimínalos todos
                       while (divPadre.firstChild) {
                           divPadre.removeChild(divPadre.firstChild);
                       }
                   }
   
               };
           }
   
           if (servicios[i] === 'portabilida_internet') {
               input.onclick = function () {
                   let divPadre = document.getElementById('contenido_otros');
                   // Comprueba si el div padre tiene hijos
                   if (divPadre.hasChildNodes()) {
                       // Si tiene hijos, elimínalos todos
                       while (divPadre.firstChild) {
                           divPadre.removeChild(divPadre.firstChild);
                       }
                   }
               };
           }
   
           div.appendChild(input);
           div.appendChild(label);
           div.appendChild(document.createElement('br'));
       }
   
       // Añadir div al elemento padre
       document.body.appendChild(div);
       let contenedor = document.getElementById('contenedor');
   
       contenedor.appendChild(div)
       contenedor.appendChild(div2)
}