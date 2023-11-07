// Carga los datos del sessionStorage
let cliente = JSON.parse(sessionStorage.getItem('cliente'));
let datos = ['nombre', 'apellido1', 'apellido2', 'dni', 'telefonoMovil']
let pares = {nombre:'Nombre', apellido1:'Primer apellido', apellido2:'Segundo Apellido', dni:'Dni', telefonoMovil:'Telf. movil'}

// Crea un elemento div para contener los datos
let divClientes = document.getElementById('datos_cliente')

// Recorre cada propiedad del objeto
for (let propiedad in cliente) {
    if (datos.includes(propiedad)) {
        // Crea un elemento p para cada propiedad
        let p = document.createElement('p');
        p.textContent = pares[propiedad] + ': ' + cliente[propiedad];
        divClientes.appendChild(p);
    }
}

/* // Añade el div al documento
div.appendChild(div); */