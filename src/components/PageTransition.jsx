import { motion } from "framer-motion";

const variants = {
  initialLeft: { opacity: 0, x: "-100vw" },
  initialRight: { opacity: 0, x: "100vw" },
  initialUp: { opacity: 0, y: "-100vh" },
  initialDown: { opacity: 0, y: "100vh" },
  animate: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const PageTransition = ({ children, direction = "left" }) => {
  let initial;
  switch(direction) {
    case "right":
      initial = "initialRight";
      break;
    case "up":
      initial = "initialUp";
      break;
    case "down":
      initial = "initialDown";
      break;
    default:
      initial = "initialLeft";
  }

  return (
    <motion.div
      variants={variants}
      initial={initial}
      animate="animate"
      exit="exit"
      style={{ height: "100%" }} // Fill container vertically
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
