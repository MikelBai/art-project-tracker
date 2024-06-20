import React from 'react';
import { useParams } from 'react-router-dom';

const Project = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Project {id}</h1>
      {/* Fetch and display project details based on id */}
    </div>
  );
};

export default Project;
