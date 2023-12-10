import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const currentUser = false;
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};
