import { useState } from "react";
import Input from "./Input";
import {hasMinLength , isEmail , isEqualsToOtherValue, isNotEmpty} from '../util/validation'
import { useInput } from "../hooks/useInput";


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

    

    //  const isInvalidEmail = enteredValues.email !=="" && !enteredValues.email.includes("@") - in this way if we enter a value and erase it all we don't get error and also if we enter first character we get error but we are still writing 
    // so other way is using onBlur

   // const isInvalidEmail = didEdit.email && !isEmail(enteredValues.email) && !isNotEmpty(enteredValues.email)
  //  const isInvalidPassword = didEdit.password && !hasMinLength(enteredValues.password, 6)


    const {value: emailValue, handleInputBlur:handleEmailBlur, handleInputChange: handleEmailChange, hasError } = useInput('', (value)=>{
        return isEmail(value) && isNotEmpty(value)
    })

    const {value: passwordValue, handleInputBlur:handlePasswordBlur, handleInputChange: handlePasswordChange, hasError: handlePasswordError } = useInput('', (value)=>{
        return hasMinLength(value, 6)
    })
   

    function handleSubmission(event) {
        // calling handleSubmission , onSubmit , will give us a special method with event i.e 
        event.preventDefault() // it prevents default browser behaviour of generating and sending http request
        console.log("login clicked");
        //also a good idea to check here or validate submitted values because we are giving error to user on every keysatroke but if user ignores that and submit the form than to handle such cases handling is necessary here

        if(hasError || handlePasswordError){
            
            
            return ;
        }
        console.log("userEmail=====>", emailValue, passwordValue);


    }

   



    return (
        <form onSubmit={handleSubmission}>

            <h2>Login</h2>

            <div className="control-row">

            <Input label="Email" id="email" name="email" type="email" onChange={ handleEmailChange} value={emailValue} onBlur={handleEmailBlur} error={hasError ? "Please enter Valid Mail":"" } />

            <Input label="Password" id="password" type="password" name="password" onChange={handlePasswordChange} value={passwordValue} onBlur={handlePasswordBlur} error={handlePasswordError && "Please enter Password with length greater than 6" } />

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
