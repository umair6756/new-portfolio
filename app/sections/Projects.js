// 'use client'

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import AnimatedCard from '../common/AnimatedCard';
// import SectionTitle from '../common/SectionTitle';
// import { projects } from '../data/projects.js';

// const Projects = () => {
//   const [activeTab, setActiveTab] = useState("all");
  
//   const filteredProjects = activeTab === "all" 
//     ? projects 
//     : projects.filter(project => project.tags.includes(activeTab));

//   return (
//     <section id="projects" className="py-20 bg-[var(--surface)]">
//       <div className="container mx-auto px-6">
//         <SectionTitle 
//           title="My" 
//           highlight="Projects" 
//           subtitle="Here are some of my recent projects showcasing my DevOps expertise."
//         />

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true, margin: "-100px" }}
//           className="flex justify-center mb-12 flex-wrap gap-2"
//         >
//           {["all", "AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"].map((tab) => (
//             <motion.button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`px-4 py-2 rounded-full font-medium transition-colors ${
//                 activeTab === tab 
//                   ? 'bg-[var(--primary)] text-white' 
//                   : 'bg-[var(--background)] text-[var(--text-primary)]'
//               }`}
//             >
//               {tab}
//             </motion.button>
//           ))}
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <AnimatePresence>
//             {filteredProjects.map((project) => (
//               <motion.div
//                 key={project.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ duration: 0.5 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 whileHover={{ y: -10 }}
//                 className="bg-[var(--card-bg)] rounded-xl overflow-hidden shadow-lg border border-[var(--border)]"
//               >
//                 <div className="h-48 overflow-hidden relative">
//                   <img 
//                     src={project.image} 
//                     alt={project.title} 
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent opacity-70" />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{project.title}</h3>
//                   <p className="text-[var(--text-secondary)] mb-4">{project.description}</p>
//                   <div className="flex flex-wrap gap-2">
//                     {project.tags.map((tag, index) => (
//                       <span 
//                         key={index} 
//                         className="px-3 py-1 bg-[var(--background)] text-[var(--primary)] rounded-full text-sm"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;






















'use client'

import { motion, useScroll, useTransform, AnimatePresence, useMotionValue } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FiGithub, FiExternalLink, FiX, FiChevronRight } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';

import { projects } from '../data/projects';


const FloatingParticles = ({ count = 30 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[var(--primary)]"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.3
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 100],
            x: [0, (Math.random() - 0.5) * 50],
            rotate: [0, 360]
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
        />
      ))}
    </div>
  );
};

const ProjectCard = ({ project, onClick }) => {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [5, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  const glowOpacity = useMotionValue(0);
  
  useEffect(() => {
    if (hovered) {
      glowOpacity.set(0.3);
    } else {
      glowOpacity.set(0);
    }
  }, [hovered, glowOpacity]);

  return (
    <motion.div
      ref={cardRef}
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      style={{
        scale,
        y,
        rotateX,
        opacity,
        perspective: '1000px'
      }}
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ 
        y: -10,
        transition: { type: 'spring', stiffness: 300 }
      }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(circle at center, var(--primary), transparent 70%)`,
          opacity: glowOpacity
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Image with parallax effect */}
      <motion.div 
        className="relative h-64 w-full overflow-hidden"
        animate={{
          scale: hovered ? 1.05 : 1
        }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-80" />
      </motion.div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag, i) => (
            <motion.span
              key={i}
              className="text-xs font-medium px-2 py-1 rounded-full bg-[var(--surface)] shadow-sm"
              style={{ color: "var(--text-primary)" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 + 0.2 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <motion.h3
          className="text-xl font-bold mb-1"
          style={{ color: "var(--text-primary)" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {project.title}
        </motion.h3>
        <motion.p
          className="text-sm"
          style={{ color: "var(--text-secondary)" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {project.description}
        </motion.p>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[var(--primary)] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
    </motion.div>
  );
};

const ProjectDetailsModal = ({ project, onClose }) => {
  const modalRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = modalRef.current.getBoundingClientRect();
    setCursorPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Background overlay with gradient that follows cursor */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${cursorPos.x}% ${cursorPos.y}%, rgba(var(--primary-rgb), 0.1), transparent 70%)`
        }}
      />
      
      {/* Modal container */}
      <motion.div
        ref={modalRef}
        className="relative bg-[var(--surface)] rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[var(--border)]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        onMouseMove={handleMouseMove}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[var(--surface)] shadow-lg z-10 hover:bg-[var(--primary)] hover:text-white transition-colors"
          style={{ color: "var(--text-primary)" }}
        >
          <FiX size={24} />
        </button>

        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image section with parallax effect */}
          <div className="relative h-96 lg:h-full">
            <motion.img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
            
            {/* Floating tech badges */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <motion.span
                  key={i}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-[var(--surface)] shadow-md"
                  style={{ color: "var(--text-primary)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Content section */}
          <div className="p-8 lg:p-12">
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold mb-6"
              style={{ color: "var(--text-primary)" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {project.title}
            </motion.h2>
            
            <motion.p
              className="text-lg mb-8"
              style={{ color: "var(--text-secondary)" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {project.description}
            </motion.p>

            {/* Action buttons */}
            <motion.div 
              className="flex gap-4 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--surface)] border border-[var(--border)] hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-all"
                style={{ color: "var(--text-primary)" }}
              >
                <FiGithub size={20} />
                <span>View Code</span>
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] transition-all"
              >
                <FiExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            </motion.div>

            {/* Features list */}
            <div className="mb-8">
              <motion.h3
                className="text-xl font-semibold mb-6"
                style={{ color: "var(--text-primary)" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Key Innovations
              </motion.h3>
              <ul className="space-y-4">
                {project.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-4"
                    style={{ color: "var(--text-secondary)" }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i + 0.5 }}
                  >
                    <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-[var(--primary)] bg-opacity-10 flex items-center justify-center">
                      <FiChevronRight className="text-[var(--primary)]" size={14} />
                    </div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div>
              <motion.h3
                className="text-xl font-semibold mb-6"
                style={{ color: "var(--text-primary)" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Technology Stack
              </motion.h3>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, i) => (
                  <motion.div
                    key={i}
                    className="px-4 py-2 rounded-lg bg-[var(--surface)] border border-[var(--border)]"
                    style={{ color: "var(--text-primary)" }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.05 * i + 0.7 }}
                  >
                    {tag}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);

  // Parallax effect for background elements
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section 
      id="projects" 
      className="relative py-24 md:py-36 bg-[var(--background)] overflow-hidden"
      ref={containerRef}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEodmFyKC0tcHJpbWFyeSksMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6Ii8+PC9zdmc+')]" />
      </motion.div>

      {/* Floating particles */}
      <FloatingParticles count={40} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionTitle 
          title="Cloud" 
          highlight="Innovations" 
          subtitle="Cutting-edge solutions pushing cloud technology boundaries"
          centered
        />

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Project details modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectDetailsModal 
              project={selectedProject} 
              onClose={() => setSelectedProject(null)} 
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}