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
        this.personal = [""];
        this.pacientes = [""];
    }
}