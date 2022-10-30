import Hospitales from "./hospitales.js";

const hs = new Hospitales();
// ACCIONES DEL FORMULARIO DE HOSPITAL

const bAñadeH = document.getElementById("anadeH");
const bEliminaH = document.getElementById("eliminaH");
const bModificaH = document.getElementById("modificaH");
const bMuestraH = document.getElementById("muestraH");
const bAñadeTS = document.getElementById("anadeTS");

bAñadeH.addEventListener("click", (e) => {
  e.preventDefault();
  var idHS = document.getElementById("idH").value;
  var nomHS = document.getElementById("nomH").value;
  var localHS = document.getElementById("localidad").value;
  var respHS = document.getElementById("responsable").value;
  hs.añadeHospitales(idHS, nomHS, localHS, respHS);
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
