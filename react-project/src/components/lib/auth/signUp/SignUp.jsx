import styles from "./signUp.module.css";
import { Input } from "../../input";
import { Button } from "../../button/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../lib/firebase";
import { useStore } from "../../../../store/useStore";
import { Title } from "../../../features";
import { useState } from "react";
import { Error } from "../../../features";

export function SignUp() {
  const { setUser, hasAccountToggle } = useStore();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      setError(null);
      setUser(res.user);
    } catch (error) {
      setError(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {error ? <Error msg={error.message} /> : null}
      <form className={styles.loginForm}>
        <Title>Create account</Title>
        <Input
          className={styles.label}
          type="text"
          label="name"
          value={formData.name}
          handler={handleChange}
        />
        <Input
          className={styles.label}
          type="email"
          label="email"
          value={formData.email}
          handler={handleChange}
        />
        <Input
          className={styles.label}
          type="password"
          label="password"
          value={formData.password}
          handler={handleChange}
        ></Input>
        <Button className={styles.btn} type="submit" handler={submitHandler}>
          Sign up
        </Button>
      </form>
      <Button
        type="button"
        className={styles.toggleBtn}
        handler={hasAccountToggle}
      >
        Already have an account?
      </Button>
    </>
  );
}
