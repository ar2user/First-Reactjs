import React, {useState} from 'react'

const ArrayObjApp = () => {
  
const firstcart = [
    {
        id: 1,
        title: "Producto 1",
        description: "Descipción 1",
        price: 200
    },
    {
        id: 2,
        title: "Producto 2",
        description: "Descipción 2",
        price: 250
    },
    {
        id: 3,
        title: "Producto 3",
        description: "Descipción 3",
        price: 300
    },
    {
        id: 4,
        title: "Producto para eliminar",
        description: "Descipción para eliminar",
        price: 350
    },
];    
  const [cart, setCart] = useState(firstcart);

  const borrar = (productId) => {
    const newCart = cart.filter(product => product.id !== productId);
    setCart(newCart);
  };

  const update = (editItem) => {
    const newprice = Math.random() * (500 - 100) + 100;
    editItem.price = newprice;  
    const newCart = cart.map(product => product.id === editItem.id ? editItem : product);
    setCart(newCart);
  };

  const addItem = (newItem) => {
    const newprice = Math.random() * (500 - 100) + 100;
    newItem.price = newprice;
    newItem.id = Date.now();
    const newCart = [newItem, ...cart];
    setCart(newCart);
  };

  return (
    <>
    <h1>ArrayObjApp - CRUD</h1>
    <button onClick={() => addItem({title: "New Item", description: "New Description"})}>Add Item</button>
    {cart.map(product => (
        <div key={product.id}>
            <h2>Título: {product.title}</h2>
            <h2>Descripción: {product.description}</h2>
            <h3>Precio: {product.price}</h3>
            <button onClick={() => borrar(product.id)}>Borrar producto</button>
            <button onClick={() => update({id: product.id, title: "Cambio el titulo", description: "Cambio la descripción" })}>Actualizar</button>
        </div>    
    ))};
    <hr></hr> 
    </>
  )
}

export default ArrayObjApp