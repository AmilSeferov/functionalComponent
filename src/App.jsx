import { useState ,useEffect} from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [style, setStyle] = useState({style:"none"})
// console.log(count)
// const cl =function(){setCount(()=>{return Math.random()*9 })}
useEffect(() => {
 window.addEventListener('keydown',(e)=>{
  if(e.key==="Escape"){
    setStyle({style:'none'})
  }

 })
}, [])

  return (
   <>
   {/* <button onClick={()=>{
    console.log("clik")
  setInterval(cl,100)
    
   }}
   onDoubleClick={()=>{clearInterval(cl)}}>random</button>
   <p>{count}</p> */}
   <button onClick={()=>{
    setStyle({style:'block'})
   }}>open</button>
   <div style={{display:style.style}}>
    <p>alllllllllllllllll</p>
    <button onClick={()=>{
    setStyle({style:'none'})
   }}>close</button>
   </div>
   </>
      
  )
}

export default App
