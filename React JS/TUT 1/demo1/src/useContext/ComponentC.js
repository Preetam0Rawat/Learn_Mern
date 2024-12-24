import React from 'react'
import { userContext , idContext} from '../App'

const ComponentC = () => {
    return (
        <div>
            <userContext.Consumer>                      
               {                                                /*Long method (not reccomended )*/
                user=>{
                    return(
                        <idContext.Consumer>
                            {
                                id =>{
                                    return(
                                        <div>userContext value is {user} and idContext is {id}</div>
                                    )
                                }
                            }
                        </idContext.Consumer>
                    )
                }
               }
            </userContext.Consumer>
        </div>
    )
}

export default ComponentC
