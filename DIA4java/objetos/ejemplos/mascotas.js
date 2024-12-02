const mascotas = []; //arrray que guardara los datos

function agregarmascotas(nombre, edad, raza, adoptado =false){
    const mascota = {
        nombre, edad, raza, adoptado, 
        adoptar(){
            this.adoptado = true;
        }
    };
    mascotas.push(mascota);
}

function listarmascotas (){
    console.table(mascotas)
}

//agregarr mascotas
agregarmascotas("fido", 3,  "chanda");
agregarmascotas("firulais", 3, "zarna");
mascotas[0].adoptar();
listarmascotas();
