import Hospitales from "./hospitales.js";

const hs = new Hospitales();

// ACCIONES DEL FORMULARIO DE HOSPITAL
// botones del formulario hospital
const bAñadeH = document.getElementById("anadeH");
const bEliminaH = document.getElementById("eliminaH");
const bModificaH = document.getElementById("modificaH");
const bMuestraH = document.getElementById("muestraH");
const formularioHosp = document.getElementById('formHospital')

bAñadeH.addEventListener("click", (e) => {
  e.preventDefault();
  var idHS = document.getElementById("idH").value;
  var nomHS = document.getElementById("nomH").value;
  var localHS = document.getElementById("localidad").value;
  var respHS = document.getElementById("responsable").value;
  hs.añadeHospitales(idHS, nomHS, localHS, respHS);

  // para vaciar el formulario tras añadir un nuevo hospital
  formularioHosp.reset();
});
bMuestraH.addEventListener("click", (e) => {
  e.preventDefault();
  const cajaHp = document.getElementById("mostrarHosp");
  const div = document.createElement("div");
  div.textContent = hs.mostrarHospitales();
  cajaHp.appendChild(div);
});
bEliminaH.addEventListener("click", (e) => {
  e.preventDefault();
  let idHS = document.getElementById("idH").value;
  hs.eliminaHospitales(idHS);
});

// CUANDO SE HAGA CLICK EN "MODIFICA" APARECERÁ UN NUEVO FORMULARIO CON LOS CAMPOS A CAMBIAR Y DEBERÁ DESAPARECER CUANDO SE HAGA CLICK EN EL BOTON DE "MODIFICA AHORA"
const formModifica = document.getElementById("formModifica");
const modifica = document.getElementById("mod");
bModificaH.addEventListener("click", (e) => {
  e.preventDefault();
  formModifica.classList.add("formModifica");
  formModifica.classList.remove("hidden");
});

modifica.addEventListener("click", (e) => {
  e.preventDefault();
  let codigo = document.getElementById("id").value;
  let categoria = document.getElementById("opcionMod").value;
  let x = document.getElementById("texto").value;
  hs.modificaHosp(codigo, categoria, x);
  formModifica.classList.remove("formModifica");
  formModifica.classList.add("hidden");

});
//  AÑADIR LOS TRABAJADORES A UN HOSPITAL y mostrar el formulario de trabajadores
const bAnadeTS = document.getElementById("anadeTS");
const formTrabajadores = document.getElementById("formTrabajadores")

bAnadeTS.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('añadiendo')
  formTrabajadores.classList.remove("hidden");
})
bAnadeTS.addEventListener('dblclick', (e) => {
  e.preventDefault()
  formTrabajadores.classList.add("hidden");
})

// variables para tratar los datos de los trabajadores
const bAnadeTRA = document.getElementById('anadeT')
const bEliminaTRA = document.getElementById('eliminaT')
const bModificaTRA = document.getElementById('modificaT')
const bMuestraTRA = document.getElementById('muestraT')

bAnadeTRA.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('añadiendo')
  var idhosp = document.getElementById('idH').value
  var idTra = document.getElementById('idT').value
  var nomTra = document.getElementById('nomT').value
  var especialidad = document.getElementById('opcion').value
  console.log('especialidad')
  hs.añadirTrabajadoresHospital(idhosp, nomTra, especialidad, idTra)

  // para vaciar el formulario tras añadir un nuevo trabajador
  formTrabajadores.reset();
})
bEliminaTRA.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('elimina')
  var idH = document.getElementById('idH').value
  var idTra = document.getElementById('idT').value
  hs.eliminaTrabajadoresHospital(idH, idTra)
})
bModificaTRA.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('modificando')
})
bMuestraTRA.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('mostrando')
  const cajaTrabajadores = document.getElementById("mostrarTrab");
  const div = document.createElement("div");
  var idH = document.getElementById('idH').value

  div.textContent = hs.muestraTrabajadoresHospital(idH);
  cajaTrabajadores.appendChild(div);


})


// AÑADIR PACIENTES A UN TRABAJADOR y mostrar el formulario de pacientes
const bAnadePacientes = document.getElementById("anadePC")
const formPacientes = document.getElementById("formPacientes")
bAnadePacientes.addEventListener('click', (e) => {
  e.preventDefault()
  formPacientes.classList.remove("hidden");
})
bAnadePacientes.addEventListener('dblclick', (e) => {
  e.preventDefault()
  formPacientes.classList.add("hidden");
})
