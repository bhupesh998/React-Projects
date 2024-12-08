import React, { useState, useRef } from 'react'
import ResultModal from './ResultModal'

// let timer -  in this case the timer will not be recreated and will be shared by multiple compoents , if we start timer on multiple components simultaneously then it will give an issue as the timer is shared by each component so they will overwrite each others timer

const TimerComponent = ({ title, targetTime }) => {

    const [timerExpired, setTimerExpired] = useState(false)
    const [timerStarted, setTimerStarted] = useState(false)

    // let timer  - to use this syntax , we need to declare it outside so it will be global to file and will not be rerendered as currently on state change component rerenders and variable gets created again 
    let timer = useRef() //this will be specific to each component, each one will have a diffrent ref
    let dailog = useRef()

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true)
            dailog.current.showModal()
        }, targetTime * 1000)

        setTimerStarted(true)
    }

    function handleStop() {
        clearTimeout(timer.current)
    }

    return (
        <>
           <ResultModal refl={dailog} targeTime={targetTime} result="lost"/>
            <section className='challenge'>
                <h2>{title}</h2>
              
                <p className='challenge-time'>
                    {targetTime} Second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} Challange
                    </button>
                </p>
                <p className={timerStarted ? 'active' : ''}>
                    {timerStarted ? 'Time is Running' : 'Timer Inactive'}
                </p>
            </section>
        </>

    )
}

export default TimerComponent
