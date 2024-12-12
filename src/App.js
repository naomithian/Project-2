import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import NewSection from './components/NewSection';
import SignatureCreations from './components/SignatureCreations';
import Footer from './components/Footer';
import './App.css'; 

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <NewSection />
      <SignatureCreations />
      <Footer />
    </div>
  );
};

export default App;
