---
description: Apply these rules when making changes to the project
globs:
alwaysApply: true
---

Update this rule if user requested changes to the project requirement, etc.
## Project Overview

*   **Type:** cursor_project_rules
*   **Description:** I want to build a web-based AI-powered career alignment and onboarding system for LOCO’s users to assess their career trajectory, set goals, and receive personalized career recommendations. This feature will serve as the foundation of the LOCO platform, ensuring that users are aligned with relevant career paths and skill-building opportunities from the start.
*   **Primary Goal:** Guide users through a personalized career alignment process that leverages AI, real-time job market data, and integrated SEDO projects to create comprehensive, adaptable career roadmaps.

## Project Structure

### Framework-Specific Routing

*   **Directory Rules:**

    *   **Next.js (App Router, v14 and above):** Enforce the use of the `app/` directory structure with nested route folders. For example, routes follow the `app/[route]/page.tsx` convention.
    *   Example 1: "Next.js 14 (App Router)" → `app/[route]/page.tsx` conventions
    *   Example 2: "Next.js (Pages Router)" → `pages/[route].tsx` pattern
    *   Example 3: "React Router 6" → `src/routes/` with usage of `createBrowserRouter`

### Core Directories

*   **Versioned Structure:**

    *   **app/api:** Next.js 14 API routes with Route Handlers (as seen in `app/api/webhooks/route.ts`)
    *   **components/ui:** Contains ShadCN UI components built with modern design patterns
    *   **hooks, lib, types, utils:** Versioned purpose for using Typescript utilities, custom hooks, helper functions, and type definitions relevant to the project.

### Key Files

*   **Stack-Versioned Patterns:**

    *   **app/layout.tsx:** Defines the global layout for the Next.js 14 App Router structure
    *   **app/page.tsx:** Serves as the main landing page following App Router conventions
    *   **components/providers/clerk-client-provider.tsx:** Example file for authentication setup using Clerk Auth

## Tech Stack Rules

*   **Version Enforcement:**

    *   **next@14:** App Router required, disallow usage of legacy `pages/` routes
    *   **Tailwind CSS:** Ensure configuration aligns with latest Tailwind setups for responsiveness and design consistency
    *   **Typescript:** Strict type-checking enforced across all components
    *   **Supabase:** Utilize real-time functionalities and secure PostgreSQL connections
    *   **Shadcn UI:** Follow modern component practices as per latest version integration
    *   **Clerk Auth:** Implement secure, role-based authentication per current version recommendations
    *   **Open AI & Weaviate:** Integrate AI and vector search functionalities with proper API versioning

## PRD Compliance

*   **Non-Negotiable:**

    *   "Ensuring that every user starts with a well-structured career plan by combining AI-driven insights, real-time job market data, and a comprehensive step-by-step roadmap is mandatory."

## App Flow Integration

*   **Stack-Aligned Flow:**

    *   Example: "Next.js 14 Auth Flow → `app/auth/login/page.tsx` uses server actions and Clerk Auth for secure login operations."

## Best Practices

*   **Next.js**

    *   Use the App Router (`app/` directory) exclusively for routing to ensure consistency.
    *   Leverage server components where possible to optimize performance.
    *   Maintain a clear separation between UI and data fetching logic.

*   **Tailwind CSS**

    *   Utilize utility-first classes to build responsive, modern UIs.
    *   Maintain a consistent design system through defined configurations.
    *   Apply dark/light mode configurations for accessibility.

*   **Typescript**

    *   Enforce strict type-checking and use type definitions for all components.
    *   Utilize interfaces for data models to ensure consistency in the user profile and project data.
    *   Regularly update dependencies to align with latest TS recommendations.

*   **Supabase**

    *   Implement secure authentication and real-time capabilities.
    *   Optimize database queries and use edge functions where applicable.
    *   Ensure proper indexing and Postgres configuration for performance.

*   **Shadcn UI**

    *   Follow component-based design patterns for reuse and scalability.
    *   Customize components using Tailwind for a uniform look and feel.
    *   Keep accessibility in mind during component development.

*   **Clerk Auth**

    *   Use role-based access controls to tailor views for different user segments.
    *   Integrate secure contextual providers for authentication state across the app.
    *   Ensure compliance with data privacy laws especially for minors.

*   **Open AI**

    *   Secure API keys and handle responses with proper error management.
    *   Validate and sanitize any input or output from AI services.
    *   Use rate limiting and caching mechanisms to optimize performance.

*   **Weaviate**

    *   Store and index project and user data for AI-powered search capabilities.
    *   Keep vector indexes up-to-date with dynamic career roadmap updates.
    *   Integrate seamlessly with Supabase for efficient data retrieval.

## Rules

*   Derive folder/file patterns **directly** from the techStackDoc versions and starter kit provided.
*   If Next.js 14 App Router is used: Enforce the `app/` directory with nested route folders, as illustrated in the starter kit structure.
*   If the project were to use Pages Router (not applicable here), then use a flat `pages/*.tsx` structure.
*   Mirror this logic for other tech stacks such as React Router or SvelteKit where applicable.
*   Never mix version patterns (e.g., avoid having `pages/` directory in an App Router project).
