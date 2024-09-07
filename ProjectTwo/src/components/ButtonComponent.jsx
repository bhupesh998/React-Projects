import React, {memo , useContext } from 'react'
import { ThemeContext } from './Context';

const ButtonComponent = memo((props) => {
  console.log("Button Rerender");
  
  const {children, clickAction } = props
  const [theme, setTheme] = useContext(ThemeContext)

  const handleButtonClick=()=>{
    clickAction?.() // optional chaining if clickAction exist then execute otherwise don't execute it
    setTheme((prev)=>{
      return prev=='dark'? 'light': 'dark'
    })
  }
  
  return (
    <button onClick={handleButtonClick}>{children} : {theme}</button>
  )
})

export default ButtonComponent