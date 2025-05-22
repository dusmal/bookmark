import React, { useState, useEffect } from 'react';
import Header from './layout/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Downloads from './sections/Downloads';
import Faq from './sections/Faq';
import Contact from './sections/Contact';
import Footer from './layout/Footer';
import InfoModal from './Modal/InfoModal';
import Modal from './Modal/Modal';
import featuresData from '../components/utilities/features'


const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [hasShownModal, setHasShownModal] = useState(false);
  const [isMouseAtTop, setIsMouseAtTop] = useState(false);

  useEffect(() => {
    if (!hasShownModal) {
      const timer = setTimeout(() => {
        setSelectedFeature(featuresData[0]);
        setIsModalOpen(true);
        setHasShownModal(true);
      }, 30000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [hasShownModal]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setIsMouseAtTop(e.clientY <= 10);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (isMouseAtTop && !isModalOpen) {
      const randomFeature = Math.floor(Math.random() * featuresData.length);
      setSelectedFeature(featuresData[randomFeature]);
      setIsModalOpen(true);
    }
  }, [isMouseAtTop, isModalOpen]);

  return (
    <>
      <div className="app">
        <Header />
        <Hero />
        <Features />
        <Downloads />
        <Faq />
      </div>
      <div className="contact-wrapper">
        <Contact />
      </div>
      <Footer />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={<InfoModal feature={selectedFeature} />}
      />
    </>
  );
};

export default App;