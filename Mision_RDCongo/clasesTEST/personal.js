// import Paciente from "./clasesTEST/paciente.js";
// export default
class Personal {
  nombre;
  especialidad;
  id;
  pacientes;
  constructor(nom, especialidad, id) {
    this.nombre = nom;
    this.especialidad = especialidad;
    this.id = id;
    this.pacientes = new Set();
  }

  get getID() {
    return this.id;
  }
  set setId(id) {
    this.id = id;
  }
  get getNombre() {
    return this.nombre;
  }
  get getEspecialidad() {
    return this.especialidad;
  }
  set setNombre(nom) {
    this.nombre = nom;
  }
  set setEspecialidad(especialidad) {
    this.especialidad = especialidad;
  }

  rellenaPacientes(nomPaciente, tlfpaciente, dni) {
    let paciente = new Paciente(nomPaciente, tlfpaciente, dni);
    if (!this.pacientes.has(paciente)) {
      this.pacientes.add(paciente);
      return `Paciente insertado correctamente`;
    }
    return `El paciente ya existe`;
  }
  mostrarPacientes() {
    let cad = "";
    for (let paciente of this.pacientes) {
      cad += `-------${paciente.muestraDatos()} --------\n`;
    }
    return cad;
  }
  eliminaPaciente(dni) {
    for (let paciente of this.pacientes) {
      if (paciente.dni === dni) {
        this.pacientes.delete(paciente);
        return `Paciente eliminado`;
      }
    }
    return `El paciente introducido no se ha podido eliminar`;
  }
  modificaPaciente(dni, campoModifica, x) {
    for (let paciente of this.pacientes) {
      if (paciente.dni === dni) {
        switch (campoModifica) {
          case "nombre":
            paciente.nombre = x;
            break;
          case "telefono":
            paciente.tlf = x;
            break;
          case "dni":
            paciente.dni = x;
            break;

          default:
            break;
        }
        return `Paciente modificado`;
      }
    }
    return `Paciente no ha posido ser modificado`;
  }

  muestraDatos() {
    return `ID Trabajador: ${this.id}\n Nombre: ${this.nombre}\n Especialidad: ${this.especialidad}\n`;
  }
}
module.export = Personal;
