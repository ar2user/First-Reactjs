import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../base/05-sintaxis-funciones';

describe('Pruebas de 05-funciones', () => {
    test('La función getUser debe dar un objeto de atributos iguales', () => {
        const usuario = {
            uid: '123',
            username: 'Arturo'
        }
        expect(getUser()).toEqual(usuario);
     });

     test('La funcion gerUserActivo debe dar un objeto con el nombre proporcionado', () => { 
        const nombre = 'Arturo';
        const obj =  {
            uid: '1234',
            username: nombre
        }
        expect(getUsuarioActivo(nombre)).toEqual(obj);
     });

});