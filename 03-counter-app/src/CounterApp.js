//Importando react y usestate (hook/funcion)
import React, {useState} from 'react';
import PropTypes from 'prop-types';


const CouterApp = ({ value }) => {

    //Muestra el return de onClick
    const handle = (event)  => {
        console.log(event);
    };
    const [ counter, setCounter ] = useState( value ); // [nombre, funciónNombre]

    //Funciones de contador
    const masUno = ()  => {
        setCounter( counter + 1 );
    };

    const menosUno = ()  => {
        setCounter( counter - 1 );
    };

    const reset = ()  => {
        setCounter( 0 );
    };

    return (
        <>
        <h1>CounterApp</h1>
        <p>{ value }</p>
        <p>{ counter }</p>
        <button onClick={ handle }>HandleClick</button>
        <button onClick={ masUno }>+1</button>
        <button onClick={ reset }>Reset</button>
        <button onClick={ menosUno }>-1</button>
        </>
    );
}

CouterApp.propTypes = {
    value: PropTypes.number
}

export default CouterApp;