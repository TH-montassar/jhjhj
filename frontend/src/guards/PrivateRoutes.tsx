import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { Loader } from "../Shared/Loader";
interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, pending, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  const location = useLocation();
  if (pending) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <>{children}</>;
};
