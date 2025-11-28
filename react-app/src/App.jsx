// import  { useState } from 'react';
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// // import Student from './Student.jsx'
 
// // import "bootstrap/dist/css/bootstrap.min.css";



import React from "react"
import { useState } from "react"
function Count(){

  const [counter,setcounter]=useState(0)
  const[cleared,setclear]=useState("")

  const Handler=()=>{
    setcounter(counter+1)
  }
    const Clear=()=>{
      setCounter(0);
      setclear("") 
    }
  
  return(
    <div>
      <p>here the count {counter}</p>
      <button onClick={Handler}>switch</button>
      <button onClick={Clear}>switch</button>

    </div>
  )
}
export default Count;

