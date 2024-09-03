
import React,{memo, useEffect} from 'react'

const TextComponent = memo((props) => {
    const { externalData , children } = props

    useEffect(()=>{
      console.log("i am useefeect from text xomponent", externalData);
      
    }, [externalData])
    
  return (
    <div>{externalData}</div>
  )
})

export default TextComponent