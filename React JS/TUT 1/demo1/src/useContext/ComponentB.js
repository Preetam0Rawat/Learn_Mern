import React from 'react'
import ComponentC from './ComponentC'
import { useContext } from 'react'
import { idContext, userContext } from '../App'

const ComponentB = () => {
    const user = useContext(userContext)                /*Easy method (reccomended )*/
    const id = useContext(idContext)
  return (
    <div>
      {/* <ComponentC/> */}
      userConext is {user} and idContext is {id}
    </div>
  )
}

export default ComponentB
