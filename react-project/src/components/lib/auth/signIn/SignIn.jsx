import styles from "./../signUp/signUp.module.css";
import { Input } from "../../input";
import { Button } from "../../button/Button";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../lib/firebase";
import { Title } from "../../..";
import { useStore } from "../../../../store/useStore";
import { Error } from "../../../features";

const DEFAULT = {
  user: {
    name: "",
    email: "",
    password: "",
  },
};

export function SignIn() {
  const [userData, setUserData] = useState(DEFAULT.user);
  const [error, setError] = useState(null);
  const { hasAccountToggle } = useStore();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, userData.email, userData.password);
    } catch (error) {
      setError(error.message);
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {error ? <Error msg={error.message} /> : null}
      <form className={styles.loginForm}>
        <Title>sign In</Title>
        <Input
          className={styles.label}
          type="email"
          label="email"
          value={userData.email}
          handler={changeHandler}
        />
        <Input
          className={styles.label}
          type="password"
          label="password"
          value={userData.password}
          handler={changeHandler}
        ></Input>
        <>
          <Button className={styles.btn} type="submit" handler={submitHandler}>
            Log In
          </Button>
        </>
      </form>
      <Button
        type="button"
        className={styles.toggleBtn}
        handler={hasAccountToggle}
      >
        register
      </Button>
    </>
  );
}
