// import  { useState } from 'react';
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// // import Student from './Student.jsx'
 
// // import "bootstrap/dist/css/bootstrap.min.css";


// function written(){
//   const[name,setname]=useState(0)


//   const handler=()=>{
//     setname( (p)=>p+1)
//   }
//   const handler1=()=>{
//     setname((p)=>p-1)
//   }

//   return(
//     <div>
//       <button onClick={handler}>plus</button> 
    
//           <button onClick={handler1}>mines</button> 
//       <p>{name}</p>
//     </div>
//   )
// }
// export default written;




// function Plate({food}){
//   return <h1>here is your {food}</h1>
// }

// function Resturant(){
//   return(
//   <div>
    
//     <Plate food="" />
//     <Plate food="mandhi" />
//     <Plate food="chore" />     
//   </div>
//   )
// }
// export default Resturant;

// function Car({cars}){
//   return <h1>here is your {cars}</h1>
// }
//   function Vehicle(){
//   return(
//     <div>
//      <Car cars="bmw"/>
//       <Car cars="bmw"/>
//        <Car cars="bmw"/>
//     </div>
//   )
//   }
//   export default Vehicle;
// import React from "react";
// function Car({cars}){
//   return <h1>hey {cars}</h1>
// }

// export default Car;
  
// import React from "react";
// function App() {
//   let isLoggedIn = false;

//   if (isLoggedIn) {
//     return <h1>Welcome User</h1>;
//   } else {
//     return <h1>Please Login</h1>;
//   }
// }

// export default App;
// function App() {
//   let age = 20;

//   return (
//     <div>
//       {age >= 18 ? <h1>Adult</h1> : <h1>Minor</h1>}
//     </div>
//   );
// }

// export default App;
const fruits = ["Apple", "Banana", "Orange"];

function FruitList() {
  return (
    <div>
      {fruits.map((item) => (
        <h2>{item}</h2>
      ))}
    </div>
  );
}

