import styled from 'styled-components';
import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { HiCode } from 'react-icons/hi';
import { BsPencil } from 'react-icons/bs';
import { VscTools } from 'react-icons/vsc';
import { RiContactsLine } from 'react-icons/ri';
import { FaHardHat } from 'react-icons/fa';
import Tooltip from '../Components/Tooltip';

const iconStyle = {
  fontSize: '2.3rem',
  color: '#00eef9'
};

const Navigation = () => (
  <Container>
    <Logo>
      <a href="https://www.nathanlauder.com">
        <img src="imgs/NLogo.png" alt="Logo" />
      </a>
    </Logo>
    <Nav>
      <div id="icons">
        <div id="icon">
          <a href="#landing">
            <AiOutlineHome style={iconStyle} className="icons" role="button" />
          </a>
          <Tooltip>Home</Tooltip>
        </div>
        <div id="icon">
          <a href="#experience">
            <FaHardHat style={iconStyle} className="icons" role="button" />
          </a>
          <Tooltip>Experience</Tooltip>
        </div>
        <div id="icon">
          <a href="#projects">
            <HiCode style={iconStyle} className="icons" role="button" />
          </a>
          <Tooltip>Projects</Tooltip>
        </div>
        <div id="icon">
          <a href="#toolkit">
            <VscTools style={iconStyle} className="icons" role="button" />
          </a>
          <Tooltip>Skills</Tooltip>
        </div>
        <div id="icon">
          <a href="#education">
            <BsPencil style={iconStyle} className="icons" role="button" />
          </a>
          <Tooltip>Education</Tooltip>
        </div>
      </div>
    </Nav>
    <Contact>
      <div id="icons">
        <div id="icon">
          <a href="#footer">
            <RiContactsLine style={iconStyle} className="icons" role="button" />
          </a>
          <Tooltip>Contact me</Tooltip>
        </div>
      </div>
    </Contact>
  </Container>
);

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 3;
    justify-content: space-between;
    align-items: center;
    margin-right: 1rem;
    width: 2.5rem;
    height: 98vh;
    background-color: #0e0e0e;
    padding: 1rem;
    border-right: 1pt solid #939393;
    @media (max-width: 600px) {
        width: 1rem;
    }
`;

const Logo = styled.div`
    width: 2.3rem;
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

const Nav = styled.nav`
    display:flex;
    flex-direction: column;
    
    a {
      margin: 0.75rem;
    }

    #icon {
    position: relative;
    margin: 1.5rem 0 1.5rem 0;
    
    :hover ${Tooltip} {
      visibility: visible;
    }
  }
    
  @media (max-width: 600px) {
    .icons {
        width: 1.9rem;
    }
  }
`;

const Contact = styled.div`
    margin-bottom: 0.7rem;

    #icon {
    position: relative;

    :hover ${Tooltip} {
      visibility: visible;
    }
  }
  @media (max-width: 600px) {
    .icons {
        width: 1.7rem;
    }
  }
`;

export default Navigation;