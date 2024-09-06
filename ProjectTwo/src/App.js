import React, { useRef, useState } from 'react'
import TimerComponent from './components/TimerComponent.jsx'
import ButtonWithTooltip from './components/ButtonWithTooltip.jsx';
import InputComponent from './components/InputComponent.jsx';
import SecondParent from './components/SecondParent.jsx';
import PrintTable from './components/PrintTable.jsx';

// useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
export default function App() {
  const [counter, setCounter]= useState(0)
  const [counterTwo, setCounterTwo]= useState(0)
  return <>
  
    Counter1: {counter} <br/> <button onClick={()=>setCounter((prev)=>++prev)}>Count1</button>
    Counter2: {counterTwo}<br/> <button onClick={()=>setCounterTwo((prev)=>++prev)}>Count2</button>

    <PrintTable num={counter}/>
  </>
}
