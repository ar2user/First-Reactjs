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

//Funcion que retorna un objeto
export const getUser = () => ({
    uid: '123',
    username: 'Arturo'
});

//Ejercicio para modernizar sintaxis
export function getUsuarioActivo( nombre ) {
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
