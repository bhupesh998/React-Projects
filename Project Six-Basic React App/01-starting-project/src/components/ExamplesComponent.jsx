import React from 'react'
import TabButtonComponent from "./TabButtonComponent";
import { useState } from "react";
import SectionComponent from './SectionComponent';
import TabsComponent from './TabsComponent';


const ExamplesComponent = () => {

    const [selectedTopic, setSelectedTopic] = useState('');

    const handleSelect = (selectedComponent) => {
        setSelectedTopic(selectedComponent)
    }

    return (
        <SectionComponent id="examples" title={"Examples"}>
            {/* buttonsContainer="menu" to be used for builtin tags , for custom component tags buttonscontainer assignemnt will be buttonsContainer={customComponent} */}
            <TabsComponent buttonsContainer="menu" buttons={
                <>
                    <TabButtonComponent onClick={function () { handleSelect('componets') }}>Components</TabButtonComponent>
                    <TabButtonComponent onClick={() => handleSelect('jsx')}>JSX</TabButtonComponent>
                    <TabButtonComponent onClick={() => handleSelect('props')}>Props</TabButtonComponent>
                    <TabButtonComponent onClick={() => handleSelect('state')}>State</TabButtonComponent>
                </>
            }>
                {selectedTopic}
            </TabsComponent>


        </SectionComponent>

    )
}

export default ExamplesComponent
