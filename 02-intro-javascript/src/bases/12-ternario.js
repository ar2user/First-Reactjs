
const activo = true;

//Simplificando if else
let mensaje = activo ? 'Activo' : 'Inactivo';
console.log ( mensaje );

//False - inactivo
mensaje = !activo ? 'Activo' : 'Inactivo';
console.log( mensaje );

//Solo if
mensaje = activo && 'Activo';
console.log( mensaje );

//False
mensaje = !activo && 'Activo';
console.log( mensaje );