// Hero Image
// Name
// Nav bar containing: About/Portfolio/Contact/Resume
// Keep current page highlighted.
import React, {useState} from 'react';
import NavTabs from './header/NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function Header() {
  
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
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
    <header>
      {/* Name/Author */}
      <h1>Tim Zalewski, Pharm.D.</h1>
      {/* Hero image */}
      {/* NavBar */}
      <nav>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
      </nav>
    </header>
  );
}