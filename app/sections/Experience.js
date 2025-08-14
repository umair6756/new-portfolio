











import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import SectionTitle from '../common/SectionTitle';
import { 
  FaMicrosoft, 
  FaLinux, 
  FaPython, 
  FaDocker, 
  FaJenkins,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaChevronRight,
  FaArrowRight,
  FaArrowLeft,
  FaTerminal,
  FaNetworkWired,
  FaShieldAlt,
  FaRobot
} from '../icons';
import { 
  SiTerraform, 
  SiKubernetes, 
  SiArgo, 
  SiPrometheus
} from '../icons';
import { FiArrowLeft } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "DevOps Engineer",
      company: "Novasinc Technology",
      period: "2024 - Present",
      location: "Lahore, Pakistan",
      icon: <FaMicrosoft className="text-[var(--primary)] text-3xl" />,
      highlights: [
        "Developed and managed CI/CD pipelines for multi-tier microservices using Azure DevOps and Argo CD, improving release speed by 20%",
        "Built serverless architectures with Python and Azure Functions, integrating Azure Blob Storage for event-driven automation",
        "Automated infrastructure provisioning on Azure using Terraform and Python SDK",
        "Implemented monitoring and logging using Azure Monitor and Application Insights",
        "Configured and managed Azure Kubernetes Service (AKS) clusters with auto-scaling",
        "Reduced blob storage costs by developing automated cleanup functions"
      ],
      tech: [
        { name: "Azure", icon: FaMicrosoft },
        { name: "Terraform", icon: SiTerraform },
        { name: "Kubernetes", icon: SiKubernetes },
        { name: "Python", icon: FaPython },
        { name: "ArgoCD", icon: SiArgo },
        { name: "CI/CD", icon: FaJenkins }
      ],
      metrics: [
        { value: "20%", label: "Faster Releases" },
        { value: "30%", label: "Cost Reduction" },
        { value: "15+", label: "Pipelines" }
      ]
    },
    {
      id: 2,
      role: "Linux System Administrator",
      company: "Expert-B",
      period: "2023 - 2024",
      location: "Kasur, Pakistan",
      icon: <FaLinux className="text-[var(--primary)] text-3xl" />,
      highlights: [
        "Managed enterprise Linux systems (RHEL 7/8), including patching and security hardening",
        "Configured and managed LVM, RAID, and disk partitioning for high-performance storage",
        "Deployed and maintained services including Apache, DNS, NFS, and FTP",
        "Implemented backup and disaster recovery solutions using rsync and cron jobs",
        "Automated repetitive tasks with shell scripts and cron jobs",
        "Configured advanced network rules and firewall settings using iptables"
      ],
      tech: [
        { name: "Linux", icon: FaLinux },
        { name: "Bash", icon: FaTerminal },
        { name: "Networking", icon: FaNetworkWired },
        { name: "Security", icon: FaShieldAlt },
        { name: "Automation", icon: FaRobot }
      ],
      metrics: [
        { value: "99.9%", label: "Uptime" },
        { value: "50+", label: "Systems" },
        { value: "40%", label: "Efficiency Gain" }
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const nextExperience = () => {
    setActiveTab((prev) => (prev + 1) % experiences.length);
  };

  const prevExperience = () => {
    setActiveTab((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  return (
    <section id="experience" className="relative py-20 bg-[var(--surface)] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              opacity: [0.1, 0.3, 0.1],
              transition: {
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="absolute rounded-full bg-[var(--primary)]"
            style={{
              width: `${50 + i * 20}px`,
              height: `${50 + i * 20}px`,
              top: `${10 + i * 10}%`,
              left: `${5 + i * 10}%`,
              filter: 'blur(30px)'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionTitle 
          title="Professional" 
          highlight="Journey" 
          subtitle="My career progression and key achievements"
        />

        {/* Desktop Experience Tabs */}
        {!isMobile && (
          <div className="hidden md:flex flex-col mt-16">
            <div className="flex justify-center mb-8">
              <div className="flex space-x-1 p-1 bg-[var(--background)] rounded-lg border border-[var(--border)]">
                {experiences.map((exp, index) => (
                  <button
                    key={exp.id}
                    onClick={() => setActiveTab(index)}
                    className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                      activeTab === index
                        ? 'bg-[var(--primary)] text-white'
                        : 'text-[var(--text-secondary)] hover:bg-[var(--card-bg)]'
                    }`}
                  >
                    {exp.company}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-[var(--card-bg)] rounded-2xl border border-[var(--border)] shadow-2xl overflow-hidden"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Left Panel - Basic Info */}
                  <div className="bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)] p-8 text-white flex flex-col justify-between">
                    <div>
                      <div className="mb-6">
                        {experiences[activeTab].icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{experiences[activeTab].role}</h3>
                      <p className="text-white/80 mb-6">{experiences[activeTab].company}</p>
                      
                      <div className="flex items-center mb-3 text-sm">
                        <FaCalendarAlt className="mr-2" />
                        <span>{experiences[activeTab].period}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <FaMapMarkerAlt className="mr-2" />
                        <span>{experiences[activeTab].location}</span>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-8">
                      <h4 className="text-sm font-semibold mb-3 opacity-80">TECH STACK</h4>
                      <div className="flex flex-wrap gap-2">
                        {experiences[activeTab].tech.map((tech, i) => (
                          <div key={i} className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs">
                            <tech.icon className="mr-1" />
                            {tech.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Middle Panel - Highlights */}
                  <div className="p-8 border-r border-[var(--border)]">
                    <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-6">Key Achievements</h4>
                    <ul className="space-y-4">
                      {experiences[activeTab].highlights.map((item, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start"
                        >
                          <div className="flex-shrink-0 mt-1 mr-3">
                            <div className="w-2 h-2 rounded-full bg-[var(--primary)]"></div>
                          </div>
                          <span className="text-[var(--text-secondary)]">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Panel - Metrics */}
                  <div className="p-8">
                    <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-6">Impact Metrics</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {experiences[activeTab].metrics.map((metric, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="bg-[var(--background)] rounded-xl p-4 border border-[var(--border)]"
                        >
                          <div className="text-3xl font-bold text-[var(--primary)] mb-1">{metric.value}</div>
                          <div className="text-sm text-[var(--text-secondary)]">{metric.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Animated progress bar */}
                    <div className="mt-8">
                      <h5 className="text-sm font-medium text-[var(--text-primary)] mb-2">Project Completion</h5>
                      <div className="w-full bg-[var(--background)] rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
                        />
                      </div>
                    </div>

                    {/* Navigation Arrows (shown on hover) */}
                    {isHovering && (
                      <div className="flex justify-between mt-8">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            prevExperience();
                          }}
                          className="p-2 rounded-full bg-[var(--background)] text-[var(--text-primary)] hover:bg-[var(--primary)] hover:text-white transition-colors"
                        >
                          <FiArrowLeft />
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            nextExperience();
                          }}
                          className="p-2 rounded-full bg-[var(--background)] text-[var(--text-primary)] hover:bg-[var(--primary)] hover:text-white transition-colors"
                        >
                          <FiArrowLeft />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* Mobile Experience Carousel */}
        {isMobile && (
          <div className="md:hidden mt-8">
            <AnimatePresence initial={false}>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-[var(--card-bg)] rounded-2xl border border-[var(--border)] shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-3 rounded-lg text-white">
                      {experiences[activeTab].icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)]">{experiences[activeTab].role}</h3>
                      <p className="text-[var(--primary)] font-medium">{experiences[activeTab].company}</p>
                      <div className="flex items-center gap-2 mt-1 text-sm text-[var(--text-secondary)]">
                        <FaCalendarAlt />
                        <span>{experiences[activeTab].period}</span>
                        <FaMapMarkerAlt />
                        <span>{experiences[activeTab].location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {experiences[activeTab].metrics.map((metric, i) => (
                      <div key={i} className="bg-[var(--background)] rounded-lg p-2 text-center border border-[var(--border)]">
                        <div className="text-lg font-bold text-[var(--primary)]">{metric.value}</div>
                        <div className="text-xs text-[var(--text-secondary)]">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-md font-semibold text-[var(--text-primary)] mb-3">Key Achievements</h4>
                    <ul className="space-y-3">
                      {experiences[activeTab].highlights.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <FaChevronRight className="text-[var(--primary)] mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-[var(--text-secondary)]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-md font-semibold text-[var(--text-primary)] mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {experiences[activeTab].tech.map((tech, i) => (
                        <div key={i} className="flex items-center bg-[var(--background)] px-3 py-1 rounded-full text-sm border border-[var(--border)]">
                          <tech.icon className="mr-1 text-[var(--primary)]" />
                          {tech.name}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Dots */}
                  <div className="flex justify-center mt-6 space-x-2">
                    {experiences.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTab(i)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          activeTab === i ? 'bg-[var(--primary)] w-4' : 'bg-[var(--border)]'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* Animated timeline */}
        <div className="mt-20 relative">
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-[var(--border)] transform -translate-y-1/2"></div>
          <div className="relative flex justify-between">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ scale: 0.8 }}
                animate={{ scale: activeTab === i ? 1.1 : 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`relative w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                  activeTab === i 
                    ? 'bg-[var(--primary)] text-white shadow-lg'
                    : 'bg-[var(--card-bg)] border-2 border-[var(--primary)]'
                }`}
                onClick={() => setActiveTab(i)}
              >
                {i + 1}
                <motion.div 
                  className="absolute top-full mt-2 text-sm font-medium whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: activeTab === i ? 1 : 0.7, y: 0 }}
                >
                  {exp.company}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;