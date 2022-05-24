import { getHeroeByIdAsync } from "../base/09-promesas";
import heroes from "../data/heroes";

//Pruebas asincronas
describe('Pruebas con 09-Promesas', () => {

    //Escribir done para que termine la tarea asincrona
    test('Debe regresar un heroe por ID', ( done ) => {
        
        const id = 2;
        const posicion = id - 1;
        getHeroeByIdAsync(id).then( heroe => {
            expect( heroe ).toBe( heroes[posicion] );
            //Indica que hasta que termine la tarea de buscar
            done();
        });
    });

    //Escribir done para que termine la tarea asincrona
    test('Debe regresar que el heroe no existe', (done) => {
        const idDisponibles = heroes.length;
        const id = idDisponibles + 1;
        getHeroeByIdAsync(id).catch( error => {
            expect(error).toBe("El superheroe no existe");
            //Indica que hasta que termine la tarea de buscar
            done();
        });
    });

});