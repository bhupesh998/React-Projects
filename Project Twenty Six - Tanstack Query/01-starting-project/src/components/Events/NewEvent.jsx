import { Link, useNavigate } from 'react-router-dom';
// we can also send data with useQuery as we are passing a function and can write any logic in that
// but to send data prefer useMutation as it is optimised for sending data as the request will not be sent by default when component loads that is the case with use query
// but request are only sent when you want to send the request
import { useMutation } from '@tanstack/react-query'
import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { createNewEvent, queryClient } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function NewEvent() {
  const navigate = useNavigate();

  // the mutate returned is a function that we can call in this component to send the request 
  const {data , mutate, isPending , isError, error } = useMutation({
    mutationFn : createNewEvent,
    onSuccess: ()=>{
      // to cause refetch of data that are fetched by useQuery because when we have added event but it was not getting shown instantly after creating on events because useQuery was not refetching the results as it was showing the cached data 
      queryClient.invalidateQueries({
        queryKey : ['events'] // this will invalidate all queries that includes this key 
       // exact : true // if this is set then queries will be invalidated that exactly matches the queryKey and not includes it
      }) // it tells react that data fetched by certain queries is invalidated and new data should be fetched
         navigate('/events') // it will route to /events when muattion call is successful
    }
  })

  function handleSubmit(formData) {
    mutate({ event : formData}) // passing object { eventData : formData} because in backend we are expecting an event key
    // navigate() - on muattion call it will always call useNavigate , wheather it fails or success 
  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        { isPending && 'Submitting...'}
        { 
        !isPending &&  <>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Create
          </button>
        </>
        }
       
      </EventForm>
      { isError && <ErrorBlock title="Failed To Create Event" message={error.info?.message || 'Failed To Create Data'}/>}
    </Modal>
  );
}
