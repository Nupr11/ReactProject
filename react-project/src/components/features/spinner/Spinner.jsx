import styles from "./spinner.module.css";
import { AnimatedFragment } from "../../animated/animatedFragment";
import { split } from "../../../utils/strings";
import { useMemo } from "react";

const DEFAULT = {
  text: "Loading...",
  animation: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 300,
  },
};

export function Spinner({ className }) {
  const SPLIT_TEXT = useMemo(() => split(DEFAULT.text), []);
  return (
    <div className={`${className} ${styles.spinnerContainer}`}>
      <AnimatedFragment
        customConfig={DEFAULT.animation}
        className={styles.text}
      >
        {SPLIT_TEXT}
      </AnimatedFragment>
    </div>
  );
}
