---
description: Apply these rules when making changes to the project
globs:
alwaysApply: true
---

Update this rule if user requested changes to the project requirement, etc.
# LOCO Career Alignment & Onboarding System - Backend Structure Document

This document details the backend architecture, hosting solutions, and infrastructure components of the LOCO Career Alignment & Onboarding System. It explains, in everyday language, how the backend is set up and how it operates to meet the project’s requirements.

## 1. Backend Architecture

The backend is built using a combination of modern JavaScript technology and reliable cloud services. It mainly uses Node.js with Express.js to handle server-side operations and API endpoints. This architecture is designed to be scalable and maintainable by using modular code, separation of concerns, and industry-standard design patterns.

Key points:

*   Uses a RESTful approach for APIs.
*   Separates core business logic (career recommendations, user data processing) from database operations, ensuring easy updates and maintenance.
*   Integrates both SQL and vector search databases to handle structured and unstructured data.

## 2. Database Management

The system uses two types of databases to manage different data needs:

*   **Relational Database:**

    *   Supabase (with PostgreSQL) handles the structured data — such as user profiles, permissions, and onboarding details.

*   **Vector Search Database:**

    *   Weaviate is used for AI-powered semantic search and recommendations, especially for career pathways and job market data, storing unstructured and semi-structured data.

Data is stored in a way that allows for both quick read and write operations. The relational database is used for transactional data, while the vector database supports advanced search, filtering, and recommendation tasks. Regular backups and data integrity checks are part of the strategy.

## 3. Database Schema

Since Supabase uses PostgreSQL, the following is an example database schema that outlines key tables:

`-- Table for storing user information CREATE TABLE users ( id SERIAL PRIMARY KEY, full_name VARCHAR(100) NOT NULL, email VARCHAR(100) UNIQUE NOT NULL, role VARCHAR(50) NOT NULL, -- e.g., student, parent, employer created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ); -- Table for storing career roadmap details CREATE TABLE career_roadmaps ( id SERIAL PRIMARY KEY, user_id INTEGER REFERENCES users(id), roadmap JSONB NOT NULL, -- Stores the dynamic roadmap structure created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ); -- Table for storing SEDO project data CREATE TABLE sedo_projects ( id SERIAL PRIMARY KEY, project_name VARCHAR(255) NOT NULL, project_data JSONB NOT NULL, -- Contains details, skills mapping, team formation created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ); -- Table for logging user activity (for analytics and monitoring) CREATE TABLE activity_logs ( id SERIAL PRIMARY KEY, user_id INTEGER REFERENCES users(id), activity TEXT NOT NULL, activity_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP );`

For Weaviate, the schema is a set of collections focused on vectorizing textual data, which includes:

*   AI career recommendations data
*   Job market trends and vectorized profile elements

This separation allows efficient semantic querying.

## 4. API Design and Endpoints

The backend offers a set of RESTful API endpoints to manage communication with the frontend. Key endpoints include:

*   **User Management:**

    *   GET /users
    *   POST /users
    *   PUT /users/:id
    *   DELETE /users/:id

*   **Career Roadmaps:**

    *   GET /career-roadmaps (retrieves the roadmap for a user)
    *   POST /career-roadmaps (creates a new roadmap based on provided data)

*   **SEDO Projects:**

    *   GET /sedo-projects
    *   POST /sedo-projects
    *   PUT /sedo-projects/:id
    *   DELETE /sedo-projects/:id

*   **AI and Recommendation Engine:**

    *   GET /recommendations (fetches recommendations using Weaviate and OpenAI)

These endpoints are designed to communicate seamlessly with the frontend, ensuring that every user interaction (from registration to career trajectory updates) is dynamically handled.

## 5. Hosting Solutions

The backend is hosted on a combination of cloud-based services optimized for performance and scalability:

*   **Backend Server:**

    *   Deployed using Node.js on a scalable cloud platform (such as Vercel or AWS) which supports automatic scaling, load balancing, and continuous deployment.

*   **Database Hosting:**

    *   Supabase takes care of the PostgreSQL database, ensuring high availability, automated backups, and easy scalability.
    *   Weaviate is hosted on its managed cloud solution, providing optimized performance for vector search operations.

Benefits:

*   Reliable performance with minimal downtime.
*   Scalability to handle growing user base and data volume.
*   Cost-effective, with pay-as-you-go models and efficient resource usage.

## 6. Infrastructure Components

The infrastructure is composed of several key components that enhance performance and user experience:

*   **Load Balancers:** Automatically distribute incoming API requests across multiple server instances.
*   **Caching Mechanisms:** Use built-in caching on the server and database caching (where appropriate) to improve response times for frequently requested data.
*   **Content Delivery Network (CDN):** For delivering static content (if needed), a CDN ensures global low-latency access.
*   **Server-Side Monitoring:** Tools integrated with the hosting provider to track performance, errors, and traffic patterns.

These components work in harmony to provide a smooth, fast, and resilient backend environment.

## 7. Security Measures

Protecting user data is a top priority. A variety of security protocols and best practices are in place:

*   **Authentication and Authorization:**

    *   Role-based access control (RBAC) is implemented using Clerk Auth, ensuring that users only access permitted areas.

*   **Data Encryption:** All sensitive data is encrypted both in transit (using HTTPS) and at rest.

*   **Compliance:** The system follows GDPR, COPPA, and the UK Children’s Code to protect privacy, especially for minors. Parental consent is enforced where necessary.

*   **Best Practices:** Regular security audits, secure API endpoints, and validation of incoming data.

These measures help protect against unauthorized access and ensure that user data stays safe at all times.

## 8. Monitoring and Maintenance

To keep the backend running smoothly, a set of tools and practices are in place:

*   **Monitoring Tools:**

    *   Utilize cloud-native monitoring solutions (from providers like AWS or Vercel) to track server performance, monitor APIs, and log errors.

*   **Alerting Systems:** Immediate alerts via email or SMS when issues are detected, ensuring rapid response.

*   **Regular Maintenance:** Scheduled maintenance windows for updates and backups, along with continuous integration and deployment (CI/CD) pipelines to streamline updates.

*   **Documentation and Logging:** Detailed logs of application activity and API access for troubleshooting and performance improvements.

These practices ensure that the backend remains robust, secure, and up-to-date with minimal downtime.

## 9. Conclusion and Overall Backend Summary

The backend of the LOCO Career Alignment & Onboarding System is a solid, scalable, and secure environment built to support a wide range of users—from students and parents to career professionals and employers. It integrates multiple technologies:

*   **Tech Stack:**

    *   Backend: Node.js, Express.js
    *   Data Storage: Supabase (PostgreSQL) and Weaviate (vector search database)
    *   Authentication: Clerk Auth
    *   AI & Data Processing: OpenAI API & Weaviate for semantic search

The architecture is designed to provide reliable performance, seamless API interactions, and high security to meet modern compliance standards. Unique aspects include the combination of traditional SQL databases with a vector search engine, allowing the system to deliver personalized career recommendations and pathway roadmaps using AI.

This comprehensive setup ensures a responsive, user-friendly platform that adapts to the needs of its diverse user base, making it a robust foundation for the LOCO platform as a whole.
