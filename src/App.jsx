import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './MainRoutes';
import Home from './components/Home.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Home />
    </>
  )
}

export default App
