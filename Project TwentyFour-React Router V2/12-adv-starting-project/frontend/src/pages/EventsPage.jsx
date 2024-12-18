

import { Await, useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';
import { Suspense } from 'react';

//currently we render page and then update data but react router helps us to get data first and then render it
function EventsPage() {
 
  const {events } = useLoaderData()
  // if(data.isError){
  //   return <p>{data.message}</p>
  // }
  

  return (
    <>
    <Suspense fallback={<p>Loading from suspense</p>} >
      <Await resolve={events}>
      { (loadedEvents) => <EventsList events={loadedEvents} />}
      {/* <EventsList events={events} /> */}
      {/* Also we can use, useLoaderData in EventList directly as well instead of passing events props */}
      {/* <EventsList/> */}
      </Await>
    </Suspense>
    
      
    </>
  );
}

export default EventsPage;


async function loadEvents(){
   // this function will be execute by react router when you are about to visit this route
  // just before this route e.g <EventsPage/> gets render this loader will be executed by react router
  // in this loader function we can load and fetch our data

  const response = await fetch('http://localhost:8080/events');

  // in loader we can also return a response object 
  if (!response.ok) {
   // return { isError: true, message: "Failed To Fetch Data"}

   // when error gets thrown in a loader then react router simply render the closest error element
   //throw { message: "Failed To Fetch Data"}

   // throwing a response for an error help us to build more geenric handler as we can give properties that we can utilise in the error handling components
   throw new Response(JSON.stringify({"message": "could not fetch data"}), {status: 500})
  } else {
    /*
    const resData = await response.json();
  // return resData.events //whatever we return in this function , react router will take the data and make that available in that element page in our case its <EventPage />
   //also the returned data will be a promise technically so react router will check the data for us and return the resolve data to the component page 

   // whenever returning any response from loader the react router will automatically extract the data from the response when using useLoaderData
   // why we need this if we can return resdata.events directly , because we are using fetch api and it returns a promise of type response so we can directly return that response instead of checking and handling data by yourself
   const res = Response(resData.events, {
    status: 201
   }) 
  return res

  */
    const resData = await response.json()
    return resData.events
  }
}

// the code defined in the loader will execute on browser and not server, so you can use any browser api's in your loader
// you can use localstorage , session storage , cookies etc but you cannot use react hooks in it because its available on react component and loader is not a react component
export  const loader = async () => {
 
  return {
    events: loadEvents()
  }


}