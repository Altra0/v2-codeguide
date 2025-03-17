import express from 'express';

const router = express.Router();

// Check if the API is running and authentication is set up
router.get('/status', (req, res) => {
  res.json({ 
    status: 'ok',
    message: 'Authentication service is running',
    authRequired: true,
    version: '1.0.0'
  });
});

// This endpoint can be used to verify a token without needing to access
// a protected resource (helpful for frontend validation)
router.get('/verify', (req, res) => {
  // The authenticate middleware will handle the token verification
  // If it reaches here, the token is valid
  res.json({ 
    isAuthenticated: true,
    message: 'Token is valid'
  });
});

export default router; 