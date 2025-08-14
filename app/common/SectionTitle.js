import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, highlight }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
        {title} <span className="text-[var(--primary)]">{highlight}</span>
      </h2>
      <div className="w-24 h-1.5 bg-[var(--primary)] mx-auto mb-6 rounded-full" />
      <p className="text-[var(--text-secondary)] max-w-3xl mx-auto text-lg">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionTitle;