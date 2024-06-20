import { useState } from 'react'
import './App.css'
import Box from './Components/Box'
import UserInput from './Components/UserInput'

function App() {
  const [inputColor, setInputColor] = useState('')
  const [hexValue, setHexValue] = useState('');

  return (
    <div className='App'>
      <Box 
        inputColor={inputColor}
        hexValue={hexValue}
      />
      <UserInput 
        inputColor={inputColor} 
        setInputColor={setInputColor}
        setHexValue={setHexValue}
      />
    </div>
  )
}

export default App
