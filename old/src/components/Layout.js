// src/Layout.js
import React from 'react';
import NavBar from './NavBar.js';
import '../styles/global.css'

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
