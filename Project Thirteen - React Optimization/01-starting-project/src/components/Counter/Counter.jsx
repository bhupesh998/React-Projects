import { useState, memo, useCallback, useMemo} from 'react';

import IconButton from '../UI/IconButton.jsx';
import MinusIcon from '../UI/Icons/MinusIcon.jsx';
import PlusIcon from '../UI/Icons/PlusIcon.jsx';
import CounterOutput from './CounterOutput.jsx';
import { log } from '../../log.js';

function isPrime(number) {
  log(
    'Calculating if is prime number',
    2,
    'other'
  );
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// memo will take a look at props and when the component function executes again for rg when app component executes memo will compare the old and new prop value
// if the values are exactly same then this function execution will be prevented by memo
// so this component will execute only if initialCount prop changes or any state inside component changes , memo only prevent function execution that are triggered by parent component
//  if counter doesn't executes again then its internal components that are used with in it will not be reexecuted

// Dont overuse memo 
// try to use it higher up in component tree - blocking a component execution at top will also block its child componet execution
// Dont wrap all your componets with memo as it adds unneccessary overhead of checking props that costs performance, don't use it on components where props changes frequently

const Counter = memo(function Counter({ initialCount }) {
  log('<Counter /> rendered', 1);
  // the below is prime is getting executed every time even when the value of inital count is not changing but state in counter changing 
  // so react provides a hook to prevent execution of normal function that are called inside component function for which the result are not changing 
  // so we use - useMemo for them and for component function we use - memo
  // useMemo should only be used when you have a complex calculation to prevent
  const initialCountIsPrime = useMemo(()=> isPrime(initialCount) , [initialCount])
  // the above arrow function returns the result of function that we want to prevent from reexecuting i.e isPrime
  // react will store the result of the execution and this will only re-execute if the dependency are changed
  // also avoid it on using on evry function as its also adds performance cost like memo


  const [counter, setCounter] = useState(initialCount);

  const handleDecrement= useCallback(function handleDecrement() {
    setCounter((prevCounter) => prevCounter - 1);
    // here we are not using any dependency , in dependency array as we are using state updating function and state updating function are guranteed to never change by react, therefore we don't need to add them in dependency array
  }, [])

  const handleIncrement = useCallback(function handleIncrement() {
    setCounter((prevCounter) => prevCounter + 1);
  }, [])

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{' '}
        <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={counter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
    </section>
  );
});



export default Counter
