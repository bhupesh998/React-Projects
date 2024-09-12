import React from 'react'
import useOnline from './useOnline.jsx'

const ChatPage = () => {
    const isOnline = useOnline(5000)

  return (
     isOnline ? <h1>Chat Begins Now</h1>: <h6>No One to Chat</h6>
  )
}

export default ChatPage