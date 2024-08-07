import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [len, setLen] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "~!@#$%^&*()_+{}[]`'"

    for(let i = 1; i <= len; i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [
    len,
    numAllowed,
    charAllowed,
    setPassword
  ])

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGenerator()
  }, [
    len, 
    numAllowed,
    charAllowed,
    setPassword
  ])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-2xl px-4 my-8 text-orange-500 bg-gray-600'>
        <h1 className='text-4xl text-center text-white mb-2'>Password Generator</h1>
        <div className='flex rounded-lg overflow-hidden'>
          <input 
            type="text" 
            value={password} 
            className='outline-none w-full py-1 px-3 mb-4 rounded-xl'
            placeholder='Password'
            readOnly
            ref = {passwordRef}
            />
            <button 
              className='outline-none bg-blue-600 hover:bg-blue-900 active:bg-blue-600 text-white px-3 py-1 shrink-0 mb-4 ml-2 rounded-xl transform active:scale-50 transition-transform'
              onClick={copyPasswordToClipBoard}
            >
              copy
            </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 mb-2 '>
            <input 
            type="range"
            min = {6}
            max = {100}
            value={len}
            className='cursor-pointer py-1'
            onChange={(e)=>{setLen(e.target.value)}}
            />
            <label className='mr-1'>Lenght: {len}</label>
            <input 
              type='checkbox'
              defaultChecked = {numAllowed}
              onChange={()=>{setNumAllowed((prev)=>!prev)}}
            />
            <label className='mr-1'>Numbers</label>
            <input 
              type='checkbox'
              defaultChecked = {charAllowed}
              onChange={()=>{setCharAllowed((prev)=>!prev)}}
            />
            <label className='mr-1'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
