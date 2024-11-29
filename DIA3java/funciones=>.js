// FUNCIONES FLECHA
/*const sumar = (a, b) => {
    return a + b;
*/


const functionflecha = (cad) => {
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
//para devolver cadena
const msgespalindrome =(cad) =>
 functionflecha(cad) ? "es palindrome" : "no es palindrome";

let cad = "ana";

cad = "reconocer";
console.log(functionflecha(cad) ? "es palindrome" : "no es palindrome");
console.log(msgespalindrome(cad));