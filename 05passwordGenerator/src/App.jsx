import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  
const [length, setLength]=useState(8)
const [numAllowed,setNumberAllowed]=useState(false)
const [characterAllowed,setCharacterAllowed]=useState(false)

const[password,setPassword]=useState("")

//useRef hook

const passwordRef=useRef(null)


const passwordGenerator= useCallback(()=>{
  let pass=""
  let str=
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numAllowed) str+="0123456789"
  if(characterAllowed) str+="!@#$%^&*(){}~_[]?><./|"


  for(let i=1;i<=length;i++){
    let char=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char)
  }

  setPassword(pass)

}, [length,numAllowed,characterAllowed,setPassword])
 
const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current?.select();
  // passwordRef.current?.setSelectionRange(0,20)
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>{
  passwordGenerator()
},[length,numAllowed,characterAllowed,passwordGenerator])



  return (
    <>
      <div className="w-full max-w-md mx-auto 
      shadow-md rounded-lg px-4 my-8
       text-orange-500 bg-gray-800">
<h1 className='text-white text-center my-2'>
  Password Generator</h1>

        <div className="flex shadow  
        rounded-lg overflow-hidden mb-4">
          <input type="text"
          value={password}
          onClick={copyPasswordToClipboard}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly 
          ref={passwordRef}/>
          
          <button className=' outline-none bg-blue-700 hover:bg-blue-500
           text-white py-
           px-1 rounded-full shrink-0'>
           Copy
          </button>
         
        </div>
        <div className='flex text-sm gap-x-2'>

 <div className='flex items-center gap-x-1'>
<input type="range"
min={6}
max={100}
value={length}
className='cursor-pointer'
onChange={(e)=>{setLength(e.target.value)}}
 />
 <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numAllowed} 
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={characterAllowed} 
            id='characterInput'
            onChange={()=>{
              setCharacterAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor="characterInput">Characters</label>
            
          </div>
        </div>
       </div>
    </>
  )
}

export default App
