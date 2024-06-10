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
  res.send('POST a new project');
});

export default router;
