const { añadeHospitales,
    eliminaHospitales,
    mostrarHospitales,
    modificaHosp,
    añadirTrabajadoresHospital,
    muestraTrabajadoresHospital,
    eliminaTrabajadoresHospital,
    modificaTrabajadoresHospital,
    anadePacdeTrabajadorHospital,
    muestraPacdeTrabajadorHospital,
    modificaPacdeTrabajadorHospital,
    eliminaPacdeTrabajadorHospital
} = require("./hospitales")
describe("validar anadeHospital", () => {
    test("1", "la Fe", "Valencia", "Paquito", () => {
        expect(añadeHospitales("1", "la Fe", "Valencia", "Paquito")).toEqual("Hospital añadido");
    })
})