const Hospitales = require("../clasesTEST/hospitales.js");
const Hospital = require("../clasesTEST/hospital.js");
const Personal = require("../clasesTEST/personal.js");

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
  test("añade trabajadores a un hospital", () => {
    expect(hs.añadirTrabajadoresHospital("2", "manolo", "medico", "200")).toBe(
      "Trabajador insertado correctamente"
    );
    expect(hs.añadirTrabajadoresHospital("2", "JUAN", "medico", "210")).toBe(
      "Trabajador insertado correctamente"
    );
  });
  test("elimina trabajadores de un hospital", () => {
    expect(hs.eliminaTrabajadoresHospital("2", "200")).toBe(
      "Trabajador eliminado"
    );
  });
  test("elimina trabajadores de un hospital", () => {
    expect(hs.modificaTrabajadoresHospital("2", "210", "id", "220")).toBe(
      "Trabajador modificado"
    );
  });
});
