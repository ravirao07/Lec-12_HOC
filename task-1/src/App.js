import React, { useState } from 'react'
import './App.css'
const App =()=>{
  return(
    <div className='App'>
      <h1>App Component</h1>
      <HOC/>
      <Count/>
    </div>
  )
}
function HOC()
{
  return(
    <h2>This HOC Component</h2>
  )
}
function Count()
{
  const [value,setValue]= useState(0)
  return(
   <div>
     <h2>This Count</h2>
     <h1>{value}</h1>
     <button onClick={()=>setValue(value+1)}>Click Me</button>
   </div>
  )
}
export default App
