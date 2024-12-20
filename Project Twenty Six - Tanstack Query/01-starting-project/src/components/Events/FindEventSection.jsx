import { useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import { fetchEvents } from '../../util/http';
import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';
import EventItem from './EventItem';

export default function FindEventSection() {
  const searchElement = useRef();
  const [searchTerm, setSearchTerm ] = useState()
 
  //Scenario - on Frontend we saw that request going through newEvents section also had a searchTerm object object
  // because the useQuery hook actually passes some default data to this query function defined in NewEventsSection.jsx file
  const {data , isPending, isError , error }=useQuery({
    queryKey: ['events', { search : searchTerm}],
    queryFn : ({signal})=>fetchEvents({signal , searchTerm}),
    enabled:  searchTerm !== undefined // if its false the the request will not be sent , now we want to send it to false only if we didnot enter the search term
    // we tried searchTerm !== '' to set but this will not properly achieve result as we were not getting result but getting a loading indicator
    // searchTerm !== undefined in this case if no term was entered in sezrch box then it will be false , if anything was entered or its an empty string as well then also it will enabled and request will be sent
    // the loading spinner we are getting is because react query treats its as pending when its disabled
    // use isLoading instead of isPending and diffrence is , is Loading will  not be true if query is disabled
  }) 

  

  function handleSubmit(event) {
    event.preventDefault();
    // we cannot directly use ref in useQuery to pass value because on input change the useQuery will not be callled again ,
    // instead when form is submitted we are managing a state that will give us the whole search term that we need to use
    setSearchTerm(searchElement.current.value)
  }

  let content = <p>Please enter a search term and to find events.</p>

  if(isLoading){
    content = <LoadingIndicator />
  }

  if(isError){
    content = <ErrorBlock title="An Error Occured" message={error.info?.message || "Failed to Fetch Events"}/>
  }

  if(data){
    content = <ul className='events-list'>
      {data.map(event =><li key={event.id}><EventItem event={event}/></li>)}
    </ul>
  }

  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {content}
    </section>
  );
}
