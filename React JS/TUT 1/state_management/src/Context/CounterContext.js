import React, { createContext, useState} from "react";

export const CounterContext = createContext(null);

export const CounterProvider = ({children}) => {        //{children}, here we destructurized props
    
    const [count, setCount] = useState(0)
    
    return(
    <CounterContext.Provider value = {{count, setCount}}>
        {children}
    </CounterContext.Provider>
    )
}