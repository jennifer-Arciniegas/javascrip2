function mydisplayer(some){
    console.log(some);
}

function esprimo (num){
    console.log(`el numero es primo ${num}`);
}
function espar(num){
    return num % 2 == 0;
}


//simular consulta antecedentes de la policia
// esta requiere el numero id y return si la perona tiene o no antecedentes 
const consultaAntecedentes = Callback => {
    setTimeout(()=> {
        const segDesde1970 = Math.floor(Date.now() / 1000);
        if(!Callback(segDesde1970)){
            console.log("No tiene antecedentes: " + segDesde1970);

        }else{
            console.log("Tiene antecedentes" +  segDesde1970);
        }
    })
}

function myCalculator(num1, num2, funCallback){
    let sum = num1 + num2;
    funCallback(sum);
}
console.log("INICIO.")
myCalculator(5, 5, mydisplayer);
myCalculator(5, 5, esprimo);

consultaAntecedentes ( mydisplayer );
consultaAntecedentes(esprimo);

let tiempo = 3;
for(let i= 0; i <= 7; i++){
    setTimeout(i => {
       
        console.log("ejecucion: " + i)
        consultaAntecedentes(espar)

    }, ++tiempo);
}
console.log("FIN\n");