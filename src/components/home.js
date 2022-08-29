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
            TITLE HERE
            { error && <div>{ error }</div> }
            <div name={name} title='title ' > </div>
         
         
            { isPending && <div>Loading...</div> }  {/*  conditional uploading / loading*/}

            <button onClick={handleClick}> SUBMIT </button>  {/* we just reference the function not provoqing it  */}
            <button onClick={(e)=> handleClickagain('abdelilah',e)}>click again</button>  {/*  this button doesn't get provoqed when clicking , bcz of tht way we called annonymos  function and not function () */} 
            
    </div>
  )
}

export default Home
