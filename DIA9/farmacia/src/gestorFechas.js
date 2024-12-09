export const membresia = function (fecha, dias) {
  const fechainicio = new Date(fecha);

  // Calcular la fecha de expiración sumando los días
  const fechaExpiracion = new Date(fechainicio);
  fechaExpiracion.setDate(fechainicio.getDate() + parseInt(dias));

  // Comparar con la fecha actual
  const fechaActual = new Date();
  if (fechaActual <= fechaExpiracion) {
    return "La membresía está activa.";
  } else {
    return "La membresía está vencida.";
  }
};
