//Importando el array
import heroes, {owners} from '../data/heroes'

//Encontrando un heroe por ID
export const getHeroeById = (id)  => heroes.find( (heroe) => heroe.id === id );


//Encontrar varios heroes por dueño
export const getHeroeByDueño = ( dueño ) => heroes.filter( (heroe) => heroe.owner === dueño );
