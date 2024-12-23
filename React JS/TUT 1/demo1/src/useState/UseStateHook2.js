import React, { useState } from 'react'

const UseStateHook2 = () => {
    const [address ,setAddress] = useState({city : " " ,country : " "})
  
  return (
    <div>
      <input
        type='text'
        value={address.city}
        onChange={e=>setAddress({...address, city : e.target.value})}
      />
      <input
      type='text'
      value={address.country}
      onChange={e=>setAddress({...address, country : e.target.value})}
    />

    <h1>City : {address.city}</h1>
    <h1>Country : {address.country}</h1>
</div>
  )
}

export default UseStateHook2
