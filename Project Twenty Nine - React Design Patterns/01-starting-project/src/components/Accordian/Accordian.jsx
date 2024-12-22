import React, { createContext, useState , useContext} from 'react'

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

   

    function openItem(id){
        setOpenItemId(id)
    }

    function closeItem(){
        setOpenItemId(null)
    }

    let contextValue = {
        openItemId,
        openItem,
        closeItem
    }

  return (
    <AccordianContext.Provider value={contextValue}>
    <ul className={className}>
        {children}
    </ul>
    </AccordianContext.Provider>
  )
}

export default Accordian