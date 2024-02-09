import { LogoTitle, LogoSlogan } from "./components";
import { Link } from "react-router-dom";
import styles from "./logo.module.css";
import { SITE_NAME } from "../../../../data/data";
import { AnimatedFragment } from "../../../../components/animated";

export function Logo({ className }) {
  const animation = {
    config: { mass: 20, tension: 300, friction: 200 },
    x: 0,
    opacity: 1,
    from: { opacity: 0, x: -70, y: 0 },
    delay: 500,
  };
  const data = SITE_NAME;

  return (
    <Link to="/home" className={className}>
      <AnimatedFragment customConfig={animation}>
        <LogoTitle
          className={styles.logoTitle}
          key={data.title}
          title={data.title}
        />
        <LogoSlogan
          className={styles.logoSlogan}
          slogan={data.slogan}
          key={data.slogan}
        />
      </AnimatedFragment>
    </Link>
  );
}
