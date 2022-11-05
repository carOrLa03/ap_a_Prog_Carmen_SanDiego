import Hospitales from "./hospitales.js";

const hs = new Hospitales();

// ACCIONES DEL FORMULARIO DE HOSPITAL
// botones del formulario hospital
const bAñadeH = document.getElementById("anadeH");
const bEliminaH = document.getElementById("eliminaH");
const bModificaH = document.getElementById("modificaH");
const bMuestraH = document.getElementById("muestraH");
const formularioHosp = document.getElementById("formHospital");

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
  const fragment = document.createDocumentFragment();
  fragment.appendChild(hs.mostrarHospitales());
  cajaHp.appendChild(fragment);
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
// si hago un clic aparece el formulario, si le doy 2 clics desaparece el formulario
const bAnadeTS = document.getElementById("anadeTS");
const formTrabajadores = document.getElementById("formTrabajadores");

bAnadeTS.addEventListener("click", (e) => {
  e.preventDefault();
  formTrabajadores.classList.remove("hidden");
});
bAnadeTS.addEventListener("dblclick", (e) => {
  e.preventDefault();
  formTrabajadores.classList.add("hidden");
});

// variables de botones para tratar los datos de los trabajadores
const bAnadeTRA = document.getElementById("anadeT");
const bEliminaTRA = document.getElementById("eliminaT");
const bMuestraTRA = document.getElementById("muestraT");

bAnadeTRA.addEventListener("click", (e) => {
  e.preventDefault();
  var idhosp = document.getElementById("idHosp").value;
  var idTra = document.getElementById("idT").value;
  var nomTra = document.getElementById("nomT").value;
  var especialidad = document.getElementById("opcion").value;
  hs.añadirTrabajadoresHospital(idhosp, nomTra, especialidad, idTra);

  // para vaciar el formulario tras añadir un nuevo trabajador
  formTrabajadores.reset();
});
bEliminaTRA.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("elimina");
  var idH = document.getElementById("idHosp").value;
  var idTra = document.getElementById("idT").value;
  hs.eliminaTrabajadoresHospital(idH, idTra);
});

// variables necesarias para modificar al trabajador escogido
const bModificaTRA = document.getElementById("modificaT");
const formmodTRA = document.getElementById("formModificatra");
const bmodif = document.getElementById("modif");
bModificaTRA.addEventListener("click", (e) => {
  e.preventDefault();
  formmodTRA.classList.remove("hidden");
});

bmodif.addEventListener("click", (e) => {
  e.preventDefault();
  let idhospi = document.getElementById("idhospi").value;
  let idtra = document.getElementById("idtrab").value;
  let opcion = document.getElementById("opcionModificada").value;
  let x = document.getElementById("text").value;

  hs.modificaTrabajadoresHospital(idhospi, idtra, opcion, x);
  formmodTRA.classList.add("hidden");
});
bMuestraTRA.addEventListener("click", (e) => {
  e.preventDefault();
  const cajaTrabajadores = document.getElementById("mostrarTrab");
  var idHosp = document.getElementById("idHosp").value;
  const fragment = document.createDocumentFragment();
  fragment.appendChild(hs.muestraTrabajadoresHospital(idHosp));

  cajaTrabajadores.appendChild(fragment);
});

// AÑADIR PACIENTES A UN TRABAJADOR y mostrar el formulario de pacientes
// si hago un clic aparece el formulario, si le doy 2 clics desaparece el formulario
const bAnadePacientes = document.getElementById("anadePC");
const formPacientes = document.getElementById("formPacientes");

bAnadePacientes.addEventListener("click", (e) => {
  e.preventDefault();
  formPacientes.classList.remove("hidden");
});
bAnadePacientes.addEventListener("dblclick", (e) => {
  e.preventDefault();
  formPacientes.classList.add("hidden");
});

// variables de botones para tratar los datos de los trabajadores
const bAnadePAC = document.getElementById("anadeP");
const bEliminaPAC = document.getElementById("eliminaP");
const bMuestraPAC = document.getElementById("muestraP");

bAnadePAC.addEventListener("click", (e) => {
  e.preventDefault();
  let idHospital = document.getElementById("idHospital").value;
  let idTrabajador = document.getElementById("idTrabajador").value;
  let idPAC = document.getElementById("idP").value;
  let nomPAC = document.getElementById("nomP").value;
  let tlfPAC = document.getElementById("telP").value;
  hs.anadePacdeTrabajadorHospital(
    idHospital,
    idTrabajador,
    nomPAC,
    tlfPAC,
    idPAC
  );
  formPacientes.reset();
});
bEliminaPAC.addEventListener("click", (e) => {
  e.preventDefault();
  let idHospital = document.getElementById("idHospital").value;
  let idTrabajador = document.getElementById("idTrabajador").value;
  let idPAC = document.getElementById("idP").value;
  hs.eliminaPacdeTrabajadorHospital(idHospital, idTrabajador, idPAC);
  formPacientes.reset();
});
bMuestraPAC.addEventListener("click", (e) => {
  e.preventDefault();
  const cajaPacientes = document.getElementById("mostrarPAC");
  ("");
  const div = document.createElement("div");
  let idHospital = document.getElementById("idHospital").value;
  let idTrabajador = document.getElementById("idTrabajador").value;
  div.textContent = hs.muestraPacdeTrabajadorHospital(idHospital, idTrabajador);
  cajaPacientes.appendChild(div);
});

// boton para modificar el paciente en el que aparecera un nuevo formulario
const bModificaPAC = document.getElementById("modificaP");
const formModPAC = document.getElementById("formModificaPAC");

bModificaPAC.addEventListener("click", (e) => {
  e.preventDefault();
  formModPAC.classList.remove("hidden");
});

const bmodifNow = document.getElementById("modifNOW");
bmodifNow.addEventListener("click", (e) => {
  e.preventDefault();
  let idH = document.getElementById("idHOS").value;
  let idT = document.getElementById("idTRA").value;
  let idPAC = document.getElementById("idPAC").value;
  let opcion = document.getElementById("opcionModificar").value;
  let x = document.getElementById("campo").value;
  hs.modificaPacdeTrabajadorHospital(idH, idT, idPAC, opcion, x);

  formModPAC.classList.add("hidden");
  formModPAC.reset();
});
