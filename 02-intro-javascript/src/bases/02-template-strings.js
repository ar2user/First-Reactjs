const nombre = 'Arturo';
const apellido = 'Pérez';

let nombreCompleto = `${nombre} ${apellido}`;

console.log( nombreCompleto );

function getSaludo (nombre) {
    return 'Hola' + nombre;
}

console.log ( `Este es un texto: ${getSaludo( nombre )}` );