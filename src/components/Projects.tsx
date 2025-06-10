import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product filtering, cart functionality, and payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1189&q=80",
      github: "#",
      live: "#",
      reverse: false
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application that helps teams organize and track their projects. Built with React, TypeScript, and Firebase for real-time updates.",
      tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      github: "#",
      live: "#",
      reverse: true
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that provides current and forecasted weather data for any location. Uses OpenWeatherMap API and features a clean, intuitive interface with dynamic backgrounds.",
      tags: ["JavaScript", "React", "API Integration", "CSS"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      github: "#",
      live: "#",
      reverse: false
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 md:py-24 bg-primary">
      <div className="container-width">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-20 md:space-y-32"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-quaternary mb-6 flex items-center justify-center">
              <span className="text-secondary mr-2">02.</span> My Projects
            </h2>
            <p className="text-tertiary max-w-2xl mx-auto">
              Here are some of my recent projects. Each project is a unique challenge that I've tackled with passion and creativity.
            </p>
          </motion.div>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-12 items-center"
              >
                <div className={`md:col-span-6 ${project.reverse ? 'md:order-2 md:col-start-7' : 'md:col-start-1'} space-y-4`}>
                  <h3 className="text-2xl font-bold text-quaternary">{project.title}</h3>
                  <div className="card">
                    <p className="text-tertiary">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1 bg-primary border border-secondary/30 text-secondary rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 pt-2">
                    <a 
                      href={project.github} 
                      className="text-quaternary hover:text-secondary transition-colors hover-transition"
                      aria-label="View GitHub Repository"
                    >
                      <FiGithub size={20} />
                    </a>
                    <a 
                      href={project.live} 
                      className="text-quaternary hover:text-secondary transition-colors hover-transition"
                      aria-label="View Live Demo"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <div className={`md:col-span-6 ${project.reverse ? 'md:order-1 md:col-start-1' : 'md:col-start-7'} relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300`}>
                  <div className="absolute inset-0 bg-secondary/10 hover:bg-transparent transition-colors duration-300 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto rounded-lg transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;