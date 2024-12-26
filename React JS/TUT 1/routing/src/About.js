import React, { useState } from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams()                      //this useSearchParams() is dealbraker
  const showReactVideos = searchParams.get('filter') === 'react'

  console.log(showReactVideos)
  
  return (
    <div>
      This is About
      <nav>
      <Link to = 'videos'> Videos</Link>
      <Link to = 'Notes'> Notes </Link>
      </nav>
      <Outlet/>

      <button onClick={()=> setSearchParams({filter: 'react'})}>Apply Filter</button>
      <button onClick={()=> setSearchParams({filter: ''})}>Rese Filter</button>

      {showReactVideos ? <h1>Show all reacts videos</h1> : <h1>Show videos</h1>} 
    </div>
  )
}

export default About



