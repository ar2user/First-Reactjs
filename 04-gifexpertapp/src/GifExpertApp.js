import React, { useState } from 'react';
import AddCategory from './components/AddCategory';

export const GifExpertApp = () => {

//const categories = ['Cars', 'Games', 'Music'];

const [categories, setCategories] = useState(['Cars', 'Games', 'Music']);

const addCategory = () => {
  //setCategories(['landscape', ...categories]);
  setCategories( (categories, nuevo = "Hola") => ['landscape', ...categories, nuevo]); 
};

  return (
    <>
    <h2>GifExpertApp</h2>
    <AddCategory />
    <hr></hr>
    <button onClick={ addCategory }> Add Landscape </button>
    <ul>
        { 
        categories.map( category =>{ 
          return <li key={ category } > { category } </li>
           }) 
        }
    </ul>
    </>
  )
}
