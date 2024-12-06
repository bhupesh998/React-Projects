import React from 'react'

const TabsComponent = ({children, buttons, buttonsContainer}) => {

    const ButtonsContainer = buttonsContainer
    // we can also accept buttonsContainer as ButtonsContainer to avoid assiging and then using , for that the place where its passed we need to pass it as ButtonsContainer="menu"
  return (
   <>
   <ButtonsContainer>
        {buttons}
   </ButtonsContainer>
   {children}
   </>
  )
}

export default TabsComponent
