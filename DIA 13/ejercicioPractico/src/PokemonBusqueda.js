export async function searchPokemon() {
  let nameP = document.getElementById("search").value.trim();
  const resultDIV = document.getElementById("result");
  resultDIV.innerHTML = "";
  try {
    const llamarApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameP}`);
    if (!llamarApi.ok) {
      throw new Error("error al cargar la api");
    }
    const data = await llamarApi.json();

    const content = document.createElement("div");
    content.innerHTML = `
                <div class="  w-64 p-4 bg-white shadow-md rounded">
                <h4> ${data.name} </h4>
                <img src="${data.sprites.front_default}">
                <p>Tipo: ${data.types
                  .map((type) => type.type.name)
                  .join(", ")}</p>
                <p>Peso: ${(data.weight / 10).toFixed(1)} kg</p>
                <p>Altura: ${(data.height / 10).toFixed(1)} m</p>
                </div>`;
    resultDIV.appendChild(content);
  } catch (error) {
    console.error("Error", error.message);
    alert("problemas en la busqueda");
  }
}
