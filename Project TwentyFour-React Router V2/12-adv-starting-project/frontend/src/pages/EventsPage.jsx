import React from 'react'
import { Link} from 'react-router-dom'

const EVENTS = [
    { id: "p1", title: "Product 1"},
    { id: "p2", title: "Product 2"},
    { id: "p3", title: "Product 3"},
  ]

const EventsPage = () => {
  return (
    <div>
       {EVENTS.map((item)=>(<li key={item.id}><Link to={`/events/${item.id}`}>{item.title}</Link></li>))}
     
    </div>
  )
}

export default EventsPage
