//asincronia
console.log("inicio");

//proceso asincrono 5s depues
setTimeout(()=> {
    console.log("tarea asincronica completada en 7s despues ");
}, 5000);

setTimeout(()=> {
    console.log("tarea asincronica completada en 2s despues ");
}, 2000);

setTimeout(()=> {
    console.log("tarea asincronica completada en 4s despues ");
}, 4000);



console.log("fin")