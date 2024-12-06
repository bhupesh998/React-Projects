import React from 'react'
import TabButtonComponent from "./TabButtonComponent";
import { useState } from "react";
import SectionComponent from './SectionComponent';

const ExamplesComponent = () => {

    const [selectedTopic, setSelectedTopic] = useState('');

    const handleSelect = (selectedComponent) => {
        setSelectedTopic(selectedComponent)
    }

    return (
        <SectionComponent id="examples" title={"Examples"}>
            <menu>
                <TabButtonComponent onClick={function () { handleSelect('componets') }}>Components</TabButtonComponent>
                <TabButtonComponent onClick={() => handleSelect('jsx')}>JSX</TabButtonComponent>
                <TabButtonComponent onClick={() => handleSelect('props')}>Props</TabButtonComponent>
                <TabButtonComponent onClick={() => handleSelect('state')}>State</TabButtonComponent>
            </menu>
            {selectedTopic}
        </SectionComponent>

    )
}

export default ExamplesComponent
