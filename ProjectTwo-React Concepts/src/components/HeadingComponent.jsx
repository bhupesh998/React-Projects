import React from 'react'
import TextComponent from './TextComponent.jsx'

const HeadingComponent = (props) => {
    const {headingText} = props
  return (
    <div>HeadingComponent

        <TextComponent externalData={headingText}>
        I am Text In heading
        </TextComponent>
    </div>
  )
}

export default HeadingComponent