import React , { useState, useCallback, useEffect} from 'react'
// use effect can be called at certain ocassions when component renders , change is there in props and component mounts
import TextComponent from './components/TextComponent.jsx'
import ButtonComponent from './components/ButtonComponent.jsx'

const App =()=>{

  const [data, useData] = useState(0)
  const [dataTwo, useDataTwo] = useState(100)


  
  // 1st argument - callback, 2nd dependency array
  // if dependecy array not passed, after every render its running
  // if empty dependency array passed , then use effect will only run on mount of the application
  // dependency array can take anything that can be changed during rerender

  //in a way useeffect is listening to changes , for data or dataTwo but these are part of component only but these data and datatwo can come as props
  // also then we can synchronise our component from external system


  

  useEffect(()=>{
    console.log("i am useefeect for datatwo");
    
  }, [dataTwo])

   return (
    <>
   <TextComponent externalData={data}></TextComponent>
   <button onClick={()=> useData((prevData)=>++prevData)}>Update</button>
  
   <br/> <br/>
   <TextComponent externalData={dataTwo}></TextComponent>
   <button onClick={()=> useDataTwo((prevData)=>++prevData)}>Update</button>
    </>
   )
}

export default App