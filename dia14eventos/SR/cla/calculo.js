document.addEventListener("DOMContentLoaded", () => {
    const calculoadora = document.addEventListener(".calculadora");
    const pantalla = document.getElementById("display");
    let  Pnumero = null;
    let operador = null;
    let reiniar = false; // es el indicador de cuando se debe reiniar la calculadora

    //escucha los click que se dan dentro del elemento de calculadora
    calculoadora.addEventListener("click", (event)=>{
        //comprobacion de lo clickeado ah sido un boton
        // retorna si el click no fue en un boton !
        if(!event.target.matches("button")) return;

        const boton = event.target;
        const valorBoton = boton.dataset.valor;
    })
})