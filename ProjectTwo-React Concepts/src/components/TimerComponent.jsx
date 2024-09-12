import React ,  { useState, useEffect, useLayoutEffect, useRef}from 'react'


const TimerComponent = () => {
    const [counter, setCounter] = useState(0)
    const  interVal = useRef(null)
    useEffect(()=>{
        console.log("i am running set interval");
        
        interVal.current =  setInterval(() => {
          setCounter((prevCounter)=>++prevCounter)
        }, 1000);

        console.log("Interval with Id", interVal);
        
        // clean up functions
        // also when component unmounnts and you have number of use effects in that component then return statement of every component runs when component unmounts
        return ()=>{
            console.log("i was unmountd");
            console.log("Interval with Id Removed", interVal);
            clearInterval(interVal.current)
            
        }
        
      }, [])


    // use layout effect is used when we want to perform calculation about an element like calculating height width, caculation some styles or density
    // before element rendering if you want to calculate something then useLayoutEffect
    // used in cases where before element apprears on screen and when we need to do something & it helps avoid lags and jitters
    // useLayoutEffect(()=>{
    //   console.log("running use layout effect");
      
    // })

    const stopTimer =()=>{
      console.log("Interval with id stoptimer ", interVal.current);
      clearInterval(interVal.current)
      
    }
    
       return (
        <>
        <span>Current Time is : {counter} </span>
        <br/>
        {/* <button onClick={startTimer}>Start Timer</button> */}
          <button onClick={stopTimer}>Stop Timer</button> 
      
        </>
       )
}

export default TimerComponent