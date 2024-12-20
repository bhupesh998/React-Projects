import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query'

import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';
import { fetchEvents } from '../../util/http.js';

export default function NewEventsSection() {
  
  // this hook will now send an http request behind the scenees and gets us the data and also gives information about loading state
  // tanstack query doesn't come with a built in logic to send HTTP request instead it comes with a logic for managing those request
  // for keeping track of the data and possible errors that are yeilded by these requests and so on, the code from sending the request must come from your side

  const {data , isPending, isError , error } = useQuery({
    // it wants a function that returns a promise, so the function will be executed to get my data 
    queryFn : fetchEvents,
    // this key will be used by tanstack to cache the data that will be returned with the help of this key so reponse from same request can be used again if you try to send same request again
    // this key is an array, an array of values that are internally stored by react query such that when you are using a similar array of values, react query sees that and is able to reuse existing data 
    // you can also have objects, arrays or nested array or other kind of values in it
    queryKey: ['events']
  })

 
  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock title="An error occurred" message={error.info?.message || "Failed To Fetch Events"} />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
