import React, { useEffect, useState } from 'react'

const UseEffectHook1 = () => {
    const [count, setCount] = useState(0);

    // useEffect(()=>{
    //     document.title = `Clicked ${count} times`
    // })                                               //Case1 No dependecy array

    useEffect(()=>{
        document.title = `Clicked ${count} times`
    } ,[])                                              //Case2 Dependency array empty
    
  return  (
    <div>
      <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
    </div>
  )
}

export default UseEffectHook1
