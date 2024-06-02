import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ProjectList = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        axios.get('/api/projects')
            .then(response => { setProjects(response.data)})
            .catch(error => console.error('Error fetching projects:', error))
    }, [])
    return (
        <div>
            <h1>Projects</h1>
            <ul>
                {projects.map((project: { name: string }, projectIndex: number) => (
                    <li key={projectIndex}>{project.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default ProjectList