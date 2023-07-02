import React from 'react';
import styled from 'styled-components';

const Animal = ({ displayName, link, description, imageSrc }) => {
    return (
        <Container>
            <Text>
                <h2>{displayName}</h2>
                <Description>{description}</Description>
                <Link href={link}>See on NHS →</Link>
            </Text>
            <Image src={imageSrc} alt="Animal Image" />
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

    @media screen and (max-width: 768px) { /* Medium screens */
        width: 15rem;
    }

    @media screen and (max-width: 576px) { /* Small screens */
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

    @media screen and (max-width: 768px) { /* Medium screens */
        width: 30rem;
        height: 13rem;
    }

    @media screen and (max-width: 576px) { /* Small screens */
        width: 100%;
        flex-direction: column;
        height: auto;
    }
`;

const Tools = styled.span`
    display: flex;
    font-weight: semi-bold;
`;

const Link = styled.a`
    margin-left: 0.3rem;
    font-weight: semi-bold;
`;

const Description = styled.p`
    color: black;
    margin-right: .5rem;
`;
