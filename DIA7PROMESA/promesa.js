// crear promesa
const miPromesa = new Promise ((resolve, reject)=> {
    const exito = false;
    if (exito){
        console.log("esperando");
        setTimeout(()=>{
            resolve("valor que devuelve la promesa")
        }, 5000 );

    } else{
        reject("hubo un error en la operacion")
    }
})
//correr
console.log("INICIO");
miPromesa
    .then(res => {
        console.warn("no hubo error en la promesa");
      console.log(res)
    })

    .catch(res => {
        console.log("Error en la promesa");
        console.log(res);
    })

    console.log("FIN");
