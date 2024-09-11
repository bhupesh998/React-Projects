import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const increaseValue=()=>{

    setCounter(++counter);
    setCounter(++counter);
    setCounter(counter++);
    setCounter(counter++);

      setCounter((prev)=>prev+1)
      setCounter((prev)=>prev+1)
      setCounter((prev)=>prev+1)
      setCounter((prev)=>prev+1)
      // Questio what will be the value when i increase a value ? 
      // if i do ++counter then after 4 set counter its value is 4, but when i use counter+1 then it updates as 1 only then i need to click again to update
      //why it happens because useState updates or send updates to UI in batches this counter+1 all updates the same counter
      /*
      The issue you're encountering is related to how React's state updates work. In React, state updates using setState (or setCounter in your case) are asynchronous. This means that when you call setCounter multiple times in a row, React batches the state updates, and each update doesn't immediately reflect the latest value of the state until the component re-renders.

When you call setCounter(counter + 1) four times in a row, each of these calls refers to the same initial value of counter due to the asynchronous nature of state updates. So, even though you're calling it four times, each call sees the counter value as it was when the function was first invoked.
*/
  }

  const decreaseValue=()=>{
    setCounter(--counter)
  }

  return <div>
    <h1 className='bg-green-400 p-6 rounded-xl'>Tailwind</h1>

  

    <h1> Value is {counter}</h1><br/>

    <button onClick={increaseValue}>Increase</button>
    <button onClick={decreaseValue}>Decrease</button>

    
  </div>
}

export default App
