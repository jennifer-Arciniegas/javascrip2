export default function mostrarJson(eleMHTML){
    console.log("funcion MostrarJson");
    fetch("datos.json")
    .then((respuesta) => respuesta.json())
    .then(datos => {
        console.table(datos);
        dibujarfilas(eleMHTML,datos);
        
    })
    .catch((error)=>{
        console.error("el error en el consumo del json", error.message)

    })
    .finally(()=> console.log("se ha consumido todo el json"))
}

function dibujarfilas(eleMHTML, datos){
    let tabla = "";
    for(let dato of datos){
        tabla +=`
        <tr>
            <td>${dato.nombre} </td>
            <td>${dato.Team} </td>
            <td class="valedad">${dato.Edad} </td>
            <td class="tdimg">
                <img src=${dato.Sexo === "F" ? "mujer.png": "hombre.png"} class="imagesexo" </td>
            </tr>`
    }
    eleMHTML.innerHTML= tabla; //seguuir pintando  la tabla
}