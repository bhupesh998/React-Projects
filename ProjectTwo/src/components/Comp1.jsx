import React, {forwardRef} from 'react'
import withDimensions from './withDimensions'

const Comp1 = (props, ref) => {
  return (
    <div ref={ref} className='comp2'>
        Comp1 : Random Number - {props.randomNum}
    Width is : {props.width} 
    Height is : {props.height} 
    </div>
  )
}

export default withDimensions(forwardRef(Comp1)) // we are calling this function , whatever is returned we are exporting it