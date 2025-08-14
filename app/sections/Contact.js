'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiTwitter } from '../icons';
import AnimatedCard from '../common/AnimatedCard';
import SectionTitle from '../common/SectionTitle';
import GlowButton from '../common/GlowButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    try {
      const response = await fetch('https://formspree.io/f/xovlbjor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }),
      });

      if (response.ok) {
        setSubmitStatus({ success: true, message: 'Message sent successfully!' });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[var(--surface)]">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Get In" 
          highlight="Touch" 
          subtitle="Have a project in mind or want to discuss potential opportunities? Feel free to reach out!"
        />

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="space-y-6">
              {[
                { icon: <FiMail />, title: "Email Me", content: "chumair6756@gmail.com" },
                { icon: <FiLinkedin />, title: "LinkedIn", content: "linkedin.com/in/muhammad-umair-00a71a320", isLink: true },
                { icon: <FiGithub />, title: "GitHub", content: "github.com/umair6756", isLink: true },
                { icon: <FiTwitter />, title: "Twitter", content: "@hafiz_devops", isLink: true }
              ].map((item, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-[var(--primary)] text-2xl mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                      {item.isLink ? (
                        <a 
                          href={`https://${item.content}`} 
                          className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-[var(--text-secondary)]">{item.content}</p>
                      )}
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <AnimatedCard className="p-6" delay={0.1}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="flex flex-col md:flex-row gap-6"
                >
                  <div className="w-full">
                    <label htmlFor="name" className="block text-[var(--text-primary)] mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="email" className="block text-[var(--text-primary)] mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                      required
                    />
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                >
                  <label htmlFor="subject" className="block text-[var(--text-primary)] mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    required
                  />
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                >
                  <label htmlFor="message" className="block text-[var(--text-primary)] mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    required
                  ></textarea>
                </motion.div>
                
                {submitStatus.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
                
                <GlowButton
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </GlowButton>
              </form>
            </AnimatedCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;