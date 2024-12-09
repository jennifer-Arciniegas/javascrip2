let clientesRegistrados = [];
let clientesActivos = [];

export function registrar() {
  const formu = document.forms["formu"];
  const datosFormu = new FormData(formu);
  const cliente = Object.fromEntries(datosFormu.entries());
  cliente.fechaExpiracion = calcularFechaExpiracion(
    cliente.fechaI,
    cliente.dias
  );
  clientesRegistrados.push(cliente);
  actualizarClientesActivos();
  console.log("Cliente registrado:", cliente);
}

function calcularFechaExpiracion(fechaInicio, dias) {
  const fecha = new Date(fechaInicio);
  fecha.setDate(fecha.getDate() + parseInt(dias, 10));
  return fecha;
}

function actualizarClientesActivos() {
  const fechaActual = new Date();
  clientesActivos = clientesRegistrados.filter(
    (cliente) => new Date(cliente.fechaExpiracion) > fechaActual
  );
}

export function obtenerClientesActivos() {
  actualizarClientesActivos();
  return clientesActivos;
}

export function actualizarTablaClientes() {
  const clientesActivos = obtenerClientesActivos();
  const tabla = document.getElementById("tablaClientes");
  const tbody = tabla.querySelector("tbody");
  tbody.innerHTML = "";

  clientesActivos.forEach((cliente) => {
    const fila = tbody.insertRow();
    fila.insertCell().textContent = cliente.nombre;
    fila.insertCell().textContent = cliente.fechaI;
    fila.insertCell().textContent = cliente.dias;
    fila.insertCell().textContent = new Date(
      cliente.fechaExpiracion
    ).toLocaleDateString();
  });
}
