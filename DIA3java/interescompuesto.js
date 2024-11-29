//interes compuesto
// se invierte $1.000.00 al 5% de interes calcule a 10 años
//imprimir en consola -----------
// imprimiranonima
const encabezadoConsola = function(){
    let titulo = "AÑO\t\t Inversion";
    console.log(titulo)
    console.log("-".repeat(titulo.length + 3));
}
//funcion fecha
const cuerpoConsola = (año, valor) => console.log(`${año}\t\t $ ${valor}`);
const pieConsola = () => console.log("-".repeat(20));
//----------------------------------

// Imprimir en pantalla-----------------
function encabezadoWEB(){
    document.write(`<table border="1" width=45%>
    <tr> 
    <th>Año</th>  
    <th>Inversion</th>
     </tr>`);
}
//funcion flecha
const pieWEB =() => document.write("</table")

const cuerpoWEB = function(year, inv){
    let background =  (year %2 == 0) ? 'white' : 'pink' ;
    let fila = `<tr style = 'background: ${background} '> 
                    <td style='text-align: center;'>${year} </td>
                    <td style='text-align: right;'>$${inv} </td>
                </tr> `;
    document.write(fila);
}
//--------------------------------------

//funcion nombrada 
function rendimiento(inversion, interes, tiempo) {
    encabezadoConsola();
    encabezadoWEB();
    for (let  i = 1; i<=tiempo; i++ ){
        let final = Number((inversion * (1 + interes)).toFixed(2));
        
       // console.log(`AÑO: ${i} - Rendimiento: ${final.toFixed(2)}`);
      // para objetos muestra los datos en fromato tabla  console.table(`AÑO: ${i}; Rendimiento: ${final.toFixed(2)}`);
      console.log(cuerpoConsola(i,final)); 
      cuerpoWEB(i, final);
      inversion = final; 
    }
    pieConsola();
    pieWEB();
}


let inversion = Number(prompt("valor de la inversion incial: ", 1000.00));
const INTERES = 0.05;
const TIEMPO = 10;

rendimiento(inversion, INTERES, TIEMPO);