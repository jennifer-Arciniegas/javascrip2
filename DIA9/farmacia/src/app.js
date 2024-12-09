import { registrar, actualizarTablaClientes } from "./gestorClientes.js";
import { membresia } from "./gestorFechas.js";

window.registrar = () => {
  registrar();
};

window.membresia = () => {
  const formu = document.forms["formu"];
  const datosFormu = new FormData(formu);
  const cliente = Object.fromEntries(datosFormu.entries());

  // Validar que los campos tengan valores
  if (!cliente.fechaI || !cliente.dias || isNaN(parseInt(cliente.dias))) {
    alert("Por favor ingresa una fecha válida y un número de días.");
    return;
  }

  const resultado = membresia(cliente.fechaI, cliente.dias);
  alert(resultado);
};

window.listarClientesActivos = () => {
  const tablaContainer = document.getElementById("tablaClientesContainer");
  if (tablaContainer.style.display === "none" || tablaContainer.style.display === "") {
    tablaContainer.style.display = "block";
    actualizarTablaClientes();
  } else {
    tablaContainer.style.display = "none";
  }
};

