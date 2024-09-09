import  {useState, useEffect} from 'react'

const useOnline = (timeout) => {
    const [isOnline, setOnline ]= useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setOnline(true)
        },timeout)
    }, [])

  return  isOnline
}

export default useOnline