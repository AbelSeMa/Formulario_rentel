/** 
* Función asíncrona que construye el select de los productos adiccionales
*/
async function opcionesOtros() {
       // Crear un elemento div
       let div = document.createElement('div');
       div.id = "contenedor_estilo_otros";
       div.className = "text-start p-3";

       let div2 = document.createElement('div');
       div2.id = "contenido_otros";

       document.getElementById('titulo_modal').textContent = 'Otros productos'
   
       div2.className = "mx-4"
   
       // Crear un elemento h4
       let h4 = document.createElement('h4');
       h4.textContent = 'Servicios adicionales';
       div.appendChild(h4);

       // crea el elemento select para los productos adiccionales
       let select = document.createElement("select");
       select.name = "tarifa";
       select.className = "form-select mb-3";
    
    //Obtengo las tarifas de los servicios adicionales
    let tarifas_servicios_adicionales = await get_tarifas_productos_adicionales();
    
    //Creo los radio por cada servicio adicional
    tarifas_servicios_adicionales.tarifas_prod_adicionales.forEach(function (tarifa) {
        let option = document.createElement("option");
        option.value = `${tarifa.descripcion} ${tarifa.precio}€`;
        option.textContent = `${tarifa.descripcion} ${tarifa.precio}€`;
        select.appendChild(option);
    });

    div2.appendChild(select)
       // Añadir div al elemento padre
       document.body.appendChild(div);
       let contenedor = document.getElementById('contenedor');
   
       contenedor.appendChild(div)
       contenedor.appendChild(div2)
}

//Petición a Fast api para obtener tarifas de servicios adicionales
async function get_tarifas_productos_adicionales() {
    try {
        const response = await fetch('/tarifas_productos_adicionales');

        // Verifica si la respuesta es exitosa (código de estado 200)
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        return data
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}