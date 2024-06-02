import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('GET all projects');
});

router.post('/', (req, res) => {
  res.send('POST a new project');
});

export default router;
