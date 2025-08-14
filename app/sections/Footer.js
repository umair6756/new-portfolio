import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from '../icons';

const Footer = () => {
  return (
    <footer className="bg-[var(--surface)] py-12 border-t border-[var(--border)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-6 md:mb-0"
          >
            <a href="#home" className="text-2xl font-bold text-[var(--text-primary)]">
              <span className="text-[var(--primary)]">Dev</span>Ops<span className="text-[var(--primary)]">.</span>
            </a>
            <p className="text-[var(--text-secondary)] mt-2">Building the future of cloud infrastructure.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="flex space-x-6"
          >
            {[
              { icon: <FiGithub />, url: "https://github.com" },
              { icon: <FiLinkedin />, url: "https://linkedin.com" },
              { icon: <FiTwitter />, url: "https://twitter.com" },
              { icon: <FiMail />, url: "mailto:alex@devopsengineer.com" }
            ].map((item, index) => (
              <motion.a 
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "var(--primary)" }}
                className="text-[var(--text-secondary)] text-2xl transition-colors"
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4 }}
          className="border-t border-[var(--border)] mt-8 pt-8 text-center"
        >
          <p className="text-[var(--text-secondary)]">
            &copy; {new Date().getFullYear()} DevOps Portfolio. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;