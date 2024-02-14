import { Navigate } from "react-router-dom";
import { AnimatedPage, SignIn, SignUp } from "../../components";
import { useStore } from "../../store/useStore";

export function Auth() {
  const { user, isHasAccount } = useStore();

  if (user) return <Navigate to="/profile" replace />;
  return (
    <AnimatedPage>
      <section>{isHasAccount ? <SignIn /> : <SignUp />}</section>
    </AnimatedPage>
  );
}
