import styles from "./header.module.css";
import { Logo, Nav, Button } from "./../../components";
import { Link } from "react-router-dom";
import { useStore } from "../../store/useStore";

export function Header({ className }) {
  const { user } = useStore();

  return (
    <header className={`${className} ${styles.header}`}>
      <Logo className={styles.logo} />
      <Nav className={styles.nav} />
      <div>
        <div>{user.name}</div>
        <div>{user.email}</div>
        <div>{user.password}</div>
        <Button className={styles.button} text="Sign in" handler={null} />
        <Link className={styles.button} to="/auth">
          Log in
        </Link>
      </div>
    </header>
  );
}
