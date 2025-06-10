import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const socialLinks = [
    { icon: <FiGithub size={20} />, url: "https://github.com", label: "GitHub" },
    { icon: <FiLinkedin size={20} />, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FiTwitter size={20} />, url: "https://twitter.com", label: "Twitter" },
    { icon: <FiMail size={20} />, url: "mailto:example@example.com", label: "Email" }
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
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-quaternary mb-6">Send Me a Message</h3>
              
              {submitSuccess ? (
                <motion.div 
                  className="card border-secondary"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-secondary font-medium">Thank you for your message! I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-tertiary mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-primary/30 border border-tertiary/30 rounded-lg p-3 text-quaternary focus:border-secondary focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-tertiary mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-primary/30 border border-tertiary/30 rounded-lg p-3 text-quaternary focus:border-secondary focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-tertiary mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-primary/30 border border-tertiary/30 rounded-lg p-3 text-quaternary focus:border-secondary focus:outline-none transition-colors"
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-transparent border-2 border-secondary text-secondary rounded-lg hover:bg-secondary/10 transition-colors duration-300 disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              )}
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-quaternary mb-6">Connect With Me</h3>
              <div className="card">
                <p className="text-tertiary mb-6">
                  Feel free to reach out to me on any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-tertiary hover:text-secondary transition-colors duration-300"
                      aria-label={link.label}
                    >
                      <span>{link.icon}</span>
                      <span>{link.label}</span>
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