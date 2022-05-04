const array = [1,2,3,4];

//Clonando arreglo y agregando un elemento más
let array2 = [ ...array, 5 ];

const array3 = array2.map(multiplicar);

const multiplicar = function (numero) {
    return numero * 2;
};

console.log(array);
console.log(array2);
console.log(array3);