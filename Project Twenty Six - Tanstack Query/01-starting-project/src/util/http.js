
// we are destructring the object now that is coming to this fetchEvents function from queryFn by useQuery
// for searchTerm we can use the name but in queryFn i should pass the object with same key
export async function fetchEvents({ signal, searchTerm}) {

    console.log("searchTerm", searchTerm);
    
    let url='http://localhost:3000/events'
    if(searchTerm){
        url += '?search='+ searchTerm
    }
   
    const response = await fetch(url, { signal: signal});

    if (!response.ok) {
      const error = new Error('An error occurred while fetching the events');
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }

    const { events } = await response.json();

    return events;
  }