//crear mapa
const mapa = new Map();
//agregar llave y valor 
mapa.set("123", "Warllen");
mapa.set("396", "Ada");
mapa.set("133", "Nicolas");

// has() verificar si una llave exite en el mapa
console.log(mapa.has("Laia"));
//get() obtiene el valor si existe en el mapa
console.log(mapa.get("123"));
console.log(mapa.get("555"));
//recorrer
//for ...of        dos maneras de hacerlo
for(let llave of mapa.keys()){
    console.log(llave + " : " + mapa.get(llave));
}
console.log("--".repeat(20));
for(let [llave, valor] of mapa){
    console.log(llave + " : " + valor);
}
//reccorido con foreach

mapa.forEach(( valor, llave) => console.log(valor + "->" + llave));

console.log("tamaño " + mapa.size);

mapa.delete("123");
console.log("tamaño " + mapa.size);
mapa.clear();
console.log("tamaño " + mapa.size);