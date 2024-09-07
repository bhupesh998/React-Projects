import React, {  useState} from 'react'
import { ThemeContext } from './components/Context';
import  NavBarComponent  from './components/NavBarComponent.jsx'
// Context lets a Parent component provide data to entire tree below it
// Once you define a context at the parent levelbe it any sibling or child that particular data gets automatically available and you don't have to pass props via prop drilling
 
export default function App() {
  const [theme, setTheme] = useState('dark');
  return <>
    {/* This will cause the whole application to rerender on change of state */}
    {
      // if the state variable is present at top of hierarchy then it will cause the entire application to re render on entire children recursively 
    }
   <ThemeContext.Provider value={[theme, setTheme]}>
      <NavBarComponent/>
    </ThemeContext.Provider>
  </>
}

