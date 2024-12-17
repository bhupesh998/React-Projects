import React from 'react'
import MainNavigation from './MainNavigation'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
      <MainNavigation />
      <p><Outlet/></p>
    </div>
  )
}

export default Root
