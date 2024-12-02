
const producto = { id: 1, nombre: "Tablet", precio: 200, stock: 20 };

function actualizarstock(producto, nuevaCantidad) {
  const productoActualizado = {
    ...producto,
    stock: nuevaCantidad,
  };
  return productoActualizado;
}
function cambiarNombre(producto, nuevoNombre) {
  const productoActualizado = {
    ...producto,
    nombre: nuevoNombre,
  };
  return productoActualizado;
}
const cambios = actualizarstock(producto, 50);
const nombres = cambiarNombre(producto, "Tablet Pro");
console.log("Producto Original:", producto);
console.log("Producto nombre actualizado:", nombres, cambios);
