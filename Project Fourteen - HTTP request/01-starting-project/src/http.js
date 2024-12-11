export async function fetchAvailablePlaces(){
    let response = await fetch('http://localhost:3000/places')
    let resData = await response.json()

        if (!response.ok) {
           throw new Error("Failed to Fetch data ") // this will crash the application if not handled

        }
    return resData.places
}

export async function updateUserPlaces(places){
    const response = await fetch("http://localhost:3000/user-places", {
        method: 'PUT',
        body: JSON.stringify({ places: places}),
        headers:{
            'Content-Type': 'application/json'
        }
    })

    const resData = response.json()

    if (!response.ok) {
        throw new Error("Failed to Save data ") // this will crash the application if not handled

     }
 return resData.message;

}

export async function fetchPickedPlaces(){
    let response = await fetch('http://localhost:3000/user-places')
    let resData = await response.json()

        if (!response.ok) {
           throw new Error("Failed to Fetch user places ") // this will crash the application if not handled

        }
    return resData.places
}