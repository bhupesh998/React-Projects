import React, { useRef, useState } from 'react'

const SearchableList = ({items , itemKeyFn, children}) => {

    const [ serachTerm , setSearchTerm] = useState('')
    const lastChange = useRef()

    const searchResults = items.filter(item => JSON.stringify(item).toLowerCase().includes(serachTerm.toLowerCase()))

    function handleChange(event){

        if(lastChange.current){
            clearTimeout(lastChange.current)
        }
        // debouncing logic , but it will still update state for every keystrong just delay by specified seconds
        // we added a clear timeout logic to clear the old timer so only the setTimeout is exzecute for current running timer
       lastChange.current = setTimeout(()=>{
        lastChange.current = null
            setSearchTerm(event.target.value)
        }, 2000)
       
    }

  return (
    <div className='searchable-list'>
        <input type="search" placeholder="search" onChange={handleChange} />
        <ul>
            { /* itemKeyFn for dynamically generate key , as not all items may have a if when we erre using item.id*/}
            {searchResults.map(item=><li key={itemKeyFn(item)}>{children(item)}</li>)}
        </ul>
    </div>
  )
}

export default SearchableList