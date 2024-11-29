// imprimir desde la pantalla.
// tabla grande---------------
function encabezadoWEB(){
  document.write(`<table border="1" width= 45% style="margin: 20px auto;", "">
                  <tr> 
                  <th> Mes </th>
                  <th> Valor </th>
                  <th> Valor Total </th>
                  <th> Capital </th>
                  <th> Interes </th>
                  <th> Total </th>
                  </tr>`);
}

const cuerpoWEB = function(i, saldo, VALORTOTAL, INTMENSUAL, CAPITAL, CUOTAFIJA ){
  let fila = `<tr> 
                <td>${i} </td>
                <td>${saldo} </td>
                <td>${VALORTOTAL} </td>
                <td>${INTMENSUAL} </td>
                <td>${CAPITAL} </td>
                <td>${CUOTAFIJA} </td>

              </tr>`;
  document.write(fila);
}

const pieWEB =() => document.write("</table>")
//------------------------------------------------------------------

const cuerpoWEBtablita = function(monto, inte, pagos, VALORTOTALFINAL, CUOTAFIJA){
  let filita = ` <table  border="1" width = "45%"  style="margin: 20px;", style= "align-items: flex-start">
                  <tr>
                    <th>Monto del credito </th>
                    <td>${monto}</td>
                  </tr>
                  <tr>
                    <th>Tasa interes (anual):</th>
                    <td>${inte}</td>
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
  const INTMENSUAL = (monto * inte) / 12;
  const CAPITAL = monto / pagos;
  const CUOTAFIJA = INTMENSUAL + CAPITAL;
  let saldo = monto;
  console.log("Mes | Valor Inicial | Valor Total | Capital | Interés | Total");

  for (let i = 1; i <= pagos; i++) {
    const VALORTOTAL = saldo + saldo * inte;
    console.log(i, saldo, VALORTOTAL, INTMENSUAL, CAPITAL, CUOTAFIJA);
    cuerpoWEB(i, saldo, VALORTOTAL, INTMENSUAL, CAPITAL, CUOTAFIJA);
 //   cuerpoWEBtablita(monto, inte, pagos, VALORTOTAL, CUOTAFIJA);
    saldo -= CAPITAL; //actualiza el valor del saldo
    VALORTOTALFINAL = VALORTOTAL;
    // console.log(i, saldo, valortotal, interesMensual, capital, total);
  }
  pieWEB();
  cuerpoWEBtablita(monto, inte, pagos, VALORTOTALFINAL, CUOTAFIJA);

}

let montoInteres = 150000;
const INTERES = 0.12;
const NUPAGOS = 12;
coutaAbono(montoInteres, INTERES, NUPAGOS);
