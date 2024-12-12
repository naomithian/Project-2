import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import NewSection from './components/NewSection';
import SignatureCreations from './components/SignatureCreations';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainContent initialText="NDH is more than design—it's emotion. Marrying luxury with meaning, we shape spaces that mirror individual narratives and foster connections. Each room becomes an echo of personal stories and dreams realized." />
      <NewSection />
      <SignatureCreations />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
