const saludar = function ( nombre ) {
    return `Hola, ${nombre} `;
};

//Declarando funciones con sintaxis moderna
const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`;
}

//Simplificando sintaxis
const saludar3 = ( nombre ) => `Hola, ${nombre}`;
const saludar4 = () => 'Hola Mundo!';

//Funcion que retorna un arreglo
const getUser = () => ({
    uid: '123',
    username: 'Arturo'
});

//Ejercicio para modernizar sintaxis
function getUsuarioActivo( nombre ) {
    return {
        uid: '1234',
        username: nombre
    }
}

//Solución de ejercicio
const getUsuario = ( nombre ) => ({
    uid: '456',
    username: nombre
});

console.log(saludar('Arturo'));
console.log(saludar2('Arturo 1'));
console.log(saludar3('Arturo 2'));
console.log(saludar4());
console.log(getUser());
console.log(getUsuarioActivo('ar2'));
console.log(getUsuario('Arthur'));