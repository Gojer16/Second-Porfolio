import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiUser, FiCode, FiAward } from 'react-icons/fi';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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

  const cards = [
    {
      icon: <FiUser size={24} />,
      title: 'Experience',
      description: '5+ years working in web development with a focus on frontend technologies.'
    },
    {
      icon: <FiCode size={24} />,
      title: 'Technologies',
      description: 'React, TypeScript, Node.js, and modern frontend frameworks.'
    },
    {
      icon: <FiAward size={24} />,
      title: 'Education',
      description: 'Computer Science degree with continuous learning through online courses.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-primary">
      <div className="container-width">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-12 md:grid-cols-2"
        >
          <div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-quaternary mb-6 flex items-center"
              variants={itemVariants}
            >
              <span className="text-secondary mr-2">01.</span> About Me
            </motion.h2>
            
            <motion.div variants={itemVariants}>
              <p className="text-tertiary mb-4">
                Hello! I'm John, a passionate web developer with a keen interest in creating beautiful, functional websites and applications. My journey in web development started 5 years ago, and I've been in love with it ever since.
              </p>
              <p className="text-tertiary mb-4">
                I specialize in building exceptional digital experiences using modern technologies like React, TypeScript, and Node.js. I'm constantly learning and exploring new technologies to stay at the forefront of web development.
              </p>
              <p className="text-tertiary mb-6">
                When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new design trends. I believe in continuous learning and pushing the boundaries of what's possible on the web.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-quaternary mb-4">My Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Node.js', 'Git', 'Responsive Design', 'UI/UX'].map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-primary border border-secondary text-secondary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card"
              >
                <div className="flex items-center mb-4">
                  <div className="text-secondary mr-4">{card.icon}</div>
                  <h3 className="text-xl font-semibold text-quaternary">{card.title}</h3>
                </div>
                <p className="text-tertiary">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;