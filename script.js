const form = document.getElementById("formulario");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const generoSeleccionado = document.querySelector('input[name="genero"]:checked');
    const genero = generoSeleccionado ? generoSeleccionado.value : "";
    const edad = document.getElementById("edad").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$/;
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTelefono = /^[0-9]{10}$/;
    const regexGenero = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (!regexNombre.test(nombre)) {
        alert("Nombre inválido");
        return;
    }

    if (!regexCorreo.test(correo)) {
        alert("Correo inválido");
        return;
    }

    if (!regexTelefono.test(telefono)) {
        alert("El teléfono debe tener 10 dígitos");
        return;
    }

    if (!regexGenero.test(genero)) {
        alert("Género inválido");
        return;
    }

    if (edad < 1 || edad > 100) {
        alert("Edad inválida");
        return;
    }

    if (mensaje.length < 10) {
        alert("El mensaje debe tener mínimo 10 caracteres");
        return;
    }
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

usuarios.push({
    nombre,
    correo,
    telefono,
    genero,
    edad: parseInt(edad),
    mensaje
});

localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Registro exitoso");

    window.location.href = "tabla.html";
});

function ir() {{
    window.location.href = "tabla.html";
}}