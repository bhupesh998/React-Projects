import React from 'react'
import logoImg from '../assets/investment-calculator-logo.png'

const HeaderComponent = () => {

  return (
    <header id='header'>
        <img src={logoImg} alt='Calculator Logo' />
        <h1>Investment Calculator</h1>
    </header>
  )
}

export default HeaderComponent
