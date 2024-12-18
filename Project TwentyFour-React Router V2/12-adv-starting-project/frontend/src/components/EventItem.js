import { Link, useSubmit } from 'react-router-dom';
import classes from './EventItem.module.css';

function EventItem({ event }) {

  // just as we can navigate programatically , we can submit the data and trigger an action programatically
  const submit = useSubmit()
  function startDeleteHandler() {
    
    const proceed = window.confirm("Are You Sure ?")

    if(proceed){
      // 1st argument is data we want to submit and that data would automatically be formatted in formData object which we could extract with the special formData method
      // here we don't need such data so we can set this to null
      // 2nd is some properties like method and action 
      // below submit will trigger an action defined on eventdetail page programmatically
      submit(null , { 
        method: "DELETE", 
        // action: "/some path if action is defined on other path instead of currently active route here in this case its defined on same path where this component renders in end so no need"
      } )


    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
