import React, {useLayoutEffect, useRef, useEffect, useState} from 'react'
import { createPortal } from 'react-dom'

const Tooltip = (props) => {
    const { children, targetPositions } = props
    const {left , top, right , bottom } = targetPositions 
    const toolTipRef=useRef(null)
    const [toolTipHeight , setToolTipHeight ] = useState(0)

    let x=0
    let y=0

    let now=performance.now()
    while(performance.now() - now < 800){
        // render blocking code nserted to see the uselayoutEffect and useEffect difference
    }

    if(targetPositions){
        x=left
        y=top - toolTipHeight
        console.log("The height is", toolTipHeight)

        if(y<0) y=bottom
    }

    // to calculate the height before tool tip is render , we will use uselayouteffect
    // repaint blocking effect
    // React guarantees that the code inside useLayoutEffect and any state updates scheduled inside it will be processed before the browser repaints the screen
    // This lets you render the tooltip, measure it, and re-render the tooltip again without the user noticing the first extra render. In other words, useLayoutEffect blocks the browser from painting.
    useLayoutEffect(()=>{
        const {height} = toolTipRef.current.getBoundingClientRect()
        setToolTipHeight(height)
        console.log("The height is Layouteffect", height);
        

    },[])

    // ran after component mounted , similar to componentDidMount
    useEffect(()=>{
        const {height} = toolTipRef.current.getBoundingClientRect()
        setToolTipHeight(height) 
        console.log("The height is useeffect", height);
        

    },[])

    

  return (
        // create portal lets us somee children in some part of dom
        // in below example this tooltip is render in body of dom instead of inside a div
        createPortal(<div className='tooltip' ref={toolTipRef}  style={{
            position: 'absolute',
            pointerEvents: 'none',
            left: 0,
            top: 0,
            transform: `translate3d(${x}px, ${y}px, 0)`
        }}>
        
        {children}</div>
        , document.body)
    )
}

export default Tooltip