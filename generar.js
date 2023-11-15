function obtenerJson() {
    // Recupera tus datos del sessionStorage
    let misDatos = JSON.parse(sessionStorage.getItem("productos"));

    // Inicializa tu nuevo objeto
    let nuevoJson = {
        "productos": {
            "lineas moviles": {
                "linea movil1": {
                    "datos linea1": "",
                    "Nº teléfono móvil que contrata línea 1": "",
                    "Nº. de la tarjeta SIM línea 1": "",
                    "Mismo titular línea1": "",
                    "Nombre portabilidad línea1": "",
                    "Apellidos portabilidad línea1": "",
                    "DNI portabilidad línea1": "",
                    "Operador donante línea1": "",
                    "Nº.tarjeta SIM donante línea1": "",
                    "Origen línea1": "",
                    "Tarifas línea 1": ""
                },
                "linea movil2": {
                    "datos linea2": "",
                    "Nº teléfono móvil que contrata línea 2": "",
                    "Nº. de la tarjeta SIM línea 2": "",
                    "Mismo titular línea2": "",
                    "Nombre portabilidad línea2": "",
                    "Apellidos portabilidad línea2": "",
                    "DNI portabilidad línea2": "",
                    "Operador donante línea2": "",
                    "Nº.tarjeta SIM donante línea2": "",
                    "Origen línea2": "",
                    "Tarifas línea 2": ""
                },
                "linea movil3": {
                    "datos linea3": "",
                    "Nº teléfono móvil que contrata línea 3": "",
                    "Nº. de la tarjeta SIM línea 3": "",
                    "Mismo titular línea3": "",
                    "Nombre portabilidad línea3": "",
                    "Apellidos portabilidad línea3": "",
                    "DNI portabilidad línea3": "",
                    "Operador donante línea3": "",
                    "Nº.tarjeta SIM donante línea3": "",
                    "Origen línea3": "",
                    "Tarifas línea 3": ""
                },
                "linea movil4": {
                    "datos linea4": "",
                    "Nº teléfono móvil que contrata línea 4": "",
                    "Nº. de la tarjeta SIM línea 4": "",
                    "Mismo titular línea4": "",
                    "Nombre portabilidad línea4": "",
                    "Apellidos portabilidad línea4": "",
                    "DNI portabilidad línea4": "",
                    "Operador donante línea4": "",
                    "Nº.tarjeta SIM donante línea4": "",
                    "Origen línea4": "",
                    "Tarifas línea 4": ""
                },
                "linea movil5": {
                    "datos linea5": "",
                    "Nº teléfono móvil que contrata línea 5": "",
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
                "linea movil6": {
                    "datos linea6": "",
                    "Nº teléfono móvil que contrata línea 6": "",
                    "Nº. de la tarjeta SIM línea 6": "",
                    "Mismo titular línea6": "",
                    "Nombre portabilidad línea6": "",
                    "Apellidos portabilidad línea6": "",
                    "DNI portabilidad línea6": "",
                    "Operador donante línea6": "",
                    "Nº.tarjeta SIM donante línea6": "",
                    "Origen línea6": "",
                    "Tarifas línea 6": ""
                },
                "Internet": {},
                "linea fija": {}
            }
        }
    }

    let movilCount = 1;
    for (let i = 0; i < misDatos.length; i++) {
        let dato = misDatos[i];
        if (dato.producto === "Movil" && movilCount <= 6) {
            nuevoJson.productos["lineas moviles"]["linea movil" + movilCount]["datos linea" + movilCount] = dato.servicio;
            nuevoJson.productos["lineas moviles"]["linea movil" + movilCount]["Nº teléfono móvil que contrata línea " + movilCount] = dato?.numero_sim || '';
            nuevoJson.productos["lineas moviles"]["linea movil" + movilCount]["Nº. de la tarjeta SIM línea " + movilCount] = dato?.sim_rentel || '';
            nuevoJson.productos["lineas moviles"]["linea movil" + movilCount]["Mismo titular línea" + movilCount + (movilCount === 5 ? "" : " ")] = dato?.mismo_titular_movil || '';
            nuevoJson.productos["lineas moviles"]["linea movil" + movilCount]["Nombre portabilidad línea" + movilCount + (movilCount === 1 || movilCount === 4 ? "" : " ")] = dato?.nombre_antiguo_tiular_movil || '';
            nuevoJson.productos["lineas moviles"]["linea movil" + movilCount]["Apellidos portabilidad línea" + movilCount + (movilCount === 1 || movilCount === 3 || movilCount === 4 ? "" : " ")] = dato?.apellidos_antiguo_tiular_movil || '';
            nuevoJson.productos["lineas moviles"]["linea movil" + movilCount]["DNI portabilidad línea" + movilCount + (movilCount === 5 || movilCount === 6 ? " " : "")] = dato?.DNI_antiguo_tiular_movil || '';
            nuevoJson.productos["lineas moviles"]["linea movil" + movilCount]["Operador donante línea" + movilCount] = dato?.donante_movil || '';
            nuevoJson.productos["lineas moviles"]["linea movil" + movilCount]["Nº.tarjeta SIM donante línea1" + movilCount] = dato?.sim_antigua || '';
            nuevoJson.productos["lineas moviles"]["linea movil" + movilCount]["Origen línea" + movilCount] = dato?.tipo || '';
            nuevoJson.productos["lineas moviles"]["linea movil" + movilCount]["Tarifas línea " + movilCount] = dato?.tarifa || '';
            movilCount++;
        }
    }
    console.log(nuevoJson);
}