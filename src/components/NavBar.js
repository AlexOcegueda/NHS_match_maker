import React from 'react';
import styled from 'styled-components';

const NavBar = () => {
    return (
        <Container>
            <Title>NHS Matcher</Title>
            <Nav>
                <NavItem>Home</NavItem>
                <NavItem>Other</NavItem>
            </Nav>
        </Container>
    );
};

export default NavBar;

const Container = styled.nav`
    margin: 2rem;
    background-color: black;
    padding: 10px;
`;

const Title = styled.h1`
    font-weight: bold;
`;

const Nav = styled.ul`
    display: flex;
`;

const NavItem = styled.li`
    text-decoration: none;
`;