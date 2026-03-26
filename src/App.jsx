import { useState } from 'react'
import { Header } from './components/Header'
import { Header2 } from './components/Header2'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Header2 />
    </>
  )
}

export default App
