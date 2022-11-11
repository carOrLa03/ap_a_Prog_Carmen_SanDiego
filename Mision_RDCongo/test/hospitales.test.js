const Hospitales = require("../clasesTEST/hospitales.js");
const Hospital = require("../clasesTEST/hospital.js");
const Personal = require("../clasesTEST/personal.js");
const Paciente = require("../clasesTEST/paciente.js");

//  BATERIA PARA LA CLASE HOSPITALES Y SUS FUNCIONES
describe("hospitales", () => {
  const hs = new Hospitales();

  test("creamos dos hospitales", () => {
    const resultado = hs.añadeHospitales("1", "la Fe", "Valencia", "Paquito");
    expect(resultado).toBe("Hospital añadido");
    expect(
      hs.añadeHospitales("2", "WAKANDA", "AFRICA", "BLACK PANTHER")
    ).toEqual("Hospital añadido");
  });
  test("eliminamos el hospital", () => {
    expect(hs.eliminaHospitales("1")).toEqual("Hospital eliminado");
  });
  test("modificar  hospitales", () => {
    expect(hs.modificaHosp("2", "nombre", "hola")).toBe("Hospital modificado");
  });

});
//  BATERIA PARA LA CLASE HOSPITAL Y SUS FUNCIONES
describe("hospital", () => {
  // CREO UN HOSPITAL
  const hosp = new Hospital("1", "la Fe", "Valencia", "Paquito");
  test("añade trabajadores a un hospital", () => {
    expect(hosp.añadePersonal("manolo", "medico", "200")).toBe(
      "Trabajador insertado correctamente"
    );
    expect(hosp.añadePersonal("JUAN", "medico", "210")).toBe(
      "Trabajador insertado correctamente"
    );
  });
  test("elimina trabajadores de un hospital", () => {
    expect(hosp.eliminaTrabajador("200")).toBe(
      "Trabajador eliminado"
    );
  });
  test("modifica trabajadores de un hospital", () => {
    expect(hosp.modificaTrabajador("210", "id", "220")).toBe(
      "Trabajador modificado"
    );
  });


});

// BATERIA PARA LA CLASE PERSONAL Y SUS FUNCIONES
describe("personal", () => {
  const t1 = new Personal("pepito", "medico", "100");

  test("rellena pacientes a un trabajador", () => {
    expect(t1.rellenaPacientes("manolo", "111111111111", "2789")).toBe(
      "Paciente insertado correctamente"
    );
    expect(t1.rellenaPacientes("JUAN", "2222222222222222", "298794")).toBe(
      "Paciente insertado correctamente"
    );
  });
  test("elimina pacientes de un trabajador", () => {
    expect(t1.eliminaPaciente("2789")).toBe(
      "Paciente eliminado"
    );
  });
  test("modifica pacientes de una trabajador", () => {
    expect(t1.modificaPaciente("298794", "dni", "000")).toBe(
      "Paciente modificado"
    );
  });
})
