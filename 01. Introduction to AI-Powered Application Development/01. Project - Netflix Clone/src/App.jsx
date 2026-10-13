import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import TestOne from './Componenets/Test/TestOne'
import TestTwo from './Componenets/Test/TestTwo'
import Header from './Componenets/Test/header/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TestOne/>
    <TestTwo/>
    <header/>
    </>
  )
}

export default App;
