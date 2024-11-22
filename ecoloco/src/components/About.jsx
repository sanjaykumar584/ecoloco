import React from 'react';
import { Hero } from './about/Hero';
import { Mission } from './about/Mission';
import { Team } from './about/Team';
import Footer from './Footer';
import NavBar from './Navbar';

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <Mission />
      <Team />
      <Footer />
    </div>
  );
}

export default App;