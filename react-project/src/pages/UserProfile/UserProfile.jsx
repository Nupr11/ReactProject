import { useStore } from "../../store/useStore";
import { AnimatedPage, Title } from "./../../components";
import { Navigate } from "react-router-dom";

export function UserProfile() {
  const { user } = useStore();

  if (!user) return <Navigate to="/home" />;
  return (
    <AnimatedPage>
      <Title>Welcome, {user && user.email}</Title>
    </AnimatedPage>
  );
}
