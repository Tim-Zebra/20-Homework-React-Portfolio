// Hero Image
// Name
// Nav bar containing: About/Portfolio/Contact/Resume
// Keep current page highlighted.
import React from 'react';
import NavTabs from './NavTabs';

export default function Header() {
  return (
    <header>
      {/* Name/Author */}
      <h1>Tim Zalewski, Pharm.D.</h1>
      {/* Hero image */}
      {/* NavBar */}
      <div>
        <NavTabs />
      </div>
    </header>
  );
}