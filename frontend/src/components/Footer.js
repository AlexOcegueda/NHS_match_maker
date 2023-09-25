import React from 'react';

function Footer() {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light text-center py-3">
      <p>&copy; {currentYear} Alex Ocegueda</p>
    </footer>
  );
}

export default Footer;
