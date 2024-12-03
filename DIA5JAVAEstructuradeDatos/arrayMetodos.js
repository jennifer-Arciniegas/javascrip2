let carros = [];

carros.push("renault 4", "fiat", "volvo", "ferrari")
carros.pop(); // elimina el ultimo elemento del array
carros.shift(); // elimina el primer elemento del array 
carros.unshift("Audi");
console.log(carros);
console.log(carros.slice(1,3));
//posicion, elementos, agrege mercedes
carros.splice(1, 2, "Mercedes", "Mazda", "Nissan");
console.log(carros);

console.log("JOIN: " + carros.join(" ; "));

//CONCAT
carros = carros.concat("toyota", "Mitsubishi", ["Suzuki", "Subaru"]);
carros.concat()
console.log(carros);

console.log(carros.indexOf("toyota"));
console.log(carros.includes("renault"));
let rta = carros.reduce((anterior, curr) => (anterior += curr.length <= 5 ? `, ${curr}` : ""), anterior = " ");
/*ant = " "

for (let i= 0; i<= carros.length;i++);
    if (carros[i].length <= 5)
        ant
*/
console.log(rta);
