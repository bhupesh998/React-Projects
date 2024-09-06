import React, { useRef, useState } from 'react'
import TimerComponent from './components/TimerComponent.jsx'
import ButtonWithTooltip from './components/ButtonWithTooltip.jsx';
import InputComponent from './components/InputComponent.jsx';
import SecondParent from './components/SecondParent.jsx';

//NOTE : Always make sure if you are passing function as props you wrap them in a useCallback
export default function App() {
  // useCallback is a React Hook that lets you cache a function definition between re-renders
  // when state is updated rerender happen and in that if react finds a function then it again preserves a space in memory for that function on each render, this is a costly operation

  
  const [count, setCount] = useState(0)
  const [countTwo, setCountTwo] = useState(0)
  

  return <>
    APP.JS Count : {count} <button onClick={()=>setCount((prev)=>++prev)}>Count App</button>
    APP.JS Count : {countTwo} <button onClick={()=>setCountTwo((prev)=>++prev)}>Count App</button>
    <br/>
    <SecondParent count={count}/>
  </>
}
