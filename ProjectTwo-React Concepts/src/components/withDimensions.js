import React, { useEffect, useRef, useState } from 'react'

const withDimensions = (Component)=> {
    return function WithDimension(props){
        const [width, setWidth] = useState(null)
        const [height, setHeight] = useState(null)

        const compRef=useRef()
        useEffect(()=>{
            if(compRef.current){
                setWidth(compRef.current.offsetWidth)
                setHeight(compRef.current.offsetHeight)
            }

        },[compRef])

        console.log("with dimesion running for", Component);
        return <Component ref={compRef} height={height} width={width} {...props} />
    }

}

export default withDimensions