import React from 'react'
import { useAccoridanContext } from './Accordian'
import { useAccoridanItemContext } from './AccordianItem'

const AccoridanContent = ({ className, children}) => {

  const {openItemId} = useAccoridanContext()
  const id = useAccoridanItemContext()

  const isOpen = openItemId==id

  return (
    <div className={isOpen ? `${className ?? ''} open`: `${className ?? ''} close`}>{children}</div>
    
  )
}

export default AccoridanContent