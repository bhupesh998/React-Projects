

import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

//currently we render page and then update data but react router helps us to get data first and then render it
function EventsPage() {
 
  const events = useLoaderData()

  return (
    <>
    
      <EventsList events={events} />
      {/* Also we can use, useLoaderData in EventList directly as well instead of passing events props */}
      {/* <EventsList/> */}
    </>
  );
}

export default EventsPage;