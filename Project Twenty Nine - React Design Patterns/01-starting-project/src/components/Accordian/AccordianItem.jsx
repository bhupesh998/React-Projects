import React, { createContext, useContext } from 'react'

const AccoridanItemContext = createContext()

export function useAccoridanItemContext(){
  const ctx= useContext(AccoridanItemContext)
  
      if(!ctx){
          throw new Error("Accordian Related Components Must be Wrapped By <Accordian.Item>")
      }
  
      return ctx
}

const AccordianItem = ({id,  className , children}) => {

  return (
    <AccoridanItemContext.Provider value={id}>
    <li className={className}>
      {children}
    </li>
    </AccoridanItemContext.Provider>
  )
}

export default AccordianItem