const nombre = 'Arturo';
const apellido = 'Pérez';

let nombreCompleto = `${nombre} ${apellido}`;

export function getSaludo (nombre = 'Invitad@') {
    return 'Hola ' + nombre;
}
