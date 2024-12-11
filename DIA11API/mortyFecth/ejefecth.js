let titulo = document.querySelector("h1")
titulo.style.textAlign="center"
let personajes = document.querySelector("main");
personajes.style.display ="grid"
personajes.style.gridTemplateRows = "repeat(2, 1fr)";
personajes.style.gridTemplateColumns = "repeat(3, 1fr)"
personajes.style.gap = "16px"




fetch("https://rickandmortyapi.com/api/character")
.then((resp)=>resp.json())
.then((data)=>{
    console.log(data.results)
    
    data.results.slice(0, 6).map((item)=>{
        const content = document.createElement("div")
        content.style.border = "1px solid black"
        content.style.width = "22vw"
        content.style.padding = "3%"
        content.style.textAlign ="left"
        
        content.innerHTML=
        `
        <img src="${item.image}">
        <h2> ${item.name}</h2>
        <p> ${item.status} </p>
        `;
        personajes.append(content);
        
    })
})