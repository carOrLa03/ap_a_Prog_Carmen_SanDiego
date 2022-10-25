export default class Paciente {
  nombre;
  tlf;
  dni;
  especialista;

  constructor(nom, tlf, dni) {
    this.nombre = nom;
    this.tlf = tlf;
    this.dni = dni;
    this.especialista = "";
  }

  get nombre() {
    return this.nombre;
  }
  set nombre(nom) {
    this.nombre = nom;
  }
  get telefono() {
    return this.tlf;
  }
  set telefono(tlf) {
    this.tlf = tlf;
  }
  get dni() {
    return this.dni;
  }
  set nombre(dni) {
    this.dni = dni;
  }
  get especialista() {
    return this.especialista;
  }
  set especialista(especialista) {
    this.especialista = especialista.getDni();
  }
  muestraDatos() {
    return `DNI del paciente: ${this.dni}\n Nombre: ${this.nombre}\n Télefono: ${this.tlf}\n Especialista asignado: ${this.especialista}`;
  }
}
