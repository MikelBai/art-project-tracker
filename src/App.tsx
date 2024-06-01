// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Home from './pages/Home'
import Project from './pages/Project'

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
//   const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </Router>
  )
}

export default App
