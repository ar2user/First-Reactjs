//Importando el array
import heroes, {owners} from '../data/heroes'

console.log(owners);

//Encontrando un heroe por ID
const getHeroeById = (id)  => heroes.find( (heroe) => heroe.id === id );
console.log(getHeroeById(2));

//Encontrar varios heroes por dueño
const getHeroeByDueño = ( dueño ) => heroes.filter( (heroe) => heroe.owner === dueño );
console.log(getHeroeByDueño('DC'));