'use client'

import { useState, useEffect } from 'react';
import { lightTheme, darkTheme } from './themes';
import Navbar from './sections/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Tools from './sections/Tools';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Experience from './sections/Experience';

export default function Page() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    applyTheme(prefersDark ? darkTheme : lightTheme);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    applyTheme(newMode ? darkTheme : lightTheme);
  };

  const applyTheme = (theme) => {
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home />
      <About />
      <Skills />
      <Experience/>
      <Tools />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};




























// 'use client'

// import { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence, useAnimation } from 'framer-motion';
// import { lightTheme, darkTheme } from './themes';
// import Navbar from './sections/Navbar';
// import Home from './sections/Home';
// import About from './sections/About';
// import Skills from './sections/Skills';
// import Tools from './sections/Tools';
// import Projects from './sections/Projects';
// import Education from './sections/Education';
// import Contact from './sections/Contact';
// import Footer from './sections/Footer';
// import Experience from './sections/Experience';

// const Particle = ({ darkMode }) => {
//   const size = Math.random() * 10 + 5;
//   return (
//     <motion.div
//       className={`absolute rounded-full ${
//         darkMode ? 'bg-[var(--primary-dark)]' : 'bg-[var(--primary-light)]'
//       }`}
//       initial={{
//         x: Math.random() * 100 - 50,
//         y: Math.random() * 100 - 50,
//         opacity: 0,
//         scale: 0
//       }}
//       animate={{
//         x: Math.random() * 400 - 200,
//         y: Math.random() * 400 - 200,
//         opacity: [0, 1, 0],
//         scale: [0, 1, 0]
//       }}
//       transition={{
//         duration: Math.random() * 3 + 2,
//         repeat: Infinity,
//         repeatType: 'reverse',
//         ease: 'easeInOut'
//       }}
//       style={{
//         width: `${size}px`,
//         height: `${size}px`,
//         filter: `blur(${size / 5}px)`
//       }}
//     />
//   );
// };

// const HolographicLoader = ({ darkMode, onComplete }) => {
//   const [progress, setProgress] = useState(0);
//   const controls = useAnimation();
//   const particles = Array(20).fill(0);
//   const phrases = [
//     "Booting system...",
//     "Initializing components...",
//     "Loading assets...",
//     "Finalizing setup...",
//     "Ready to launch!"
//   ];
//   const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);

//   useEffect(() => {
//     const load = async () => {
//       // Initial delay
//       await new Promise(resolve => setTimeout(resolve, 500));
      
//       // Simulate loading progress
//       const interval = setInterval(() => {
//         setProgress(prev => {
//           const increment = Math.random() * 10 + 5;
//           const newProgress = prev + increment;
          
//           // Update phrases based on progress
//           if (newProgress < 20) setCurrentPhrase(phrases[0]);
//           else if (newProgress < 40) setCurrentPhrase(phrases[1]);
//           else if (newProgress < 70) setCurrentPhrase(phrases[2]);
//           else if (newProgress < 90) setCurrentPhrase(phrases[3]);
//           else setCurrentPhrase(phrases[4]);
          
//           if (newProgress >= 100) {
//             clearInterval(interval);
//             return 100;
//           }
//           return newProgress;
//         });
//       }, 300);

//       return () => clearInterval(interval);
//     };

//     load();
//   }, []);

//   useEffect(() => {
//     if (progress >= 100) {
//       const completeAnimation = async () => {
//         await controls.start({
//           opacity: 0,
//           transition: { duration: 0.5 }
//         });
//         onComplete();
        
//         // Create ripple effect on body
//         document.body.style.overflow = 'hidden';
//         const ripple = document.createElement('div');
//         ripple.className = `fixed inset-0 z-50 ${
//           darkMode ? 'bg-[var(--background-dark)]' : 'bg-[var(--background-light)]'
//         }`;
//         ripple.style.clipPath = 'circle(0% at 50% 50%)';
//         document.body.appendChild(ripple);
        
//         // Animate ripple
//         const animation = ripple.animate(
//           [{ clipPath: 'circle(0% at 50% 50%)' }, { clipPath: 'circle(150% at 50% 50%)' }],
//           { duration: 1000, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' }
//         );
        
//         animation.onfinish = () => {
//           document.body.removeChild(ripple);
//           document.body.style.overflow = '';
//         };
//       };
      
//       completeAnimation();
//     }
//   }, [progress, controls, onComplete, darkMode]);

//   return (
//     <motion.div
//       className={`fixed inset-0 z-50 flex flex-col items-center justify-center ${
//         darkMode ? 'bg-[var(--background-dark)]' : 'bg-[var(--background-light)]'
//       }`}
//       animate={controls}
//     >
//       {/* Holographic container */}
//       <div className="relative w-64 h-64 mb-8 flex items-center justify-center">
//         {/* Particles */}
//         {particles.map((_, i) => (
//           <Particle key={i} darkMode={darkMode} />
//         ))}
        
//         {/* Central orb */}
//         <motion.div
//           className={`relative w-32 h-32 rounded-full ${
//             darkMode ? 'bg-[var(--primary-dark)]' : 'bg-[var(--primary-light)]'
//           }`}
//           style={{
//             boxShadow: `0 0 30px ${
//               darkMode ? 'var(--primary-dark)' : 'var(--primary-light)'
//             }`
//           }}
//           animate={{
//             scale: [1, 1.05, 1],
//             opacity: [0.8, 1, 0.8]
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             repeatType: 'reverse',
//             ease: 'easeInOut'
//           }}
//         >
//           {/* Progress text inside orb */}
//           <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
//             {Math.round(progress)}%
//           </div>
//         </motion.div>
//       </div>
      
//       {/* Loading text with typing effect */}
//       <motion.div
//         className={`text-xl mb-6 font-mono ${
//           darkMode ? 'text-[var(--text-primary-dark)]' : 'text-[var(--text-primary-light)]'
//         }`}
//       >
//         {currentPhrase}
//         <motion.span
//           animate={{ opacity: [0, 1] }}
//           transition={{ duration: 0.5, repeat: Infinity }}
//           className="ml-1"
//         >
//           |
//         </motion.span>
//       </motion.div>
      
//       {/* Glowing progress bar */}
//       <div className="w-64 h-2 rounded-full overflow-hidden relative">
//         <div className={`absolute inset-0 ${
//           darkMode ? 'bg-[var(--surface-dark)]' : 'bg-[var(--surface-light)]'
//         }`} />
//         <motion.div
//           className={`absolute inset-y-0 left-0 ${
//             darkMode ? 'bg-[var(--primary-dark)]' : 'bg-[var(--primary-light)]'
//           }`}
//           style={{
//             width: `${progress}%`,
//             boxShadow: `0 0 10px ${
//               darkMode ? 'var(--primary-dark)' : 'var(--primary-light)'
//             }`
//           }}
//         />
//       </div>
      
//       {/* Binary rain effect in background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {Array(30).fill(0).map((_, i) => (
//           <motion.div
//             key={i}
//             className={`absolute font-mono ${
//               darkMode ? 'text-[var(--primary-dark)]' : 'text-[var(--primary-light)]'
//             } opacity-20`}
//             initial={{
//               y: -50,
//               x: Math.random() * window.innerWidth
//             }}
//             animate={{
//               y: window.innerHeight + 50,
//               transition: {
//                 duration: Math.random() * 5 + 5,
//                 repeat: Infinity,
//                 delay: Math.random() * 3
//               }
//             }}
//           >
//             {Math.random() > 0.5 ? '1' : '0'}
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default function Page() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [showContent, setShowContent] = useState(false);

//   useEffect(() => {
//     // Check for saved theme preference or system preference
//     const savedTheme = localStorage.getItem('darkMode');
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//     const initialMode = savedTheme ? JSON.parse(savedTheme) : prefersDark;
    
//     setDarkMode(initialMode);
//     applyTheme(initialMode ? darkTheme : lightTheme);

//     // Simulate loading (replace with actual loading logic)
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 4500); // Shorter duration for demo

//     return () => clearTimeout(timer);
//   }, []);

//   const toggleDarkMode = () => {
//     const newMode = !darkMode;
//     setDarkMode(newMode);
//     localStorage.setItem('darkMode', JSON.stringify(newMode));
//     applyTheme(newMode ? darkTheme : lightTheme);
//   };

//   const applyTheme = (theme) => {
//     Object.entries(theme).forEach(([key, value]) => {
//       document.documentElement.style.setProperty(key, value);
//     });
//   };

//   const handleLoaderComplete = () => {
//     setShowContent(true);
//   };

//   return (
//     <div className="min-h-screen relative">
//       <AnimatePresence>
//         {isLoading && (
//           <HolographicLoader 
//             darkMode={darkMode} 
//             onComplete={handleLoaderComplete} 
//           />
//         )}
//       </AnimatePresence>

//       {showContent && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
//           <Home />
//           <About />
//           <Skills />
//           <Experience />
//           <Tools />
//           <Projects />
//           <Education />
//           <Contact />
//           <Footer />
//         </motion.div>
//       )}
//     </div>
//   );
// }