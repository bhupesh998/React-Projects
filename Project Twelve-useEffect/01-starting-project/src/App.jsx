import { useRef, useState, useEffect } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js'

// will only be execute when code file runs the first time, not on component rerenders
const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
const storedPlaces = storedIds.map((id)=> AVAILABLE_PLACES.find(place=>place.id === id))


function App() {


  const [showModal, setShowModal] = useState(false)
  const selectedPlace = useRef();
  const [availablePlaces, setAvailablePlaces ] = useState([])
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);

  // this code will be executed by react after every component renders or execution finished
  // on component rerender , it will reexecute on the basis of dependency array , [] - no dependency , use effect will execute only onces
  // if we don't specify dependency array it will execute again and again causing the infinite loop issue 
  useEffect(() => {
    //below is a side effect code , needed but not necessary
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude, position.coords.longitude);

      setAvailablePlaces(sortedPlaces) 

    })
    

  }, [])



  function handleStartRemovePlace(id) {
    setShowModal(true)
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setShowModal(false)
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    // the below code is also a side effect code , it doesn't affect the component lifecycle and it just add data in browsers local storage
    // because this code doesn't goes into infinite loop and doesn't execute on rerender and only executes when user selects a place 
    // also useeffect cannot be used inside a function just like other hooks they can be used at root level of component
    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    if(storedIds.indexOf(id)=== -1){
      localStorage.setItem('selectedPlaces',JSON.stringify([id, ...storedIds]))
    }
  
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setShowModal(false)

    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    localStorage.setItem('selectedPlaces',JSON.stringify(storedIds.filter((id)=>id !== selectedPlace.current)))
  }

  return (
    <>
      <Modal open={showModal} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText="Sorting Places by Distance"
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
