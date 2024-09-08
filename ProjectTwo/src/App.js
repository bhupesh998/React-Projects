import React from 'react'
import InputComponentRender from './components/InputComponentRender.jsx'

//Render Props pattern
export default function App() {

 // const showValue = value => <> The Value is : {value}</>
 // above was the code that we used to render input but if a requirement comes that we need the rendered value in h1 then we can change it here only
 // and no need to change the inputcomponent
 const showValue = value => <h1> The Value is : {value}</h1>
  const multiplyValue =value=><>The Multiplied Value is : {value*10}</>


  return <>
  <InputComponentRender renderTextBelow ={showValue}/>
  <hr/>
  <InputComponentRender renderTextBelow ={multiplyValue}/>
  </>
}
