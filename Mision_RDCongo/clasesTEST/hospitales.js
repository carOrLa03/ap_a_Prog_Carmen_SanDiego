const Hospital = require("./hospital.js");
// const Personal = require("./personal.js");

class Hospitales {
  listHosp;
  constructor() {
    this.listHosp = new Set();
  }

  añadeHospitales(codigo, nombre, localidad, jefe) {
    if (codigo == "") {
      return "EL ID DEL HOSPITAL NO PUEDE ESTAR VACÍO";
    }
    let hosp = new Hospital(codigo, nombre, localidad, jefe);
    this.listHosp.add(hosp);
    return `Hospital añadido`;
  }

  eliminaHospitales(codigo) {
    for (let hosp of this.listHosp) {
      if (hosp.codPostal === codigo) {
        this.listHosp.delete(hosp);
        return `Hospital eliminado`;
      }
    }
    return `El Hospital introducido no se ha podido eliminar`;
  }
  mostrarHospitales() {
    const div = document.createElement("div");
    for (let h of this.listHosp) {
      let p = document.createElement("p");
      p.textContent = h.mostrarHospital();
      div.appendChild(p);
    }
    return div;
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
        return `Hospital modificado`;
      }
    }
    return `El Hospital no ha podido ser modificado`;
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
    if (codigo == "") {
      return "EL ID DEL HOSPITAL NO PUEDE ESTAR VACÍO";
    }
    const div = document.createElement("div");
    for (let h of this.listHosp) {
      if (h.codPostal === codigo) {
        let p = document.createElement("p");
        p.textContent = h.mostrarTodoPersonal();
        div.appendChild(p);
      }
    }
    return div;
  }

  eliminaTrabajadoresHospital(codigo, id) {
    for (let h of this.listHosp) {
      if (h.codPostal === codigo) {
        h.eliminaTrabajador(id);
      } else {
        return "INTRODUCE EL ID DEL HOSPITAL";
      }
    }
  }
  modificaTrabajadoresHospital(codigo, id, campoModifica, x) {
    for (let h of this.listHosp) {
      if (h.codPostal === codigo) {
        return h.modificaTrabajador(id, campoModifica, x);
      } else {
        return "INTRODUCE EL ID DEL HOSPITAL";
      }
    }
  }

  // FUNCIONES QUE MODIFICAN, MUESTRAN, ELIMINAN Y MODIFICAN LOS PACIENTES DE UN
  // TRABAJADOR EN CONCRETO DE UN HOSPITAL EN CONCRETO

  anadePacdeTrabajadorHospital(codigoH, idTrab, nombreP, tlfP, dniP) {
    for (let h of this.listHosp) {
      if (h.codPostal === codigoH) {
        h.añadePacientesTrabajador(idTrab, nombreP, tlfP, dniP);
      }
    }
  }
  muestraPacdeTrabajadorHospital(codigoH, idTrab) {
    if (codigoH == "") {
      return "EL ID DEL HOSPITAL NO PUEDE ESTAR VACÍO";
    }
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

module.exports = Hospitales;
