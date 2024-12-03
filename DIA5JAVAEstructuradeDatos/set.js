let conj = new Set();

console.log(conj.size);
conj.add("audi");
conj.add("mercedes");
conj.add("audi");
console.log(conj);
conj.delete("mercedes");
console.log(conj);

console.log(conj.has("mercedes"));

//recorridos: 
//for of 
for(let elem of conj){
    console.log(elem);
}
//for each
conj.forEach(elem => console.log(elem));
//values() devuelvve un iterador con todos los valores
console.log(conj.values());

conj.clear();
console.log(conj.size);