const persona = {
    nombre: 'Arturo',
    apellido: 'Pérez',
    edad: 27,
    clave: 1234
}

//Extracción moderna tipo react

//Renombrando constante
const { nombre:name } = persona;

//Extracción de varios atributos
const { edad, nombre, apellido, clave } = persona;

//Pasando atributos de un objeto a una función con extracción moderna
//asignando valor por defecto de un atributo
const retornaPersona = ( {clave, nombre, edad, dirección = 'Una calle'} ) => {
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

//Extracción de atributos del objeto person
const { firstname, pass } = person;

//Extracción de atributos de un objeto dentro de otro objeto
const { address: { calle, colonia } } = person;
