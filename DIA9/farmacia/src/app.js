import { registrarCliente } from "./gestorClientes"; 
document.getElementById("registrar").onclick = registrar;


document.addEventListener("DOMContentLoaded", () => {
  const registrarBtn = document.getElementById("registrarBtn");
  registrarBtn.addEventListener("click", registrar);
});