// 'use client'

// import { motion } from 'framer-motion';
// import AnimatedCard from '../common/AnimatedCard';
// import SectionTitle from '../common/SectionTitle';
// import { skillsData } from '../data/skills.js';
// // import * as Icons from '../icons';

// export default function Skills() {
//   return (
//     <section id="skills" className="py-20 bg-[var(--surface)]">
//       <div className="container mx-auto px-6">
//         <SectionTitle 
//           title="My" 
//           highlight="Skills" 
//           subtitle="I've worked with a wide range of technologies in the DevOps and cloud space."
//         />

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
//           {skillsData.map((category, categoryIndex) => {
//             // const IconComponent = Icons[category.icon];s
//             return (
//               <motion.div
//                 key={categoryIndex}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
//               >
//                 <AnimatedCard className="p-6 h-full">
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="text-2xl text-[var(--primary)]">
//                      {category.icon}
//                     </div>
//                     <h3 className="text-xl font-bold text-[var(--text-primary)]">
//                       {category.category}
//                     </h3>
//                   </div>
                  
//                   <div className="space-y-4">
//                     {category.skills.map((skill, skillIndex) => (
//                       <div key={skillIndex}>
//                         <div className="flex justify-between items-center mb-1">
//                           <span className="text-[var(--text-primary)] font-medium">{skill.name}</span>
//                           <span className="text-[var(--text-secondary)]">{skill.level}%</span>
//                         </div>
//                         <div className="w-full bg-[var(--border)] rounded-full h-2">
//                           <motion.div 
//                             initial={{ width: 0 }}
//                             whileInView={{ width: `${skill.level}%` }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.8, delay: skillIndex * 0.05 }}
//                             className="h-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
//                           />
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </AnimatedCard>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };
































'use client'

import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import SectionTitle from '../common/SectionTitle';
import { skillsData } from '../data/skills';



const CloudNode = ({ skill, active, onClick, color, index, total }) => {
  const size = useTransform(
    useMotionValue(active ? 1.2 : 1),
    [1, 1.2],
    [14 + (skill.level / 100) * 20, 14 + (skill.level / 100) * 30]
  );
  
  const glowSize = useTransform(size, s => s * 2.5);
  const shadow = useTransform(
    size,
    [14 + (skill.level / 100) * 20, 14 + (skill.level / 100) * 30],
    ["0 4px 8px rgba(0,0,0,0.1)", `0 8px 24px ${color.split(' ')[1].replace('to-', '')}80`]
  );
  
  const rotateY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  
  const handleHover = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    rotateY.set((x - centerX) / 20);
    rotateX.set((centerY - y) / 20);
  };

  return (
    <motion.div 
      className={`absolute rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${active ? 'z-20' : 'z-10'}`}
      style={{
        width: size,
        height: size,
        background: active 
          ? `linear-gradient(135deg, ${color})`
          : 'var(--surface-secondary)',
        boxShadow: shadow,
        border: active 
          ? '2px solid var(--primary)'
          : '2px solid var(--border)',
        rotateY,
        rotateX,
        perspective: 1000
      }}
      onClick={onClick}
      whileHover={{ 
        scale: 1.15,
        transition: { duration: 0.3 }
      }}
      onMouseMove={handleHover}
      onMouseLeave={() => {
        rotateY.set(0);
        rotateX.set(0);
      }}
    >
      {/* Pulsing glow */}
      {active && (
        <motion.div
          className="absolute rounded-full"
          style={{
            background: `linear-gradient(135deg, ${color})`,
            width: glowSize,
            height: glowSize
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1,
            opacity: 0.3
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      )}
      
      {/* Skill icon or initials */}
      <motion.span 
        className="text-xs font-bold text-white drop-shadow-md"
        animate={{
          scale: active ? 1.2 : 1,
          opacity: active ? 1 : 0.8
        }}
      >
        {active ? skill.name.split(' ').map(w => w[0]).join('') : ''}
      </motion.span>
      
      {/* Floating tooltip */}
      {active && (
        <motion.div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[var(--surface)] px-3 py-1.5 rounded-lg shadow-lg border border-[var(--border)] whitespace-nowrap flex items-center gap-2"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${color}`}></div>
          <span className="text-xs font-medium text-[var(--text-primary)]">
            {skill.name}
          </span>
        </motion.div>
      )}
    </motion.div>
  );
};

const CloudVisualization = ({ skills, activeSkill, setActiveSkill, color, bgGlow, category }) => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 300, height: 300 });
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredConnection, setHoveredConnection] = useState(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
        setIsMobile(window.innerWidth < 768);
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const getPosition = (index, total) => {
    const center = { x: dimensions.width / 2, y: dimensions.height / 2 };
    const radius = Math.min(dimensions.width, dimensions.height) * (isMobile ? 0.25 : 0.35);
    const angle = (index / total) * Math.PI * 2 - Math.PI / 2; // Start from top
    
    return {
      x: center.x + Math.cos(angle) * radius - 15,
      y: center.y + Math.sin(angle) * radius - 15,
      angle: angle
    };
  };

  // Generate a unique path for each connection with curvature
  const generateConnectionPath = (from, to, index) => {
    const midX = (from.x + to.x) / 2;
    const midY = (from.y + to.y) / 2;
    
    // Create a curved path based on the angle
    const curveFactor = 0.3 + Math.sin(index) * 0.2;
    const ctrlX = midX + Math.cos(from.angle + Math.PI/2) * 60 * curveFactor;
    const ctrlY = midY + Math.sin(from.angle + Math.PI/2) * 60 * curveFactor;
    
    return {
      path: `M${from.x + 15} ${from.y + 15} Q${ctrlX} ${ctrlY}, ${to.x} ${to.y}`,
      length: calculatePathLength(from.x + 15, from.y + 15, ctrlX, ctrlY, to.x, to.y)
    };
  };

  // Approximate path length for animation
  const calculatePathLength = (x1, y1, cx, cy, x2, y2) => {
    const ax = x1 - 2 * cx + x2;
    const ay = y1 - 2 * cy + y2;
    const bx = 2 * cx - 2 * x1;
    const by = 2 * cy - 2 * y1;
    
    const A = 4 * (ax * ax + ay * ay);
    const B = 4 * (ax * bx + ay * by);
    const C = bx * bx + by * by;
    
    const Sabc = 2 * Math.sqrt(A + B + C);
    const A_2 = Math.sqrt(A);
    const A_32 = 2 * A * A_2;
    const C_2 = 2 * Math.sqrt(C);
    const BA = B / A_2;
    
    return (A_32 * Sabc + A_2 * B * (Sabc - C_2) + (4 * C * A - B * B) * Math.log((2 * A_2 + BA + Sabc) / (BA + C_2))) / (4 * A_32);
  };

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-64 md:h-[400px] rounded-2xl overflow-hidden"
      style={{
        background: `radial-gradient(circle at center, ${bgGlow}, transparent 70%)`,
        border: '1px solid var(--border)',
        boxShadow: `0 10px 30px -10px ${color.split(' ')[1].replace('to-', '')}40`
      }}
    >
      {/* Animated grid background */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEodmFyKC0tcHJpbWFyeSksMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6Ii8+PC9zdmc+")'
        }}
      />
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[var(--primary)]"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.2
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 40],
            x: [0, (Math.random() - 0.5) * 20]
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      ))}
      
      {/* Dynamic Bezier connections */}
      {skills.map((_, i) => {
        const from = getPosition(i, skills.length);
        const to = { x: dimensions.width / 2, y: dimensions.height / 2 };
        const connection = generateConnectionPath(from, to, i);
        
        return (
          <motion.svg
            key={`connection-${i}`}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: activeSkill === i || hoveredConnection === i ? 0.6 : 0.15
            }}
            transition={{ duration: 0.5 }}
          >
            <path
              d={connection.path}
              stroke={`url(#gradient-${i})`}
              strokeWidth={activeSkill === i || hoveredConnection === i ? 3 : 1.5}
              strokeDasharray={activeSkill === i || hoveredConnection === i ? "0" : "4,4"}
              fill="none"
            />
            <defs>
              <linearGradient id={`gradient-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={color.split(' ')[1].replace('to-', '')} />
                <stop offset="100%" stopColor="var(--primary)" />
              </linearGradient>
            </defs>
          </motion.svg>
        );
      })}
      
      {/* Center node (3D sphere with floating rings) */}
      <div 
        className="absolute rounded-full flex items-center justify-center shadow-xl"
        style={{
          width: '80px',
          height: '80px',
          left: 'calc(50% - 40px)',
          top: 'calc(50% - 40px)',
          background: `radial-gradient(circle at 30% 30%, white, ${color.split(' ')[1].replace('to-', '')} 70%)`,
          boxShadow: `0 10px 30px -5px ${color.split(' ')[1].replace('to-', '')}80`,
          zIndex: 15
        }}
      >
        <span className="text-white font-bold text-sm">{category}</span>
        
        {/* Floating rings */}
        {[1, 1.5, 2].map((scale, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-[var(--primary)]"
            style={{
              width: '100%',
              height: '100%',
              borderWidth: '1px',
              opacity: 0.3
            }}
            initial={{ scale: 0 }}
            animate={{ 
              scale: scale,
              opacity: [0.3, 0.1, 0]
            }}
            transition={{ 
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
      
      {/* Skill nodes orbiting */}
      {skills.map((skill, i) => {
        const pos = getPosition(i, skills.length);
        return (
          <motion.div
            key={i}
            initial={{ x: dimensions.width / 2, y: dimensions.height / 2, opacity: 0 }}
            animate={{ 
              x: pos.x,
              y: pos.y,
              opacity: 1
            }}
            transition={{ 
              delay: i * 0.1,
              type: 'spring',
              stiffness: 100,
              damping: 10
            }}
            onMouseEnter={() => setHoveredConnection(i)}
            onMouseLeave={() => setHoveredConnection(null)}
          >
            <CloudNode 
              skill={skill} 
              active={activeSkill === i}
              onClick={() => setActiveSkill(i)}
              color={color}
              index={i}
              total={skills.length}
            />
          </motion.div>
        );
      })}
      
      {/* Floating category label */}
      <motion.div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[var(--surface)] px-4 py-2 rounded-full border border-[var(--border)] shadow-sm flex items-center gap-2"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${color}`}></div>
        <span className="text-xs font-medium text-[var(--text-primary)]">
          {skills.length} Core Skills
        </span>
      </motion.div>
    </div>
  );
};

const SkillDetails = ({ skill, categoryColor, bgGlow, category }) => {
  if (!skill) return null;

  return (
    <motion.div
      className="bg-[var(--surface-secondary)] p-6 rounded-xl border border-[var(--border)] shadow-lg relative overflow-hidden h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: `radial-gradient(circle at top right, ${bgGlow}, transparent 70%)`,
        boxShadow: `0 10px 30px -10px ${categoryColor.split(' ')[1].replace('to-', '')}40`
      }}
    >
      {/* Floating micro-particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[var(--primary)]"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 20],
              x: [0, (Math.random() - 0.5) * 10]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-1">
              {skill.name}
            </h3>
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${categoryColor}`}></div>
              <span className="text-sm text-[var(--text-secondary)]">
                {skill.experience} years experience
              </span>
            </div>
          </div>
          <div className="text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent"
               style={{ backgroundImage: `linear-gradient(135deg, ${categoryColor})` }}>
            {skill.level}%
          </div>
        </div>
        
        {/* Animated proficiency bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-[var(--text-secondary)] mb-2">
            <span>Mastery Level</span>
            <span>{skill.level}%</span>
          </div>
          <div className="relative h-3 bg-[var(--border)] bg-opacity-30 rounded-full overflow-hidden">
            <motion.div
              className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${categoryColor}`}
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1.5, delay: 0.3 }}
            >
              <motion.div
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50"
              />
            </motion.div>
          </div>
        </div>
        
        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-[var(--surface)] p-4 rounded-lg border border-[var(--border)] hover:border-[var(--primary)] transition-colors group">
            <div className="text-xs text-[var(--text-secondary)] mb-1">PROJECTS</div>
            <div className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
              {skill.projects}+
            </div>
          </div>
          <div className="bg-[var(--surface)] p-4 rounded-lg border border-[var(--border)] hover:border-[var(--primary)] transition-colors group">
            <div className="text-xs text-[var(--text-secondary)] mb-1">EXPERIENCE</div>
            <div className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
              {skill.experience} years
            </div>
          </div>
        </div>
        
        {/* Skill description */}
        <div className="mt-auto pt-4 border-t border-[var(--border)]">
          <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${categoryColor}`}></span>
            Key Expertise in {category}
          </h4>
          <p className="text-sm text-[var(--text-secondary)]">
            {skill.name.includes("AWS") && "Designing fault-tolerant multi-region architectures with automated failover and disaster recovery protocols."}
            {skill.name.includes("Azure") && "Enterprise-scale resource organization with governance policies and cost optimization strategies."}
            {skill.name.includes("GCP") && "Data-first cloud solutions leveraging BigQuery, Pub/Sub, and Dataflow for real-time analytics."}
            {skill.name.includes("Terraform") && "Modular, reusable infrastructure as code with policy enforcement using Sentinel."}
            {skill.name.includes("Kubernetes") && "High-availability cluster designs with auto-scaling, service meshes, and GitOps workflows."}
            {skill.name.includes("Docker") && "Optimized container builds with multi-stage builds, minimal base images, and security scanning."}
            {skill.name.includes("Python") && "Infrastructure automation scripts with boto3, error handling, and async operations."}
            {skill.name.includes("Go") && "High-performance CLI tools and microservices for cloud operations."}
            {skill.name.includes("Security") && "Implementation of zero-trust architectures with identity-aware proxies and microsegmentation."}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillsData[0].id);
  const [activeSkill, setActiveSkill] = useState(0);

  const activeCategory = skillsData.find(tab => tab.id === activeTab);

  return (
    <section id="skills" className="relative py-16 md:py-24 bg-[var(--surface)] overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, var(--primary), transparent 70%), radial-gradient(circle at 70% 30%, var(--secondary), transparent 70%)'
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionTitle 
          title="Cloud" 
          highlight="Expertise Matrix" 
          subtitle="Interactive visualization of technical capabilities"
          centered
        />

        {/* Category Selector (3D Tabs) */}
        <motion.div className="flex justify-center mb-8 md:mb-12">
          <div className="inline-flex bg-[var(--surface-secondary)] rounded-xl p-1 border border-[var(--border)] shadow-sm backdrop-blur-sm">
            {skillsData.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setActiveSkill(0);
                }}
                className={`relative px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id 
                    ? 'text-white' 
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeTab === tab.id && (
                  <motion.div 
                    className="absolute inset-0 rounded-lg z-0 shadow-md"
                    style={{ 
                      background: `linear-gradient(135deg, ${tab.color})`,
                      boxShadow: `0 4px 15px ${tab.color.split(' ')[1].replace('to-', '')}80`
                    }}
                    layoutId="activeTabBg"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-lg">{tab.icon}</span>
                  <span>{tab.category}</span>
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left Column - Cloud Visualization */}
          <div className="w-full h-full">
            <CloudVisualization 
              skills={activeCategory.skills} 
              activeSkill={activeSkill}
              setActiveSkill={setActiveSkill}
              color={activeCategory.color}
              bgGlow={activeCategory.bgGlow}
              category={activeCategory.category}
            />
          </div>
          
          {/* Right Column - Skill Details */}
          <div className="w-full h-full">
            <SkillDetails 
              skill={activeCategory.skills[activeSkill]} 
              categoryColor={activeCategory.color}
              bgGlow={activeCategory.bgGlow}
              category={activeCategory.category}
            />
          </div>
        </div>
      </div>
    </section>
  );
};