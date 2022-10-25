import Personal from "./Personal.js";
import Paciente from "./Paciente.js";

var personal = new Personal("pepe", "medico");
console.log(personal.muestraDatos());

var paciente1 = new Paciente("carmen", 962502455, "7357770J");
console.log(paciente1.muestraDatos());

class Hospital {
  nombre;
  localidad;
  responsable;
  personal;
  pacientes;

  constructor(nom, localidad, director) {
    this.nombre = nom;
    this.localidad = localidad;
    this.responsable = director;
    this.personal = new Set();
    this.pacientes = new Set();
  }
  // acciones de la lista de personal
  añadePersonal(nombreTrabajador, especialidadTrabj) {
    let trabajador = new Personal(nombreTrabajador, especialidadTrabj);
    if (!this.personal.has(trabajador)) {
      this.personal.add(trabajador);
      return alert(`Trabajador insertado correctamente`);
    }
    return alert(`El trabajador ya existe`);
  }
  mostrarTodoPersonal() {
    $cad = "";
    for (let trabajador of this.personal) {
      $cad += `${trabajador.muestraTrabajador()} \n----------------------------------- \n`;
    }
    return $cad;
  }
  // acciones de la lista pacientes
  añadePacientes(nomPaciente, dniPaciente, especialistaPaciente, tlfpaciente) {
    let paciente = new Paciente(
      nomPaciente,
      tlfpaciente,
      dniPaciente,
      especialistaPaciente
    );
    if (!this.pacientes.has(paciente)) {
      this.pacientes.add(paciente);
      return alert(`Paciente insertado correctamente`);
    }
    return alert(`El paciente ya existe`);
  }
}

var newHospital = new Hospital(
  "Hospital el Congo",
  "Congo",
  "Manolito Gafotas"
);
newHospital.añadePersonal("pepe", "medico");
console.log(newHospital.mostrarTodoPersonal());
