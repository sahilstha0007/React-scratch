import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName:'sahil',
    age:18
  }
  let newArr = [1,2,3]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4"> Card of the day</h1>
      <Card userName="sahil" btnText="click me" />
      <Card userName="AnyName" btnText="visit me"/>
      
    </>
  )
}

export default App
