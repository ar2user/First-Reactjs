import React, { useState } from 'react'

export const GifExpertApp = () => {

//const categories = ['Cars', 'Games', 'Music'];

const [categories, setCategories] = useState(['Cars', 'Games', 'Music']);

const addCategory = () => {
  setCategories( cats => ['landscape', ...cats]); 
};

  return (
    <>
    <h2>GifExpertApp</h2>
    <hr></hr>
    <button onClick={ addCategory }> Add Landscape </button>
    <ul>
        { categories.map( category =>{ return <li key={ category } > { category } </li> }) }
    </ul>
    </>
  )
}
