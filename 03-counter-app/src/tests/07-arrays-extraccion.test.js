import '@testing-library/jest-dom';
import { retornaArray } from '../base/07-arrays-extraccion';

describe ( 'Pruebas de 07 Arrays', () => {
    test('Debe dar un array con string y numeros', () => {
        const [ letras, numeros ] = retornaArray(); //['ABC', 123]
        expect(typeof letras ).toBe( 'string' );
        expect(typeof numeros ).toBe( 'number' );
    });
});