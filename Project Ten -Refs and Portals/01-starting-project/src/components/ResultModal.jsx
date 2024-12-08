import React, {forwardRef, useImperativeHandle, useRef} from 'react'

/*
const ResultModal = ({refl, result, targeTime}) => {
  return (
    // we have used refl as prop because directly naming prop as ref is not supported before react 19, in react 19 we could have used ref directly as a resultMOdal Prop
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
*/

// forward ref used to pass ref as ref only for version below react 19 
const ResultModal = forwardRef(({ result, targeTime}, ref) => {

    const dialog = useRef()

    useImperativeHandle(ref, ()=> {
        return {
            open(){
                dialog.current.showModal()
            }
        }
    })
    return (
      // on changing the dialog tag to div , we need to adjust the logic of open method based on div tag or any tag that we use 
      // the ref prop on resultModal is bind to dailog in timer component and useInperative handler help us to keep that in binding
      // now we are calling open method from dailog of timerComponent that act as a wrapper to showModal, we can name the method open anything else also
      <dialog ref={dialog} className='result-modal' >
          <h2>You {result} </h2>
          <p>Target Time was <strong>{targeTime}</strong> Seconds .</p>
          <p>You Stopped the timer with X seconds left</p>
          <form method='dailog'>
              <button>Close</button>
          </form>
  
      </dialog>   
    )
  })

export default ResultModal
