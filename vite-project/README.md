import React, { useState } from 'react'

function App() {

  const [username, setUsername] = useState('')


  const submitHandler = (e) => {
    e.preventDefault()
    console.log(username)
    setUsername('')
  }
  return (
    <>
      <form action=""
        onSubmit={(e) => { submitHandler(e) }}
      >

        <input type="text" name="" id=""
          className='px-4 py-3 text-xl m-5'
          placeholder='Enter Your Name'
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}

        />
        <button className='px-4 py-3 text-xl text-white font-semibold bg-emerald-600 rounded m-5 hover:bg-emerald-300'>Submit</button>
      </form>
    </>
  )
}

export default App


import React from 'react'
import Card from './components/Card'

function App() {
  const users = [
    {
      "name": "Aarav Sharma",
      "city": "Kathmandu",
      "age": 29,
      "profession": "Software Engineer",
      "profile_photo": "https://example.com/photos/aarav.jpg"
    },
    {
      "name": "Sujan Shrestha",
      "city": "Pokhara",
      "age": 34,
      "profession": "Data Scientist",
      "profile_photo": "https://example.com/photos/sujan.jpg"
    },
    {
      "name": "Anisha Thapa",
      "city": "Biratnagar",
      "age": 26,
      "profession": "Graphic Designer",
      "profile_photo": "https://example.com/photos/anisha.jpg"
    },
    {
      "name": "Pratiksha Raut",
      "city": "Lalitpur",
      "age": 30,
      "profession": "Marketing Specialist",
      "profile_photo": "https://example.com/photos/pratiksha.jpg"
    },
    {
      "name": "Bibek Gurung",
      "city": "Chitwan",
      "age": 41,
      "profession": "Product Manager",
      "profile_photo": "https://example.com/photos/bibek.jpg"
    }
  ]



  return (
    <>
      <div>
        <div className='p-10 text-white'>
          {users.map(function(elem, idx){
            return <Card key={idx} username={elem.name} age = {elem.age} city={elem.city} photo = {elem.profile_photo} profession = {elem.profession}/>
          })}
        </div>
      </div>
    </>
  )
}

export default App
