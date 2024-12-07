import { useState } from 'react';
import { styled } from 'styled-components'

// in styled.div you can write standard css and what below code will give is a react component that has these styles applied to it 
// it will be a div that internally uses a children prop so it can be wrapped around other content and also prop forwarding is also done in that
const ControlDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

`

const Label = styled.label`
 display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(props)=> props.$invalid ? "blue": "#6b7280" } 
`

const Input= styled.input`
width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: #d1d5db;
  color: #374151;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlDiv>
     {/* <div className="controls"> */}
        <p>
        
          { /* for styled components we can handle conditon dynamically like below we can pass props then in the Label component , we get props object we can use it to dynamically apply condition based on value passed to props*/}
          {/* $invalid written because to avoid inbuilt props that a component might have , we can write invalid also but some components like input has invalid props already with them to avoid clash its a good way to have custom prop name appened with $ */}
          <Label $invalid={emailNotValid}>Email</Label>
          <Input
            type="email"
            // style={{
            //   backgroundColor: emailNotValid ? "blue" : "green"
            // }}
            className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <Label $invalid={passwordNotValid}>Password</Label>
          <Input
            type="password"
            className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      {/* </div> */}
      </ControlDiv>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button className='button' onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
