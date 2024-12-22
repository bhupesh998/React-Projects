import React from 'react'
import { useAccoridanContext } from './Accordian'
import { useAccoridanItemContext } from './AccordianItem'

const AccoridanTitle = ({className, children}) => {

 const {toggleItem} = useAccoridanContext()
 const id = useAccoridanItemContext()

  return (
    <h2 className={className} onClick={()=>toggleItem(id)}>{children}</h2> 
  )
}

export default AccoridanTitle