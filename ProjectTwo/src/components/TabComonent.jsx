import React, { useContext, useState } from 'react'
import { tabContext } from './Context'

const TabComonent = ({ currentTab, onChange, children }) => {


    return (
        <div className='tab'>
            <div>TabComonent</div>
            <hr />
            <tabContext.Provider value={{ currentTab, onChange }}>
                {children}
            </tabContext.Provider>
        </div>
    )
}

TabComonent.HeadsContainer = ({ children }) => {
    return (
        <div className='headsContainer'>
            {children}
        </div>
    )
}

TabComonent.Item = ({ label, index, children }) => {
    const {currentTab, onChange} = useContext(tabContext)
    const handleClick =()=>{
        onChange(index)
    }
    return (
        <div onClick={handleClick} className={`item ${currentTab === index ? "active" : ""}`} >
            {label}
        </div>
    )
}

TabComonent.ContentContainer = ({ children }) => {
    return (
        <div className='contentContainer'>
            {children}
        </div>
    )
}

TabComonent.ContentItem = ({ index, children }) => {
    const {currentTab} = useContext(tabContext)
    return currentTab ===index ? (
        <div>   
        {children} 
        </div>
    ): null
}

export default TabComonent