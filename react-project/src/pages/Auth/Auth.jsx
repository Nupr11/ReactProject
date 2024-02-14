import { useNavigate, useLocation } from "react-router-dom";
import { AnimatedPage, SignIn, SignUp } from "../../components";

export function Auth() {
  const navigation = useNavigate();
  const location = useLocation();

  //   const { createUser } = useUser();

  //   const { user, setUser, updateUserField } = useStore();

  //   updateUserField({ name, value });
  //   setUserData((prevData) => ({ ...prevData, [name]: value }));

  // const handleSubmit = () => {
  //   setUser(userData);
  //   createUser();
  return (
    <AnimatedPage>
      <section>
        <SignUp />
        <SignIn />
      </section>
    </AnimatedPage>
  );
}
