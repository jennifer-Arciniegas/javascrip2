//creacion de un array
let frutas = ["manzana", "fresa", "pera", "uva", "mango"]
//creacion con instancia de objeto              una instancia es cuando a una clase se le dan valores
let camper = new Array("jinder", "marlon", "jose", "nicolas");

let salas = new Array(3)
console.log(salas[0]);
//dar valores 
salas[0] = "sputnik";
console.log(salas[0]);

//recorrer un array 
//1 forma posiciones 
for (let i=0; i < frutas.length; i++){
    console.log(frutas[i]);
}
console.log("=".repeat(40));
//segunda forma
// recorrer por elementos
for (fruta of frutas){
    console.log(fruta)
}

    console.log("=".repeat(40)+ "for each");

//tercera forma
//
frutas.forEach((f) => console.log(f + " criolla"));

    console.log("=".repeat(40)+ "for map");

//recorrido con funciones Lambdas

frutas.map((f) => console.log(f + " argentias"))
    console.log("=".repeat(40)+ "for filter");

frutas.filter((f, pos)=> console.log (f + "-" + pos));

    console.log("=".repeat(40)+ "devuelve valores  booleans");

frutas.filter((f, pos)=> console.log (f.length  < 5));

    console.log("=".repeat(40)+ "devuelve vector de cadenas");
    // mas expresivos
frutas.filter(f =>  {return f.length  < 5}).map (f => console.log(f));