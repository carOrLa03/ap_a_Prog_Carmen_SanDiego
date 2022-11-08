
const Hospitales = require('../clasesTEST/hospitales.js')
describe("hospitales", () => {
    const hs = new Hospitales();
    test('creamos dos hospitales', () => {
        expect(hs.añadeHospitales("1", "la Fe", "Valencia", "Paquito")).toBe('Hospital añadido');
        expect(hs.añadeHospitales("2", "WAKANDA", "AFRICA", "BLACK PANTHER")).toEqual('Hospital añadido');
    })
    test("eliminamos el hospital", () => {
        expect(hs.eliminaHospitales("1")).toEqual('Hospital eliminado');
    })
    test("modificar  hospitales", () => {
        expect(hs.modificaHosp("1", "nombre", "hola")).toEqual("Hospital modificado");
    })
})
