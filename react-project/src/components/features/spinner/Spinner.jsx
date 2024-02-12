import styles from "./spinner.module.css";
import { SelfBuildingSquareSpinner } from "react-epic-spinners";
import { AnimatedFragment } from "../../animated/animatedFragment";
import { split } from "../../../utils/strings";

const SPINNER_DEFAULTS = {
  text: "Loading...",
  animation: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 100,
  },
};

export function Spinner({ className }) {
  const SPLIT_TEXT = split(SPINNER_DEFAULTS.text);
  return (
    <div className={`${className} ${styles.spinnerContainer}`}>
      <SelfBuildingSquareSpinner color="white" className={styles.spinner} />
      <AnimatedFragment
        customConfig={SPINNER_DEFAULTS.animation}
        className={styles.text}
      >
        {SPLIT_TEXT}
      </AnimatedFragment>
    </div>
  );
}
