import { Link, Outlet, useParams,  useNavigate } from 'react-router-dom';

import Header from '../Header.jsx';
import { fetchEvent, deleteEvent, queryClient } from '../../util/http.js';
import { useQuery, useMutation } from '@tanstack/react-query'
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { useState } from 'react';


export default function EventDetails() {

  const [isDeleting , setIsDeleting] = useState(false)

  const navigate = useNavigate();

  const params = useParams()
  const id = params.id

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', id], // because we want to fetch diffrent data for diffrent event , we can also use { id: id}
    queryFn: (signal) => fetchEvent(id, signal)
  })

  const { mutate , isPending: isPendingDeletion, isError: isErrorDeletion, error: deleteError } = useMutation({
    mutationFn: deleteEvent(),
    onSuccess: ()=>{
       queryClient.invalidateQueries({
              queryKey : ['events'] ,
              refetchType: "none" // if we don't use that then the queries that are invalidated will be refetched again immediately but if we set to none , then they are fetched only when they will be required i.e when we are changing pages and query is called
              // why use because we saw that we deleted event and on its success queries go invalidated so it invalidated the current page query also calling the useQuery for getting detail of id that was just deleted resulting in error 
         })
      navigate('/events')
    }
  })

  function handleStartDelete(){
    setIsDeleting(true)
  }

  function handleStopDelete(){
    setIsDeleting(false)
  }

  function handleDelete() {
    mutate({ id: id })
  }

  if (isPending) {
    content = <LoadingIndicator />
  }

  if (isError) {
    content = <ErrorBlock title="An error occurred" message={error.info?.message || "Failed To Fetch Events Detail"} />
  }

  if (data) {
    content = <>
      <header>
        <h1>{data.title}</h1>
        <nav>
          <button onClick={handleStartDelete}>Delete</button>
          <Link to="edit">Edit</Link>
        </nav>
      </header>
      <div id="event-details-content">
        <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
        <div id="event-details-info">
          <div>
            <p id="event-details-location">{data.location}</p>
            <time dateTime={`Todo-DateT$Todo-Time`}>{data.date} @ {data.time}</time>
          </div>
          <p id="event-details-description">{data.description}</p>
        </div>
      </div>
    </>
  }


  return (
    <>
     {
     isDeleting && <Modal onClose={handleStopDelete}>
        <h1>Confirmation Popup</h1>
        <p>Do you really want to delete the data?</p>
        <div className="form-actions">
          { isPendingDeletion && <p>Deletion In Progresss</p>}
          {!isPendingDeletion && 
                <>
                <button onClick={handleStopDelete}>CANCEL</button>
                <button onClick={handleDelete}>CONFIRM</button>
                </>
          }
        </div>
        { isErrorDeletion && <ErrorBlock title="Deletion Error" message={deleteError.info?.message || "Failed to Delete Event" }/>}
      </Modal>
      }
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        {content}
      </article>
    </>
  );
}
