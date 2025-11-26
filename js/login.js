document.getElementById("formLogin").addEventListener("submit", function(e) {
    e.preventDefault();

    const datoLogin = document.getElementById("datoLogin").value.trim();
    const passwordLogin = document.getElementById("passwordLogin").value.trim();

    const error = document.getElementById("errorLogin");
    error.textContent = "";

    const usuarioGuardado = JSON.parse(localStorage.getItem("usuarioRegistrado"));

    if (!usuarioGuardado) {
        error.textContent = "No hay usuarios registrados.";
        return;
    }

    if (
        (datoLogin === usuarioGuardado.email || datoLogin === usuarioGuardado.usuario) &&
        passwordLogin === usuarioGuardado.password
    ) {
        localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioGuardado));
        window.location.href = "home.html";
    } else {
        error.textContent = "Usuario o contraseña incorrectos.";
    }
});
