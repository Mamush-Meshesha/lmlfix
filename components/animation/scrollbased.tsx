// components/ScrollAnimation.js
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
export type ScrollAnimation = {
  children: React.ReactNode;
  animation: Variants;
};
const ScrollAnimation = ({ children, animation }: ScrollAnimation) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animation}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
