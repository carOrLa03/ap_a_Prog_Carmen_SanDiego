import Personal from "Personal.js";
import Paciente from "Paciente.js";

// variables para el trabajador
const nombreTrabajador = document.getElementById('nombre');
const dniTrabajador = document.getElementById('dni');
const especialidadTrabj = document.getElementById('especialidad');

// variables para el paciente
const nomPaciente= document.getElementById('nombre');
const dniPaciente = document.getElementById('dni');
const especialistaPaciente = document.getElementById('especialidad');
const tlfpaciente = document.getElementById('tlf');

class Hospital{
    nombre;
    localidad;
    responsable;
    personal;
    pacientes;
    
    constructor(nom, localidad, director){
        this.nombre = nom;
        this.localidad = localidad;
        this.responsable = director;
        this.personal = new Set();
        this.pacientes = new Set();
    }

    // acciones de la lista de personal
    añadePersonal(nombreTrabajador, dniTrabajador, especialidadTrabj) {
        let trabajador = new Personal(nombreTrabajador, especialidadTrabj, dniTrabajador);
        if (!this.personal.has(trabajador)) {
            this.personal.add(trabajador); 
            return alert(`Trabajador insertado correctamente`);
        }
        return alert(`El trabajador ya existe`);
        
    }
    eliminaTrabajador(dniTrabajador) {
        if (this.personal.delete(dniTrabajador)) {
            return alert(`Trabajador eliminado`);
        }
        return alert(`El trabajador introducido no se ha podido eliminar`);
        
    }
    muestraTrabajador(dniTrabajador) {
        return dniTrabajador.muestraTrabajador();
    }
    modificaTrabajador(dniTrabajador) {
        
    }
    mostrarTodoPersonal() {
        $cad = "";
        for(let trabajador of this.personal){
            $cad += `${trabajador.muestraTrabajador()} \n----------------------------------- \n`;
        }
        return $cad;

     }

    // acciones de la lista pacientes
    añadePacientes(nomPaciente, dniPaciente, especialistaPaciente, tlfpaciente) {
        let paciente = new Paciente(nomPaciente, tlfpaciente, dniPaciente, especialistaPaciente);
        if (!this.pacientes.has(paciente)) {
            this.pacientes.add(paciente); 
            return alert(`Paciente insertado correctamente`);
        }
        return alert(`El paciente ya existe`);
    }
    eliminaPaciente(dniPaciente) {
        if (this.pacientes.delete(dniPaciente)) {
            return alert(`Paciente eliminado`);
        }
        return alert(`El paciente introducido no se ha podido eliminar`);
    }
    muestraPaciente(dniPaciente) {
        return dniPaciente.muestraPaciente();
    }
    modificaPaciente(dniPaciente) {
        
    }
    mostrarTodoPacientes() {
        $cad = "";
        for(let paciente of this.pacientes){
            $cad += `${paciente.muestraPaciente()} \n----------------------------------- \n`;
        }
        return $cad;
    }

    mostrarHospital() {
        
    }

}

const eleccion = document.getElementById('seleccion');