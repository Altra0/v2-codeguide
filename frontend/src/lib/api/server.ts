/**
 * Server-side API utilities for making authenticated requests
 * to the backend API from server components.
 */
import { auth } from '@clerk/nextjs/server';
import { currentUser } from '@clerk/nextjs/server';
import { apiClient, get, post, put, del } from './client';

/**
 * Makes an authenticated API request from a server component
 * 
 * @param endpoint - The API endpoint (without the base URL)
 * @param options - Fetch options
 * @returns The response data
 */
export async function apiServer<T = any>(
  endpoint: string, 
  options: RequestInit = {}
): Promise<T> {
  // Get the session token from Clerk
  const { getToken } = auth();
  const token = await getToken();
  
  // Use the client API with the token
  return apiClient<T>(endpoint, options, token);
}

/**
 * Server-side GET request
 */
export function serverGet<T = any>(endpoint: string, options?: RequestInit) {
  return apiServer<T>(endpoint, { ...options, method: 'GET' });
}

/**
 * Server-side POST request
 */
export function serverPost<T = any>(endpoint: string, data?: any, options?: RequestInit) {
  return apiServer<T>(endpoint, {
    ...options,
    method: 'POST',
    body: data ? JSON.stringify(data) : undefined,
  });
}

/**
 * Server-side PUT request
 */
export function serverPut<T = any>(endpoint: string, data?: any, options?: RequestInit) {
  return apiServer<T>(endpoint, {
    ...options,
    method: 'PUT',
    body: data ? JSON.stringify(data) : undefined,
  });
}

/**
 * Server-side DELETE request
 */
export function serverDelete<T = any>(endpoint: string, options?: RequestInit) {
  return apiServer<T>(endpoint, { ...options, method: 'DELETE' });
}

/**
 * Get the current authenticated user with enhanced data from our own backend
 */
export async function getCurrentUser() {
  try {
    // First get the Clerk user
    const user = await currentUser();
    
    if (!user) {
      return null;
    }
    
    // Then fetch the user from our backend with additional data
    // This merges Clerk's authentication data with our application-specific data
    const { getToken } = auth();
    const token = await getToken();
    
    if (!token) {
      return user;
    }
    
    try {
      const userData = await get<any>(`/api/users/${user.id}`, {}, token);
      
      // Return combined data
      return {
        ...user,
        ...userData,
      };
    } catch (error) {
      // If backend is not available or user doesn't exist in our database yet,
      // just return the Clerk user
      console.error('Error fetching user data from backend', error);
      return user;
    }
  } catch (error) {
    console.error('Error getting current user', error);
    return null;
  }
} 