let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

let tabla = document.getElementById("tablausuarios");

usuarios.forEach(u => {
    let fila = `
        <tr>
            <td>${u.nombre}</td>
            <td>${u.correo}</td>
            <td>${u.telefono}</td>
            <td>${u.genero}</td>
            <td>${u.edad}</td>
            <td>${u.mensaje}</td>
        </tr>
    `;

    tabla.innerHTML += fila;
});