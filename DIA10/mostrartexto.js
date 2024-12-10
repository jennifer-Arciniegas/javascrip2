export default function mostrartexto(eleMHTML){
    console.log("funcion MostrarTexto");
    fetch("datos.csv")
    .then(response => response.text())
    .then(data =>{
        console.table(data);
        eleMHTML.innerHTML = data
    })
    .catch(error => console.error("error en la peticion del archivo \n", error.message))
    .finally(()=>
    console.log("ha terminado el consumo del api por parte del fecht")
    )

}

