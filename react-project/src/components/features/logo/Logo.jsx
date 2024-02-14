import styles from "./logo.module.css";
import { LogoTitle, LogoSlogan } from "./components";
import { Link } from "react-router-dom";
import { SITE_NAME } from "../../../data/data";
import { AnimatedFragment } from "./../../../components/";

const DEFAULT = {
  data: SITE_NAME,
  animation: {
    config: { mass: 20, tension: 300, friction: 200 },
    x: 0,
    opacity: 1,
    from: { opacity: 0, x: -70, y: 0 },
    delay: 500,
  },
};

export function Logo({ className }) {
  return (
    <Link to="/home" className={className}>
      <AnimatedFragment customConfig={DEFAULT.animation}>
        <LogoTitle
          className={styles.logoTitle}
          key={DEFAULT.data.title}
          title={DEFAULT.data.title}
        />
        <LogoSlogan
          className={styles.logoSlogan}
          key={DEFAULT.data.slogan}
          slogan={DEFAULT.data.slogan}
        />
      </AnimatedFragment>
    </Link>
  );
}
