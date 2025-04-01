import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

export const ProtectedLink: React.FC<ProtectedLinkProps> = ({ to, className, children }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    if (!isAuthenticated) {
      e.preventDefault();
      // Navigate to login with a message and the intended destination
      navigate('/login', { 
        state: { 
          from: to,
          message: "Please log in to access this page" 
        }
      });
    }
  };

  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};
