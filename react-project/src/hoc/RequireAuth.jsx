import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useStore } from "../store/useStore";

export function RequireAuth() {
  const location = useLocation();
  const { user } = useStore();

  if (!user.name) return <Navigate to="/auth" replace />;
  return <Outlet />;
}
