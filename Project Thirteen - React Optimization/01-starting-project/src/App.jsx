import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';


function App() {
  log('<App /> rendered');

  
  const [chosenCount, setChosenCount] = useState(0);

  // also below we are updating state twice so will component render two times - no
  // because react performs state baching also - multiple state updates that are triggered from same function are batched together and will only lead to one function execution
  function handleSetCount(newCount){
    setChosenCount(newCount)
    setChosenCount((prev)=>prev+1 ) // this way gurantees that only the lastest value of state is used for execution , so value that we get on state update at line 16 , will be avialble to use on 17 but bot 18
    console.log("newCount", newCount); // this will stil show old result as eventough we are updating state in previous line , the state gets updated when component rerenders only
    
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
