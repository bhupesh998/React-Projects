import React, { useMemo, useRef, useState } from 'react'
import TimerComponent from './components/TimerComponent.jsx'
import ButtonWithTooltip from './components/ButtonWithTooltip.jsx';
import InputComponent from './components/InputComponent.jsx';
import SecondParent from './components/SecondParent.jsx';
import PrintTable from './components/PrintTable.jsx';

// useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
export default function App() {
  const [counter, setCounter]= useState(0)
  const [counterTwo, setCounterTwo]= useState(0)
  //const [myObj = setMyObj] = useState({channel: "Ted"})
  const myObj = useMemo(()=>{channel: "Ted"}, []) 
  const arr= useMemo(()=>["test", "array"], [])
  const val =10
  return <>
  
    Counter1: {counter} <br/> <button onClick={()=>setCounter((prev)=>++prev)}>Count1</button>
    Counter2: {counterTwo}<br/> <button onClick={()=>setCounterTwo((prev)=>++prev)}>Count2</button>

    {/* <PrintTable num={counter} obj={myObj}/> */}
    {/* <PrintTable num={counter}  val={val}/> */}
    {/* <PrintTable num={counter}  arr={arr}/> */}
    <PrintTable num={counter} obj={myObj}  arr={arr} val={val}/>
  </>
}
