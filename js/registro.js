document.getElementById("formRegistro").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const usuario = document.getElementById("usuario").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const password2 = document.getElementById("password2").value.trim();

    const errores = document.getElementById("errores");
    const exito = document.getElementById("exito");
    errores.textContent = "";
    exito.textContent = "";

    if (!nombre || !usuario || !email || !password || !password2) {
        errores.textContent = "Todos los campos son obligatorios.";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        errores.textContent = "El email no es válido.";
        return;
    }

    if (password.length < 4) {
        errores.textContent = "La contraseña debe tener al menos 4 caracteres.";
        return;
    }

    if (password !== password2) {
        errores.textContent = "Las contraseñas no coinciden.";
        return;
    }

    const usuarioObj = {
        nombre,
        usuario,
        email,
        password
    };

    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioObj));

    exito.textContent = "Registro exitoso. Redirigiendo...";
    setTimeout(() => {
        window.location.href = "login.html";
    }, 1500);
});
