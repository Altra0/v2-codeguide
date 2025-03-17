import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '@clerk/backend';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local if it exists
dotenv.config({ path: path.resolve(__dirname, '../../.env.local') });

// Interface to extend Express Request with user information
export interface AuthenticatedRequest extends Request {
  auth?: any; // Using any for now as we don't know the exact Clerk type
  user?: {
    id: string;
    role: string;
    email?: string;
  };
}

// Authentication middleware using Clerk
export const authenticate = async (
  req: AuthenticatedRequest, 
  res: Response, 
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }
    
    const token = authHeader.split(' ')[1];
    
    // For debugging
    console.log('Token received:', token ? `${token.substring(0, 10)}...` : 'none');
    
    // Verify the token with Clerk
    const clerkSecretKey = process.env.CLERK_SECRET_KEY;
    
    if (!clerkSecretKey) {
      console.error('CLERK_SECRET_KEY is not defined in environment variables');
      return res.status(500).json({ message: 'Server configuration error' });
    }
    
    try {
      // Verify the token
      const authData = await verifyToken(token, {
        secretKey: clerkSecretKey,
      });
      
      console.log('Token verified successfully:', authData ? 'Auth data exists' : 'No auth data');
      
      // Set auth data for use in routes
      req.auth = authData;
      
      // For backward compatibility with our existing code, map Clerk user to our format
      req.user = {
        id: authData.sub || '',
        role: (authData as any).role || 'user', // Default role if not specified in Clerk
        email: (authData as any).email
      };
      
      next();
    } catch (error) {
      console.error('Token verification error:', error);
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
  } catch (error) {
    console.error('Authentication error:', error);
    return res.status(401).json({ message: 'Unauthorized: Authentication failed' });
  }
};

// Role-based access control middleware
export const authorize = (allowedRoles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized: Authentication required' });
    }
    
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
    }
    
    next();
  };
}; 