import { useRef } from "react";



export default function Login() {

  
  /*advantage of using ref for handling values for form is less code to be written no change handler to called or no state to be maintained */
  // the disadvantage is resetting the values in clean way is harder because it is discouraged to useRef for manipulating DOM, and will need lot of refs for long forms
  const email = useRef()
  const password = useRef()

  function handleSubmission(event){
    // calling handleSubmission , onSubmit , will give us a special method with event i.e 
    event.preventDefault() // it prevents default browser behaviour of generating and sending http request
    console.log("login clicked");

    const enteredEmail = email.current.value
    const enteredPassword = password.current.value

    console.log("email is=====>", enteredEmail, "password is======>", enteredPassword);
    
  // this is the way to reset the form inputs we can create a seprate handler and reset all inputs in it 
   email.current.value ='' // will work but not recommended
    
    
  }

   

  return (
    <form onSubmit={handleSubmission}>

      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email}/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password}/>
        </div>
      </div>

      <p className="form-actions">
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
