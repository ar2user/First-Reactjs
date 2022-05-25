import React, {useState} from 'react'

const ErrorApp = () => {
 
  const [error, setError] = useState("Errores");

  return (
    <>
    <h1>ErrorApp</h1> 
    <h1>{error}</h1>
    <button onClick={() => setError("Se genero un error")}> Generar error </button>
    <button onClick={() => setError("Se genero un segundo error")}> Otro error </button>
    <hr></hr>
    </>
  )
}

export default ErrorApp