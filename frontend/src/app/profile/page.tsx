'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/api/useAuth';
import { useClerk } from '@clerk/nextjs';

// Add TypeScript declaration for window.Clerk
declare global {
  interface Window {
    Clerk?: {
      session?: {
        getToken?: () => Promise<string | null>;
      };
    };
  }
}

export default function ProfilePage() {
  const { authGet, isLoading, error, isAuthenticated } = useAuth();
  const clerk = useClerk();
  const [userData, setUserData] = useState<any>(null);
  const [tokenDebug, setTokenDebug] = useState<string>('');
  
  // Fetch user data from the API when component mounts
  useEffect(() => {
    async function fetchUserData() {
      try {
        // Add some debug information about the token
        try {
          // Try the new Clerk API first
          const token = await clerk.session?.getToken();
          setTokenDebug(token ? `Token exists (length: ${token.length})` : 'No token available');
        } catch (e) {
          // Try fallback to window.Clerk
          const { getToken } = window.Clerk?.session || {};
          if (getToken) {
            const token = await getToken();
            setTokenDebug(token ? `Token exists via window.Clerk (length: ${token.length})` : 'No token available');
          } else {
            setTokenDebug('Clerk session or getToken not available');
          }
        }
        
        // Make authenticated request to our backend - note this matches the correct endpoint in our Express routes
        const data = await authGet('/api/users/current');
        setUserData(data);
      } catch (err) {
        console.error('Error fetching user data:', err);
      }
    }
    
    if (isAuthenticated) {
      fetchUserData();
    }
  }, [authGet, isAuthenticated, clerk.session]);
  
  if (!isAuthenticated) {
    return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        <p>Please sign in to view your profile.</p>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-6">Your Profile</h1>
      
      {/* Debug information */}
      <div className="mb-6 p-3 bg-gray-100 rounded">
        <h3 className="font-medium text-sm">Authentication Debug:</h3>
        <p className="text-xs">{tokenDebug}</p>
      </div>
      
      {isLoading ? (
        <div className="text-center py-8">
          <div className="animate-pulse h-6 w-24 bg-gray-200 rounded mb-2"></div>
          <div className="animate-pulse h-4 w-48 bg-gray-200 rounded"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 p-4 rounded-md border border-red-200 text-red-600">
          <h3 className="font-bold">Error loading profile</h3>
          <p>{error.message}</p>
        </div>
      ) : userData ? (
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">User Details</h2>
          <pre className="bg-gray-50 p-4 rounded overflow-auto">
            {JSON.stringify(userData, null, 2)}
          </pre>
        </div>
      ) : (
        <p>No profile data found. Please complete your profile.</p>
      )}
    </div>
  );
} 