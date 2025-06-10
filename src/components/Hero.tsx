import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import '../styles/Hero.css';

const Hero = () => {
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

  return (
    <section id="home" className="hero-section">
      <div className="container-width">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p 
            className="hero-greeting"
            variants={itemVariants}
          >
            Hey there, I'm
          </motion.p>
          <motion.h1 
            className="hero-name"
            variants={itemVariants}
          >
            Orlando Ascanio.
          </motion.h1>
          <motion.h2 
            className="hero-title"
            variants={itemVariants}
          >
            I craft full-stack solutions with purpose.
          </motion.h2>
          <motion.p 
            className="hero-description"
            variants={itemVariants}
          >
            I'm a developer focused on building clean, scalable, and human-centered web applications.  
            Whether it's product MVPs, freelance systems, or ambitious experiments <span className='font-bold'>I turn ideas into impact.</span>
            <motion.p className="hero-signature" variants={itemVariants}>
            Based in Venezuela. Building for the world.
            </motion.p>
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <motion.a
              href="#projects"
              className="hero-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See my work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            delay: 1.5,
            duration: 0.5 
          } 
        }}
      >
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            transition: { 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: "loop" 
            } 
          }}
          className="scroll-text"
        >
          <span>Scroll Down</span>
          <FiArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;