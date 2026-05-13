import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Tools from '../components/Tools/Tools';
import Experience from '../components/Experience/Experience';
import Contact from '../components/Contact/Contact';
import PageTransition from '../components/PageTransition/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <main>
        <Hero />
        <About />
        <Projects />
        <Tools />
        <Experience />
        <Contact />
      </main>
    </PageTransition>
  );
};

export default Home;
