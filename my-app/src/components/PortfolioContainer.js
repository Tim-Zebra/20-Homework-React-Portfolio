import React from 'react';
import { exportCurrentPage } from './header/NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


export default function PortfolioContainer() {
  let currentPage = exportCurrentPage;
  console.log('This happened', currentPage);
  // Displays current page
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  // renders page, and communicates with nave tabs
  return (
    <main>
      {renderPage()}
    </main>
  );
}