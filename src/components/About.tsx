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
      title: 'Profile',
      description: 'Self-taught, project-driven full-stack developer with a focus on building production-grade apps and MVPs.'
    },
    {
      icon: <FiCode size={24} />,
      title: 'Tech Stack',
      description: 'React, TypeScript, Tailwind, Node.js, Express, MongoDB, MySQL, FastAPI, Docker, CI/CD, and more.'
    },
    {
      icon: <FiAward size={24} />,
      title: 'Mindset',
      description: 'I follow agile sprints, optimize for clarity and quality, and believe in lifelong learning through real-world challenges.'
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
                Hey! I'm Orlando, a full-stack developer driven by curiosity, clean code, and a deep love for crafting impactful digital experiences. I’m currently focused on building fast, accessible, and scalable web apps using modern technologies.
              </p>
              <p className="text-tertiary mb-4">
                I specialize in the frontend/backend intersection — from designing intuitive UIs to building secure, scalable APIs. My journey blends technical depth with real-world projects, and I treat every build like it’s a product, not just a task.
              </p>
              <p className="text-tertiary mb-6">
                Beyond code, I’m passionate about strategic learning, entrepreneurship, and solving meaningful problems. I'm always refining my craft and working toward becoming the kind of developer who can turn ambitious ideas into polished products.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-quaternary mb-4">My Skills</h3>
              <div className="flex flex-wrap gap-2">
                {
                ['React', 'Next.js' ,'TypeScript', 'Tailwind CSS', 'Framer-Motion', 
                  'Node.js', 'FastAPI', 'Express.js', "SQL", "NoSQL", 
                  'Git', 'Rest APIs', "CI/CD", 'Docker', "Microservices"

                ].map((skill, index) => (
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