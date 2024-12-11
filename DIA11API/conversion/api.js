async function convertir() {
    try{
        const euros = document.getElementById("euros");
        const dolars = document.getElementById("dolars");
        const euro = parseInt(euros.value);

        //validacion de entrada
        if (isNaN(euro) || euro<= 0){
            alert("ingrese un valor adecuado");
        }

        const llamarapi = await fetch("https://cdn.dinero.today/api/latest.json");
        if(!llamarapi.ok){
            throw new Error("problemas con la API");
        }

        const dato = await llamarapi.json();
       // const dolar = dato.rates.USD; al usarse una tasa no tendriamos que llamar el atributo del objeto
        const tasaFija = 2;// se usa una tasa fija para responder a las necesidades del ejercicios
        const resultDolar = euro * tasaFija; //en ves de 

        dolars.value = resultDolar;

    }
    catch(error){
        console.error("ERROR", error.message);
        alert("problemas con la conversion");

    }
}
document.getElementById("conversion");
document.addEventListener("submit", async (event) =>{
    event.preventDefault();//evita que recarge la pagina en el procesameinto
    await convertir(); //espera que la funcion se resuelva
});