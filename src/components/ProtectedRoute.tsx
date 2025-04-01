import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login with a message and the intended destination
    return <Navigate to="/login" state={{ 
      from: location.pathname,
      message: "Please log in to access this page" 
    }} replace />;
  }

  return <>{children}</>;
};