import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import ErrorPage from './Error.jsx';
import {sortPlacesByDistance} from '../loc.js'
import { fetchAvailablePlaces } from '../http.js';


export default function AvailablePlaces({ onSelectPlace }) {

  const [isFetching, setIsFetching] = useState(false)
  const [availablePlaces, setAvailablePlaces] = useState([])
  const [error, setError] = useState(null)

  // this code is way to fetch data , but it will create an infinite loop as we are setting state when data is available
  // that will cause component to rerender and the api will be called again, to avoid that use- useEffect
  useEffect(() => {

    async function fetchPlaces() {
      try {
        setIsFetching(true)
        let resData = await fetchAvailablePlaces()
        navigator.geolocation.getCurrentPosition((position)=>{
          const sortedPlaces = sortPlacesByDistance(resData, position.coords.latitude, position.coords.longitude)
          setAvailablePlaces(sortedPlaces)
          setIsFetching(false)
        })

      } catch (error) {
        setError({message : error.message || "Could Not Fetch Places,PLease Try Again Later."})
        setIsFetching(false)
      }

    }

    fetchPlaces() // calling it so that the function executes 

    //.then .catch way 
    // fetch('http://localhost:3000/places').then((response)=>{
    //   return response.json()
    // }).then((resData)=>{
    //   setAvailablePlaces(resData.places)
    // })


  }, [])

  if(error){
    return <ErrorPage title="An Error Occured!" message={error.message}/>
  }


  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching Place Data"
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
