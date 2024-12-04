//funcion que va a iterar 
function Icallback(fun, num){
    for(let i= 0; i < num; i++){
        fun();
    }
}

let resul = 1;
//funcion que se usara como primer argumento la cual sumar el valor de result con sigo mismo en la cantidad 
// de iterciones que ingresamos en este casos 4
function suma(){
    resul += resul;
    console.log("el actual es:" + resul)
    
}
 

// se llama 
Icallback(suma, 4); 
