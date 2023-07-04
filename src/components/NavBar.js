import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavBar = () => {
    return (
        <Container>
            <Title>NHS Matcher<p>Powered by Stratonauts Dog API</p></Title>
            <Nav>
                <NavItem to="/">About</NavItem>
                <NavItem to="/filter">Filter</NavItem>
            </Nav>
        </Container>
    );
};

export default NavBar;

const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    align-content: center;
    background-color: #672A4E;
    padding: 2rem;
`;

const Title = styled.h1`
    font-weight: bold;
    flex: 1;
`;

const Nav = styled.ul`
    display: flex;
    margin-left: auto;
`;

const NavItem = styled(Link)`
    list-style-type: none;
    margin-left: 1rem;
    text-decoration: none;
    color: white;
`;