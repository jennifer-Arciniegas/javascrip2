import mostrartxt from "./mostrartexto.js"
import mostrarJson from "./mostrarjson.js"

//mostrar texto
const btnmostrartxt = document.getElementById("mostrartxt");
const areatext = document.getElementById("contenidotexto");
btnmostrartxt.addEventListener("click", e => {
    mostrartxt(areatext);
});

//mostrar json
const btnmostrarjson = document.getElementById("mostrarjson");
const areajson = document.getElementById("datosTabla");
btnmostrarjson.addEventListener("click", e => {
    mostrarJson(areajson);
});