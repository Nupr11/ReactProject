import styles from "./signIn.module.css";
import { Input } from "../../input";
import { Button } from "../../button/Button";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../storage/firebase";
import { Title } from "../../..";

const DEFAULT = {
  user: {
    name: "",
    email: "",
    password: "",
  },
};

export function SignIn() {
  const [userData, setUserData] = useState(DEFAULT.user);
  const [result, setResult] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, userData.email, userData.password);
      setResult("You enterd");
    } catch (error) {
      setResult(error.message);
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className={styles.loginForm}>
      <Title>Log In</Title>
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
        {result}
      </>
    </form>
  );
}
