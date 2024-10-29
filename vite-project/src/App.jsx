import React, { useState } from 'react'

function App() {

  const [a, setA] = useState(10)


  const submitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <form action=""
        onSubmit={ }
      >

        <input type="text" name="" id=""
          className=''
          placeholder='Enter Your Name'
        />
        <button className=''>Submit</button>
      </form>
    </>
  )
}

export default App
