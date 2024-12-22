import React, { createContext, useState , useContext} from 'react'
import AccordianItem from './AccordianItem'
import AccoridanTitle from './AccoridanTitle'
import AccoridanContent from './AccoridanContent'

let AccordianContext = createContext()

export function useAccoridanContext(){
    const ctx= useContext(AccordianContext)

    if(!ctx){
        throw new Error("Accordian Related Components Must be Wrapped By <Accordian>")
    }

    return ctx
}

const Accordian = ({children, className}) => {

    const [openItemId, setOpenItemId ] = useState()

   function toggleItem(id){
    setOpenItemId((prev)=>prev === id ? null : id)
   }

    let contextValue = {
        openItemId,
        toggleItem
    }

  return (
    <AccordianContext.Provider value={contextValue}>
    <ul className={className}>
        {children}
    </ul>
    </AccordianContext.Provider>
  )
}

// adding a new property to Accordian componet , item
// To make or show that accordianitem is a dependent component on accordian we have add Item property in accordian and that will refer to accordianItem only
Accordian.Item = AccordianItem
Accordian.Title = AccoridanTitle
Accordian.Content = AccoridanContent

export default Accordian