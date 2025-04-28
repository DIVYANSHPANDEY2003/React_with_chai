import { useState } from 'react'

function App() {
  const [color,setColor]=useState("olive")

  return (
    <>
     <div className="w-full h-screen duration-200" 
     style={{backgroundColor:color}}>
      
      <div className="fixed flex flex-wrap 
      justify-center bottom-12 inset-x-0 px-2"
      >
        <button 
        onClick={()=> setColor("red")}
        className=" outline-none px-4 py-1 bg-red-500 text-white rounded-full shadow-lg ">
          Red
        </button>

        <button 
        onClick={()=> setColor("green")}
        className=" outline-none px-4 py-1 bg-green-500 text-white rounded-full shadow-lg ">
          Green
        </button>

        <button 
        onClick={()=> setColor("blue")}
        className=" outline-none px-4 py-1 bg-blue-500 text-white rounded-full shadow-lg ">
          Blue
        </button>

        {/* <button 
        onClick={()=> setColor("black")}
        className=" outline-none px-4 py-1 bg-white-500 text-white rounded-full shadow-lg ">
          Black
        </button> */}

      
      </div>
      </div> 
    </>
  )
}

export default App
