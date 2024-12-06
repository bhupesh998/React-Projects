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
                <TabButtonComponent onSelect={function () { handleSelect('componets') }}>Components</TabButtonComponent>
                <TabButtonComponent onSelect={() => handleSelect('jsx')}>JSX</TabButtonComponent>
                <TabButtonComponent onSelect={() => handleSelect('props')}>Props</TabButtonComponent>
                <TabButtonComponent onSelect={() => handleSelect('state')}>State</TabButtonComponent>
            </menu>
            {selectedTopic}
        </SectionComponent>

    )
}

export default ExamplesComponent
