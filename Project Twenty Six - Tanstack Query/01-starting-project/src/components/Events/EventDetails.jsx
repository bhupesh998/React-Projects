import { Link, Outlet, useParams,  useNavigate } from 'react-router-dom';

import Header from '../Header.jsx';
import { fetchEvent, deleteEvent, queryClient } from '../../util/http.js';
import { useQuery, useMutation } from '@tanstack/react-query'
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';


export default function EventDetails() {

  const navigate = useNavigate();

  const params = useParams()
  const id = params.id

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', id], // because we want to fetch diffrent data for diffrent event , we can also use { id: id}
    queryFn: (signal) => fetchEvent(id, signal)
  })

  const { mutate } = useMutation({
    mutationFn: deleteEvent(),
    onSuccess: ()=>{
       queryClient.invalidateQueries({
              queryKey : ['events'] 
         })
      navigate('/events')
    }
  })

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
          <button onClick={handleDelete}>Delete</button>
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
