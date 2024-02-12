import styles from "./header.module.css";
import { Logo, Nav, Button } from "./../../components";

export function Header({ className }) {
  return (
    <header className={`${className} ${styles.header}`}>
      <Logo className={styles.logo} />
      <Nav className={styles.nav} />
      <div>
        <Button className={styles.button} text="Sign in" handler={null} />
        <Button className={styles.button} text="Log in" handler={null} />
      </div>
    </header>
  );
}
