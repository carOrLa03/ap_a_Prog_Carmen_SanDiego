export default class Paciente{
    nombre;
    tlf;
    dni;
    // especialista = especialista.getDni();

    constructor(nom, tlf, dni){
        this.nombre = nom;
        this.tlf = tlf;
        this.dni = dni;
        
    }

    get nombre(){
        return this.nombre;
    }
    set nombre(nom){
        this.nombre = nom;
    }
    get telefono(){
        return this.tlf;
    }
    set telefono(tlf){
        this.tlf = tlf;
    }
    get dni(){
        return this.dni;
    }
    set nombre(dni){
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
paciente1 = new Paciente("carmen", 962502455, "7357770J")
console.log(paciente1.muestraDatos())
console.log("hola")