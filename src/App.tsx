import { useState } from 'react';
import './App.css'
import { MyScene } from './scenes/MyScene';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MyScene />
    </div>
  )
}

export default App
