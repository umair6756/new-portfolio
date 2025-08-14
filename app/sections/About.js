














'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import SectionTitle from '../common/SectionTitle';
import AnimatedCard from '../common/AnimatedCard';
import { FaCloud, FaCode, FaServer, FaTools, FaEnvelope, FaArrowRight, FaMapMarkerAlt, FaUser, FaBriefcase } from 'react-icons/fa';
import Image from 'next/image';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isHovering, setIsHovering] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const aboutData = {
    personalInfo: [
      { label: "Name", value: "Alex Johnson", icon: <FaUser className="text-[var(--primary)]" /> },
      { label: "Email", value: "chumair6756@gmail.com", icon: <FaEnvelope className="text-[var(--primary)]" /> },
      { label: "Location", value: "Lahore, Pakistan", icon: <FaMapMarkerAlt className="text-[var(--primary)]" /> },
      { label: "Availability", value: "Open to opportunities", icon: <FaBriefcase className="text-[var(--primary)]" /> }
    ],
    services: [
      { 
        title: "Cloud Infrastructure", 
        description: "Design and implement scalable cloud architectures on AWS, GCP, and Azure.",
        icon: <FaCloud className="text-3xl text-[var(--primary)]" />
      },
      { 
        title: "CI/CD Pipelines", 
        description: "Build automated deployment pipelines for rapid and reliable software delivery.",
        icon: <FaCode className="text-3xl text-[var(--primary)]" />
      },
      { 
        title: "Infrastructure as Code", 
        description: "Manage infrastructure through code using Terraform and Pulumi.",
        icon: <FaTools className="text-3xl text-[var(--primary)]" />
      },
      { 
        title: "System Architecture", 
        description: "Design resilient and scalable system architectures.",
        icon: <FaServer className="text-3xl text-[var(--primary)]" />
      }
    ]
  };

  return (
    <section id="about" className="relative py-20 bg-[var(--background)] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100 * (i % 2 === 0 ? 1 : -1)],
              y: [0, 50 * (i % 3 === 0 ? 1 : -1)],
              transition: {
                duration: 20 + i * 5,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: "linear"
              }
            }}
            className="absolute rounded-full bg-[var(--primary)]"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              top: `${10 + i * 15}%`,
              left: `${5 + i * 10}%`,
              filter: 'blur(40px)'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionTitle 
          title="About" 
          highlight="Me" 
          subtitle="Passionate DevOps Engineer with 5+ years of experience in designing and implementing cloud infrastructure solutions."
        />

        {/* Desktop Layout */}
        {!isMobile && (
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative h-full">
                <AnimatedCard className="h-full overflow-hidden rounded-2xl border-2 border-[var(--primary)]/20">
                  <Image
                    src="/profile.jpg" 
                    alt="About" 
                    className="w-full h-[30rem] object-cover"
                    width={500}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent opacity-70" />
                </AnimatedCard>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute -bottom-6 -right-6 bg-[var(--surface)] p-6 rounded-xl shadow-2xl w-3/4 border border-[var(--border)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-4xl font-bold text-[var(--primary)]">2+</div>
                    <div className="text-[var(--text-primary)]">
                      <div className="font-bold">Years Experience</div>
                      <div className="text-sm text-[var(--text-secondary)]">DevOps & Cloud</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <div className="lg:col-span-7">
              {/* Tab Navigation */}
              <div className="flex border-b border-[var(--border)] mb-8">
                <button
                  onClick={() => setActiveTab('about')}
                  className={`px-6 py-3 font-medium text-sm relative ${
                    activeTab === 'about' 
                      ? 'text-[var(--primary)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  About Me
                  {activeTab === 'about' && (
                    <motion.div 
                      layoutId="aboutTabIndicator"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--primary)]"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('services')}
                  className={`px-6 py-3 font-medium text-sm relative ${
                    activeTab === 'services' 
                      ? 'text-[var(--primary)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  My Services
                  {activeTab === 'services' && (
                    <motion.div 
                      layoutId="aboutTabIndicator"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--primary)]"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === 'about' ? (
                    <div className="space-y-6">
                      <AnimatedCard className="p-6" delay={0.1}>
                        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Who am I?</h3>
                        <p className="text-[var(--text-secondary)] mb-4">
                          I&apos;m a DevOps Engineer based in Pakistan, specializing in cloud infrastructure, automation, and CI/CD pipelines. 
                          I help organizations build scalable and reliable systems using modern DevOps practices.
                        </p>
                        <p className="text-[var(--text-secondary)]">
                          With expertise across the full DevOps lifecycle, I bridge the gap between development and operations to deliver 
                          high-quality software efficiently and reliably.
                        </p>
                      </AnimatedCard>
                      
                      <div className="grid grid-cols-2 gap-4">
                        {aboutData.personalInfo.map((item, index) => (
                          <AnimatedCard 
                            key={index} 
                            className="p-4 border border-[var(--border)] rounded-xl hover:border-[var(--primary)] transition-colors"
                            delay={0.1 + index * 0.05}
                          >
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-[var(--surface)] rounded-lg">
                                {item.icon}
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-[var(--text-secondary)]">{item.label}</h4>
                                <p className="text-[var(--text-primary)] font-medium">{item.value}</p>
                              </div>
                            </div>
                          </AnimatedCard>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {aboutData.services.map((service, index) => (
                        <AnimatedCard 
                          key={index}
                          className="p-6 border border-[var(--border)] rounded-xl hover:shadow-lg transition-all"
                          delay={0.1 + index * 0.1}
                          onHoverStart={() => setIsHovering(true)}
                          onHoverEnd={() => setIsHovering(false)}
                        >
                          <div className="flex flex-col h-full">
                            <div className="mb-4 p-3 bg-[var(--surface)] rounded-lg w-max">
                              {service.icon}
                            </div>
                            <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2">{service.title}</h4>
                            <p className="text-[var(--text-secondary)] flex-grow">{service.description}</p>
                            {isHovering && (
                              <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mt-4 text-[var(--primary)] font-medium flex items-center gap-2"
                              >
                                Learn more <FaArrowRight />
                              </motion.div>
                            )}
                          </div>
                        </AnimatedCard>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Mobile Layout */}
        {isMobile && (
          <div className="mt-8 flex flex-col gap-8">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <AnimatedCard className="overflow-hidden rounded-xl border border-[var(--border)]">
                <Image 
                  src="/profile.jpg" 
                  alt="About" 
                  className="w-full h-[30rem] object-cover"
                  width={400}
                  height={200}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent opacity-70" />
              </AnimatedCard>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-4 -right-4 bg-[var(--surface)] p-4 rounded-lg shadow-lg w-2/3 border border-[var(--border)]"
              >
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-bold text-[var(--primary)]">2+</div>
                  <div className="text-[var(--text-primary)] text-sm">
                    <div className="font-bold">Years Experience</div>
                    <div>DevOps & Cloud</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content Section */}
            <div className="space-y-6">
              <AnimatedCard className="p-6" delay={0.1}>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">Who am I?</h3>
                <p className="text-[var(--text-secondary)]">
                  I&apos;m a DevOps Engineer based in Pakistan, specializing in cloud infrastructure, automation, and CI/CD pipelines. 
                  I help organizations build scalable and reliable systems using modern DevOps practices.
                </p>
              </AnimatedCard>
              
              {/* Personal Info */}
              <div className="grid grid-cols-2 gap-3">
                {aboutData.personalInfo.map((item, index) => (
                  <AnimatedCard 
                    key={index} 
                    className="p-3 border border-[var(--border)] rounded-lg"
                    delay={0.1 + index * 0.05}
                  >
                    <div className="flex items-center gap-2">
                      <div className="text-[var(--primary)]">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-xs text-[var(--text-secondary)]">{item.label}</h4>
                        <p className="text-sm text-[var(--text-primary)] font-medium">{item.value}</p>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>

              {/* Services */}
              <AnimatedCard className="p-6" delay={0.2}>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">What I Do</h3>
                <div className="space-y-4">
                  {aboutData.services.map((service, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="text-[var(--primary)] text-xl mt-1">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="text-[var(--text-primary)] font-bold">{service.title}</h4>
                        <p className="text-[var(--text-secondary)] text-sm">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedCard>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;