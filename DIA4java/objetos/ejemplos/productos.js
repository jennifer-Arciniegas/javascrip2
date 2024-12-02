// (Clonación y Métodos de Objetos)
const producto = { id: 1, nombre: "Laptop", precio: 1000, stock: 10 };
function aplicarDescuento(producto, descuento) {
  const productoConDescuento = {
    ...producto,
    precio: producto.precio * (1 - descuento),
  };
  return productoConDescuento;
}
const nuevoProducto = aplicarDescuento(producto, 0.2);
console.log("Producto Original:", producto);
console.log("Producto con Descuento:", nuevoProducto);
