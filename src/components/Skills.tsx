import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiDatabase, FiLayout, FiTool, FiServer } from 'react-icons/fi';
import '../styles/Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FiLayout size={24} />,
      skills: [
        { name: "React", level: 65 },
        { name: "TypeScript", level: 50 },
        { name: "JavaScript", level: 80 },
        { name: "HTML & CSS", level: 70 },
        { name: "Next.js", level: 40 },
      ]
    },
    {
      title: "Backend Development",
      icon: <FiServer size={24} />,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 70 },
        { name: "RESTful APIs", level: 75 },
        { name: "FastAPI", level: 50 },
        { name: "Microservices", level: 30 },

      ]
    },
    {
      title: "Database & DevOps",
      icon: <FiDatabase size={24} />,
      skills: [
        { name: "NoSQL (MongoDB)", level: 75 },
        { name: "SQL (MySQL)", level: 70 },
        { name: "Docker", level: 50 },
        { name: "Git", level: 70 },
        { name: "Redis", level: 50 },
      ]
    },
    {
      title: "Tools & Others",
      icon: <FiTool size={24} />,
      skills: [
        { name: "Framer Motion", level: 55 },
        { name: "Jest", level: 60 },
        { name: "Agile", level: 80 },
        { name: "Responsive Design", level: 70 }, 
        { name: "CI & CD", level: 50 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container-width">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="skills-title-container">
            <h2 className="skills-title">
              <span className="skills-title-number">03.</span> My Skills
            </h2>
            <p className="skills-description">
              A quick look at my tech stack. I focus on building solid, scalable, and user-friendly systems — always refining, always shipping.
            </p>
          </motion.div>

          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="skill-card"
              >
                <div className="skill-header">
                  <div className="skill-icon">{category.icon}</div>
                  <h3 className="skill-title">{category.title}</h3>
                </div>
                <div className="skill-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-name-level">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar-bg">
                        <div 
                          className="skill-bar-fill" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;