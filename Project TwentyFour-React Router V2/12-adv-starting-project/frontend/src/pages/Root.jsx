import React from 'react'
import MainNavigation from './MainNavigation'
import { Outlet, useLoaderData } from 'react-router-dom'

const Root = () => {
  // useLoader data will not work here because i am trying to get data from a route defined at lower level to a component at top level or parent level but it can be accessed at lowerlevel or on the same level
  // const events = useLoaderData()
  // console.log("events", events);
  
  return (
    <div>
      <MainNavigation />
      <p><Outlet/></p>
    </div>
  )
}

export default Root
