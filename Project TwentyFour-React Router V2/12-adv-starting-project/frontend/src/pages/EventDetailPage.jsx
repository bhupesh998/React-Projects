import React from 'react'
import { useRouteLoaderData } from 'react-router-dom'
import EventItem from '../components/EventItem'

const EventDetailPage = () => {

  const data = useRouteLoaderData('event-detail')
    
  return (
    <div>
      <EventItem event={data.event}/>
      
    </div>
  )
}

export default EventDetailPage

export const loader = async ({ request , params})=>{

  // you can access the route parameter you need because react router which will call this loader function for you 
  // actually passes an object when executing this loader function for you that object contains two important pieces of data 
  // a request property or a params property which contains an object with all route parameters
  const response = await fetch(`http://localhost:8080/events/${params.id}`);

  if(!response.ok){
    throw new Response(JSON.stringify({"message": "could not fetch data"}), {status: 500})
  }else{
    return response
  }
  
}
