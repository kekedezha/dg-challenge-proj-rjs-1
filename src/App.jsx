import { useState } from 'react'
import './App.css'
import Box from './Components/Box'
import UserInput from './Components/UserInput'

function App() {
  const [inputColor, setInputColor] = useState('')

  const updateColor = (e) => {
    setInputColor(e.target.value)
  }

  return (
    <div>
      <Box inputColor={inputColor}/>
      <UserInput inputColor={inputColor} updateColor={updateColor}/>
    </div>
  )
}

export default App
