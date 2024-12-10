
import React, {useState} from 'react'
import { log } from '../../log';

// now we can remove memo from counter as on input change now only this component will render and not the app , only when we set the count app component and its child will rerender
// now using memo will increase the cost only as every time the counter will execute the memo will check for props but now the component are executing on prop change (when we are setting data) instead of input change as we have seprated it using a other component
const ConfigureCounter = ({ onSet }) => {
    log('<ConfigureCounter /> rendered', 1);
    const [enteredNumber, setEnteredNumber] = useState(0);

    function handleChange(event) {
        setEnteredNumber(+event.target.value);
      }

      function handleSetClick() {
        onSet(enteredNumber)
        setEnteredNumber(0);
      }

  return (
    <section id="configure-counter">
    <h2>Set Counter</h2>
    <input type="number" onChange={handleChange} value={enteredNumber} />
    <button onClick={handleSetClick}>Set</button>
  </section>
  )
}

export default ConfigureCounter
