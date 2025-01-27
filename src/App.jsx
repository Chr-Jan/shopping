import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Layout from './components/layout'
import Header from './components/header'
import CartTab from './components/cartTab'
import Detail from './pages/detail'
import Home from './pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/:slug' element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
