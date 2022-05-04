const persona = {

    nombre: 'Arturo',
    apellido: 'Pérez',
    edad: 27,
    direccion: {
        cuidad: 'Tlalnepantla',
        zip: 54190,
        numero: 82,
        calle: 'Cerro de los tepozanez'
    }

};

//clonando objeto
const persona2 = { ...persona };
//modificando propiedad del clon
persona2.nombre = 'Arthur';

console.log( persona );
console.log( persona2 );