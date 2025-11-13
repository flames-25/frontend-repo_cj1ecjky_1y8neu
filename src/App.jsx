import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tournaments from './components/Tournaments';
import Join from './components/Join';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tournaments />
        <Join />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
