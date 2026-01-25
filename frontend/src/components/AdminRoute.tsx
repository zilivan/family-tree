// src/components/AdminRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';

export default function AdminRoute() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  
  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }
  
  return <Outlet />;
}