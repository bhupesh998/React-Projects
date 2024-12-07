import { useState } from "react"
import HeaderComponent from "./components/HeaderComponent"
import InputComponent from "./components/InputComponent"
import OutputComponent from "./components/OutputComponent"

let INITIAL_VALUE = {
  initialInvestment : 10,
  annualInvestment: 10,
  expectedReturn: 10,
  duration: 10
}


function App() {
  const [userInput , setUserInput ] =  useState(INITIAL_VALUE)

  const isValidInput = userInput.duration >=1 && userInput.duration<=30

  const handleChange =  (value, key) => {
    console.log("handleChange getting called");

    setUserInput((prev) => {
        let updatedValue = { ...prev, [key]: +value } //adding plus before value will force the conversion of value as the value we are getting from event.target.value is a string , it will convert it to number
        return updatedValue
    })
}


  return (
   <div>
    
      <HeaderComponent />
      
      <InputComponent inputValue={userInput} handleChange={handleChange}/>
      
     { isValidInput &&  <OutputComponent checkInvestment={userInput} /> }
     {!isValidInput && <h1 className="center">Please Enter Valid Input: Duration</h1>}
   </div>

  )
}

export default App
