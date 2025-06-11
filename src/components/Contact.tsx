import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [state, handleSubmit] = useForm("xvgrkdkl");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const socialLinks = [
    { icon: <FiGithub size={20} />, url: "https://github.com/Gojer16", label: "GitHub" },
    { icon: <FiLinkedin size={20} />, url: "https://www.linkedin.com/in/orlando-ascanio-dev", label: "LinkedIn" },
    { icon: <FiTwitter size={20} />, url: "https://x.com/Gojer27", label: "Twitter" },
    { icon: <FiMail size={20} />, url: "mailto:operation927@gmail.com", label: "Email" }
  ];

  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container-width">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-quaternary mb-6 flex items-center justify-center">
              <span className="text-secondary mr-2">04.</span> Get In Touch
            </h2>
            <p className="text-tertiary max-w-2xl mx-auto">
              Got a project, idea, or opportunity in mind? I’d love to hear from you. I’m currently open to freelance work, collaborations, or even a quick chat about tech and product building.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-quaternary mb-6">Send Me a Message</h3>

              {state.succeeded ? (
                <motion.div 
                  className="card border-secondary"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-secondary font-medium">Thanks for reaching out! I’ll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input 
                    type="text" 
                    name="_gotcha" 
                    autoComplete="off" 
                    tabIndex="-1" 
                    style={{ display: 'none' }} 
                  />
                  <div>
                    <label htmlFor="name" className="block text-tertiary mb-2">Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className="w-full bg-primary/30 border border-tertiary/30 rounded-lg p-3 text-quaternary focus:border-secondary focus:outline-none transition-colors"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-tertiary mb-2">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full bg-primary/30 border border-tertiary/30 rounded-lg p-3 text-quaternary focus:border-secondary focus:outline-none transition-colors"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-tertiary mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full bg-primary/30 border border-tertiary/30 rounded-lg p-3 text-quaternary focus:border-secondary focus:outline-none transition-colors"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    className="px-6 py-3 bg-transparent border-2 border-secondary text-secondary rounded-lg hover:bg-secondary/10 transition-colors duration-300 disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              )}
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-quaternary mb-6">Connect With Me</h3>
              <div className="card">
                <p className="text-tertiary mb-6">
                  Prefer social? I’m active on these platforms — whether it’s about tech, ideas, or collaboration, my inbox is always open.
                </p>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-tertiary hover:text-secondary transition-colors duration-300"
                      aria-label={link.label}
                    >
                      {link.icon}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
