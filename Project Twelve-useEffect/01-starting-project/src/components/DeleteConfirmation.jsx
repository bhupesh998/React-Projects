import { useEffect } from "react";



export default function DeleteConfirmation({ onConfirm, onCancel }) {


  // here the useEffect is used for resetting the timer once it has executed or for clean up
  // with useEffect we can define a cleanup function that should be executed right before this effect function runs again or the component dismounts before its removed from dom
  useEffect(()=>{
    console.log("useEffect running ");
    
   const timer= setTimeout(()=>{
      console.log("timeOut code running ");
      onConfirm() // this onConfirm is a prop and as learned we should use prop and state used inside useEffect as dependencies , we can also write onConfirm as dependency
      // there is an issue when adding function as dependencies as here onConfirm is a function 
      // the issue is when adding function as dependency there is a danger of creating infinite loop , as here onConfirm is a function with value defined in APP.jsx and the 
      // handleRemovePlace() function and function in JS are just values, this function object handleRemovePlace() object is recreated every time APP component renders and in JS, no two objects are same as they have diffrent reference or address even with same value
      // when react looks at onConfirm and find that value are diffrent , so react will execute the component function even though dependency don't changed
      // this will cause issue if in that function we are updating state, that will cause rerender of components causing an infinite loop 
    }, 3000)


    return ()=>{
      console.log("cleanup function  running ");
      clearTimeout(timer)
    }
  }, [onConfirm])

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
    </div>
  );
}
