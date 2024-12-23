import React, {useState} from 'react'

const UseStateHook1 = () => {
    const initialMarks = 0;
    const [marks, setMarks] = useState(initialMarks)

  return (
    <div>
      <h1> Marks : {marks}</h1>
      <button onClick={() => setMarks(previouMarks=>previouMarks+1)}>Increment Marks</button>
      <button onClick={() => setMarks(previouMarks=>previouMarks-1)}>Decrement Marks</button>
      <button onClick={() => setMarks(initialMarks)}>Reset Marks</button>
    </div>
  )
}

export default UseStateHook1
