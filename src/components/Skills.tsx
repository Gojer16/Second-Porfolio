import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiDatabase, FiLayout, FiTool, FiServer } from 'react-icons/fi';
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
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML & CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
      ]
    },
    {
      title: "Backend Development",
      icon: <FiServer size={24} />,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "RESTful APIs", level: 85 },
        { name: "GraphQL", level: 70 },
      ]
    },
    {
      title: "Database & DevOps",
      icon: <FiDatabase size={24} />,
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "Docker", level: 65 },
        { name: "Git", level: 85 },
      ]
    },
    {
      title: "Tools & Others",
      icon: <FiTool size={24} />,
      skills: [
        { name: "Figma", level: 75 },
        { name: "Jest", level: 70 },
        { name: "Webpack", level: 65 },
        { name: "Responsive Design", level: 90 },
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
              Here's a breakdown of my technical skills and proficiency levels. I'm constantly learning and improving these skills.
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