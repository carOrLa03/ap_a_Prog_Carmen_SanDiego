const form = document.getElementById('form');
// form.addEventListener("submit", (e)=>{
//   e.preventDefault();

//   const nombre = document.getElementById('nombre').value;
//   const apellidos = document.getAnimations('apellidos').value;
//   const fecha = document.getElementById('nacimiento').value;
//   const userName = nombre.slice(0,1) + apellidos.slice(0,apellidos.length())+ fecha.slice(fecha.length()-2);
  
//   const caja = document.getElementById("caja")
//   const miNombre = "<p> Nombre: " + nombre + "</p>"
//   const miApellido = "<p> Apellido: "+ apellidos + "<p>"
//   const miFecha = "<p> Fecha de Nacimiento: " + fecha + "</p>"
//   const miUsername = "<p> User name:" +  userName + "<p>"
  
//   caja.innerHTML = miNombre + miApellido + miFecha + miUsername;
// });

form.addEventListener("click", escribe);
function escribe(e){
  e.preventDefault();
  const nombre = document.getElementById('nombre');
  const apellidos = document.getElementById('apellidos');
  const fecha = document.getElementById('nacimiento');
  const userName = nombre.slice(0,1) + apellidos.slice(0,apellidos.length())+ fecha.slice(fecha.length()-2);
  
  const caja = document.getElementById("caja")
  const miNombre = "<p> Nombre: " + nombre + "</p>"
  const miApellido = "<p> Apellido: "+ apellidos + "<p>"
  const miFecha = "<p> Fecha de Nacimiento: " + fecha + "</p>"
  const miUsername = "<p> User name:" +  userName + "<p>"
  
  caja.innerHTML = miNombre + miApellido + miFecha + miUsername;
}


