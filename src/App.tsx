import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [contagem, setContagem] = useState(0)

  return (
    <div className="App">
      <h1>Redux</h1>
      <div className="card">
        <button onClick={() => setContagem((contagem) => contagem + 1)}>
          a contagem é {contagem}
        </button>
      </div>
    </div>
  )
}

export default App
