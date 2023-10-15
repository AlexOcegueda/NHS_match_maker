import React from 'react';
import '../App.css';

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a href="#" className="navbar-brand">PetMatch</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Pets</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Contact</a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <a href="#" className="btn btn-outline-dark me-2">Log in</a>
              <a href="#" className="btn btn-primary">Sign up now</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
