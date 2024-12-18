document.addEventListener("DOMContentLoaded", () => {
    const calculadora = document.querySelector(".calculadora");  
    const pantalla = document.getElementById("display");
    let currentValue = "0";  // Valor inicial en el display

    // Escucha los clicks que se dan dentro del elemento de la calculadora
    calculadora.addEventListener("click", (event) => {
        // Comprobación de lo clickeado haya sido un botón
        // Retorna si el click no fue en un botón
        if (!event.target.matches("button")) return;

        const button = event.target;  

        if (button.tagName === "BUTTON") {
            const buttonId = button.id;

            if (/[0-9]/.test(buttonId) || buttonId === ".") {
                // Si el valor actual es "0" y el botón presionado no es "."
                if (currentValue === "0" && buttonId !== ".") {
                    currentValue = buttonId; // reemplaza el 0 por el valor del botón presionado
                } else if (buttonId === "." && !currentValue.includes(".")) {
                    currentValue += buttonId; // Agrega el punto solo si no existe ya
                } else if (buttonId !== ".") {
                    currentValue += buttonId; // Muestra números
                }
            } else if (buttonId === "ac") {
                currentValue = "0"; // Limpiar la pantalla
            }

            // Actualiza el display
            pantalla.value = currentValue;
        }
    });
});
