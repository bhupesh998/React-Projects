import React from 'react'
import EventForm from '../components/EventForm'
import { redirect } from 'react-router-dom'

const NewEventPage = () => {
  return (
   
      <EventForm method="post"/>
    
  )
}

export default NewEventPage

export const action =async ({ request, params })=>{

  const method = request.method

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

  let url = `http://localhost:8080/events`
  if(method === "PATCH"){
    const id = params.id
    url = `http://localhost:8080/events/` +id
  }


 const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(eventData)

  })

  console.log("response.status", response.status);
  

  if(response.status === 422){
    // i am not redirecting to a diffrent page or throwing an error 
    // just as we can return a response in our loader and use that response in our component and pages, we can also use return response from action also
    return response
    // this response is automatically formatted by react router for us
  }

  if (!response.ok) {
  
    // now if i want to show validation error on the input page instead of redirecting the user to a error page 
     throw new Response(JSON.stringify({"message": "could not fetch data"}), {status: 500}) //this will return  error page

   } 

   // function by react router and creates a response object that simple redirects the user to a diffrent page
   return redirect('/events')
}
