function obtenerJson() {
    // Recupera tus datos del sessionStorage
    let misDatos = JSON.parse(sessionStorage.getItem("productos"));
    let datosCliente = JSON.parse(sessionStorage.getItem("cliente"));

    // Inicializa tu nuevo objeto
    let nuevoJson = {
        "datos_clientes": {
            ...datosCliente
        },
        "datos_comercial": {
            "Comercial": datosCliente.comercial,
            "Nombre Comercial": datosCliente.comercial
        },
        "productos": {
            "lineas_moviles": {
                "linea_movil1": {
                    "Datos línea1": "",
                    "Nº teléfono que contrata línea 1": "",
                    "Nº. de la tarjeta SIM línea 1": "",
                    "Mismo titular línea1 ": "",
                    "Nombre portabilidad línea1 ": "",
                    "Apellidos portabilidad línea1 ": "",
                    "DNI portabilidad línea1 ": "",
                    "Operador donante línea1": "",
                    "Nº.tarjeta SIM donante línea1": "",
                    "Origen línea1": "",
                    "Tarifas línea 1": ""
                },
                "linea_movil2": {
                    "Datos línea2": "",
                    "Nº teléfono que contrata línea 2": "",
                    "Nº. de la tarjeta SIM línea 2": "",
                    "Mismo titular línea2 ": "",
                    "Nombre portabilidad línea2": "",
                    "Apellidos portabilidad línea2": "",
                    "DNI portabilidad línea2 ": "",
                    "Operador donante línea2": "",
                    "Nº.tarjeta SIM donante línea2": "",
                    "Origen línea2": "",
                    "Tarifas línea 2": ""
                },
                "linea_movil3": {
                    "Datos línea3": "",
                    "Nº teléfono que contrata línea 3": "",
                    "Nº. de la tarjeta SIM línea 3": "",
                    "Mismo titular línea3": "",
                    "Nombre portabilidad línea3": "",
                    "Apellidos portabilidad línea3 ": "",
                    "DNI portabilidad línea3 ": "",
                    "Operador donante línea3": "",
                    "Nº.tarjeta SIM donante línea3": "",
                    "Origen línea3": "",
                    "Tarifas línea 3": ""
                },
                "linea_movil4": {
                    "Datos línea4": "",
                    "Nº teléfono que contrata línea 4": "",
                    "Nº. de la tarjeta SIM línea 4": "",
                    "Mismo titular línea4": "",
                    "Nombre portabilidad línea4 ": "",
                    "Apellidos portabilidad línea4 ": "",
                    "DNI portabilidad línea4 ": "",
                    "Operador donante línea4": "",
                    "Nº.tarjeta SIM donante línea4": "",
                    "Origen línea4": "",
                    "Tarifas línea 4": ""
                },
                "linea_movil5": {
                    "Datos línea5": "",
                    "Nº teléfono que contrata línea 5": "",
                    "Nº. de la tarjeta SIM línea 5": "",
                    "Mismo titular línea5": "",
                    "Nombre portabilidad línea5": "",
                    "Apellidos portabilidad línea5": "",
                    "DNI portabilidad línea5": "",
                    "Operador donante línea5": "",
                    "Nº.tarjeta SIM donante línea5": "",
                    "Origen línea5": "",
                    "Tarifas línea 5": ""
                },
                "linea_movil6": {
                    "Datos línea6": "",
                    "Nº teléfono que contrata línea 6": "",
                    "Nº. de la tarjeta SIM línea 6": "",
                    "Mismo titular línea6": "",
                    "Nombre portabilidad línea6": "",
                    "Apellidos portabilidad línea6": "",
                    "DNI portabilidad línea6": "",
                    "Operador donante línea6": "",
                    "Nº.tarjeta SIM donante línea6": "",
                    "Origen línea6": "",
                    "Tarifas línea 6": ""
                }
            },
            "internet": {
                "Tarifas internet": "",
                "Tipo servicio": "",
                "Dirección de la instalación": "",
                "Permanencia": ""
            },
            "lineas_fijas": {
                "linea_fija1": {
                    "Datos teléfono fijo línea 1": "",
                    "N.º teléfono fijo nuevo o portado línea 1": "",
                    "Tarifa teléfono fijo línea 1": "",
                    "Nombre portabilidad fijo línea 1": "",
                    "Apellidos portabilidad fijo línea 1": "",
                    "DNI portabilidad fijo línea 1": "",
                    "Operador donante fijo línea 1": "",
                    "Mismo Titular Linea Fijo 1": "",
                    "Saldo inferior linea fijo 1": "",
                    "Recarga linea fijo 1":""


                },
                "linea_fija2": {
                    "Datos teléfono fijo línea 2": "",
                    "N.º teléfono fijo nuevo o portado línea 2": "",
                    "Tarifa teléfono fijo línea 2": "",
                    "Nombre portabilidad fijo línea 2": "",
                    "Apellidos portabilidad fijo línea 2": "",
                    "DNI portabilidad fijo línea 2": "",
                    "Operador donante fijo línea 2": "",
                    "Mismo Titular Linea Fijo 2": "",
                    "Saldo inferior linea fijo 2": "",
                    "Recarga linea fijo 2":""
                }
            },
            "adicionales": {
                "Selecciona un servicio adicional": ""
            }
        }
    }



    let movilCount = 1;
    let fijoCount = 1;
    let internetCount = 1;
    for (let i = 0; i < misDatos.length; i++) {
        let dato = misDatos[i];
        if (dato.producto === "Movil" && movilCount <= 6) {
            nuevoJson.productos["lineas_moviles"]["linea_movil" + movilCount]["Datos linea" + movilCount] = dato.servicio;
            nuevoJson.productos["lineas_moviles"]["linea_movil" + movilCount]["Nº teléfono móvil que contrata línea " + movilCount] = dato?.numero_telefono || '';
            nuevoJson.productos["lineas_moviles"]["linea_movil" + movilCount]["Nº. de la tarjeta SIM línea " + movilCount] = dato?.sim_rentel || '';
            nuevoJson.productos["lineas_moviles"]["linea_movil" + movilCount]["Mismo titular línea" + movilCount + (movilCount === 5 ? "" : " ")] = dato?.mismo_titular_movil || '';
            nuevoJson.productos["lineas_moviles"]["linea_movil" + movilCount]["Nombre portabilidad línea" + movilCount + (movilCount === 1 || movilCount === 4  ? " " : "")] = dato?.nombre_antiguo_titular_movil || '';
            nuevoJson.productos["lineas_moviles"]["linea_movil" + movilCount]["Apellidos portabilidad línea" + movilCount + (movilCount === 1 || movilCount === 3 || movilCount === 4 ? " " : "")] = dato?.apellidos_antiguo_titular_movil || '';
            nuevoJson.productos["lineas_moviles"]["linea_movil" + movilCount]["DNI portabilidad línea" + movilCount + (movilCount === 5 || movilCount === 6 ? "" : " ")] = dato?.DNI_antiguo_titular_movil || '';
            nuevoJson.productos["lineas_moviles"]["linea_movil" + movilCount]["Operador donante línea" + movilCount] = dato?.donante_movil || '';
            nuevoJson.productos["lineas_moviles"]["linea_movil" + movilCount]["Nº.tarjeta SIM donante línea" + movilCount] = dato?.sim_antigua || '';
            nuevoJson.productos["lineas_moviles"]["linea_movil" + movilCount]["Origen línea" + movilCount] = dato?.tipo || '';
            nuevoJson.productos["lineas_moviles"]["linea_movil" + movilCount]["Tarifas línea " + movilCount] = dato?.tarifa || '';
            movilCount++;
        }

        if (dato.producto === "Telefonía fija" && fijoCount <= 2) {
            console.log(dato.mismo_titular_fijo)
            nuevoJson.productos["lineas_fijas"]["linea_fija" + fijoCount]["Datos teléfono fijo línea " + fijoCount] = dato?.servicio || '';
            nuevoJson.productos["lineas_fijas"]["linea_fija" + fijoCount]["N.º teléfono fijo nuevo o portado línea " + fijoCount] = dato?.numero_portabilidad_fijo || '';
            nuevoJson.productos["lineas_fijas"]["linea_fija" + fijoCount]["Tarifa teléfono fijo línea " + fijoCount] = dato?.tarifa || '';
            nuevoJson.productos["lineas_fijas"]["linea_fija" + fijoCount]["Nombre portabilidad fijo línea " + fijoCount] = dato?.nombre_antiguo_titular_fijo || '';
            nuevoJson.productos["lineas_fijas"]["linea_fija" + fijoCount]["Apellidos portabilidad fijo línea " + fijoCount] = dato?.apellidos_antiguo_titular_fijo || '';
            nuevoJson.productos["lineas_fijas"]["linea_fija" + fijoCount]["DNI portabilidad fijo línea " + fijoCount] = dato?.DNI_antiguo_titular_fijo || '';
            nuevoJson.productos["lineas_fijas"]["linea_fija" + fijoCount]["Operador donante fijo línea " + fijoCount] = dato?.donante_fijo || '';
            nuevoJson.productos["lineas_fijas"]["linea_fija" + fijoCount]["Mismo Titular Linea Fijo " + fijoCount] = dato?.mismo_titular_fijo || '';
            nuevoJson.productos["lineas_fijas"]["linea_fija" + fijoCount]["Saldo inferior linea fijo " + fijoCount] = dato?.saldo_inferior || '';
            nuevoJson.productos["lineas_fijas"]["linea_fija" + fijoCount]["Recarga linea fijo " + fijoCount] = dato?.recarga_saldo || '';

            fijoCount++;
        }

        if (dato.producto === "Internet" && internetCount <= 1) {
            nuevoJson.productos["internet"]["Tarifas internet"] = dato?.tarifa || '';
            nuevoJson.productos["internet"]["Tipo servicio"] = dato?.tipo_servicio || '';
            nuevoJson.productos["internet"]["Dirección de la instalación"] = dato?.direccion_instalacion || '';
            nuevoJson.productos["internet"]["Permanencia"] = dato?.permanencia || '';
            internetCount++;
        }
    }
    console.log(nuevoJson);
    // Convierte el objeto a una cadena JSON
    var json = JSON.stringify(nuevoJson, null, 2); // El segundo y tercer argumento añaden formato

    // Crea un nuevo blob con la cadena JSON
    var blob = new Blob([json], { type: "application/json" });

    // Crea una nueva URL para el blob
    var url = URL.createObjectURL(blob);

    // Crea un enlace temporal y haz clic en él para descargar el archivo
    var enlaceTemporal = document.createElement('a');
    enlaceTemporal.href = url;
    enlaceTemporal.download = 'miArchivo.json';
    enlaceTemporal.click();

    return nuevoJson;
}