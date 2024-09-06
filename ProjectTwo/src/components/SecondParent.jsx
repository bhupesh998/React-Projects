import React, { useCallback } from 'react'
import ThirdParent from './ThirdParent.jsx';

const SecondParent = (props) => {
    let {count}= props

    // this use call back is helping us because third component is slow but it uses a memo so if props don't change third component will not be called
    // so our outer component is unaffected by third component slowness now by use of useCallback as on rerender third props are not changing and i.e why not affecting outer count
    const handleChange = useCallback(()=>{
        console.log("change in second parent", count);
        
    }, [count])
    // useCallback also take reactive variables , reactive variables are variable that change value on rerender
    // React says whatever reactive variable you are using inside callback function you have to pass it in dependency array
    // Assume we don't pass count in useCallback then on first render whatever the count value will be there will remain same 
  return (
    <>
    <div>SecondParent</div>
    <ThirdParent handleChange={handleChange}/>
    </>
  )
}

export default SecondParent