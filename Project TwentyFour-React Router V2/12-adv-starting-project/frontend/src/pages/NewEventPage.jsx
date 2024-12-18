import React from 'react'
import EventForm from '../components/EventForm'
import { redirect } from 'react-router-dom'

const NewEventPage = () => {
  return (
   
      <EventForm />
    
  )
}

export default NewEventPage

export const action =async ({ request, params })=>{

  // REACT router also helps  us in handling form data and helps in extracting the form data 
  // make sure all inputs have the name attribute because they will be used to extract data 
  // also instead of form element use form component provided by react router dom this will ensure the browser default of sending the request to backend is omitted and instead it will take your  request 
  // and give it to action and this request will contain all the data that was submitted as part of form

  const data = await request.formData()

  const eventData = {
    title: data.get("title"),
    image : data.get("image"),
    date: data.get("date"),
    description: data.get("description")

  }

 const response = await fetch(`http://localhost:8080/events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(eventData)

  })

  if (!response.ok) {
  
    throw new Response(JSON.stringify({"message": "could not fetch data"}), {status: 500})
   } 

   // function by react router and creates a response object that simple redirects the user to a diffrent page
   return redirect('/events')
}
