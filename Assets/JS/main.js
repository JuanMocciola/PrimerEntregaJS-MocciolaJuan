function stockZapas() {
    while (true) {
        let talle = parseInt(prompt("Ingrese su talle de zapatilla:"));

        if (talle >= 37 && talle <= 47) {
            break;
        } else {
            alert("El talle ingresado no se encuentra en stock.");
            return;
        }
    }

    while (true) {
        let color = prompt("¿Que color quiere? (blanco o negro):");

        if (color === "blanco" || color === "negro") {
            break;
        } else {
            alert("El color seleccionado no está disponible en este momento.");
        }
    }
    alert("¡Hay stock disponible!");
}

stockZapas();