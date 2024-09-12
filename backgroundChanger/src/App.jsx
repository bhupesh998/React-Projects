import { useState } from 'react'

import './App.css'

function App() {
  const [color , setColour] = useState('red')
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-2 py-3 rounded-2xl'>
          <button onClick={()=>setColour("yellow")} className='outline-none px-3 py-1 rounded-full' style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={()=>setColour("blue")} className='outline-none px-3 py-1 rounded-full' style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={()=>setColour("green")} className='outline-none px-3 py-1 rounded-full' style={{backgroundColor: "green"}}>Green</button>
          <button onClick={()=>setColour("orange")} className='outline-none px-3 py-1 rounded-full' style={{backgroundColor: "orange"}}>Orange</button>
          <button onClick={()=>setColour("purple")} className='outline-none px-3 py-1 rounded-full' style={{backgroundColor: "purple"}}>Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
