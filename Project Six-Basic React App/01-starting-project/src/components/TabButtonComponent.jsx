import React from 'react'

const TabButtonComponent = ({children, onSelect}) => {



  return (
    <li>
        <button onClick={onSelect}>
                {children}
        </button>
    </li>
  )
}

export default TabButtonComponent
