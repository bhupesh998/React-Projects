import React , {forwardRef} from 'react'
import withDimensions from './withDimensions'

const Comp2 = (props, abc) => {
  return (
    
    <div ref={abc} className='comp2'>
        Comp2
    Width is : {props.width} 
    Height is : {props.height} 
    </div>
  )
}

export default withDimensions(forwardRef(Comp2))