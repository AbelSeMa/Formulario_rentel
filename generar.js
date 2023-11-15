let movilCount = 1;
for (let i = 0; i < array.length; i++) {
    if (array[i].producto === "Movil" && movilCount <= 5) {
        nuevoJson.productos["lineas moviles"]["linea movil" + movilCount]["datos linea" + movilCount] = array[i].servicio;
        nuevoJson.productos["lineas moviles"]["linea movil" + movilCount]["Nº teléfono móvil que contrata línea " + movilCount] = array[i].numero_sim;
        nuevoJson.productos["líneas moviles"]["linea movil" + movilCount]["Nº. de la tarjeta SIM línea " + contadorMovil] = dato.sim_rentel;
        nuevoJson.productos["líneas moviles"]["linea movil" + movilCount]["Mismo titular línea" + contadorMovil + (movilCount === 5 ? "" : " ")] = dato.mismo_titular_movil;
        nuevoJson.productos["líneas moviles"]["linea movil" + movilCount]["Nombre portabilidad línea" + contadorMovil + (movilCount === 1 || movilCount === 4 ? "" : " ")] = dato.nombre_antiguo_tiular_movil;
        nuevoJson.productos["líneas moviles"]["linea movil" + movilCount]["Apellidos portabilidad línea" + contadorMovil + (movilCount === 1 || movilCount === 3 || movilCount === 4 ? "" : " ")] = dato.apellidos_antiguo_tiular_movil;
        nuevoJson.productos["líneas moviles"]["linea movil" + movilCount]["DNI portabilidad línea" + contadorMovil + " "] = dato.DNI_antiguo_tiular_movil;
        nuevoJson.productos["líneas moviles"]["linea movil" + movilCount]["Operador donante línea" + contadorMovil] = dato.donante_movil;
        nuevoJson.productos["líneas moviles"]["linea movil" + movilCount]["Nº.tarjeta SIM donante línea1" + contadorMovil] = dato.sim_antigua;
        nuevoJson.productos["líneas moviles"]["linea movil" + movilCount]["Origen línea" + contadorMovil] = dato.tipo;
        nuevoJson.productos["líneas moviles"]["linea movil" + movilCount]["Tarifas línea " + contadorMovil] = dato.tarifa;
        movilCount++;
    }
}