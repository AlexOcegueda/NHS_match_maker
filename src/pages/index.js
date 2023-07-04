// src/pages/index.js
import React from 'react';
import styled from 'styled-components'
import Layout from '../components/Layout.js';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <>
      <Layout />
      <Container>
        <Heading>Welcome to the NHS Matcher!</Heading>
        <Description>
          This is a free quiz which makes sure you are put
          with your furry friend in no time.
        </Description>
        <QuizBtn to="/filter">Take Quiz</QuizBtn>
      </Container>
    </>
  );
};

export default IndexPage;

const Description = styled.p`
  font-size: 1.25em;
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  margin: 1rem 0 1rem 0;
  font-size: 4em;
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 3rem 0 3rem;
`;

const QuizBtn = styled(Link)`
  border-radius: .25rem; /* Make it round by setting border-radius to half of the width or height */
  background-color: #D5FFF3; /* Set the background color to your desired color */
  cursor: pointer;
  padding: .4rem;
  text-decoration: none;
  color: black;

  :hover {
    background-color: lightgrey;
  }
`;