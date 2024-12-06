import React from 'react'

const TabButtonComponent = ({children, ...forwardingProps}) => {



  return (
    <li>
        <button {...forwardingProps}>
                {children}
        </button>
    </li>
  )
}

export default TabButtonComponent
