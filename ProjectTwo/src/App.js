import React, { useRef, useState } from 'react'
import TimerComponent from './components/TimerComponent.jsx'
import ButtonWithTooltip from './components/ButtonWithTooltip.jsx';
import InputComponent from './components/InputComponent.jsx';

//useRef is a React Hook that lets you reference a value that’s not needed for rendering.
// useRef has a capability that is it can remember the value during rerendering
// chaging ref doesn't causes a rerender, ref has a memory that persist accross various render cycles

//useState is a React Hook that lets you reference a value that’s needed for rendering.

export default function App() {

  let mylocal=0
  const ref = useRef(0)
  const inputRef = useRef(null);
  console.log("ref value", ref.current);
  
  const [count, setCount] = useState(0)

  function handleClick() {
    console.log("Focus Element", inputRef);
    console.log("Bounding Rectangel", inputRef.current.getBoundingClientRect());
    
    inputRef.current.focus();
  }


  return (
  <>
  <button onClick={()=>{++mylocal}}>Local Variable</button>
  <button onClick={()=>{++ref.current}}>Change Ref</button>
  <button onClick={()=>{setCount((prev)=>++prev)}}>Change State</button>

  <span>My Local Variable: {mylocal}</span> <br/>
  <span>My Ref: {ref.current}</span> <br/>
  <span>My Count : {count}</span>

  <h2>Timer Example</h2>
  <TimerComponent>THis is my timer</TimerComponent>

  <h3>Dom Example</h3>
  {/* When you want to point any DOM then you make it a ref and ypu assign the ref to that element */}
  
 {/* <InputComponent inputRef={inputRef} /> // to a component we cannot pass ref as ref is a reserved keyword in HTML so one way is i change property name from ref to any other name like inputRef here  */}
    
 <InputComponent ref={inputRef} /> {/* In case you have no other way to use but the ref property then you can wrap the component in forwardRef */}  

      <button onClick={handleClick}>
        Focus the input
      </button>
  </>

  );
}
