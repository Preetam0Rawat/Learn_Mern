import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Fetching = () => {
    const [posts, setPosts] = useState([])
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            console.log(res)    
            setPosts(res.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    }, [])

  return (
    <div>
        <h1>I am LearningFetching using useEffect hook</h1>
        <ul>
            { 
                posts.map((post)=>(
                   <li key ={post.id}>{post.title}</li>
                )) 
            }
      </ul>
    </div>
  )
}

export default Fetching
