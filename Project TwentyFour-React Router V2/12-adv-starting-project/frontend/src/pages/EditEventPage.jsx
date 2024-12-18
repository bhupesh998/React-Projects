import React from 'react'
import EventForm from '../components/EventForm'
import { useRouteLoaderData } from 'react-router-dom'

const EditEventPage = () => {
const data = useRouteLoaderData('event-detail')
const event = data.event
  return (
    <div>
      <EventForm event={event}/>
      
    </div>
  )
}

export default EditEventPage
