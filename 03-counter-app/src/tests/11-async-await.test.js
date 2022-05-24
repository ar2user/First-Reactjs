import { getImage } from "../base/11-async-await";

describe('Pruebas con 11 async-await', () => {

    //Tarea asincrona
    test('Debe encontrar una URL', async() => {
        //Debe esperar a que se ejecute la promesa
        const url = await getImage();
        //Evaluar resultado
        expect( url.includes('https://') ).toBe(true);
    });
});