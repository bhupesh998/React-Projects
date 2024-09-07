import React, { useMemo, useRef, useState,lazy , Suspense} from 'react'
const TextComponent = lazy(() => delayForDemo(import('./components/TextComponent.jsx')))
import TimerComponent from './components/TimerComponent.jsx'
import ButtonWithTooltip from './components/ButtonWithTooltip.jsx';
import InputComponent from './components/InputComponent.jsx';
import SecondParent from './components/SecondParent.jsx';
import PrintTable from './components/PrintTable.jsx';

export default function App() {
  const [showText, toggleText] = useState(false)
  return <>
  <button onClick={()=>toggleText((prev)=>!prev)}>Toggle</button>
  {/* <Suspense> lets you display a fallback until its children have finished loading. */}
  { /* you shouldn't lazy load or suspense any component, use for only those component which are not loaded on the first load like dropdown, modal or popup i.e being shown after a user clicks on something*/}
  {/* use it for only other component that can be loaded based on user demand like clicks etc */}
  { showText &&  <Suspense fallback={<div>loading!!!</div>}>
    <TextComponent> HI from </TextComponent>
  </Suspense>}
 
  </>
}

function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}