import { Link, useNavigate, useParams, redirect, useSubmit, useNavigation } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query'
import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { fetchEvent, queryClient, updateEvent } from '../../util/http.js';

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams()
  const submit = useSubmit()
  const { state } = useNavigation()


  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', params.id], // because we want to fetch diffrent data for diffrent event , we can also use { id: id}
    queryFn: (signal) => fetchEvent(params.id, signal),
    staleTime : 10000 // on using resct router we know data we are fetching is fresh but we were getting two request one from react router and other from useQuery now statleTime set to 10 sec, we will only fetch data after 10 seconds
  })

  // alternative approach for this is defined in the action function
  /*
  const {mutate} = useMutation({
    mutationFn : updateEvent,
    // on muatate will be executed right when we call mutate so before we get a response
    // data we pass to mutate will also be passed to on mutatate
    onMutate:async (data)=>{
      await queryClient.cancelQueries({ queryKey : [events, params.id]}) // to cancel all queries for a specific keys, so that all queries with this key is cancelled and we would not have clashing response data from those queries & our optimistically updated query data
      const previousEvent = queryClient.getQueryData({ queryKey : [events, params.id]}) // gives us current stored data for a query
      queryClient.setQueryData([events, params.id],data.event )

      return {
        previousEvent 
      }
    },
    onError: (error, data, context)=>{
      // above returned object inside OnMutate is the context
      // data is the new data that was sent while updating
      queryClient.setQueryData([events, params.id], context.previousEvent)
    },
    onSettled: ()=>{
      // on selttled will be called in all cases no matter a mutation fails or succeeds
      queryClient.invalidateQueries([events, params.id]) // to confirm or keep frontend and backend data same or incheck 
    }
  })
  */


  function handleSubmit(formData) {
    // mutate({id: params.id, event : formData})
    // navigate('../');

    submit(formData, {
      method: "PUT"
    })

  }

  function handleClose() {
    navigate('../');
  }

  let content

  if (isPending) {
    content = <LoadingIndicator />
  }

  if (isError) {
    content = <>
      <ErrorBlock title="An error occurred" message={error.info?.message || "Failed To Edit Events Detail"} />
      <div className='forms-actions'>
        <Link to="../" className="button">OKAY</Link>
      </div>
    </>
  }

  if (data) {
    <EventForm inputData={data} onSubmit={handleSubmit}>
      {state === 'submitting' ? <p>Sending Data</p> :
        <>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Update
          </button>
        </>
      }

    </EventForm>
  }

  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}



export function loader({ request, params }) {
  // fetching data by querClient.fetchQuery instead of UseQuery as it is not a component
  return queryClient.fetchQuery({
    queryKey: ['events', params.id],
    queryFn: (signal) => fetchEvent(params.id, signal)
  })

  // now once the component loads the data will be fetched by this fetchQuery so we can remove useQuery from above component
  // we can also keep that as now useQuery will fetch the data from cache instead of backend
}


export async function actions({ request, params }) {
  const formData = await request.formData()
  const updatedEventData = Object.fromEntries(formData)
  await updateEvent({ id: params.id, event: updatedEventData })
  // to make sure updated data is fetched again
  await queryClient.invalidateQueries(['events'])
  return redirect('../')
}