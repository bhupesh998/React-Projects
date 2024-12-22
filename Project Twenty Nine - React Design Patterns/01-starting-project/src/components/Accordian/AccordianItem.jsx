import React from 'react'
import { useAccoridanContext } from './Accordian'

const AccordianItem = ({ id, title, children, className}) => {
  const {
    openItemId,
    openItem,
    closeItem
}
= useAccoridanContext()

    const isOpen = openItemId==id
    console.log("Render called", id, openItemId, isOpen);
    function handleClick(){
        
        
        if(isOpen){
            console.log("close item function");
            
            closeItem(null)
        }else{
            openItem(id)
        }
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