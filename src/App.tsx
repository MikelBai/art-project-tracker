import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import ProjectList from './components/ProjectList';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-3xl">Art Project Tracker</h1>
        </header>
        <div className="flex flex-1">
          <aside className="bg-gray-800 text-white w-64 p-4">
            <nav>
              <ul>
                <li className="mb-2">
                  <Link to="/" className="hover:bg-gray-700 p-2 block rounded">Home</Link>
                </li>
                <li className="mb-2">
                  <Link to="/projects" className="hover:bg-gray-700 p-2 block rounded">Projects</Link>
                </li>
                <li className="mb-2">
                  <Link to="/create" className="hover:bg-gray-700 p-2 block rounded">Create Project</Link>
                </li>
              </ul>
            </nav>
          </aside>
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectList />} />
              <Route path="/project/:id" element={<Project />} />
              <Route path="/create" element={<Home />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
