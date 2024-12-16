//llamar los datos del formulario
export function registroUsuario(){
    document.getElementById("formulario").addEventListener("submit", () => {
      const formData = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        edad: document.getElementById("edad").value,
        genero: document.getElementById("genero").value,
        usuario: document.getElementById("user").value,
        contraseña: document.getElementById("password").value,
      };
      localStorage.setItem("formData", JSON.stringify(formData));
      alert("datos guardados temporalmente");
    });

    //evitar que el formulario al enviarse se recargue
    document
      .getElementById("formulario")
      .addEventListener("submit", (event) => {
        event.preventDefault();
      });


}
