import express from 'express';

const router = express.Router();

// Get CiCi response to user query
router.post('/chat', (req, res) => {
  // TODO: Implement CiCi chat logic using OpenAI
  res.json({ message: 'CiCi chat endpoint' });
});

// Get next steps recommendation from CiCi
router.get('/next-steps/:userId', (req, res) => {
  // TODO: Implement CiCi next steps recommendation logic
  res.json({ message: 'CiCi next steps endpoint' });
});

export default router; 