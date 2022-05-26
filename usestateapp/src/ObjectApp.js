import React, {useState} from 'react'

const ObjectApp = () => {

  const firstproduct = {
      title: "Producto 1",
      description: "Descripción de producto 1",
      price: 200.00,
      category: {
        main: "category 1",
        sub: "category 2"
      }
  }
    
  const [product, setProduct] = useState(firstproduct)

  const updateTitle = (property, value) =>{
    setProduct({ ...product, [property]: value })
  }

  const updateDescription = (property, value) =>{
    setProduct({ ...product, [property]: value })
  }

  const updateCategory = (property, value) =>{
    setProduct({ ...product, category: {[property]: value} })
  }

  return (
    <>
    <button onClick={() => updateTitle("title", "Titulo Nuevo")}>Actualizar título</button>
    <button onClick={() => updateDescription("description", "Descipción Nueva")}>Actualizar description</button>
    <button onClick={() => updateCategory("main", "Nueva Categoria")}>Actualizar categoria</button>
    <h1>ObjectApp</h1>
    <h2>Título: {product.title}</h2>
    <h2>Descripción: {product.description}</h2>
    <h3>Precio: {product.price}</h3>
    <h4>Categoria: {product.category.main}</h4>
    <hr></hr>
    </>
  )
}

export default ObjectApp