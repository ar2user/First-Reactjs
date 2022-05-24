//Importando el array
import heroes, {owners} from '../data/heroes'

//Encontrando un heroe por ID
const getHeroeById = (id)  => heroes.find( (heroe) => heroe.id === id );

//Encontrar varios heroes por dueño
const getHeroeByDueño = ( dueño ) => heroes.filter( (heroe) => heroe.owner === dueño );
