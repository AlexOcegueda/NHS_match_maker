// src/pages/index.js
import React from 'react';
import styled from 'styled-components'
import Layout from '../components/Layout.js';

const IndexPage = () => {
  return (
    <>
      <Layout />
      <Container>
        <h1>Welcome to the NHS Matcher!</h1>
        <p>
          This is a free quiz which makes sure you are put
          with your furry friend in no time.
        </p>
        <QuizBtn>Take Quiz</QuizBtn>
      </Container>
    </>
  );
};

export default IndexPage;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 3rem 0 3rem;
`;

const QuizBtn = styled.button`
  width: 5rem; /* Adjust the width and height as needed to make it round */
  height: 2.5rem;
  border: none; /* Remove borders */
  border-radius: .5rem; /* Make it round by setting border-radius to half of the width or height */
  background-color: #820B8A; /* Set the background color to your desired color */
  cursor: pointer;
`;