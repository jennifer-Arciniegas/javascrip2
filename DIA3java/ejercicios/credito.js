// imprimir



// calculo de valores


function coutaAbono(monto, interes, pagos) {
  for (let i = 1; i <= pagos; i++) {
    let valorinicial = monto + interes;
    let interess = Number(monto + interes);

    let capital = Number(interess / pagos);
    let valor = Number(monto - capital);
    console.log(i, valorinicial, capital, interess);
  }
}

let montoInteres = 150000;
const INTERES = 0.12;
const NUPAGOS = 12;
coutaAbono(montoInteres, INTERES, NUPAGOS);
