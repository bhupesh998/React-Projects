import { Form, useActionData, useNavigate, useNavigation } from 'react-router-dom';

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
    <Form  method="post"  className={classes.form}>
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
