document.addEventListener("DOMContentLoaded", () => {
  const calculadora = document.querySelector(".calculadora");
  const display = document.getElementById("display");
  let primerNumero = null;
  let operador = null;
  let reiniciarDisplay = false;

  calculadora.addEventListener("click", (evento) => {
    if (!evento.target.matches("button")) return;

    const boton = evento.target;
    const valorBoton = boton.dataset.valor;

    if ("0123456789".includes(valorBoton)) {
      if (display.value === "0" || reiniciarDisplay) {
        display.value = valorBoton;
        reiniciarDisplay = false;
      } else {
        display.value += valorBoton;
      }
    } else if ("+-*/".includes(valorBoton)) {
      primerNumero = parseFloat(display.value);
      operador = valorBoton;
      reiniciarDisplay = true;
    } else if (valorBoton === "=") {
      if (primerNumero !== null && operador) {
        const segundoNumero = parseFloat(display.value);
        let resultado;
        switch (operador) {
          case "+":
            resultado = primerNumero + segundoNumero;
            break;
          case "-":
            resultado = primerNumero - segundoNumero;
            break;
          case "*":
            resultado = primerNumero * segundoNumero;
            break;
          case "/":
            resultado = primerNumero / segundoNumero;
            break;
        }
        display.value = resultado;
        primerNumero = null;
        operador = null;
      }
    } else if (valorBoton === "C") {
      display.value = "0";
      primerNumero = null;
      operador = null;
      reiniciarDisplay = false;
    }
  });
});
