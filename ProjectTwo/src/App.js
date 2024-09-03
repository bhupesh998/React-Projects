import React, { useState, useCallback, useEffect } from 'react'
// use effect can be called at certain ocassions when component renders , change is there in props and component mounts
import TextComponent from './components/TextComponent.jsx'
import ButtonComponent from './components/ButtonComponent.jsx'
import TimerComponent from './components/TimerComponent.jsx'

const App = () => {

  const [showTimer, toggleTimer]= useState(true)

  return <>
    { showTimer && <TimerComponent />}
    <button onClick={toggleTimer(!showTimer)}>Remove Timerr</button>
  </>
// from here we will remove the timer but the setinterval will be always running still , this is a memory leak
// so we need to do cleanup , this clean up function will run for every use efeect with dependency array or not
// in the end  return ()=>{
  
// }

}

export default App