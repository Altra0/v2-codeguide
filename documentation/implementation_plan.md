---
description: Apply these rules when making changes to the project
globs:
alwaysApply: true
---

Update this rule if user requested changes to the project requirement, etc.
# Implementation plan

## Phase 1: Environment Setup

1.  Create a new Git repository using the CodeGuide Starter Pro kit as the predefined project structure (Project Overview: CodeGuide Starter Pro).
2.  Confirm Node.js is installed at version v20.2.1; if not, install Node.js v20.2.1 (Tech Stack: Core Tools).
3.  Set up directory structure with two main folders: `/frontend` for Next.js project and `/backend` for Express API (Project Overview: System Structure).
4.  Install required command line tools such as Git, Node.js v20.2.1, and yarn or npm as needed (Project Overview: Dev Tools).
5.  **Validation**: Run `node -v` to ensure version v20.2.1 is active and verify the repository structure is correct.

## Phase 2: Frontend Development

1.  Initialize a Next.js project with Next.js 14 (Note: Next.js 14 is required per tech stack requirements) within the `/frontend` folder using the CodeGuide Starter Pro kit (Tech Stack: Frontend, CodeGuide Starter Pro).
2.  Install Tailwind CSS in the Next.js project as per official documentation and configure it in the project (Tech Stack: Tailwind CSS).
3.  Install and configure ShadCN UI components along with TypeScript support (Tech Stack: ShadCN UI, Typescript).
4.  Set up Clerk authentication integration in the Next.js app, placing configuration files in `/frontend/config/clerk.js` (Tech Stack: Authentication).
5.  Create common layout components (header, footer, navigation) using Tailwind CSS and ShadCN UI in `/frontend/components/` (Project Overview: UI Design).
6.  Create the landing page and onboarding flows for multiple user roles (students, job seekers, parents, etc.) in `/frontend/pages/` as separate pages (Project Overview: Onboarding Process).
7.  Develop the personalized dashboard component that will display career pathway recommendations and AI insights in `/frontend/components/Dashboard.tsx` (Project Overview: Personalized Dashboard).
8.  Create UI components for the admin/moderator panel under `/frontend/pages/admin/`, ensuring role-based access controls are in place (Project Overview: Admin Interface, RBAC).
9.  Build the AI career companion (CiCi) UI component in `/frontend/components/CiCiWidget.tsx`, integrating conversational UI elements (Project Overview: AI Career Companion).
10. **Validation**: Run `npm run dev` in `/frontend` and manually test routing and UI component interactions.

## Phase 3: Backend Development

1.  Initialize an Express.js project in the `/backend` folder with Node.js v20.2.1 (Tech Stack: Backend & Data Storage, Node.js with Express).
2.  Install required packages including Express, body-parser, CORS, and relevant middleware, and configure basic server settings in `/backend/server.js` (Tech Stack: Backend Setup).
3.  Integrate Supabase by installing its client library and setting up connection configurations in `/backend/config/supabase.js` to interact with the PostgreSQL database (Tech Stack: Supabase).
4.  Set up a connection to Weaviate by installing the Weaviate client and configuring vector search endpoints in `/backend/config/weaviate.js` (Tech Stack: Weaviate, AI & Data Processing).
5.  Create API routes for user registration, onboarding data submission, and personalized career pathway retrieval under `/backend/routes/user.js` (Project Overview: User Profile Data).
6.  Develop a dedicated SEDO API under `/backend/routes/sedo.js` to handle project management, user participation tracking, and skill & experience mapping (Project Overview: SEDO Project Integration).
7.  Implement role-based access control (RBAC) middleware that integrates with Clerk Auth tokens in `/backend/middleware/auth.js` to filter access based on user roles (Project Overview: Admin/Moderator Interface, RBAC).
8.  Build endpoints for real-time career recommendations and updates to the personalized dashboard in `/backend/routes/recommendations.js` that interact with both Supabase and Weaviate (Project Overview: Real-time Updates).
9.  Integrate the OpenAI API to support CiCi’s conversational AI features via an endpoint in `/backend/routes/cici.js` (Project Overview: AI Career Companion).
10. **Validation**: Use Postman or curl commands to test each endpoint (e.g., `curl -X POST http://localhost:5000/api/sedo`) and verify expected responses.

## Phase 4: Integration

1.  Connect frontend API calls to the Express backend endpoints using axios or fetch in `/frontend/services/api.ts` (Project Overview: System Integration).
2.  Configure the frontend to subscribe to real-time updates from Supabase within relevant dashboard components (Tech Stack: Supabase Real-time).
3.  Integrate the OpenAI API within the CiCi component by creating a service in `/frontend/services/ciciAPI.ts` that calls the `/api/cici` endpoint on the backend (Project Overview: AI & Data Processing).
4.  Ensure the Role-Based Access Control is enforced by passing Clerk Auth tokens from the frontend during API calls (Project Overview: RBAC).
5.  **Validation**: Conduct integration testing by simulating user flows (onboarding, dashboard interaction, AI queries) to ensure frontend and backend communicate properly.

## Phase 5: Deployment

1.  Set up CI/CD pipelines using Vercel for the Next.js frontend (Tech Stack: Vercel, V0 by Vercel) and configure deployment settings in `vercel.json` at the project root (Project Overview: Deployment Tools).
2.  Prepare the backend for deployment using your preferred cloud service (e.g., Vercel serverless functions if suitable or deploy on a Node.js host) and configure environment variables accordingly in `/backend/.env` (Tech Stack: Node.js, Express).
3.  Ensure all API keys and sensitive data for Clerk, Supabase, Weaviate, and OpenAI are securely stored as environment variables and referenced in configuration files (Project Overview: Data Privacy & Compliance).
4.  Deploy the frontend to Vercel and make sure it is set to use Next.js 14 (Note: Next.js 14 is explicitly used due to compatibility with current AI coding tools) (Tech Stack: Frontend Deployment).
5.  Deploy the backend service, and verify connectivity between deployed frontend and backend endpoints (Project Overview: System Integration).
6.  **Validation**: Run end-to-end tests against the deployed system using Cypress or a similar tool to ensure all functionality (onboarding, dashboard, AI interactions, SEDO API) is working correctly.

## Final Validations & Compliance

1.  Verify the entire system meets GDPR, COPPA, and UK Children's Code compliance by reviewing parental consent workflows and privacy dashboards (Project Overview: Data Privacy & Compliance).
2.  Test the admin/moderator interface for role-based access and data management controls (Project Overview: Admin Interface).
3.  Run security tests against all authentication endpoints to ensure Clerk Auth integration is enforcing RBAC effectively (Project Overview: Security).
4.  Validate that the SEDO API endpoints properly handle project management and external integrations with sample data (Project Overview: SEDO Project Integration).
5.  Conduct user acceptance testing (UAT) with a focus group representative of the target audience (secondary school students, job seekers, etc.) (Project Overview: User Profile Data).
6.  Finalize documentation for developers and administrators, including setup instructions, API documentation, and compliance measures (Project Overview: System Documentation).

**Plan Complete**

This plan outlines a step-by-step implementation of the LOCO Career Alignment & Onboarding System, ensuring all provided technical requirements and project features are met.
