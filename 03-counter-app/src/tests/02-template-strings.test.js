import '@testing-library/jest-dom';
import { getSaludo } from '../base/02-template-strings';

describe ('Pruebas de 02-template-strings.js', () => {
    test('Al ejecutar getSaludo debe aparecer Hola + nombre proporcionado', () => {
        const nombre = 'Arturo';
        const saludo = getSaludo( nombre );
        expect( saludo ).toBe('Hola ' + nombre);
    });
    test('Al ejecutar getSaludo y no hay nombre debe aparecer Hola Invitad@', () => { 
        const saludo = getSaludo();
        expect( saludo ).toBe('Hola Invitad@');
    })

});