import { useState } from 'react'

import './App.css'

function App() {
  let [counter, setCounter] = useState(5)

  const addValue = () => {
    if(counter === 10){
      setCounter(10)
      return
    } else {
       counter = counter + 1;
    setCounter(counter)
    }
  }

  const subValue = () => {
   if(counter === 0){
      setCounter(0)
   } else {
      counter = counter - 1;
      setCounter(counter)
   }
  }

  return (
    <>
     <h1>Sample</h1>
     <h2>Count is: {counter}</h2>
     <button onClick={addValue}>Increment</button>
     <br />
     <button onClick={subValue}>Decrement</button>

    </>
  )
}

export default App
