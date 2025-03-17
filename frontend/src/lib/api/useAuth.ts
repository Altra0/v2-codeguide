/**
 * React hook for making authenticated API calls from client components
 */
'use client';

import { useAuth as useClerkAuth } from '@clerk/nextjs';
import { useState, useCallback } from 'react';
import { get, post, put, del } from './client';

export function useAuth() {
  const { getToken, isLoaded, isSignedIn } = useClerkAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  /**
   * Make an authenticated GET request
   */
  const authGet = useCallback(async <T = any>(endpoint: string, options?: RequestInit) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const token = await getToken();
      const response = await get<T>(endpoint, options, token);
      return response;
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [getToken]);

  /**
   * Make an authenticated POST request
   */
  const authPost = useCallback(async <T = any>(endpoint: string, data: any, options?: RequestInit) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const token = await getToken();
      const response = await post<T>(endpoint, data, options, token);
      return response;
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [getToken]);

  /**
   * Make an authenticated PUT request
   */
  const authPut = useCallback(async <T = any>(endpoint: string, data: any, options?: RequestInit) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const token = await getToken();
      const response = await put<T>(endpoint, data, options, token);
      return response;
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [getToken]);

  /**
   * Make an authenticated DELETE request
   */
  const authDelete = useCallback(async <T = any>(endpoint: string, options?: RequestInit) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const token = await getToken();
      const response = await del<T>(endpoint, options, token);
      return response;
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [getToken]);

  return {
    isLoading,
    error,
    isAuthenticated: isLoaded && isSignedIn,
    authGet,
    authPost,
    authPut,
    authDelete,
  };
} 