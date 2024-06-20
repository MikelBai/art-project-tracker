import React from 'react';
import { Link } from 'react-router-dom';
import ProjectList from '../components/ProjectList';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ProjectList />
      <Link to="/project/1">Go to Project 1</Link>
      {/* Add more links as needed */}
    </div>
  );
};

export default Home;
