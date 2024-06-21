import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="p-4 text-lg font-bold">Art Project Tracker</div>
      <nav className="p-4">
        <Link to="/" className="block py-2">Home</Link>
        <Link to="/projects" className="block py-2">Projects</Link>
        <Link to="/create-project" className="block py-2">Create Project</Link>
        <Link to="/calendar" className="block py-2">Calendar</Link>
        <Link to="/resources" className="block py-2">Resources</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
