import { getHeroeByDueño, getHeroeById } from "../base/08-import-export";
import heroes from "../data/heroes";

describe ('Pruebas en 08-Import-Export', () => {
    
    test('Debe dar un heroe por ID', () => {
        const id = 1;
        expect( getHeroeById(id) ).toBe( heroes.find( heroe => heroe.id === id ) );
    });
    
    test('Debe dar undefined si no hay heroes', () => {
        const id = 10;
        expect( getHeroeById(id) ).toBe( undefined );
    });

    test('Debe dar varios heroes', () => {
        const owner = 'DC';
        expect( getHeroeByDueño(owner) ).toEqual( heroes.filter( (heroe) => heroe.owner === owner));
    });

    test('Deben ser 2 heroes', () => {
        const owner = 'Marvel';
        const heroes = getHeroeByDueño(owner);
        const cantidad = heroes.length;
        expect(cantidad).toBe(2);
    });

});