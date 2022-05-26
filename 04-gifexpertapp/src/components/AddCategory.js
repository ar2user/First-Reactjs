import React, { useState } from 'react'

const AddCategory = () => {

  const [texto, setTexto] = useState("Texto");
  const ingreso = (e) => {
      setTexto(e.target.value);
  }
  const notRefresh = (e) => {
      e.preventDefault();
      console.log("Envio realizado")
  }

  return (
    <form onSubmit={notRefresh}>
    <input type="text" value={ texto } onChange={ingreso} />
    </form>
  )
}

export default AddCategory