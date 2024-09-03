import React ,  { useState, useEffect}from 'react'

const TimerComponent = () => {
    const [counter, setCounter] = useState(0)

    useEffect(()=>{
        console.log("i am running set interval");
        
       const interVal =  setInterval(() => {
          setCounter((prevCounter)=>++prevCounter)
        }, 1000);

        console.log("Interval with Id", interVal);
        
        // clean up functions
        // also when component unmounnts and you have number of use effects in that component then return statement of every component runs when component unmounts
        return ()=>{
            console.log("i was unmountd");
            console.log("Interval with Id Removed", interVal);
            clearInterval(interVal)
            
        }
        
      }, [])
    
       return (
        <>
        <span>Current Time is : {counter} </span>
        <br/>
        {/* <button onClick={startTimer}>Start Timer</button> */}
      
        </>
       )
}

export default TimerComponent