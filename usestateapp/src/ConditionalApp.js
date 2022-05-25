import React, { useState } from 'react'

const ConditionalApp = () => {

  const [condition, setCondition] = useState(true)

  return (
    <>
    <h1>ConditionalApp</h1> 
    <h1>State value is: { condition.toString() }</h1>
    <button onClick={() => setCondition(!condition)}> Change </button>
    <hr></hr>
    </>
  )
}

export default ConditionalApp