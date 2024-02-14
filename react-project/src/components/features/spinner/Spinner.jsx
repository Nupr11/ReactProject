import styles from "./spinner.module.css";
import { AnimatedFragment } from "../../animated/animatedFragment";
import { split } from "../../../utils/strings";

const DEFAULTS = {
  text: "Loading...",
  animation: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 100,
  },
};

export function Spinner({ className }) {
  const SPLIT_TEXT = split(DEFAULTS.text);
  return (
    <div className={`${className} ${styles.spinnerContainer}`}>
      <AnimatedFragment
        customConfig={DEFAULTS.animation}
        className={styles.text}
      >
        {SPLIT_TEXT}
      </AnimatedFragment>
    </div>
  );
}
