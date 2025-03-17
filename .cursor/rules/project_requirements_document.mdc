---
description: Apply these rules when making changes to the project
globs:
alwaysApply: true
---

Update this rule if user requested changes to the project requirement, etc.
# Project Requirements Document (PRD) for LOCO Career Alignment & Onboarding System

## 1. Project Overview

The LOCO Career Alignment & Onboarding System is a web-based, AI-powered platform designed to guide a diverse audience—from secondary school students and sixth formers to career professionals and employers—through the process of assessing their current career trajectory, setting clear goals, and receiving personalized recommendations. At its core, the system uses data collected during onboarding along with real-time job market insights to generate tailored career roadmaps and actionable steps such as suggested SEDO projects that bridge the gap between current skills and desired roles.

This feature serves as the foundation of the overall LOCO platform by ensuring users are matched with career paths and skill-building opportunities that suit their personal profile. LOCO is being built to help users navigate early academic decisions, career pivots, and professional development with a guided and engaging experience, led by the AI-powered career companion, CiCi. The key objectives include a seamless personalized onboarding, accurate career recommendations driven by AI and real-time market data, and continuous, automated updates to reflect evolving industry trends.

## 2. In-Scope vs. Out-of-Scope

### In-Scope (First Version)

*   **User Registration & Onboarding:** Implement sign-up using email/password or OAuth (via Clerk Auth), and role-based onboarding with a welcome message from CiCi.
*   **Career Pathway Recommendation System (Feature 1.1):** Collect structured user data (interests, skills, experience, aspirations) and suggest career paths with AI-powered recommendations, including bookmarking options.
*   **Career Roadmap Generation (Feature 1.2):** Automatic generation of a personalized career roadmap with short-term, intermediate, and long-term milestones that reflect academic or professional goals.
*   **Skill & Experience Mapping (Feature 1.3):** Analysis of current skills and identification of skill gaps with manual override capabilities allowing users to adjust or add skills.
*   **Industry & Experience Selection (Feature 1.4):** Users choose up to three industries of interest, with AI-powered auto-suggestions and filters based on salary, growth, and market saturation.
*   **Career & Ideal Candidate Comparison Tool (Feature 1.5):** Display a comparison between the user’s profile and ideal candidate profiles, and generate goal recommendations accordingly.
*   **Personalized Career Dashboard (Feature 1.6):** A dynamic dashboard that tracks roadmap progress, goals, skills, certifications, and real-time job insights.
*   **CiCi AI Career Companion (Feature 1.7):** Assist users throughout the process with real-time advice, motivational messages, and next step recommendations.
*   **Parent & Guardian Collaboration (Feature 1.8):** Allow parents to review and track their child’s career roadmap through a dedicated view.
*   **SEDO Projects Integration:** Build an internal SEDO API to manage project listings, track user participation, and recommend projects based on skill gaps.
*   **Role-Based Access Controls:** Implement role-based access with customized views and permissions for students, professionals, parents, and employers.
*   **Real-Time Market Updates:** Automatic updating of career recommendations using integrated job market data and AI-powered insights.

### Out-of-Scope (First Version)

*   **External API Integrations for SEDO Projects:** While the SEDO API will be built from scratch, connections to existing external freelancing or internship platforms are deferred.
*   **Advanced Analytics Dashboards:** Detailed internal analytics for administrators beyond the basic career monitoring dashboard.
*   **Multiple Language Support:** The system will initially be UK-focused and will not support multiple languages beyond English.
*   **Deep Customization of Branding:** While basic design guidelines (modern, clean UI with Inter font, light/dark modes) will be used, extensive styling options or a full brand style guide are left for later phases.
*   **In-depth Financial/Compensation Modules:** Any payment or compensation tracking for SEDO projects is not part of this initial release.
*   **Mobile App Version:** The system is web-based for now; mobile app implementations are planned for a later phase.

## 3. User Flow

When a new user visits LOCO, they start by registering using email, password, or a trusted OAuth provider. Once registered and verified, the AI-powered companion, CiCi, greets them with a warm welcome message and initiates a personalized onboarding journey. Depending on the user’s role—whether they are a secondary school student, a sixth former, a university candidate, a recent graduate, a career professional, a job seeker, a parent, or an employer—the onboarding flow asks role-specific questions about academic background, work experience, and career aspirations.

After the initial setup, users undergo a career assessment that captures details like subjects, grades, skills, interests, and career goals. Following this, CiCi guides them through exploring suggested career paths and refining their preferences with both automated recommendations and manual adjustments. The system then generates a personalized career roadmap, which users can view and monitor on a dynamic dashboard that updates in real time. This dashboard includes milestones, in-demand skills mapping, SEDO project suggestions, and continuous market insights, ensuring that every user is provided with actionable next steps and targeted guidance.

## 4. Core Features

*   **User Registration & Onboarding Flow**

    *   Email, password, or OAuth sign-up with email verification.
    *   Role selection based on user type (e.g., Student, Parent, Professional, Employer).
    *   AI-powered welcome by CiCi explaining the process and setting expectations.

*   **Career Pathway Recommendation System (Feature 1.1)**

    *   Collection of structured data: interests, skills, experiences, aspirations.
    *   AI-driven matching using Weaviate for semantic search.
    *   Bookmark functionality for users to save career paths.

*   **Personalized Career Roadmap Generation (Feature 1.2)**

    *   Auto-generation of milestone-based roadmaps tailored to user segments.
    *   Gap analysis comparing current profiles with ideal candidate profiles.
    *   Separate milestones for academic (e.g., GCSEs, A-levels) and professional (e.g., certification goals) users.

*   **Skill & Experience Mapping (Feature 1.3)**

    *   Prediction and mapping of skills based on academic or job history.
    *   Manual adjustment options to add, remove, or refine skills.
    *   Integration with SEDO project recommendations to address skill gaps.

*   **Industry & Experience Selection (Feature 1.4)**

    *   Allowing selection and auto-suggestion of up to three industries.
    *   Filtering based on salary, growth potential, and market saturation.
    *   Collection of work experience, projects, and extracurriculars.

*   **Career & Ideal Candidate Comparison Tool (Feature 1.5)**

    *   Side-by-side comparison of user’s profile vs. ideal candidate profiles.
    *   Generation of short-term, intermediate, and long-term career goals.
    *   Recommendations for certifications, skills, and projects.

*   **Personalized Career Dashboard (Feature 1.6)**

    *   Dynamic dashboard with progress tracking, goal updates, and notifications.
    *   Real-time integration of job market insights and SEDO project tracking.
    *   Interactive elements such as progress bars and card-based recommendations.

*   **CiCi AI Career Companion (Feature 1.7)**

    *   Real-time guidance, motivational prompts, and actionable recommendations.
    *   Suggestion of next steps based on ongoing gap analysis.
    *   Automated reminders for milestones and roadmap updates.

*   **Parent & Guardian Collaboration (Feature 1.8)**

    *   Dedicated view for parents to monitor and provide feedback on their child’s roadmap.
    *   Read-only access with the option to suggest resources and milestones.

*   **SEDO Projects Internal Integration**

    *   Creation of an internal API for project management (CRUD operations).
    *   Skill tagging and AI-driven project matching stored in Weaviate.
    *   Team formation and progress tracking mechanisms.

*   **Role-Based Access & Admin Interface**

    *   Different dashboards and edit permissions for each user segment.
    *   Administrative panels for employers and moderators to manage content and recommendations.
    *   Secure role-based views ensuring data privacy and compliance.

*   **Real-Time Updates**

    *   Automatic integration with job market data and AI models for updated recommendations.
    *   Instant dashboard refreshes to reflect the latest insights without user-triggered actions.

## 5. Tech Stack & Tools

*   **Frontend:**

    *   Next.js (React-based for fast, scalable UI)
    *   Tailwind CSS (for modern and flexible design)
    *   ShadCN UI Components (for interactive and clean UI elements)
    *   Typescript (for type safety and maintainability)

*   **Backend & Data Storage:**

    *   Node.js (Express.js for an efficient API server)
    *   Supabase (real-time subscriptions and PostgreSQL database storage)
    *   Weaviate (vector search database for semantic, AI-powered recommendations)

*   **Authentication:**

    *   Clerk Auth (secure user authentication and role-based access control)

*   **AI & Data Processing:**

    *   OpenAI API (powering CiCi’s conversational AI and recommendation logic)
    *   Weaviate (for handling vector searches in career pathway matching)

*   **Development Tools:**

    *   Cursor (advanced IDE with real-time code suggestions)
    *   V0 by Vercel (AI-powered frontend component building)
    *   Claude 3.7 & 3.5 Sonnet (for intelligent code assistance and hybrid reasoning)

*   **Starter Kit & Project Structure:**

    *   Based on CodeGuide Starter Pro (repository link available on GitHub)
    *   Predefined folder structure for app components, API routes, utilities, and styling

## 6. Non-Functional Requirements

*   **Performance:**

    *   Fast load times (aim for sub-2-second response on dashboard interactions).
    *   Real-time data processing with automatic updates.

*   **Security:**

    *   End-to-end encryption (HTTPS in transit, AES-256 at rest).
    *   Role-based access control and secure API endpoints.
    *   Robust parental consent workflows and data anonymization for minors.

*   **Compliance:**

    *   Adherence to GDPR requirements for data minimization and the right to be forgotten.
    *   COPPA and UK Children’s Code compliance for users under 16.
    *   Regular auditing for data privacy and security standards.

*   **Usability:**

    *   An intuitive, user-friendly interface with smooth animations and transitions.
    *   Clear typography (using Inter font) with light and dark mode support.
    *   A dedicated Privacy Dashboard for parents and minors to manage settings.

## 7. Constraints & Assumptions

*   **Constraints:**

    *   The system must support compliance with GDPR, COPPA, and similar regulations for minors.
    *   Real-time updates depend on external APIs (job market data, vector search in Weaviate) and must handle potential rate limits.
    *   The initial version is UK-focused, so full localization for other markets is out-of-scope for now.
    *   SEDO projects management will be built internally with flexibility for future external integrations, but full payment/compensation workflows are not included in this release.

*   **Assumptions:**

    *   Users will be guided progressively, with essential data collected during onboarding and additional details filled in over time.
    *   AI models (OpenAI API, Weaviate integrations) are assumed to be available and scalable for real-time recommendations.
    *   Role-based customization will ensure that minors’ data is handled with extra security and parental oversight.
    *   Automatic refresh mechanisms and dashboards assume stable backend performance and reliable third-party integrations.

## 8. Known Issues & Potential Pitfalls

*   **API Rate Limits & Data Latency:**

    *   Reliance on third-party APIs (job market data, OpenAI, Weaviate) might lead to potential rate limiting. Mitigation includes caching frequently requested data and handling fallbacks gracefully.

*   **Data Privacy & Compliance:**

    *   Handling data for minors involves strict regulatory compliance and complex parental consent workflows. Extra care must be taken to securely store consent data and allow for seamless revocation of consent.

*   **Manual Adjustments vs. Automation:**

    *   Balancing AI-driven recommendations with manual user adjustments is a challenge. The interface should clearly indicate when a recommendation is automated and when manual tweaks are active.

*   **Role-Based Access Complexity:**

    *   Implementing multiple user roles with diverse permissions could lead to unintended privilege escalations or data leaks. Thorough testing and role audits are required.

*   **SEDO API Integration:**

    *   Developing the SEDO projects API in-house means potential issues with scalability, team formation logic, or integration with AI-powered matching. Clear documentation and modular designs must be prioritized to allow future external integrations.

This PRD provides a comprehensive and clear guide for building the LOCO Career Alignment & Onboarding System. Subsequent documents (Tech Stack Document, Frontend Guidelines, Backend Structure, App Flow, File Structure, IDE rules, etc.) will follow this foundation to ensure that every aspect is implemented with clarity and without ambiguity.
