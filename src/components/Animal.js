import React from 'react';
import styled from 'styled-components';

const Animal = ({ imgUrl, name, breed, description, eyeColor, playful, longHaired }) => {
    return (
        <Container>
        <Text>
            <h2>{name}</h2>
            <Description>
            <strong>Breed:</strong> {breed}
            <br />
            <strong>Eye Color:</strong> {eyeColor}
            <br />
            <strong>Playful:</strong> {playful ? 'Yes' : 'No'}
            <br />
            <strong>Long-Haired:</strong> {longHaired ? 'Yes' : 'No'}
            <br />
            {description}
            </Description>
        </Text>
        <Image src={imgUrl} alt="Animal Image" />
        </Container>
    );
};

export default Animal;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  border-radius: 1rem;
  object-fit: cover;
  width: 20rem;
  margin-right: 1rem;

  @media screen and (max-width: 768px) {
    /* Medium screens */
    width: 15rem;
  }

  @media screen and (max-width: 576px) {
    /* Small screens */
    width: 100%;
    max-width: 20rem;
  }
`;

const Container = styled.div`
  display: flex;
  width: 40rem;
  height: 15rem;
  margin-top: 2rem;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    /* Medium screens */
    width: 30rem;
    height: 13rem;
  }

  @media screen and (max-width: 576px) {
    /* Small screens */
    width: 100%;
    flex-direction: column;
    height: auto;
  }
`;

const Description = styled.p`
  color: black;
  margin-right: 0.5rem;
  width: 15rem;
`;
