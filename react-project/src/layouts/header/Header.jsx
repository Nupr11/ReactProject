import styles from "./header.module.css";
import { Logo, Nav } from "./../../components";
import { useStore } from "../../store/useStore";
import { CustomLink } from "../../components/lib";
import { Button } from "../../components/lib";

export function Header({ className }) {
  const { user, logout } = useStore();

  return (
    <header className={`${className} ${styles.header}`}>
      <Logo className={styles.logo} />
      <Nav className={styles.nav} />
      <div>
        {user ? (
          <CustomLink className={styles.login} to="/profile">
            {user.email}
          </CustomLink>
        ) : (
          <CustomLink className={styles.login} to="/auth">
            Sign In
          </CustomLink>
        )}
      </div>
      {user ? (
        <Button className={styles.outBtn} handler={logout}>
          logout
        </Button>
      ) : null}
    </header>
  );
}
