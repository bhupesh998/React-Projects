import React from 'react'
import ButtonComponent from "./components/ButtonComponent.jsx"



const App =()=>{
   const clickAction =()=>{
        console.log("I was Clicked from App");
    }
    return <>
    <ButtonComponent clickAction={clickAction} >Click me</ButtonComponent>
    </>
}

export default App