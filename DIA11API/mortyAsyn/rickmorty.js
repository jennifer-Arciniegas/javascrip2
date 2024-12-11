let titulo = document.querySelector("h1");
titulo.style.textAlign = "center";
let personajes = document.querySelector("main");
personajes.style.display = "grid";
personajes.style.gridTemplateRows = "repeat(2, 1fr)";
personajes.style.gridTemplateColumns = "repeat(3, 1fr)";
personajes.style.gap = "16px";

async function mostrar() {
  try {
    //se hace la llamada al API
    const llamarAPI = await fetch("https://rickandmortyapi.com/api/character");
    if (!llamarAPI.ok) {
      throw new Error("problemas con la API");
    }
    const info = await llamarAPI.json();
    console.log(info.results);
    info.results.map((item) => {
      info.results.slice(0, 6).forEach((item) => {
        const content = document.createElement("div");
        content.style.border = "1px solid black";
        content.style.width = "22vw";
        content.style.padding = "3%";
        content.style.textAlign = "left";
        content.innerHTML = `
                <img src="${item.image}">
                <h2> ${item.name}</h2>
                <p> ${item.status} </p>
            `;
            personajes.append(content);
      });
    });
  } catch (error) {
    console.error("Error", error.message);
    alert("problemas en la busqueda");
  }
}
console.log(mostrar());
