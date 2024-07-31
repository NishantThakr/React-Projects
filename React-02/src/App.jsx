import React, { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copy")
  // use ref hoook

  const passref = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllow) str += "0123456789"
    if (charAllow) str += "@#$%^&*"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllow, charAllow, setPassword])

  const copyPass = useCallback(() => {
    passref.current?.select();
    // passref.current?.setSelectionRange(0, 8)
    window.navigator.clipboard.writeText(password)
    setCopyText(copyText => "Copied!")
  }, [password])



  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllow, charAllow, passwordGenerator]);

  return (
    <>
      <div className='w-full mt-4 max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center text-3xl mb-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" ref={passref} value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly />
          <button onClick={copyPass} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-500'>{copyText}</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={64} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllow} id='numberInput' onChange={() => {
              setNumberAllow((prev) => !prev)
            }} />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllow} id='CharInput' onChange={() => {
              setCharAllow((prev) => !prev)
            }} />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App