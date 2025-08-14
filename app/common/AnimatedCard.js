import { motion } from 'framer-motion';

const AnimatedCard = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className={`rounded-xl bg-[var(--card-bg)] border border-[var(--border)] shadow-lg backdrop-blur-sm ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;