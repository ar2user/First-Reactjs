//Importando el array
import heroes from '../data/heroes'

//Encontrando un heroe por ID
export const getHeroeById = (id)  => heroes.find( (heroe) => heroe.id === id );
