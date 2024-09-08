import React, { useState } from 'react'

const InputComponentRender = (props) => {
    const [value , setValue]= useState('')
    const handleChange =(e)=>{
        setValue(e.target.value)
    }
  return (
    <div>InputComponentRender<br></br>
        <input value={value} onChange={handleChange}/>
        <hr></hr>
        {props.renderTextBelow(value)}
    </div>
  )
}

export default InputComponentRender