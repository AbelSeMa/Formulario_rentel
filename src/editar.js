// Cuando se carga la página, verifica si hay datos en sessionStorage
$(document).ready(function () {
    let datosCliente = JSON.parse(sessionStorage.getItem('cliente'));
    if (Object.keys(datosCliente).length > 0) {

        if (datosCliente.comercial) {
            // Establece el valor del select y muestra el formulario
            $('#comercial').val(datosCliente.comercial)
            $('#formulario1').removeAttr('hidden');

        }
        // Rellena los campos del formulario con los datos del cliente
        $('#comercial').val(datosCliente.comercial);
        $('#nombre').val(datosCliente.Nombre);
        $('#apellido1').val(datosCliente.apellido1);
        $('#apellido2').val(datosCliente.apellido2);
        $('#fechaNacimiento').val(datosCliente.fechaNacimiento);
        $('#dni').val(datosCliente['DNI/CIF']);
        $('#correo').val(datosCliente['Correo electrónico']);
        $('#telefonoFijo').val(datosCliente['Teléfono fijo']);
        $('#telefonoMovil').val(datosCliente['Teléfono móvil']);
        $('#pais').val(datosCliente.pais);
        $('#provincia').val(datosCliente.Provincia);
        $('#poblacion').val(datosCliente.Población);
        $('#direccion').val(datosCliente.Dirección);
        $('#codigoPostal').val(datosCliente['Código postal']);
        $('#nombreFac').val(datosCliente['Nombre Fac.']);
        $('#apellido1Fac').val(datosCliente.apellido1Fac);
        $('#apellido2Fac').val(datosCliente.apellido2Fac);
        $('#fechaNacimientoFac').val(datosCliente.fechaNacimientoFac);
        $('#dniFac ').val(datosCliente['DNI/CIF  Fac. ']);
        $('#correoFac').val(datosCliente['Correo electrónico Fac. ']);
        $('#telefonoFijoFac').val(datosCliente['Teléfono fijo Fac. ']);
        $('#telefonoMovilFac').val(datosCliente['Teléfono móvil Fac. ']);
        $('#paisFac').val(datosCliente.paisFac);
        $('#provinciaFac').val(datosCliente['Provincia Fac. ']);
        $('#poblacionFac').val(datosCliente['Población Fac. ']);
        $('#direccionFac').val(datosCliente['Dirección Fac. ']);
        $('#CodigoPostalFac').val(datosCliente['Código postal Fac. ']);
        $('#nombreNoti').val(datosCliente['Nombre Contacto']);
        $('#apellido1Noti').val(datosCliente.apellido1Noti);
        $('#apellido2Noti').val(datosCliente.apellido2Noti);
        $('#correoNoti').val(datosCliente['Correo electrónico contacto']);
        $('#telefonoFijoNoti').val(datosCliente['Teléfono fijo contacto']);
        $('#telefonoMovilNoti').val(datosCliente['Teléfono móvil contacto']);
    }
});
