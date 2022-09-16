import React from 'react'
import {useState,useEffect} from 'react'
import useFetch from './useFetch'

function Home() {

  const {
    error,
    isPending,
    data: name,
  } = useFetch("http://localhost:8000/client");


  const handleClick = (e) => {
    console.log('hello',e)
  }  
 

  const handleClickagain = (name, e )=>{
        console.log(name, e.detail);
       // setData('usestate hooook')
    }


  return (
    <div className='Home'>

            { error && <div>{ error }</div> }

            <h1 style={{height:"300px", width:"300px",margin:"auto"}} >CIH HOME PAGE </h1>


            { isPending && <div>Loading...</div> }  {/*  conditional uploading / loading*/}


            
    </div>
  )
}

export default Home
