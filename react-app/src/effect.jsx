import React, { useEffect, useState } from 'react'

const Effect = () => {
  const [counter,setcounter]=useState(0)
  const [counter1,setcounter1]=useState(0)

  useEffect(()=>{
      {console.log("side effects")}
   },[counter ])
  return (
    <div>
    <div>
      <h1>{counter}</h1>
      <button onClick={()=>setcounter(counter+1)}></button>
      {/* {console.log("side effects")} */}
    </div>
    <div>
     <h1>{counter1}</h1>
      <button onClick={()=>setcounter1(counter1+1)}></button>
      {/* {console.log("side effects")} */}
    </div>
  </div>
  )
}


export default Effect
