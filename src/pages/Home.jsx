import React, { useEffect } from 'react'

export default function Home() 
{
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));
    },[])
    return (
        <div>Home</div>
    )
}