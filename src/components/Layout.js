// src/Layout.js
import React from 'react';
import NavBar from './NavBar.js';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
