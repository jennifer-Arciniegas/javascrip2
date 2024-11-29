//funcion expresiva o anonima

const funcanonima = function (cad) {
  let lcad = cad.length - 1;

  for (let i = 0; i <= lcad / 2; i++) {
    let lini = cad[i];
    let fin = cad[lcad - i];

    if (lini !== fin) {
      return false;
    }
  }
  return true;
};
let cad = "ana";

cad = "reconocer";
console.log(funcanonima(cad) ? "es palindrome" : "no es palindrome");