import React from 'react';
import Header from './layout/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Downloads from './sections/Downloads';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Features />
      <Downloads />
    </div>
  );
};

export default App;