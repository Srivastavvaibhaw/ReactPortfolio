import React, { useState } from "react";
import HomePage from "./components/HomePage";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    console.log(`Navigating to: ${page}`);
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigateTo={navigateTo} />;
      case 'skills':
        return <Skills goBack={() => navigateTo('home')} navigateTo={navigateTo} />;
      case 'projects':
        return <Projects goBack={() => navigateTo('home')} navigateTo={navigateTo} />;
      case 'about':
        return <About goBack={() => navigateTo('home')} navigateTo={navigateTo} />;
      case 'contact':
        return <Contact goBack={() => navigateTo('home')} navigateTo={navigateTo} />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="app">
      <Navbar navigateTo={navigateTo} currentPage={currentPage} />
      {renderPage()}
    </div>
  );
};

export default App;
