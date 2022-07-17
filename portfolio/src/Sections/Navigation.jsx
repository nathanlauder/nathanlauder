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

  @media (max-width: 600px) {
    margin-right: 1rem;
  }
`;

const Logo = styled.div`
  width: 2.3rem;
  margin-left: 2rem;
  
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
    padding-top: 5px;
    margin-left: 1rem;
  }
`;

const Navigation = () => (
  <Container>
    <Logo>
      <Link href="https://www.nathanlauder.com">
        <img src="imgs/NLogo.png" alt="Logo" />
      </Link>
    </Logo>
    <Nav>
      <NavOption>
        <Link href="#experience">Experience</Link>
      </NavOption>
      <NavOption>
        <Link href="#projects">Projects</Link>
      </NavOption>
      <NavOption>
        <Link href="#toolkit">Tools</Link>
      </NavOption>
      <NavOption>
        <Link href="#education">Education</Link>
      </NavOption>
      <NavOption>
        <Link href="#history">Timeline</Link>
      </NavOption>
      <NavOption>
        <Link href="#footer">Contact</Link>
      </NavOption>
    </Nav>
    <HamMenu />
  </Container>
);

export default Navigation;