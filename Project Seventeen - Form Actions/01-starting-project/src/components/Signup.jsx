
import { useActionState } from 'react'
import {hasMinLength , isEmail, isEqualToOtherValue, isNotEmpty} from '../util/validation'
//Form action - before it we were usinng onsubmit on form to handle form submission but with react v19 or higher we can use action property of form , it is already there and use to specify the url
// in react if you specify action on a form then react kind override this prop react will make sure the function you specify on action gets called when you submit a form and react will call the prevent default
// also that function will now get a formData object (make sure you have name property on all input elements)
//also on submit react will automatically reset the form value


// in this form action function if we don't have any state or prop values then we can keep this logic seprated
function handleSubmit(prevFormState, formData){
  const email = formData.get('email')
  const password = formData.get('password')
  const confirmPassword = formData.get('confirm-password')
  const acquisitionChannel = formData.getAll('acquisition')
  console.log("emai;l", email, "password", password, confirmPassword, acquisitionChannel);
  
  let errors=[]

  if(!isEmail(email)){
    errors.push("Invalid Email Address")
  }

  if(!isNotEmpty(password) || !hasMinLength(password, 6)){
    errors.push("Password Value Should be More than 6 characters")
  }

  if(isEqualToOtherValue(password, confirmPassword)){
    errors.push("Password and Confirm Password Don't Match")
  }

  if(acquisitionChannel.length === 0){
    errors.push("You Must Atleast Select an Acquisition Channel")
  }

  if(errors.length > 0){
    // returning enteredvalues so will use that as defaultValue on form Input so that on submit of form the values get retained
    // even on reset the form will get reset to the values after submit as we have set the default values
    return {  errors, enteredValues: {
      email, password, confirmPassword, acquisitionChannel
    }}
  }

  // on entering all correct values the form will be empty as below we are not returning any entered values , if you want to retain values then you can return entered values with it 
  // return { errors: null, enteredValues: {
  //   email, password, confirmPassword, acquisitionChannel
  // }}
  return { errors: null}

}



export default function Signup() {

 

  // form state is state of form ,
  // formAction is wrapper function that we get from react and we pass to action property of form
  // pending true or false = based on form is submitted or not
  const [formState, formAction , pending] = useActionState(handleSubmit, {errors: null})

  return (
    <form action={formAction}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" defaultValue={formState.enteredValues?.email} />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"  defaultValue={formState.enteredValues?.password}/>
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            defaultValue={formState.enteredValues?.confirmPassword}
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
            defaultChecked={formState.enteredValues?.acquisitionChannel.includes('google')}
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
            defaultChecked={formState.enteredValues?.acquisitionChannel.includes('friend')}
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" defaultChecked={formState.enteredValues?.acquisitionChannel.includes('other')} />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms"  defaultChecked={formState.enteredValues?.terms} />I
          agree to the terms and conditions
        </label>
      </div>

      { formState.errors && <ul className='error'>
        {formState.errors.map((error)=>(<li key={error}>{error}</li>))}
        </ul>}

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Sign up</button>
      </p>
    </form>
  );
}
