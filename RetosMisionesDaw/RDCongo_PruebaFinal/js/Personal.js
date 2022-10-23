export default class Personal{
    nombre;
    especialidad;
    dni;
     constructor(nom, especialidad, dni){
        this.nombre = nom;
        this.especialidad = especialidad;
        this.dni = dni
   }
   
   get getDni() {
      return this.dni;
   }
   get getNombre() {
      return this.nombre;
   }
   get getEspecialidad() {
      return this.especialidad;
   }
   set setNombre(nom) {
      this.nombre = nom;
   }
   set setDni(dni) {
      this.dni = dni;
   }
   set setEspecialidad(especialidad) {
      this.especialidad = especialidad;
   }

   muestraDatos() {
      return `DNI Trabajador: ${this.dni}\n Nombre: ${this.nombre}\n Especialidad: ${this.especialidad}\n`;
   }
}