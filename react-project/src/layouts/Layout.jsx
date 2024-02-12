import styles from "./layout.module.css";
import { ButtonBack } from "./../components";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";

export function Layout({ className, children }) {
  return (
    <div className={`${className} ${styles.container}`}>
      <Header className={styles.header} />
      <main className={styles.content}>
        <ButtonBack className={styles.btnBack} />
        {children}
      </main>
      <Footer className={styles.footer} />
    </div>
  );
}
