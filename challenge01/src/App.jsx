import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleDotOnClick = (e) => {
    const dotPosition = {
      top: e.pageX,
      left: e.pageY,
    }
    console.log(dotPosition);
  }

  return (
    <div className="App">
      <span className='dot'onClick={handleDotOnClick} style={{}} />
    </div>
  )
}

export default App
