import { Form, redirect, useActionData, useNavigate, useNavigation } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {

  const data = useActionData() // it gives the access to closest action , it will help in getting the data returned by our action
  // i can use it here in this component as its rendered by the page component on which we have our action

  // this data is same as the response that we return on our backend 


  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..');
  }

  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    // if we use the action property on form then the action function of another route path would be triggered that is specifed in the action property
    // if not using that it will trigger the action function of currently active route
    <Form  method={method}  className={classes.form}>
      { data && data.errors && <ul>
       { Object.values(data.errors).map(err => <li key={err}>{err}</li>)}
        </ul>}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title"  defaultValue={event ? event.title: ""}/>
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image"  defaultValue={event ? event.image: ""} />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date"  defaultValue={event ? event.date: ""}/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5"  defaultValue={event ? event.description: ""} />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{ isSubmitting ? "Submitting....": "Save"}</button>
      </div>
    </Form>
  );
}

export default EventForm;

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
