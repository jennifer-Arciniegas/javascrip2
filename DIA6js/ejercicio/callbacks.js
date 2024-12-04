//funcion que va a iterar 
function callback(fun, num){
    for(let i= 0; i < num; i++){
        fun();
    }
}

let resul = 1;
//funcion que se usara como primer argumento la cual operationr el valor de result con sigo mismo en la cantidad 
// de iterciones que ingresamos en este casos 4
function operation(){
    resul += resul;
    console.log("el actual es: " + resul);
    document.write("el actual es: " + resul + "<br>");
    
}
//promt para insercion de datos
let numero = Number(prompt("ingrese el numero de veces a iterar: "));

// se llama 
callback(operation, numero); 
