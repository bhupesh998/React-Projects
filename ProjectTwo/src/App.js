import React , {useState} from 'react'
import TabComonent from './components/TabComonent.jsx'

export default function App(){
  const [currentTabIndex , setIndex ] = useState(1)

  const handleChange =(newIndex)=>{
        setIndex(newIndex)
    }

  return <>
      <TabComonent currentTab={currentTabIndex}  onChange={handleChange}>
        <TabComonent.HeadsContainer>
          <TabComonent.Item label="Tab1" index={0} /> <br/><br/>
          <TabComonent.Item label="Tab2" index={1} /> <br/><br/>
          <TabComonent.Item label="Tab3" index={2} /> <br/><br/>
        </TabComonent.HeadsContainer> 
        <TabComonent.ContentContainer>
          <TabComonent.ContentItem index={0}>I am Content Item 1</TabComonent.ContentItem> 
          <TabComonent.ContentItem index={1} >I am Content Item 2</TabComonent.ContentItem> 
          <TabComonent.ContentItem index={2}>I am Content Item 3</TabComonent.ContentItem>
        </TabComonent.ContentContainer>
      </TabComonent>
  </>
}
