function espalindrome(cad) {
  let lcad = cad.length - 1;

  for (let i = 0; i <= lcad / 2; i++) {
    let lini = cad[i];
    let fin = cad[lcad - i];

    if (lini !== fin) {
      return false;
    }
  }
  return true;
}
let cad = "ana";

console.log(espalindrome(cad) ? "es palindrome" : "no es palindrome");
