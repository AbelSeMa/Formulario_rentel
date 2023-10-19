// evento para mostrar el campo telefono cunado el cliente interactura
// con los radio de portabiliad.

var portaOk = document.getElementById('porta_ok');
var portaKo = document.getElementById('porta_ko');
var altaNueva = document.getElementById('alta_nueva');

portaKo.addEventListener('click', () => {
    limpiar("fijaVirtual")

    document.getElementById('fijoPortabilidad').innerHTML = "<input type='tel' name='fijoPortabilidad' id='fijoPorta' placeholder='Nº telefono fijo' />";
})

portaOk.addEventListener('click', () => {
    virtual()
    document.getElementById('fijoPortabilidad').innerHTML = "<input type='tel' name='fijoPortabilidad' id='fijoPorta' placeholder='Nº telefono fijo' />";
})

altaNueva.addEventListener('click', () => {
    virtual()
    limpiar("fijoPortabilidad")
})

// evento que 'esconde' el formulario de alta nueva de movil y muestra el formulario de portabilidad movil
var portabilidad = document.getElementById('portabilidad');
portabilidad.addEventListener('click', () => {
    var port = document.getElementById('generar_portabilidad')
    if (port.style.display != 'block') {
        port.style.display = 'block'
    }
    var tarifas = document.getElementById('nuevoMovil')
    if (tarifas.style.display != 'none') {
        tarifas.style.display = 'none';
    }
})

// evento que 'esconde' el formulario de portabilidad movil y muestra el formulario de alta nueva de movil
var altaNueva = document.getElementById('altaNueva');
altaNueva.addEventListener('click', () => {
    var tarifas = document.getElementById('nuevoMovil')
    if (tarifas.style.display != 'block') {
        tarifas.style.display = 'block';
    } 
    var port = document.getElementById('generar_portabilidad')
    if (port.style.display != 'none') {
        port.style.display = 'none'
    }
})

// evento que muestra el formulario de cambio de titular en el apartado portabilidad

document.getElementById('mismo_titular').addEventListener('click', () => {

})


document.getElementById('mismo_titular').addEventListener('click', () => {
    document.getElementById('tipo_tarifa').style.display = 'block';

    if (    document.getElementById('antiguo_titular').style.display != 'none') {
        document.getElementById('antiguo_titular').style.display = 'none';
        
    }

})


document.getElementById('otro_titular').addEventListener('click', () => {
    document.getElementById('antiguo_titular').style.display = 'block';

    if (document.getElementById('tipo_tarifa').style.display != 'block') {
        document.getElementById('tipo_tarifa').style.display = 'block';
        
    }
})

document.getElementById('otro_titular').addEventListener('click', () => {
    genererDatosAntiguoCliente();
});