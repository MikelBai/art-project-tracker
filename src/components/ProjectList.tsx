import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface Project {
    _id: string;
    title: string;
    description: string;
    status: string;
  }

const ProjectList = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    useEffect(() => {
        const fetchProjects = async () => {
          try {
            const response = await axios.get('/api/projects');
            setProjects(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchProjects();
      }, []);
      return (
        <div>
          {projects.map((project) => (
            <div key={project._id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>Status: {project.status}</p>
            </div>
          ))}
        </div>
      );
}

export default ProjectList