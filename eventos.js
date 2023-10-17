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
