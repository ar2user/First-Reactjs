const array = [1,2,3,4];

//Extracción tradicional de elementos
console.log( array [0] );
console.log( array [1] );
console.log( array [2] );
console.log( array [3] );

//Extracción moderna
const [ e1 ] = array;
console.log( '* New Sintaxis ' + e1 );

//Extracción en otra posición
const [ , , e3 ] = array;
console.log('* New Sintaxis ' + e3);

//Función sintaxis moderna 1 linea - retorna un array
const retornaArray = () => ['abc', 123];

//Extracción de elementos
const [ letras, numeros ] = retornaArray();
console.log(letras, numeros);

//Ejercicio
//Función que retorna array con otra función como elemento
const funcion = (valor) => [ valor, () => { console.log('Hola mundo!');} ];

const array2 = funcion ( 'Arturo' );
console.log(array2);

//Extrayendo los elementos del array2
const [ nombre, func ] = array2;
console.log(nombre);

//llamando a la función dentro del array2
func();
