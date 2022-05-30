import React, {useState} from 'react';
import NavTabs from './navigation/NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Header from './Header';
import Footer from './Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

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

  const handlePageChange = (page) => setCurrentPage(page);

  return (
      <div>
        <header>
          <Header />
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
        <section>
          {renderPage()}
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
  );
}

export {PortfolioContainer}