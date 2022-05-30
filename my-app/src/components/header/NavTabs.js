import React, {useState} from 'react';
import { PortfolioContainer } from '../PortfolioContainer';

// Allows for currentPage to be exported to portfolio
let exportCurrentPage = 'Contact';

// Navbar that highlights which link is active
function NavTabs() {

  const [currentPage, setCurrentPage] = useState(`${exportCurrentPage}`);

  // Changes current page value
  const handlePageChange = (page) => {
    setCurrentPage(page);
    exportCurrentPage = page;
    PortfolioContainer();
  };

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

console.log('ExportCurrentpage happened', exportCurrentPage);
export default NavTabs;
export {exportCurrentPage};
