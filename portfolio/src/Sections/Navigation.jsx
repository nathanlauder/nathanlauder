import styled from 'styled-components';
import React from 'react';
import Link from '../Components/Link';
import HamMenu from '../Components/HamMenu';
import Nav from '../Components/Nav';
import NavOption from '../Components/NavOption';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 600px) {
    margin-right: 1rem;
  }
`;

const Logo = styled.div`
  width: 2.3rem;
  padding: 0.5rem 2rem; // fixme should be margin-left: 2rem;
  background-color: var(--accent);
  
  img {
    animation: spinLogo 4s infinite ease-in-out;
    width: 100%;
    @keyframes spinLogo {
      40% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  @media screen and (max-width: 650px) {
    width: 2rem;
    padding-top: 6px;
    margin-left: 1rem;
  }
`;

const Navigation = () => (
  <Container>
    <Logo>
      <Link href="https://nathanlauder.com">
        <img src="imgs/NLogo.png" alt="Logo" />
      </Link>
    </Logo>
    <Nav>
      <Link href="#experience">
        <NavOption>Experience</NavOption>
      </Link>
      <Link href="#projects">
        <NavOption>Projects</NavOption>
      </Link>
      <Link href="#tools">
        <NavOption>Tools</NavOption>
      </Link>
      <Link href="#timeline">
        <NavOption>History</NavOption>
      </Link>
      <Link href="#footer">
        <NavOption>Contact</NavOption>
      </Link>
    </Nav>
    <HamMenu />
  </Container>
);

export default Navigation;