import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Amala from './Amala'
import Aish from './Aish'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Amala/>
      <Aish/>
    </>
  )
}

export default App
