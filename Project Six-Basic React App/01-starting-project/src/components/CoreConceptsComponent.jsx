import React from 'react'
import CoreConceptComponent from "./CoreConceptComponent";
import componentImage from '../assets/components.png'

const CoreConceptsComponent = () => {
  return (
    <section id="core-concepts">
    <h2>Core Concepts</h2>
    <ul>
      <CoreConceptComponent title="Components" description="Building Blocks" image={componentImage}/>
      <CoreConceptComponent title="Components" description="Building Blocks" image={componentImage}/>
      <CoreConceptComponent title="Components" description="Building Blocks" image={componentImage}/>
     
    </ul>
  </section>
  )
}

export default CoreConceptsComponent
