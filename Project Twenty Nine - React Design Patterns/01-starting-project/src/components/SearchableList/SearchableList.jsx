import React, { useState } from 'react'

const SearchableList = ({items , children}) => {

    const [ serachTerm , setSearchTerm] = useState('')

    const searchResults = items.filter(item => JSON.stringify(item).toLowerCase().includes(serachTerm.toLowerCase()))

    function handleChange(event){
        setSearchTerm(event.target.value)
    }

  return (
    <div className='searchable-list'>
        <input type="search" placeholder="search" onChange={handleChange} />
        <ul>
            {searchResults.map(item=><li key={item.id}>{children(item)}</li>)}
        </ul>
    </div>
  )
}

export default SearchableList