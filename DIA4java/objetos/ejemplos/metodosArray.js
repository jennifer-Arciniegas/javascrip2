const tareas = [];
// Función para agregar tareas al array
function agregarTarea(titulo, descripcion) {
const id = tareas.length + 1;
const tarea = { id, titulo, descripcion, completada: false };
tareas.push(tarea);
}
// Función para marcar una tarea como completada (sin usar find())
function completarTarea(id) {
for (let i = 0; i < tareas.length; i++) {
if (tareas[i].id === id) {
tareas[i].completada = true;
break; // Salimos del bucle una vez encontramos la tarea
}
}
}
// Función para mostrar todas las tareas pendientes (sin usar filter())
function mostrarPendientes() {
const pendientes = [];
for (let i = 0; i < tareas.length; i++) {
if (!tareas[i].completada) {
pendientes.push(tareas[i]);
}
}
console.table(pendientes);
}
// Ejemplo de uso
 agregarTarea ("Estudiar JavaScript", "Practicar objetos y métodos");
 agregarTarea ("Leer sobre APIs", "Entender cómo funcionan las RESTAPIs");
completarTarea();
mostrarPendientes();