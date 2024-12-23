import React, { useState } from 'react'

const UseStateHook3_1 = () => {
    const[fruits, setFruits] = useState([])
    const[fruitInput, setFruitInput] = useState("")
   
    const addFruit =()=>{
       setFruits([...fruits, fruits[fruits.length] = fruitInput])
       setFruitInput("") 
    }
  return (
    <div>
      <input
       type='text'
       value={fruitInput}
       onChange={e => setFruitInput(e.target.value)}
      />
      <button onClick={addFruit}>ADD</button>
      <ul>
       {
            fruits.map((fruit)=>(
                <h1>{fruit}</h1>
            ))
       }
      </ul>
    </div>
  )
}

export default UseStateHook3_1
