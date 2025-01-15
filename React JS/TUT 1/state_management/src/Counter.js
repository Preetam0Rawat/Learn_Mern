import React, { useContext } from 'react'
import { CounterContext } from './Context/CounterContext'

const Counter = () => {
    const ctrContext = useContext(CounterContext)
    return (
        <div>
            <button onClick={() => ctrContext.setCount(ctrContext.count = ctrContext.count + 1)}>Increment</button>
            <button onClick={() => ctrContext.setCount(ctrContext.count = ctrContext.count - 1)}>Decrement</button>
        </div>
    )
}

export default Counter