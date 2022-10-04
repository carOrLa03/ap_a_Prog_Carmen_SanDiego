class Paciente{
    nombre;
    tlf;
    dni;

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
}