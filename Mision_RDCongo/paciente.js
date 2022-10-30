export default class Paciente {
  nombre;
  tlf;
  dni;

  constructor(nom, tlf, dni) {
    this.nombre = nom;
    this.tlf = tlf;
    this.dni = dni;
  }

  get nombre() {
    return this.nombre;
  }
  set setNombre(nom) {
    this.nombre = nom;
  }
  get telefono() {
    return this.tlf;
  }
  set setTelefono(tlf) {
    this.tlf = tlf;
  }
  get dni() {
    return this.dni;
  }
  set setDNI(dni) {
    this.dni = dni;
  }

  muestraDatos() {
    return `DNI del paciente: ${this.dni}\n Nombre: ${this.nombre}\n Télefono: ${this.tlf}\n`;
  }
}
