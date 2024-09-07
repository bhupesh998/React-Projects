import React, {  useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incByAmount } from './components/counterSlice'

export default function App() {
  
  const count = useSelector((state) => state.counterKey.counterValue)
  const dispatch = useDispatch()

  return <>
    <h1>{count}</h1>
    <button onClick={()=>dispatch(increment())}>Increase</button>
    <button onClick={()=>dispatch(decrement())}>Decrase</button>
    <button onClick={()=>dispatch(incByAmount(6))}>Increase by N</button>
  
  </>
}
