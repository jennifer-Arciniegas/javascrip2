const estudiante = {
  nombre: "Juan",
  edad: 20,
  curso: "JavaScript",
  notas: { practica: 90, teoria: 85, final: 88 },
};
function promedioEstudiante({ nombre, curso, notas }) {
  const { practica, teoria, final } = notas;
  const promedio = (practica + teoria + final) / 3;
  return `El estudiante ${nombre} del curso ${curso} tiene un
promedio de ${promedio.toFixed(2)}`;
}
console.log(promedioEstudiante(estudiante));