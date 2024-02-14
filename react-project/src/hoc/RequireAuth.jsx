import { Navigate, Outlet } from "react-router-dom";
import { useStore } from "../store/useStore";

export function RequireAuth() {
  const { user } = useStore();

  if (!user) return <Navigate to="/auth" replace />;
  return <Outlet />;
}
