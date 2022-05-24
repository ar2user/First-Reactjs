const array = [1,2,3,4];

//Extracción moderna
const [ e1 ] = array;

//Extracción en otra posición
const [ , , e3 ] = array;


//Función sintaxis moderna 1 linea - retorna un array
export const retornaArray = () => ['abc', 123];

//Extracción de elementos
const [ letras, numeros ] = retornaArray();


//Ejercicio
//Función que retorna array con otra función como elemento
const funcion = (valor) => [ valor, () => { console.log('Hola mundo!');} ];

const array2 = funcion ( 'Arturo' );

//Extrayendo los elementos del array2
const [ nombre, func ] = array2;

//llamando a la función dentro del array2
func();
