import { useRef, useState, useCallback, useEffect } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { fetchPickedPlaces, updateUserPlaces } from './http.js';
import Error from './components/Error.jsx';


function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);
  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState(false)

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState(null)

  useEffect(()=>{

    async function fetchUserPlaces(){
      setIsFetching(true)
      try{
        let userPlaces = await fetchPickedPlaces()
        setUserPlaces(userPlaces)

      }catch(error){
        setError({message : error.message || "Could Not Fetch Places,PLease Try Again Later."})
       
      }
      setIsFetching(false)
    }

    fetchUserPlaces()
  })

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    //here we are using optimistic update i.e update on UI first and then update backend , we are not waiting for update on backend and then reflect on UI 
    // so in case the backend update fails we need to revert the update on UI to previous state 
    try{
       await updateUserPlaces([selectedPlace, ...userPlaces]) // cannot directly access userplaces as we are updating it above and it will not be available till component renders again
    }catch(error){
      setUserPlaces(userPlaces) // in case the handleSelectPlace is not complete due to update failed on backend , we are reverting to old state on UI as well
      setErrorUpdatingPlaces({ message: error.message || "Failed to Update Places"})
    }
   
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );

    try{
      await updateUserPlaces(userPlaces.filter((place) => place.id !== selectedPlace.current.id))
    }catch(error){
      setUserPlaces(userPlaces)
      setErrorUpdatingPlaces({ message: error.message || "Failed to Update Places"})
    }
    

    setModalIsOpen(false);
  }, [userPlaces]);

  function handleError(){
    setErrorUpdatingPlaces(null)
  }

  return (
    <>

      <Modal open={errorUpdatingPlaces} onClose={handleError}>
       {errorUpdatingPlaces && <Error title="An Error occured" message={errorUpdatingPlaces.message} onConfirm={handleError}/>}
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
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
        { error && <Error  title="An Error Occured" message={error.message}/>}
      {!error &&  <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          isLoading={isFetching}
          loadingText="Fetching user Place data"
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
        />}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
