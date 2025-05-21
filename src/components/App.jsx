import React from 'react';
import Header from './layout/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Features />
    </div>
  );
};

export default App;