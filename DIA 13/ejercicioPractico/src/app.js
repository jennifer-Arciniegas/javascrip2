import { registroUsuario } from "./registro.js";
import { searchPokemon } from "./PokemonBusqueda.js";

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname;

  if (currentPage.includes("index.html") || currentPage === "/") {
    // Configuración para la página principal
    const searchButton = document.getElementById("searchButton");
    if (searchButton) {
      searchButton.addEventListener("click", searchPokemon);
    }
  } else if (currentPage.includes("registro.html")) {
    // Configuración para la página de registro
    registroUsuario();
  }
});
