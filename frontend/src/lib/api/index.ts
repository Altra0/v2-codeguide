/**
 * API utilities for making authenticated requests to the backend.
 * 
 * For client components:
 * - Use the useAuth() hook to make authenticated requests
 * - Import from '@/lib/api'
 * 
 * For server components:
 * - Use the server API functions
 * - Import from '@/lib/api/server'
 */

// Re-export client utilities
export * from './client';

// Re-export the auth hook
export { useAuth } from './useAuth';

// Export server utilities separately to avoid client/server code mixing
// Server components should import directly from './server' 