const ahora = new Date();
console.log(ahora);


//establecer hora
const horajenni = new Date(2001, 11, 28, 6, 0, 0);
console.log(horajenni);

const horaAnder = new Date(1997, 10, 18);
console.log(horaAnder)

//establecer una fecha
const fecha = new Date();
fecha.setFullYear(2024);
fecha.setMonth(11);
fecha.setDate(8);
console.log(fecha);


//obtener
console.log( "dia Anderson: " + horaAnder.getDay());
console.log( "dia jennifer: " + horajenni.getDay());
console.log("cadena : " + horaAnder.toDateString());
console.log("cadena : " + horajenni.toDateString());
//formato largo
console.log("cadena hora actual: " + horajenni.toTimeString());
//formato corto
console.log("cadena hora actual corta: " + horajenni.toLocaleTimeString());

console.log("milisegundos que a vivido: " + horajenni.getTime());
console.log("milisegundos desde 1970: " +new Date().getTime());


//calcular cuantos años se llevan de diferencia
const milliDia = 1000 * 60 * 60 * 24;
console.log( Math.floor(horajenni.getTime() - horaAnder.getTime())/ milliDia);
