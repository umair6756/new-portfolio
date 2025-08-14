import { motion } from 'framer-motion';

const GlowButton = ({ children, className = "", ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden px-6 py-3 rounded-lg font-bold text-white bg-[var(--primary)] ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-0 transition-opacity duration-300"
      />
    </motion.button>
  );
};

export default GlowButton;