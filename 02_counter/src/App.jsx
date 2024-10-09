import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(1)

  // let counter = 5

  const addValue = () => {

    // console.log("clicked", counter);
    // counter = counter +1
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // useState Updates ui and variable through batched
    // Update same setCoutner with fiber by batch and multiple setCounter is updated as one and the value is change one time   
  }
  const removeValue = () => {
    if (setCounter < 0) {
      counter = 0
    } else {

      setCounter(counter - 1)
    }
  }
  return (
    <>

      <h1>React learning</h1>
      <h2>Counter value: {counter}</h2>
      {/* Add values from button */}
      <button onClick={addValue}
      >Add value {counter}</button>
      <br />
      {/* Decrease values from button */}
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
