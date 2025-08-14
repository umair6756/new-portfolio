'use client'

import { motion } from 'framer-motion';
import AnimatedCard from '../common/AnimatedCard';
import SectionTitle from '../common/SectionTitle';
import { education } from '../data/education.js';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-[var(--background)]">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="My" 
          highlight="Education" 
          subtitle="My academic background and continuous learning journey."
        />

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-[var(--border)] transform -translate-x-1/2"></div>
          
          <div className="space-y-8 md:space-y-0">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} items-center`}
              >
                <div className="hidden md:block absolute left-1/2 w-4 h-4 bg-[var(--primary)] rounded-full transform -translate-x-1/2 z-10"></div>
                
                <div className={`md:w-1/2 p-6 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:order-2'}`}>
                  <AnimatedCard className="p-6" delay={index * 0.1}>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{edu.degree}</h3>
                    <p className="text-[var(--primary)] font-medium mb-2">{edu.institution}</p>
                    <p className="text-[var(--text-secondary)] mb-2">{edu.year}</p>
                    <p className="text-[var(--text-secondary)]">{edu.description}</p>
                  </AnimatedCard>
                </div>
                
                <div className={`md:w-1/2 p-6 ${index % 2 === 0 ? 'md:pl-8 md:order-2' : 'md:pr-8'} flex items-center justify-center`}>
                  <AnimatedCard 
                    className="px-4 py-2"
                    delay={index * 0.1 + 0.1}
                  >
                    <span className="text-[var(--text-primary)] font-bold">{edu.year}</span>
                  </AnimatedCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;