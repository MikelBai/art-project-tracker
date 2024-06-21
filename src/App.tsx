import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CalendarPage from './pages/CalendarPage';
import ResourceManager from './pages/ResourceManager';


const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64"> {/* Make room for the fixed sidebar */}
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/resources" element={<ResourceManager />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
