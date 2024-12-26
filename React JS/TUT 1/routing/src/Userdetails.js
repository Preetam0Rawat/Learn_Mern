import React from 'react'
import { useParams } from 'react-router-dom'

const Userdetails = () => {
    const params = useParams()
  return (
    // console.log({params})
    <div>
       {params.userid}
    </div>
  )
}

export default Userdetails
