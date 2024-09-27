import { StrictMode } from 'react'
import React from 'react'
// import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {jsx as _jsx} from "react/jsx-runtime"
function MyApp() {
  return (
    <div>
      <h1>Custom app!</h1>
    </div>
  )
}
// const reactElement = {
//   type: 'a',
//   props: {
//     href: "https://google.com",
//     target: 'blank'
//   },
//   childern: 'Click me to visit google'
// }



const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "Sahil is learning React "

const reactElement = React.createElement(
  "a",
  {href:'https://google.com', target:"blank"},
  "click me to visit google"
  anotherUser
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>

  </StrictMode>
)
