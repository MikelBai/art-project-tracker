import { Router } from 'express';
import Project from '../models/projectModel';


const router = Router();

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (error) {
    if (error instanceof Error){
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error has occurred' });
    }
  }
});

router.post('/', async (req, res) => {
  const { title, description, status } = req.body;
  const project = new Project({ title, description, status });

  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (error) {
    if (error instanceof Error){
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error has occurred' });
    }
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  try {
    const updatedProject = await Project.findByIdAndUpdate(id, { title, description, status }, { new: true });
    res.json(updatedProject);
  } catch (error) {
    if (error instanceof Error){
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error has occurred' });
    }
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Project.findByIdAndDelete(id);
    res.json({ message: 'Project deleted' });
  } catch (error) {
    if (error instanceof Error){
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error has occurred' });
    }
  }
});

export default router;
