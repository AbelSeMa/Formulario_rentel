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

// evento que muestra el formulario de cambio de titular
// en el apartado de movil
document.getElementById('mismo_titular').addEventListener('click', () => {
    document.getElementById('tipo_tarifa').style.display = 'block';

    if (document.getElementById('antiguo_titular').style.display != 'none') {
        document.getElementById('antiguo_titular').style.display = 'none';

    }

})


document.getElementById('otro_titular').addEventListener('click', () => {
    document.getElementById('antiguo_titular').style.display = 'block';

    if (document.getElementById('tipo_tarifa').style.display != 'block') {
        document.getElementById('tipo_tarifa').style.display = 'block';

    }
})



document.getElementById('internet').addEventListener('click', () => {
    mostrarProductosInternet('opcionesInternet');
});


document.getElementById('portabilidad_fijo').addEventListener('click', () => {
    if (document.getElementById("datos_fijo").childElementCount > 0) {
        limpiar("datos_fijo");
    }
    numeroPortabilidadFijo();
    tarifasFijo();
    donanteFijo();
    titularPortabilidadFijo();
});

document.getElementById('alta_fijo').addEventListener('click', () => {
    if (document.getElementById("datos_fijo").childElementCount > 0) {
        limpiar("datos_fijo");
    }
    
    tarifasFijo();
    numTlfnFijo();
});


document.getElementById('otro_titular').addEventListener('click', () => {
    genererDatosAntiguoCliente();
    generarCamposTarifaPortabilidad();
});


document.getElementById('cambio_titular_fijo').addEventListener('click', () => {
    if (document.getElementById("datos_fijo").childElementCount > 0) {
        limpiar("datos_fijo");
    }
    cambioTitularFijo();
});

document.getElementById('cambio_titular_mov').addEventListener('click', () => {
    if (document.getElementById("cambio_titular_movil").childElementCount > 0) {
        limpiar("cambio_titular_movil");
    }
    document.getElementById('generar_portabilidad').style.display = 'none';
    document.getElementById('nuevoMovil').style.display = 'none';
    cambioTitularMovil();
});

document.getElementById('otros').addEventListener('click', () => {
    document.getElementById('opcionesInternet').style.display = 'none';
    document.getElementById('opciones_fijo').style.display = 'none';
    document.getElementById('opcionesMovil').style.display = 'none';

    document.getElementById('otros_productos').style.display = 'block';






});
