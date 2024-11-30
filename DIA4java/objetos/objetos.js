let menu = Number(prompt(`***MENU**
1. Aregar producto
2. Eliminar producto 
3. Mostrar producto
4. Buscar el invetario
5. salir
ingrese la opcion del menu: `));
let productos = []; 
let nombre = prompt("ingrese el nombre del producto: ");
let marca = prompt("ingrese la marca del producto: ");
let cantidad = prompt("ingrese la cantidad de productos: ");
function agregarproducto(nombre, marca, cantidad){
    const producto = {
        nombre : nombre,
        marca: marca,
        cantidad: cantidad
    };
    productos.push(producto);
    console.log("producto agregado: ", producto);
    //const cadenajson =JSON.stringify(producto);
    //console.log(cadenajson);
};

function ver(){
    console.log("productos registrados: ");
    productos.forEach(element => {
        console.log(`producto: ${producto.nombre}, Marca: ${producto.marca}, Cantidad ${producto.cantidad}`)
    });
};

function eliminar(){

}; 


while (!salir) {

    switch (menu) {
    case (1):
        agregarproducto(nombre, marca, cantidad);
        break;

    case (2):
        eliminar();
        break;

    case (3):
        ver();
        break;
    

    case (5):
        salir = true;
        break;
    }

}

