import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiDownload } from '../icons';
import { FaAws, SiKubernetes, FaDocker, SiTerraform } from '../icons';

import Image from 'next/image';
const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--background)] to-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-[var(--primary)] opacity-10 blur-xl"
      />
      <motion.div 
        animate={{ 
          x: [0, -100, 0],
          y: [0, 50, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-[var(--secondary)] opacity-10 blur-xl"
      />
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            y: Math.random() * 100 - 50,
            x: Math.random() * 100 - 50,
            opacity: 0
          }}
          animate={{ 
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 5
          }}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
            background: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, 0.5)`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[var(--primary)] font-mono mb-2"
            >
              Hi, my name is
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-bold text-[var(--text-primary)] mb-4">
              Hafiz <span className="text-[var(--primary)]">Umair</span>
            </h1>
            <div className="text-3xl md:text-4xl font-semibold text-[var(--text-secondary)] mb-6 h-16">
              <TypeAnimation
                sequence={[
                  "DevOps Engineer",
                  1500,
                  "System Administrator",
                  1500,
                  "Cloud Architect",
                  1500,
                  "Automation Expert",
                  1500
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
                style={{ display: 'inline-block' }}
              />
            </div>
            <p className="text-[var(--text-secondary)] mb-8 text-lg max-w-lg">
              I build scalable, reliable, and efficient cloud infrastructure with a focus on automation and DevOps best practices.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#contact" className="px-6 py-3 bg-[var(--primary)] text-white rounded-lg font-bold shadow-lg hover:bg-[var(--primary-dark)] transition">
                Contact Me
              </a>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[var(--surface)] text-[var(--text-primary)] rounded-lg font-bold shadow-lg hover:bg-[var(--border)] transition flex items-center gap-2 border border-[var(--border)]"
              >
                <FiDownload /> Download CV
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 flex justify-center relative"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[var(--primary)] shadow-2xl relative">
                <Image
                  src="/profile.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  height={500}
                  width={500}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] to-transparent opacity-20" />
              </div>
              
              {/* Floating tech icons */}
              {[FaAws, SiKubernetes, FaDocker, SiTerraform].map((Icon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 0.5 + index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.2 }}
                  className="absolute bg-[var(--surface)] p-2 rounded-full shadow-lg"
                  style={{
                    top: `${Math.cos(index * Math.PI/2) * 120 + 80}px`,
                    left: `${Math.sin(index * Math.PI/2) * 120 + 80}px`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <Icon className="text-2xl text-[var(--primary)]" />
                </motion.div>
              ))}
              
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -z-10 top-0 left-0 w-full h-full border-2 border-[var(--primary)] rounded-full opacity-20"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ 
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -z-10 top-4 left-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] border-2 border-[var(--secondary)] rounded-full opacity-20"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        style={{ y }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[var(--text-secondary)] mb-2"
        >
          Scroll down
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[var(--primary)]">
            <path d="M12 5v14M19 12l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;






















