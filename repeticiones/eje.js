let str = "campus lands";
//recorrer la cadena con for 
/*for (let i=0; i < str.length; i++) {
  let letra = str[i];
  console.log(letra);
}
*/
// recorer la cadena for ...of
/* 
for (let letra of str) {
    console.log(letra);
    
}*/
//
/*
for (let i=0; i < str.length; i++) {
  let letra = str[i];
  
  if (letra === "a") break;
  console.log(letra);
}
*/
let vocales = "aeiou";
for (let i = 0; i < str.length; i++) {
  let letra = str[i];

  if (vocales.indexOf(letra)) continue;
  console.log(letra);
}