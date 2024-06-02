import Home from './pages/Home'
import Project from './pages/Project'

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

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
