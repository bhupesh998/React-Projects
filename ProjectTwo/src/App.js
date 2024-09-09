import { debounce } from 'lodash'
import React, { useEffect, useState , useMemo, useCallback} from 'react'



export default function App() {

  const [inputData, setInputData] = useState('')
  const [data , setData] = useState()

  // const fetchData = useCallback(debounce(async (searchStr) => {
  //   const response = await fetch(`https://swapi.dev/api/people/?search=${searchStr}`)
  //   const data = await response.json()
  //   console.log(data);
  // }, 300), [])
  //OR

 const fetchData = useMemo(() =>debounce(async (searchStr) => {
    const response = await fetch(`https://swapi.dev/api/people/?search=${searchStr}`)
    const data = await response.json()
    console.log(data);
    setData(data?.results)
  }, 300), [])

  useEffect(()=>{
     // console.log(inputData);
     //cancelling debounce
     return ()=>{
      fetchData?.cancel()
     }
  }, [])

  const handleInputChange = (e) => {
    let val = e?.target?.value
    setInputData(val)
    fetchData(val)
  }

  return <>
    <h1>STAR WARS FAN</h1>

    <input type='text' value={inputData} onChange={handleInputChange} />
  
    { data && data?.length ? <ul> 
      {data.map((item)=> <li key={item?.created}>{item?.name} </li> )}
      </ul> :
     <span>Loading!!!!</span>  }
    


  </>
}