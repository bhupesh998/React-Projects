import React from 'react'

const ResultModal = ({refl, result, targeTime}) => {
  return (
    <dialog ref={refl} className='result-modal' >
        <h2>You {result} </h2>
        <p>Target Time was <strong>{targeTime}</strong> Seconds .</p>
        <p>You Stopped the timer with X seconds left</p>
        <form method='dailog'>
            <button>Close</button>
        </form>

    </dialog>   
  )
}

export default ResultModal
