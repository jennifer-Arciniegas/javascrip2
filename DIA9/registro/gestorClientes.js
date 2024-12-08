

export function registrar() {
  const formu = document.forms["formu"];
  const datosFormu = new FormData(formu);
  datosFormu.forEach((k, v) => console.log(k + "->" + v));
  const cliente = Object.fromEntries(datosFormu.entries());
  //const serialform = JSON.stringify(objFormu);
    console.log("clientes registrados" + cliente)
  //console.log(serialform);
}
