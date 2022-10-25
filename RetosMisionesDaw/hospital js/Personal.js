export default class Personal{
    nombre;
    especialidad;
    id;
     constructor(nom, especialidad){
        this.nombre = nom;
        this.especialidad = especialidad;
        this.id = Math.round(Math.random()*(1000-1)+1)

     }
   
   get getDni() {
      return this.id;
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
   set setEspecialidad(especialidad) {
      this.especialidad = especialidad;
   }

   muestraDatos() {
      return `DNI Trabajador: ${this.id}\n Nombre: ${this.nombre}\n Especialidad: ${this.especialidad}\n`;
   }
}
personal = new Personal("pepe", "medico")
console.log(personal.muestraDatos())