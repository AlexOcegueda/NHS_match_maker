// src/pages/index.js
import React from 'react';
import Layout from '../components/Layout.js';
import { Link } from 'gatsby';
import '../css/styles.css'; // Update the path to match your actual file structure

const IndexPage = () => {
  return (
    <>
      <Layout />
      <div className="container">
        <h1 className="heading">Welcome to the NHS Matcher!</h1>
        <p className="description">
          This is a free quiz which makes sure you are put
          with your furry friend in no time.
        </p>
        <Link className="quiz-btn" to="/filter">Take Quiz</Link>
      </div>
    </>
  );
};

export default IndexPage;
