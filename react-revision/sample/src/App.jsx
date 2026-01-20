import React from 'react'
import { useState } from 'react'


function App() {

  const [color, setColor] = useState("blue");



  return (
    <div className='w-full h-screen flex flex-col justify-center items-center' style={{backgroundColor: color}}>
      <h1 className={`text-3xl font-bold underline text-${color}-500`}>
        Hello world!
      </h1>
      <button 
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
        onClick={() => setColor(color === "blue" ? "red" : "blue")}
      >
        Change Color
      </button>
      <button 
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
        onClick={() => setColor(color === "blue" ? "red" : "blue")}
      >
        Change Color
      </button>
      <button 
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
        onClick={() => setColor(color === "blue" ? "red" : "blue")}
      >
        Change Color
      </button>
      <button 
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
        onClick={() => setColor(color === "blue" ? "red" : "blue")}
      >
        Change Color
      </button>
    </div>
  )

}  


export default App
