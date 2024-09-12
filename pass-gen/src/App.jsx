import { useCallback, useEffect, useState , useRef } from 'react'


function App() {
  const [length , setLength ] = useState(8)
  const [numAllowed, setNumAllowed] = useState(true)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const passwordGenerator =useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str+='0123456789'
    if(charAllowed) str+='!@#$%^&*()_+[]{}|;:,.<>?'

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str[randomIndex];
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numAllowed, charAllowed])

  const copyToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,9)
    window.navigator.clipboard.writeText(password)

  }, [password])

  return <>
   
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-4xl text-center text-white my-3'>Password generator</h1>
        <input type='text' value={password} className='outline-none w-full py-3 px-3' placeholder='password' readOnly ref={passwordRef}/>
        <button className='bg-blue-500 text-white px-3 py-0.5 shrink-0' onClick={copyToClipboard}>copy</button>
        <div className='flex text-sm gap-x-2'>
          <div className='flex gap-x-1 items-center'>
              <input type='range'  min={5} max={100} value={length} className='cursor-pointer' onChange={(e)=>setLength(e.target.value)}/>
              <label>Length : {length}</label>
            
          </div>
          <div>
          <input type='checkbox' defaultChecked={numAllowed} id='numInput' onChange={()=>setNumAllowed((prev)=>!prev)} /> Numbers
          <input type='checkbox' defaultChecked={charAllowed} id='charInput' onChange={()=>setCharAllowed((prev)=>!prev)}/> Characters
          </div>
        </div>
    </div>
  </>
}

export default App
