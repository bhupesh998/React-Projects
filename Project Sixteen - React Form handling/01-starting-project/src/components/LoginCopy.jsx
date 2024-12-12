import { useState } from "react";



export default function Login() {

  /*
  if we have many input tags on form then this individual state maintainance becomes hard
  const [ enteredEmail , setEnteredEmail] = useState('')
  const [ enteredPassword , setEnteredPassword] = useState('')

  function handleEmailChange(event){
    setEnteredEmail(event.target.value)
  }

  function handlePasswordChange(event){
    setEnteredPassword(event.target.value)
  }

  */

  const [enteredValues, setEnteredValues] = useState({
    "email" : "",
    "password": ""
  })

  const [didEdit , setDidEdit] = useState({
    email: false,
    password: false
  })

//  const isInvalidEmail = enteredValues.email !=="" && !enteredValues.email.includes("@") - in this way if we enter a value and erase it all we don't get error and also if we enter first character we get error but we are still writing 
// so other way is using onBlur

const isInvalidEmail = didEdit.email && !enteredValues.email.includes("@")


  function handleInputChange(key, value){
    setEnteredValues((prev)=>({ ...prev, [key]: value}))
    setDidEdit((prev)=>({ ...prev, [key]: false})) // doing this for case where user is again back on the error input field and is typing again
  }


  function handleSubmission(event){
    // calling handleSubmission , onSubmit , will give us a special method with event i.e 
    event.preventDefault() // it prevents default browser behaviour of generating and sending http request
    console.log("login clicked");
    console.log("userEmail=====>", enteredValues);
    
    
  }

  function handleInputBlur(identifier ){
    setDidEdit((prev)=> ({...prev, [identifier]: true}))
  }

   

  return (
    <form onSubmit={handleSubmission}>

      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(e)=> handleInputChange('email', e.target.value)} value={enteredValues.email} onBlur={()=>handleInputBlur('email')}/>
            <div className="control-error">{isInvalidEmail && <p>please enter a valid email</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(e)=> handleInputChange('password', e.target.value)} value={enteredValues.password} onBlur={()=>handleInputBlur('password')}/>
        </div>
      </div>

      <p className="form-actions">
        { /* to reset using state we can call handler that sets the value to inital state , if we give type=reset it will automatically reset*/}
        <button className="button button-flat">Reset</button>
         {/* on hitting login, we see the handle submission gets called and page gets reloaded, default browser behavious for button in a form is those button will submit the form i.e an HTTP request is created and sent to server serving website */}
        {/* on network tab you can see the request so buttons like this login and reset in form will generate those request and sent those request to server */}
        { /* this default behaviour is a problem to prevent that is add type attribute = button   */}
        { /* Other way is instead of onClick={handleSubmission} on button use, On submit on form  */}
        <button  >Login</button>
       
      </p>
    </form>
  );
}
