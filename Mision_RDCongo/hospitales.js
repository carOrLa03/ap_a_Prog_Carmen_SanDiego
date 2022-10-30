import Hospital from "./hospital.js";

export default class Hospitales {
  listHosp;
  constructor() {
    this.listHosp = new Set();
  }

  añadeHospitales(codigo, nombre, localidad, jefe) {
    let hosp = new Hospital(codigo, nombre, localidad, jefe);
    this.listHosp.add(hosp);
    return alert(`Hospital añadido`);
  }
  eliminaHospitales(codigo) {
    for (let hosp of this.listHosp) {
      if (hosp.codPostal === codigo) {
        this.listHosp.delete(hosp);
        return alert(`Hospital eliminado`);
      }
    }
    return alert(`El Hospital introducido no se ha podido eliminar`);
  }
  mostrarHospitales() {
    const div = document.createElement("div");
    for (let h of this.listHosp) {
      let p = document.createElement("p");
      let br = document.createElement("br");
      p.textContent = h.mostrarHospital();
      div.appendChild(p);
      div.appendChild(br);
    }
    return div.innerHTML;
  }
  modificaHosp(codigo, categoria, x) {
    for (let h of this.listHosp) {
      if (h.codPostal === codigo) {
        switch (categoria) {
          case "codigo":
            h.codPostal = x;
            break;
          case "nombre":
            h.nombre = x;
            break;
          case "localidad":
            h.localidad = x;
            break;
          case "responsable":
            h.responsable = x;
            break;

          default:
            break;
        }
        return alert(`Hospital modificado`);
      }
    }
    return alert(`El Hospital no ha posido ser modificado`);
  }
  // FUNCIONES QUE AÑADEN, MUESTRAN, ELIMINAN Y MODIFICAN LOS EMPLEADOS
  // DEL HOSPITAL ELEGIDO
  añadirTrabajadoresHospital(codigo, nombrep, especialidad, id) {
    for (let h of this.listHosp) {
      if (h.codPostal === codigo) {
        h.añadePersonal(nombrep, especialidad, id);
      }
    }
  }
  muestraTrabajadoresHospital(codigo) {
    for (let h of this.listHosp) {
      if (h.codPostal === codigo) {
        return h.mostrarTodoPersonal();
      }
    }
  }

  eliminaTrabajadoresHospital(codigo, id) {
    for (let h of this.listHosp) {
      if (h.codPostal === codigo) {
        h.eliminaTrabajador(id);
      }
    }
  }
  modificaTrabajadoresHospital(codigo, id, campoModifica, x) {
    for (let h of this.listHosp) {
      if (h.codPostal === codigo) {
        return h.modificaTrabajador(id, campoModifica, x);
      }
    }
  }

  // FUNCIONES QUE MODIFICAN, MUESTRAN, ELIMINAN Y MODIFICAN LOS PACIENTES DE UN
  // TRABAJADOR EN CONCRETO DE UN HOSPITAL EN CONCRETO

  anadePacdeTrabajadorHospital(codigoH, idTrab, nombreP, tlfP, dniP) {
    for (let h of this.listHosp) {
      if (h.codPostal === codigoH) {
        h.añadePacientesTrabajador(idTrab, nombreP, tlfP, dniP);
        console.log("AÑadiendo 1");
      }
    }
  }
  muestraPacdeTrabajadorHospital(codigoH, idTrab) {
    for (let h of this.listHosp) {
      if (h.codPostal === codigoH) {
        return h.muestraPacientesTrabajador(idTrab);
      }
    }
  }
  modificaPacdeTrabajadorHospital(codigoH, idTrab, dniP, campoModifica, x) {
    for (let h of this.listHosp) {
      if (h.codPostal === codigoH) {
        h.modificaPacienteTrabajador(idTrab, dniP, campoModifica, x);
      }
    }
  }
  eliminaPacdeTrabajadorHospital(codigoH, idTrab, dniP) {
    for (let h of this.listHosp) {
      if (h.codPostal === codigoH) {
        h.eliminaPacienteTrabajador(idTrab, dniP);
      }
    }
  }
}
