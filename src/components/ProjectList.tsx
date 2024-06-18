import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Project {
  _id: string;
  title: string;
  description: string;
  status: string;
}

const ProjectList = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState({ title: '', description: '', status: '' });
  const [editProject, setEditProject] = useState<Project | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateProject = async () => {
    try {
      const response = await axios.post('/api/projects', newProject);
      setProjects([...projects, response.data]);
      setNewProject({ title: '', description: '', status: '' });
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateProject = async (id: string) => {
    try {
      const response = await axios.put(`/api/projects/${id}`, editProject);
      setProjects(projects.map((project) => (project._id === id ? response.data : project)));
      setEditProject(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteProject = async (id: string) => {
    try {
      await axios.delete(`/api/projects/${id}`);
      setProjects(projects.filter((project) => project._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Project List</h2>
      <div>
        <h3>Create New Project</h3>
        <input
          type="text"
          placeholder="Title"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Status"
          value={newProject.status}
          onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
        />
        <button onClick={handleCreateProject}>Create</button>
      </div>
      <div>
        {projects.map((project) => (
          <div key={project._id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Status: {project.status}</p>
            <button onClick={() => setEditProject(project)}>Edit</button>
            <button onClick={() => handleDeleteProject(project._id)}>Delete</button>
          </div>
        ))}
      </div>
      {editProject && (
        <div>
          <h3>Edit Project</h3>
          <input
            type="text"
            placeholder="Title"
            value={editProject.title}
            onChange={(e) => setEditProject({ ...editProject, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            value={editProject.description}
            onChange={(e) => setEditProject({ ...editProject, description: e.target.value })}
          />
          <input
            type="text"
            placeholder="Status"
            value={editProject.status}
            onChange={(e) => setEditProject({ ...editProject, status: e.target.value })}
          />
          <button onClick={() => handleUpdateProject(editProject._id)}>Update</button>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
