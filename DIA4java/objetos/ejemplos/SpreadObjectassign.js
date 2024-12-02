const libro = { titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", anio: 1967 };
function clonarYModificarLibro(libro, nuevoTitulo, nuevoAnio) {
    return { ...libro, titulo: nuevoTitulo, anio: nuevoAnio };
}

const nuevoLibro = clonarYModificarLibro(libro, "El Otoño del Patriarca", 1975);
console.log("Libro Original:", libro);
console.log("Libro Modificado:", nuevoLibro);
