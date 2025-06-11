import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-primary text-quaternary flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="flex flex-col w-full">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
      
      <footer className="py-8 bg-primary text-center text-tertiary text-sm">
        <div className="container-width">
          <p>&copy; {new Date().getFullYear()} Orlando Portfolio. All rights reserved.</p>
          <p className="mt-2">Built with React, TypeScript, and Framer Motion</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
