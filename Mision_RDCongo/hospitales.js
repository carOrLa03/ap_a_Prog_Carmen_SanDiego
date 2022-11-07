import Hospital from "./hospital.js";

export default class Hospitales {
  listHosp;
  constructor() {
    this.listHosp = new Set();
  }

  añadeHospitales(codigo, nombre, localidad, jefe) {
    if (codigo == "") {
      return alert("EL ID DEL HOSPITAL NO PUEDE ESTAR VACÍO");
    }
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
        return alert(`Hospital modificado`);
      }
    }
    return alert(`El Hospital no ha podido ser modificado`);
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
      return alert("EL ID DEL HOSPITAL NO PUEDE ESTAR VACÍO");
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
        alert("INTRODUCE EL ID DEL HOSPITAL");
      }
    }
  }
  modificaTrabajadoresHospital(codigo, id, campoModifica, x) {
    for (let h of this.listHosp) {
      if (h.codPostal === codigo) {
        return h.modificaTrabajador(id, campoModifica, x);
      } else {
        alert("INTRODUCE EL ID DEL HOSPITAL");
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
      return alert("EL ID DEL HOSPITAL NO PUEDE ESTAR VACÍO");
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
        console.log("modificando pac");
        h.modificaPacienteTrabajador(idTrab, dniP, campoModifica, x);
      }
    }
  }
  eliminaPacdeTrabajadorHospital(codigoH, idTrab, dniP) {
    for (let h of this.listHosp) {
      if (h.codPostal === codigoH) {
        console.log("eliminando 1");
        h.eliminaPacienteTrabajador(idTrab, dniP);
      }
    }
  }
}
