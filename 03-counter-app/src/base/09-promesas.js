//Importando función
import { getHeroeById } from "./08-import-export";

//Declarando promesa
const promesa = new Promise ( (resolve, reject) => {
    setTimeout(() => {
        //Obteniendo heroe con ID 2
        const heroe = getHeroeById(2);
        //Enviando resultados obtenido
        resolve(heroe);
        reject("No se encontro el dato solicitado");
    }, 1500);
} );

promesa.then( (heroe) => {
    //recibiendo el heroe correctamente
    } 
 );

 export const getHeroeByIdAsync = ( id ) => {
     return new Promise ( (resolve, reject) => {
        setTimeout(() => {
            const superheroe = getHeroeById (id);
            superheroe ? resolve(superheroe) : reject("El superheroe no existe")
        }, 1500);
     });
 }
