import React, {useState} from 'react'

function NumberApp() {

  const [counter, setCounter] = useState(0);
 
  const add = () => {
      setCounter( counter + 1 );
  };

  const less = () => {
    setCounter( counter - 1 );
  };

   const reset = () => {
        setCounter( 0 );
   }; 

   const double = () => {
    setCounter( counter + 1 );

    //Renderiza dos veces
    setCounter ( prevCounter => prevCounter + 1 ); 
   }; 

  return (
    <>
    <h1>Number App</h1>
    <h1>Clicks: { counter }</h1>
    <button onClick={ add }>Add +1 </button>
    <button onClick={ reset }>Reset </button>
    <button onClick={ less }>Less -1 </button>
    <button onClick={ double }>Double Render </button>
    <hr></hr>
    </>
  )
}

export default NumberApp
