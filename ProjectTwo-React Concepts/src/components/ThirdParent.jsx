import React, { useState,memo } from 'react'

//memo prevents the re-rendering of application until and unless the props are changing
const ThirdParent =memo( (props) => {

    let startTime = performance.now();
    while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

    const {handleChange} = props
    const [counter, setCounter] = useState(0)
    const increment =()=>{
        setCounter((prev)=>++prev)
        handleChange?.()
    }

  return (
    <>
    <div>ThirdParent</div>
    {counter}
    <br/>  <br/>
    <button onClick={increment}>Increase Me</button>
    </>
  )
})

export default ThirdParent