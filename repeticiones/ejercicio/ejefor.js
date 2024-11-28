// averiguar si una cadena es palindrome 
//debe usar ciclos no usar funciones 
let cad = "ana";
let lcad = cad.length -1;
let espal = true;
for(let i=0; i <= lcad / 2; i++){
    let lini = cad[i];
    let fin = cad[lcad - i];
   
    if(lini !== fin) {
        espal = false;
        break;
    }

}

console.log((espal) ? "es palindrome": "no es palindrome");