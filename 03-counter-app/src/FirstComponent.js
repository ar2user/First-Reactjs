import React from 'react';
import PropTypes from 'prop-types';

//Funcion componente
const FirstComponent = ({ hola, defecto}) => {

const saludo = "¡Hola Mundo!";
const string = "Mi primer componente compuesto";
const numero = 123;
const flotante = 123.12
const array = [1,2,3,4,5];
const obj = {nombre: 'Arturo', apellido: 'Pérez', edad: 27};


return(
    //(); y <> agrupa varios componentes HTML
    <>
    <h1>{ saludo }</h1>
    <p>{ string }</p>
    <p>{ numero }</p>
    <p>{ flotante }</p>
    <p>{ array }</p>
    <p>{ JSON.stringify(obj) }</p>
    <p>{ hola }</p>
    <p>{ defecto }</p>
    </>  
    ); 
        
}



FirstComponent.propTypes = {
    hola: PropTypes.string.isRequired
}
FirstComponent.defaultProps = {
    defecto: 'Propiedad por defecto'
}

export default FirstComponent;
