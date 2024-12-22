import React from 'react'
import { useAccoridanContext } from './Accordian'

const AccordianItem = ({ id, title, children, className}) => {
  const {
    openItemId,
    toggleItem
}
= useAccoridanContext()

    const isOpen = openItemId==id
    console.log("Render called", id, openItemId, isOpen);
    
    function handleClick(){
        toggleItem(id)
    }

  return (
            <li className={className}>
            <h2 onClick={handleClick}>{title}</h2>
            {isOpen}
            <div className={isOpen ? 'accordian-item-content open': 'accordian-item-content'}>{children}</div>
    </li>
  )
}

export default AccordianItem