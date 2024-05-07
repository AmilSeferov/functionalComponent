// import { useState ,useEffect} from 'react'
// import './App.css'

import { Route, Routes } from "react-router-dom"
import { Cat } from "./cat"
import { Plant } from "./plant"
import { Person } from "./person"
import { Nav } from "./nav"

// function App() {
//   const [count, setCount] = useState(0)
//   // const [style, setStyle] = useState({style:"none"})
// // console.log(count)
// const cl =function(){setint=setInterval(setCount(()=>{return Math.random()*9 }),100)}
// // useEffect(() => {
// //  window.addEventListener('keydown',(e)=>{
// //   if(e.key==="Escape"){
// //     setStyle({style:'none'})
// //   }

// //  })
// // }, [])

//   return (
//    <>
//    <button onMouseDown={()=>{
//     console.log("clik")
  
    
//   //  }}
//   //  onMouseUp={()=>{clearInterval(int)}}>random</button>
  //  <p>{count}</p>
   {/* <button onClick={()=>{
    setStyle({style:'block'})
   }}>open</button>
   <div style={{display:style.style}}>
    <p>alllllllllllllllll</p>
    <button onClick={()=>{
    setStyle({style:'none'})
   }}>close</button>
   </div> */}
//    </>
      
//   )
// }

// export default App
function App() {
  return<>
  <Nav/>
  <Routes>
  <Route path="/animals" element={<Cat/>}></Route>
     <Route path="/plants" element={<Plant/>}></Route>
     <Route path="/people" element={<Person/>}></Route>

  </Routes>
  </>
}
export default App