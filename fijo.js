function mostrarFijo() {
    var info = document.createElement("p");
    info.textContent = 'Elige la velocidad de la fibra:';
    document.getElementById('opcionesMovil').style.display = 'none';
    document.getElementById('opcionesInternet').style.display = 'none';

    document.getElementById('opciones_fijo').style.display = 'block';

}

function tarifasFijo(htmlId) {
    var id = document.getElementById(htmlId);
    id.style.display = 'block';

    var tarifas = [
        {
            tarifa: ' Estándar - prepago',
        },
        {
            tarifa: '1000 minutos - Postpago',
        },
        {
            tarifa: '2000 minutos - Postpago',
        }
    ]

    // Elimina opciones anteriores si las hay
    while (id.firstChild) {
        id.removeChild(id.firstChild);
    }

    // Agrega las opciones como radio buttons
    for (let i = 0; i < tarifas.length; i++) {
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "tarifa"; // Nombre del grupo de radio buttons
        radio.value = tarifas[i].precio; // Valor del radio button (precio)
        radio.id = "radio_" + i; // ID único para el radio button
        radio.className = "form-check-input"; // Clase CSS para el radio button
        radio.onclick = () => {
            eval(tarifas[i].activador);
        };
        id.appendChild(radio); // Agrega el radio button

        let label = document.createElement("label");
        label.setAttribute("for", "radio_" + i);
        label.className = "form-check-label label_fibras"; // Clase CSS para el radio button
        label.innerHTML = tarifas[i].tarifa; // Texto visible para la tarifa
        id.appendChild(label);

        let br = document.createElement("br"); // Crea un elemento <br>
        id.appendChild(br); // Agrega el <br> después de la etiqueta


    }

    productosInternet.className = "mb-2";
}
