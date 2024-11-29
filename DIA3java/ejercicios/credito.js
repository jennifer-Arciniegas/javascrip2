// imprimir desde la pantalla.
// tabla grande---------------
function encabezadoWEB(){
  document.write(`<table border="1" width= 45% style="margin: 20px auto;">
                  <tr> 
                  <th> Mes </th>
                  <th> Valor </th>
                  <th> Valor Total </th>
                  <th> Capital </th>
                  <th> Interes </th>
                  <th> Total </th>
                  </tr>`);
}

const cuerpoWEB = function(i, saldo, VALORTOTAL, CAPITAL, INTMENSUAL, CUOTAFIJA ){
  let fila = `<tr> 
                <td>${i} </td>
                <td>${saldo} </td>
                <td>${VALORTOTAL} </td>
                <td>${CAPITAL} </td>
                <td>${INTMENSUAL} </td>
                <td>${CUOTAFIJA} </td>
                

              </tr>`;
  document.write(fila);
}

const pieWEB =() => document.write("</table>")
//------------------------------------------------------------------

const cuerpoWEBtablita = function(monto, inte, pagos, VALORTOTALFINAL, CUOTAFIJA){
  let filita = ` <table  border="1" width = "25%" style= "margin-bottom: auto" >
                  <tr>
                    <th>Monto del credito </th>
                    <td>${Number(monto).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <th>Tasa interes (anual):</th>
                    <td>${(inte)*100}%</td>
                  </tr>
                  <tr>
                    <th> Numero de pagos (mensuales): </th>
                    <td> ${pagos}</td>
                  </tr>
                  <tr>
                    <th>Valor Total: </th>
                    <td> ${VALORTOTALFINAL}</td>
                  </tr>
                  <tr>
                    <th> Valor mensual: </th>
                    <td> ${CUOTAFIJA}</td>
                  </tr>
                </table>

                  `;
  document.write(filita);
}

// calculo de valores
function coutaAbono(monto, inte, pagos) {
  encabezadoWEB();
  const INTMENSUAL = (Number(monto * inte) / 12).toFixed(2);
  const CAPITAL = Number(monto / pagos).toFixed(2);
  const CUOTAFIJA = Number(INTMENSUAL +  Number(CAPITAL)).toFixed(2);
  VALORTOTALFINAL = Number(monto + monto * inte).toFixed(2);

  let saldo = Number(monto).toFixed(2);
  console.log("Mes | Valor Inicial | Valor Total | Capital | Interés | Total");

  for (let i = 1; i <= pagos; i++) {
    const VALORTOTAL = Number(saldo + saldo * inte).toFixed(2);
    console.log(i, saldo, VALORTOTAL, CAPITAL, INTMENSUAL, CUOTAFIJA);
    cuerpoWEB(i, saldo, VALORTOTAL, CAPITAL, INTMENSUAL, CUOTAFIJA);

 //   cuerpoWEBtablita(monto, inte, pagos, VALORTOTAL, CUOTAFIJA);
    saldo -= CAPITAL; //actualiza el valor del saldo
    saldo = Number(saldo).toFixed(2);
   
    // console.log(i, saldo, valortotal, interesMensual, capital, total);
  }
  pieWEB();
  cuerpoWEBtablita(monto, inte, pagos, VALORTOTALFINAL, CUOTAFIJA);

}

let montoInteres = Number(prompt("ingrese el monto:"));
const INTERES = 0.12;
const NUPAGOS = 12;
coutaAbono(montoInteres, INTERES, NUPAGOS);
