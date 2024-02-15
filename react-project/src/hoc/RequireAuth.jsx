import { Navigate } from "react-router-dom";
import { useStore } from "../store/useStore";

export function RequireAuth({ children }) {
  const { user } = useStore();

  if (!user) return <Navigate to="/auth" replace />;
  return children;
}
