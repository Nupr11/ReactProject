import { motion } from "framer-motion";

export function AnimatedPage({ children }) {
  const animation = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "100vw",
    },
  };

  const transition = {
    ease: "linear",
    duration: 2,
    x: { duration: 1 },
  };

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animation}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
