var userName = "";  ñ
var nombre = document.getElementById('nombre');
var apellidos = document.getAnimations('apellido');
var fecha = document.getElementById('nacimiento');


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener('submit', validarFormulario); 
  });

  function crearNomUsuario(e){
    e.preventDefault();
    userName = nombre.slice(0,1) + apellidos.slice(0,apellidos.length())+ fecha.slice(fecha.length()-2);
    userName.toLowerCase();
    document.write("Nombre: "+ nombre);
    document.write("Apellido: "+ apellidos);
    document.write("Fecha de Nacimiento: "+ fecha);
    document.write("User name: "+ userName);

  }

//   function imprimirDatos(){
//     document.write("Nombre: "+ nombre)
//     document.write("Apellido: "+ apellidos)
//     document.write("Fecha de Nacimiento: "+ fecha)
//     document.write("User name: "+ userName)
//   }