import React from 'react'
import MainNavigation from './MainNavigation'
import { Outlet, useLoaderData, useNavigation } from 'react-router-dom'

const Root = () => {
  // useLoader data will not work here because i am trying to get data from a route defined at lower level to a component at top level or parent level but it can be accessed at lowerlevel or on the same level
  // const events = useLoaderData()
  // console.log("events", events);

  // react router has given us a special hook to check the current route transition state, to find out if transition has be initiated or we are waiting for data to arrive
  const navigation = useNavigation()
  
  return (
    <div>
      <MainNavigation />
      <main>
      
      {/* One way to check if we are waiting for data to load or not 
      the loading comoonent will be added to visible page and not the page that we are visiting , instead it will show up on page from which we are transitioning or that is visible
       { navigation.state == "loading" && <p>Loading........</p>}
       */}
      <p><Outlet/></p>
      </main>
    </div>
  )
}

export default Root
