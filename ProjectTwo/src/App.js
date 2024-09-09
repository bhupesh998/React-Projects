import React , {useEffect, useState} from 'react'



export default function App(){

  const [photos, setPhotos] = useState()

  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos`)
      const data =await response.json()
      console.log(data);
      setPhotos(data)
    }
    fetchData()
  }, [])

  return <>
  <h1>PHOTOS API</h1>

  { photos && photos?.length > 0 ?  photos.map((pic)=> <img key={pic?.id} loading='lazy' height={100} width={100} src={pic?.url} alt={pic?.title} />): <span>Loading Images</span> }  

 

  
  </>
}