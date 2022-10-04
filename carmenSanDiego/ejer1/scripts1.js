  
var nombre = document.getElementById('nombre');
var apellidos = document.getAnimations('apellidos');
var fecha = document.getElementById('nacimiento');
var userName = nombre.slice(0,1) + apellidos.slice(0,apellidos.length())+ fecha.slice(fecha.length()-2);


  function escribe() {
    let escribir = document.getElementById("caja")
    let miNombre = "<p> Nombre: " + nombre + "</p>"
    let miApellido = "<p> Apellido: "+ apellidos + "<p>"
    let miFecha = "<p> Fecha de Nacimiento: " + fecha + "</p>"
    let miUsername = "<p> User name:" +  username + "<p>"
    escribir.innerHTML = miNombre + miApellido + miFecha + miUsername;
    }
window.onload = function() {
document.form.Enviar.click = escribe()
}
