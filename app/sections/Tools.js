import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { tools } from '../data/tools.js';
// import * as Icons from '../icons';
// const IconComponent = Icons[tool.icon];

const Tools = () => {
  return (
    <section id="tools" className="py-20 bg-[var(--background)]">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Tools &" 
          highlight="Technologies" 
          subtitle="Here are the tools and technologies I work with on a daily basis."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
        >
          {tools.map((tool, index) => {
            // const IconComponent = Icons[tool.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center bg-[var(--surface)] p-6 rounded-lg shadow-lg border border-[var(--border)]"
              >
                <div className="mb-4">
                  {tool.icon}
                </div>
                <span className="text-[var(--text-primary)] font-medium">{tool.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;