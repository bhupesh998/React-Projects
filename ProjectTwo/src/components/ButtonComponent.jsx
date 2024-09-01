import React from 'react'

const ButtonComponent = (props) => {
  console.log(props);
  const {children, clickAction } = props

  const handleButtonClick=()=>{
    clickAction?.() // optional chaining if clickAction exist then execute otherwise don't execute it
  }
  
  return (
    <button onClick={handleButtonClick}>{children}</button>
  )
}

export default ButtonComponent