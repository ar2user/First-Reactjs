const persona = {
    nombre: 'Arturo',
    apellido: 'Pérez',
    edad: 27,
    clave: 1234
}

//Extracción tradicional de atributos
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.clave);


//Extracción moderna tipo react

//Renombrando constante
const { nombre:name } = persona;
console.log('* New Sintaxis name ' + name);

//Extracción de varios atributos
const { edad, nombre, apellido, clave } = persona;

console.log('* New Sintaxis ' + nombre);
console.log('* New Sintaxis ' + edad );
console.log('* New Sintaxis ' + clave);
console.log('* New Sintaxis ' + apellido);

//Pasando atributos de un objeto a una fución con extracción moderna
//asignando valor por defecto de un atributo
const retornaPersona = ( {clave, nombre, edad, dirección = 'Una calle'} ) => {
    console.log( 'Datos del objeto primario: ' + nombre, edad, dirección);

    return {
        firstname: nombre,
        age: edad,
        pass: clave,
        address: {
            calle: 'Una calle',
            colonia: 'Una colonia',
            municipio: 'Un municipio'
        }
    }
}

//Nuevo objeto apartir de otro
const person = retornaPersona(persona);

//Imprimiendo la nueva persona
console.log(person);

//Extracción de atributos del objeto person
const { firstname, pass } = person;
console.log('Atributo de person: ' + firstname);
console.log('Atributo de person: ' + pass);

//Extracción de atributos de un objeto dentro de otro objeto
const { address: { calle, colonia } } = person;
console.log('Atributo de person: ' + calle);
console.log('Atributo de person: ' + colonia);