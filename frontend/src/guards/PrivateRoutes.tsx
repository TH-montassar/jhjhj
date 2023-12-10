import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const currentUser = true;
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};
