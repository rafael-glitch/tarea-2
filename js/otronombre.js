"use strict";
var formulario = document.getElementById("formulario");
var mensaje = document.getElementById("mensaje");
var rut = document.getElementById("rut");
formulario.addEventListener("submit", function (evento) {
    formulario.style.display = "none";
    mensaje.style.display = "block";
    mensaje.innerHTML = "Bienvenido";
    mensaje.style.color = "#ff0000";
    evento.preventDefault();
});
