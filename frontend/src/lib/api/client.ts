/**
 * Client-side API utilities for making authenticated requests
 * to the backend API. This uses the client-side Clerk SDK.
 * 
 * For server components, use server.ts instead.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

/**
 * Makes an authenticated request to the backend API
 * 
 * @param endpoint - The API endpoint (without the base URL)
 * @param options - Fetch options
 * @returns The response data
 */
export async function apiClient<T = any>(
  endpoint: string, 
  options: RequestInit = {},
  token?: string | null
): Promise<T> {
  // Prepare headers with authentication
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string> || {}),
  };
  
  // Add authentication token if available
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
    console.log(`[API Debug] Using token for ${endpoint} (length: ${token.length})`);
  } else {
    console.warn(`[API Debug] No token available for request to ${endpoint}`);
  }
  
  const url = `${API_BASE_URL}${endpoint}`;
  console.log(`[API Debug] Making request to: ${url}`);
  
  try {
    // Make the request
    const response = await fetch(url, {
      ...options,
      headers,
      credentials: 'include',
    });
    
    // Handle response
    if (!response.ok) {
      // Try to parse error message from JSON
      let errorMessage = `API error: ${response.status}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch (e) {
        // Ignore parsing errors
        console.warn(`[API Debug] Could not parse error response from ${endpoint}`);
      }
      
      console.error(`[API Debug] Request failed: ${errorMessage}`);
      throw new Error(errorMessage);
    }
    
    // Return data if available, otherwise empty object
    try {
      const data = await response.json() as T;
      console.log(`[API Debug] Successful response from ${endpoint}`);
      return data;
    } catch (e) {
      console.warn(`[API Debug] Could not parse JSON response from ${endpoint}`);
      return {} as T;
    }
  } catch (error) {
    console.error(`[API Debug] Network error for ${endpoint}:`, error);
    // Re-throw with more context
    if (error instanceof Error) {
      throw new Error(`Network request failed for ${endpoint}: ${error.message}`);
    }
    throw error;
  }
}

/**
 * Utility function for making GET requests
 */
export function get<T = any>(endpoint: string, options?: RequestInit, token?: string | null) {
  return apiClient<T>(endpoint, { ...options, method: 'GET' }, token);
}

/**
 * Utility function for making POST requests
 */
export function post<T = any>(endpoint: string, data?: any, options?: RequestInit, token?: string | null) {
  return apiClient<T>(
    endpoint, 
    {
      ...options,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    },
    token
  );
}

/**
 * Utility function for making PUT requests
 */
export function put<T = any>(endpoint: string, data?: any, options?: RequestInit, token?: string | null) {
  return apiClient<T>(
    endpoint, 
    {
      ...options,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    },
    token
  );
}

/**
 * Utility function for making DELETE requests
 */
export function del<T = any>(endpoint: string, options?: RequestInit, token?: string | null) {
  return apiClient<T>(endpoint, { ...options, method: 'DELETE' }, token);
} 