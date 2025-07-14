import { nanoid } from "nanoid"
import { createContext, useEffect } from "react"
import React, { useState } from 'react'

export const recipeContext = createContext(null)
const Recipe = (props) => {
    const [data, setdata] = useState([])  
    useEffect(()=>{
  setdata( JSON.parse(localStorage.getItem("dataa")) || [])
   
    },[])

    console.log(data);
    
  
  return (
    <div>
        <recipeContext.Provider value={[data, setdata]} >
            
      
        {props.children}
            
        </recipeContext.Provider>
    </div>
  )
}

export default Recipe