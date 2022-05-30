import React, {useEffect, useState} from 'react';
import { exportCurrentPage } from './header/NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  // const [currentPage, setCurrentPage] = useState(exportCurrentPage);
  let currentPage = exportCurrentPage;
  // useEffect(() => setCurrentPage(exportCurrentPage), []);

  // Displays current page
  const renderPage = () => {
    if (currentPage === 'About') {
      console.log('About Triggered happened');
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      console.log('Portfolio Triggered happened');
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      console.log('Contact Triggered happened');
      return <Contact />;
    }
    console.log('Resume Triggered happened');
    return <Resume />;
  };

  return (
      <main>
        {renderPage()}
      </main>
  );
}

export {PortfolioContainer}