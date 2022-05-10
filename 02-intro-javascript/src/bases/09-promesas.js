//Importando función
import { getHeroeById } from "./bases/09-export-heroes";

//Declarando promesa
const promesa = new Promise ( (resolve, reject) => {
    setTimeout(() => {
        //Obteniendo heroe con ID 2
        const heroe = getHeroeById(2);
        //Enviando resultados obtenido
        resolve(heroe);
        reject("No se encontro el dato solicitado");
    }, 2000);
} );

promesa.then( (heroe) => {
    //recibiendo el heroe correctamente
    console.log(heroe);
    } 
 );

 const getHeroeByIdAsync = ( id ) => {
     return new Promise ( (resolve, reject) => {
        setTimeout(() => {
            const superheroe = getHeroeById (id);
            superheroe ? resolve(superheroe) : reject("El superheroe no existe")
        }, 2000);
     });
 }

 getHeroeByIdAsync(4)
    .then( console.log)
    .catch(console.error);