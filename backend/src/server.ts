import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';

// Import routes
import userRoutes from './routes/user';
import careerRoadmapsRoutes from './routes/career-roadmaps';
import sedoProjectsRoutes from './routes/sedo-projects';
import recommendationsRoutes from './routes/recommendations';
import ciciRoutes from './routes/cici';
import authRoutes from './routes/auth';

// Import authentication middleware
import { authenticate } from './middleware/auth';

// Load environment variables from .env.local if it exists
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Public route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to LOCO Career Alignment & Onboarding System API' });
});

// Public routes (no authentication required)
app.use('/api/auth', authRoutes);

// Verify endpoint specifically needs authentication
app.use('/api/auth/verify', authenticate);

// Protected routes (authentication required)
app.use('/api/users', authenticate, userRoutes);
app.use('/api/career-roadmaps', authenticate, careerRoadmapsRoutes);
app.use('/api/sedo-projects', authenticate, sedoProjectsRoutes);
app.use('/api/recommendations', authenticate, recommendationsRoutes);
app.use('/api/cici', authenticate, ciciRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`CORS origin: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
}); 