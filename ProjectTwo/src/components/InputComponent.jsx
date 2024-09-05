
import React,{ forwardRef } from 'react'

const InputComponent = forwardRef((props, ref) => {
    console.log("Input Component Props", props);
    
  return (
    <div>
        <input ref={ref}    type='text'/>

    </div>
  )
})

export default InputComponent