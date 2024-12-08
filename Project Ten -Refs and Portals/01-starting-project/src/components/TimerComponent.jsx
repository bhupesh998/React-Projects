import React, { useState, useRef } from 'react'
import ResultModal from './ResultModal'

// let timer -  in this case the timer will not be recreated and will be shared by multiple compoents , if we start timer on multiple components simultaneously then it will give an issue as the timer is shared by each component so they will overwrite each others timer

const TimerComponent = ({ title, targetTime }) => {

    const [timeRemaining, setTimeRemaining] = useState(targetTime*1000)
    const isTimerActive = timeRemaining>0 && timeRemaining<targetTime*1000;

    // let timer  - to use this syntax , we need to declare it outside so it will be global to file and will not be rerendered as currently on state change component rerenders and variable gets created again 
    let timer = useRef() //this will be specific to each component, each one will have a diffrent ref
    let dailog = useRef()

    if(timeRemaining <=0){
        handleStop()
        
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTiming=> prevTiming-10)
        }, 10)

    }

    function handleStop() {
        dailog.current.open()
        clearInterval(timer.current)
    }

    function handleReset(){
        setTimeRemaining(targetTime *1000)
    }

    return (
        <>
           <ResultModal ref={dailog} targeTime={targetTime} remainingTime={timeRemaining} onReset={handleReset}/>
            <section className='challenge'>
                <h2>{title}</h2>
              
                <p className='challenge-time'>
                    {targetTime} Second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={isTimerActive ? handleStop : handleStart}>
                        {isTimerActive ? 'Stop' : 'Start'} Challange
                    </button>
                </p>
                <p className={isTimerActive ? 'active' : ''}>
                    {isTimerActive ? 'Time is Running' : 'Timer Inactive'}
                </p>
            </section>
        </>

    )
}

export default TimerComponent
