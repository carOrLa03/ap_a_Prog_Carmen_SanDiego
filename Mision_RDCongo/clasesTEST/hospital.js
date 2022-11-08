import Personal from "./clasesTEST/personal.js";

export default class Hospital {
  codPostal;
  nombre;
  localidad;
  responsable;
  personal;

  constructor(cp, nombre, localidad, responsable) {
    this.codPostal = cp;
    this.nombre = nombre;
    this.localidad = localidad;
    this.responsable = responsable;
    this.personal = new Set();
  }

  get nombre() {
    return this.nombre;
  }
  get localidad() {
    return this.localidad;
  }
  get responsable() {
    return this.responsable;
  }
  get codPostal() {
    return this.codPostal;
  }
  set setNombre(nombre) {
    this.nombre = nombre;
  }
  set setLocalidad(localidad) {
    this.localidad = localidad;
  }
  set setResponsable(jefe) {
    this.responsable = jefe;
  }
  set setCP(cp) {
    this.codPostal = cp;
  }
  // acciones de la lista de personal
  añadePersonal(nombreTrab, especialidadTrabj, ID) {
    let trabajador = new Personal(nombreTrab, especialidadTrabj, ID);
    if (!this.personal.has(trabajador)) {
      this.personal.add(trabajador);
      return `Trabajador insertado correctamente`;
    }
    return `El trabajador ya existe`;
  }
  mostrarTodoPersonal() {
    let cad = "";
    for (let trabajador of this.personal) {
      cad += `-------${trabajador.muestraDatos()} --------\n`;
    }
    return cad;
  }
  eliminaTrabajador(id) {
    for (let trabajador of this.personal) {
      if (trabajador.id === id) {
        this.personal.delete(trabajador);
        return `Trabajador eliminado`;
      }
    }
    return `El trabajador introducido no se ha podido eliminar`;
  }
  modificaTrabajador(dniTrabajador, categoria, x) {
    for (let trabajador of this.personal) {
      if (trabajador.id === dniTrabajador) {
        switch (categoria) {
          case "nombre":
            trabajador.nombre = x;
            break;
          case "especialidad":
            trabajador.especialidad = x;
            break;
          case "id":
            trabajador.id = x;
            break;

          default:
            break;
        }
        return `Trabajador modificado`;
      }
    }
    return `El trabajador no ha posido ser modificado`;
  }
  // AÑADIR,MOSTRAR, ELIMIANAR Y MODIFICAR LOS PACIENTES DE LOS PACIENTES DEL TRABAJADOR ELEGIDO DESDE HOSPITAL
  añadePacientesTrabajador(id, nombrep, tlfp, dni) {
    for (let trabajador of this.personal) {
      if (trabajador.id === id) {
        return trabajador.rellenaPacientes(nombrep, tlfp, dni);
      }
    }
  }
  muestraPacientesTrabajador(id) {
    for (let trabajador of this.personal) {
      if (trabajador.id === id) {
        return trabajador.mostrarPacientes();
      }
    }
  }

  eliminaPacienteTrabajador(id, dniPaciente) {
    for (let trabajador of this.personal) {
      if (trabajador.id === id) {
        return trabajador.eliminaPaciente(dniPaciente);
      }
    }
  }
  modificaPacienteTrabajador(id, dniPaciente, campoModifica, x) {
    for (let trabajador of this.personal) {
      if (trabajador.id === id) {
        return trabajador.modificaPaciente(dniPaciente, campoModifica, x);
      }
    }
  }

  mostrarHospital() {
    return `Hospital: ${this.nombre} Localidad: ${this.localidad} Director: ${this.responsable} Código Postal: ${this.codPostal}\n`;
  }
}
