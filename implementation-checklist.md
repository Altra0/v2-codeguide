# LOCO Career Alignment & Onboarding System - Implementation Checklist

## Phase 1: Environment Setup

- [x] Create a new Git repository using the CodeGuide Starter Pro kit as the predefined project structure
- [x] Confirm Node.js is installed (Note: Current version is v22.11.0, plan specifies v20.2.1)
- [x] Set up directory structure with two main folders: `/frontend` for Next.js project and `/backend` for Express API
- [x] Install required command line tools such as Git, Node.js, and npm
- [x] **Validation**: Run `node -v` to ensure version is active and verify the repository structure is correct

## Phase 2: Frontend Development

- [x] Initialize a Next.js project with Next.js 14 within the `/frontend` folder
- [x] Install Tailwind CSS in the Next.js project as per official documentation and configure it in the project
- [x] Install and configure ShadCN UI components along with TypeScript support
- [x] Set up Clerk authentication integration in the Next.js app, placing configuration files in `/frontend/config/clerk.js`
- [x] Create common layout components (header, footer, navigation) using Tailwind CSS and ShadCN UI in `/frontend/components/`
- [x] Implement Clerk authentication as per docs
  - [x] Implement home page with Clerk authentication buttons
  - [x] Create onboarding/basic-details page with form for user profile data
  - [ ] Create assessment page for different career profiles
- [x] Create the landing page with modern design and clear value proposition
- [ ] Build the AI career companion (CiCi) UI component in `/frontend/components/CiCiWidget.tsx`, integrating conversational UI elements
- [x] Create basic About page
- [ ] Create the onboarding flows for multiple user roles in `/frontend/pages/` as separate pages
- [ ] Develop the personalized dashboard component that will display career pathway recommendations and AI insights in `/frontend/components/Dashboard.tsx`
  - [ ] Create basic dashboard layout
  - [ ] Implement career pathway visualization
  - [ ] Add skills assessment display
- [ ] Create UI components for the admin/moderator panel under `/frontend/pages/admin/`, ensuring role-based access controls are in place
- [ ] Build the AI career companion (CiCi) UI component in `/frontend/components/CiCiWidget.tsx`, integrating conversational UI elements
- [x] **Validation**: Run `npm run dev` in `/frontend` and manually test routing and UI component interactions
  - [x] Verify Clerk authentication flow works correctly
  - [x] Confirm redirection to onboarding after signup

## Phase 3: Backend Development

- [x] Initialize an Express.js project in the `/backend` folder with Node.js
- [x] Install required packages including Express, body-parser, CORS, and relevant middleware, and configure basic server settings in `/backend/server.js`
- [x] Integrate Supabase by installing its client library and setting up connection configurations in `/backend/config/supabase.js`
- [x] Set up a connection to Weaviate by installing the Weaviate client and configuring vector search endpoints in `/backend/config/weaviate.js`
- [x] Set up OpenAI API configuration in `/backend/config/openai.ts`
- [ ] Create API routes for user registration, onboarding data submission, and personalized career pathway retrieval under `/backend/routes/user.js`
- [ ] Develop a dedicated SEDO API under `/backend/routes/sedo.js` to handle project management, user participation tracking, and skill & experience mapping
- [ ] Implement role-based access control (RBAC) middleware that integrates with Clerk Auth tokens in `/backend/middleware/auth.js`
- [ ] Build endpoints for real-time career recommendations and updates to the personalized dashboard in `/backend/routes/recommendations.js`
- [ ] Integrate the OpenAI API to support CiCi's conversational AI features via an endpoint in `/backend/routes/cici.js`
- [ ] **Validation**: Use Postman or curl commands to test each endpoint and verify expected responses

## Phase 4: Integration

- [ ] Connect frontend API calls to the Express backend endpoints using axios or fetch in `/frontend/services/api.ts`
- [ ] Configure the frontend to subscribe to real-time updates from Supabase within relevant dashboard components
- [ ] Integrate the OpenAI API within the CiCi component by creating a service in `/frontend/services/ciciAPI.ts`
- [ ] Ensure the Role-Based Access Control is enforced by passing Clerk Auth tokens from the frontend during API calls
- [ ] **Validation**: Conduct integration testing by simulating user flows to ensure frontend and backend communicate properly

## Phase 5: Deployment

- [ ] Set up CI/CD pipelines using Vercel for the Next.js frontend and configure deployment settings in `vercel.json`
- [ ] Prepare the backend for deployment using your preferred cloud service and configure environment variables accordingly in `/backend/.env`
- [ ] Ensure all API keys and sensitive data for Clerk, Supabase, Weaviate, and OpenAI are securely stored as environment variables
- [ ] Deploy the frontend to Vercel and make sure it is set to use Next.js 14
- [ ] Deploy the backend service, and verify connectivity between deployed frontend and backend endpoints
- [ ] **Validation**: Run end-to-end tests against the deployed system using Cypress or a similar tool

## Final Validations & Compliance

- [ ] Verify the entire system meets GDPR, COPPA, and UK Children's Code compliance
- [ ] Test the admin/moderator interface for role-based access and data management controls
- [ ] Run security tests against all authentication endpoints to ensure Clerk Auth integration is enforcing RBAC effectively
- [ ] Validate that the SEDO API endpoints properly handle project management and external integrations with sample data
- [ ] Conduct user acceptance testing (UAT) with a focus group representative of the target audience
- [ ] Finalize documentation for developers and administrators, including setup instructions, API documentation, and compliance measures 