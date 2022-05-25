import React, {useState} from 'react'

const ObjectApp = () => {

  const firstproduct = {
      title: "Producto 1",
      description: "Descripción de producto 1",
      price: 200.00,
      category: "Categoria 1"
  }
    
  const [product, setProduct] = useState(firstproduct)  

  return (
    <>
    <h1>ObjectApp - CRUD</h1>
    <h2>Título: {product.title}</h2>
    <h2>Descripción: {product.description}</h2>
    <h3>Precio: {product.price}</h3>
    <h4>Categoria: {product.category}</h4>
    <hr></hr>
    </>
  )
}

export default ObjectApp