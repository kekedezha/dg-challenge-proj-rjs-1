import { useState } from 'react'
import './App.css'
import Box from './Components/Box'
import UserInput from './Components/UserInput'

function App() {
  const [inputColor, setInputColor] = useState('')
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(false);

  return (
    <div className='App'>
      <Box 
        inputColor={inputColor}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <UserInput 
        inputColor={inputColor} 
        setInputColor={setInputColor}
        setHexValue={setHexValue}
        setIsDarkText={setIsDarkText}
      />
    </div>
  )
}

export default App
