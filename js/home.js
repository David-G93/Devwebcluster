// Bloquear acceso si no está logueado
const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));
if (!usuario) {
    window.location.href = "login.html";
}

document.getElementById("bienvenida").textContent =
    "Hola, " + usuario.nombre + " 👋";

document.getElementById("btnCerrar").addEventListener("click", () => {
    localStorage.removeItem("usuarioLogueado");
    window.location.href = "index.html";
});

const lista = document.getElementById("listaPublicaciones");

document.getElementById("btnPublicar").addEventListener("click", () => {
    const texto = document.getElementById("textoPublicacion").value.trim();
    const error = document.getElementById("errorPubli");

    error.textContent = "";

    if (!texto) {
        error.textContent = "No podés publicar vacío.";
        return;
    }

    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = texto;

    lista.prepend(li);

    document.getElementById("textoPublicacion").value = "";
});
