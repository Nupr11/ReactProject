import styles from "./signUp.module.css";
import { Input } from "../../input";
import { Button } from "../../button/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../storage/firebase";
import { useStore } from "../../../../store/useStore";
import { Title } from "../../../features";
import { useState } from "react";

export function SignUp() {
  const { user, setUser, updateUserField } = useStore();
  const [result, setResult] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      setResult("New user created successfully");
    } catch (error) {
      setResult(error.message);
    }
    setUser(user);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    updateUserField({ name, value });
  };

  return (
    <form className={styles.loginForm}>
      <Title>Create account</Title>
      <Input
        className={styles.label}
        type="text"
        label="name"
        value={user.name}
        handler={changeHandler}
      />
      <Input
        className={styles.label}
        type="email"
        label="email"
        value={user.email}
        handler={changeHandler}
      />
      <Input
        className={styles.label}
        type="password"
        label="password"
        value={user.password}
        handler={changeHandler}
      ></Input>
      <>
        <Button className={styles.btn} type="submit" handler={submitHandler}>
          Sign up
        </Button>
      </>
      <span>{result}</span>
    </form>
  );
}
