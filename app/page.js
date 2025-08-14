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























