import React, {  useState} from 'react'
import { createPortal } from 'react-dom'


export default function App() {
 const [showModal, toggleModal] = useState(false)
  return <>
   <h1 >Hey i am root</h1>
   <button onClick={()=>toggleModal((prev)=>!prev)}>Toggle Modal</button>
   {showModal && <div>This is Modal Content</div>}
   {showModal && createPortal(<div>This is Modal Content</div>, document.body)}
  </>
}

