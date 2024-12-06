import React from 'react'
//... => rest property of js , it bundles all values passed to the component as props in test other than title and children
const SectionComponent = ({title, children, ...test})  => {
  return (
   
   <section {...test}> 
    { /*forwarding props=> all extra props passed to parent are passed to section id=examples is copied there if there was any other value that was passed it would also be applied to section*/}
    <h2>{title}</h2>
    {children}
   </section>
  )
}

export default SectionComponent
