const container = document.querySelector(".container");
const contador = document.getElementById("contador");

let varContador = 0;

container.addEventListener("click", evento => {
  // programe SOLO AQUI
  if (evento.target.classList[1] == "btn-info") {
    contador.innerText = ++varContador;
  }else{
    contador.innerText=  --varContador;
  }

});

document.body.addEventListener("click", () => { console.log("click"); });