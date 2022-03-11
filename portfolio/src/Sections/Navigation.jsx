import styled from 'styled-components';
import React from 'react';
import Link from '../Components/Link';

const Navigation = () => (
  <Container>
    <Logo>
      <Link href="https://www.nathanlauder.com">
        <img src="imgs/NLogo.png" alt="Logo" />
      </Link>
    </Logo>
    <Nav>
      <NavOption>
        <Link href="#experience" color="#ffd700">Experience</Link>
      </NavOption>
      <NavOption>
        <Link href="#projects" color="#ffd700">Projects</Link>
      </NavOption>
      <NavOption>
        <Link href="#toolkit" color="#ffd700">Tools</Link>
      </NavOption>
      <NavOption>
        <Link href="#education" color="#ffd700">Education</Link>
      </NavOption>
      <NavOption>
        <Link href="#footer" color="#ffd700">Contact</Link>
      </NavOption>
    </Nav>
  </Container>
);

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
`;

const Logo = styled.div`
    width: 2.3rem;
    margin-left: 3rem;
    
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
    @media (max-width: 600px) {
      width: 1.9rem;
      padding: 0.3rem;
    }
`;

const Nav = styled.div`
  display: flex;
`;

const NavOption = styled.div`
  padding: 1.5rem 1rem;

  :not(:last-child) {
    border-right: 1px solid #ffd700;
  }

  ${Link} {
    font-size: 1.1rem;
  }

  :hover {
    background-color: white;
    cursor: pointer;
    ${Link} {
      color: black;
    }
  }
`;

export default Navigation;