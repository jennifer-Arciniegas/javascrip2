//almacenar clientes
const clientes = [];
export const registrarCliente = (nombre, fechaInscripcion, duracionDias) => {
  const cliente = {
    nombre,
    fechaInscripcion,
    duracionDias,
  };
  clientes.push(cliente);
  console.log(`cliente ${nombre} registrado con exito `);
};
export const registrar=() => clientes;

export function registrar() {
  const form = document.forms["formu"];
  const formData = new FormData(form);
  //tranformalo en objeto
  const cliente = Object.fromEntries(formData.entries());
  registrarCliente(
    cliente.nombre,
    cliente.fechaInscripcion,
    cliente.duracionDias
  );
  console.log("cliente registrado" + cliente.nombre);
}
