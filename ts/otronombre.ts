let formulario:any=document.getElementById("formulario");
let mensaje:any=document.getElementById("mensaje");
let rut:any=document.getElementById("rut")
formulario.addEventListener("submit",function(evento:any){
    
    formulario.style.display="none";
    mensaje.style.display="block";
    mensaje.innerHTML="Bienvenido";
    mensaje.style.color="#ff0000";
    evento.preventDefault();

 
 });
