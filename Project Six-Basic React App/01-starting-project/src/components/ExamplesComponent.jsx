import React from 'react'
import TabButtonComponent from "./TabButtonComponent";
import { useState } from "react";
const ExamplesComponent = () => {

    const [selectedTopic , setSelectedTopic ] = useState('');

    const handleSelect = (selectedComponent)=>{
      setSelectedTopic(selectedComponent)
    }

  return (
    <section id="examples">
    <h2>Examples</h2>
    <menu>
      <TabButtonComponent onSelect={function (){ handleSelect('componets')}}>Components</TabButtonComponent>
      <TabButtonComponent onSelect={()=> handleSelect('jsx')}>JSX</TabButtonComponent>
      <TabButtonComponent onSelect={()=> handleSelect('props')}>Props</TabButtonComponent>
      <TabButtonComponent onSelect={()=> handleSelect('state')}>State</TabButtonComponent>
    </menu>
    {selectedTopic}
    </section>
  )
}

export default ExamplesComponent
