const input = document.getElementById("miInput");

input.addEventListener("focus", function () {
    input.style.borderColor = "darkblue"; // Cambia el color del borde al enfocar
});

input.addEventListener("blur", function () {
    input.style.borderColor = ""; // Restaura el color original del borde al perder el foco
});