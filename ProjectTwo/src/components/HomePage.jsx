import React  from 'react'
import useOnline from './useOnline.jsx'

const HomePage = () => {
    const isOnline = useOnline(3000)

  return (
     isOnline ? <h1>Fun Begins Now</h1>: <h6>No Fun</h6>
  )
}

export default HomePage