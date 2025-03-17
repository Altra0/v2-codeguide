[![CodeGuide](/codeguide-backdrop.svg)](https://codeguide.dev)


# LOCO Career Alignment & Onboarding System

An AI-powered platform designed to guide users through career assessment, goal setting, and personalized recommendations.

## Project Overview

The LOCO Career Alignment & Onboarding System is a web-based platform that helps users from various backgrounds (students, job seekers, professionals) assess their career trajectory, set goals, and receive personalized recommendations. The system uses AI to generate tailored career roadmaps and actionable steps.

## Tech Stack

### Frontend
- Next.js 14
- Tailwind CSS
- ShadCN UI Components
- TypeScript

### Backend
- Node.js v20.2.1 with Express
- Supabase (PostgreSQL)
- Weaviate (Vector Search)
- OpenAI API
- Clerk Authentication

## Project Structure

```
/
├── frontend/         # Next.js application
├── backend/          # Express API
└── documentation/    # Project documentation
```

## Setup Instructions

### Prerequisites
- Node.js v20.2.1
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone <repository-url>
   ```

2. Install dependencies
   ```
   npm run install:all
   ```

3. Set up environment variables
   - Create `.env.local` in the frontend directory
   - Create `.env` in the backend directory

4. Start the development servers
   ```
   npm run dev
   ```

## Features

- User Registration & Onboarding
- Career Pathway Recommendation System
- Career Roadmap Generation
- Skill & Experience Mapping
- Industry & Experience Selection
- Career & Ideal Candidate Comparison Tool
- Personalized Career Dashboard
- CiCi AI Career Companion
- Parent & Guardian Collaboration
- SEDO Projects Integration
- Role-Based Access Controls
- Real-Time Market Updates

## License

ISC
