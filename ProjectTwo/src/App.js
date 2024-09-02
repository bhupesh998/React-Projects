import React , { useState, useCallback} from 'react'
import TextComponent from './components/TextComponent.jsx'
import ButtonComponent from './components/ButtonComponent.jsx'

const App =()=>{
    const [message, updateMessage ] = useState("Hello Buddy")
   

   const changeMessage = useCallback(()=>{
   // updateMessage("Hello I am Back")
    console.log("before update value is---->", message);
    
   //below use when you want to deal with previous data as well
   //update message is working asynchronously , proved by printing before and after update value
   updateMessage((prevData)=>{
    console.log("Previous Data is", prevData);
    return "Hello Batman"
   })

   console.log("after update value is---->", message);
    
   }, [])

   console.log("Outside change Message", message);
   

   return (
    <>
    <div>{message}</div>
  { 
  // <button onClick={changeMessage}>Change Me</button>
  }
    <ButtonComponent clickAction={changeMessage}>Change Me</ButtonComponent>
    </>
   )
}

export default App