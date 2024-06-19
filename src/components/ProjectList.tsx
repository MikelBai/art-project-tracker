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
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Project List</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Create New Project</h3>
        <input
          type="text"
          placeholder="Title"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Description"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Status"
          value={newProject.status}
          onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <button onClick={handleCreateProject} className="bg-blue-500 text-white p-2 rounded">
          Create
        </button>
      </div>
      <div>
        {projects.map((project) => (
          <div key={project._id} className="border p-4 mb-4">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p>{project.description}</p>
            <p>Status: {project.status}</p>
            <button
              onClick={() => setEditProject(project)}
              className="bg-yellow-500 text-white p-2 rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteProject(project._id)}
              className="bg-red-500 text-white p-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      {editProject && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Edit Project</h3>
          <input
            type="text"
            placeholder="Title"
            value={editProject.title}
            onChange={(e) => setEditProject({ ...editProject, title: e.target.value })}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Description"
            value={editProject.description}
            onChange={(e) => setEditProject({ ...editProject, description: e.target.value })}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Status"
            value={editProject.status}
            onChange={(e) => setEditProject({ ...editProject, status: e.target.value })}
            className="border p-2 mb-2 w-full"
          />
          <button
            onClick={() => handleUpdateProject(editProject._id)}
            className="bg-green-500 text-white p-2 rounded"
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
