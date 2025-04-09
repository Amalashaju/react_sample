import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Amala from './Amala'
import Aish from './Aish'
import Pooj from './Pooj'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Amala/>
      <Aish/>
      <Pooj/>
    </>
  )
}

export default App
