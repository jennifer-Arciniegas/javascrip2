//llamar los datos del formulario
export function registroUsuario() {
  const formulario = document.getElementById("formulario");
  if (formulario) {
    formulario.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        edad: document.getElementById("edad").value,
        genero: document.getElementById("genero").value,
        usuario: document.getElementById("user").value,
        contraseña: document.getElementById("password").value,
      };
      localStorage.setItem("formData", JSON.stringify(formData));
      alert("Datos guardados temporalmente");
    });
  }
}

