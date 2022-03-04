import styled from 'styled-components';
import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { HiCode } from 'react-icons/hi';
import { BsPencil } from 'react-icons/bs';
import { VscTools } from 'react-icons/vsc';
import { RiContactsLine } from 'react-icons/ri';

const iconStyle = {
  fontSize: '2.3rem',
  color: '#00eef9'
};

function Navigation() {
  return (
    <Container>
      <Logo>
        <a href="https://www.nathanlauder.com">
          <img src="imgs/NLogo.png" alt="Logo" />
          {' '}
        </a>
      </Logo>
      <Nav>
        <div id="icons">
          <div id="icon">
            <a href="#landing">
              <AiOutlineHome style={iconStyle} className="icons" role="button" />
            </a>
            <span id="tooltip">Home</span>
          </div>
          <div id="icon">
            <a href="#projects">
              <HiCode style={iconStyle} className="icons" role="button" />
            </a>
            <span id="tooltip">Projects</span>
          </div>
          <div id="icon">
            <a href="#toolkit">
              <VscTools style={iconStyle} className="icons" role="button" />
            </a>
            <span id="tooltip">Skills</span>
          </div>
          <div id="icon">
            <a href="#education">
              <BsPencil style={iconStyle} className="icons" role="button" />
            </a>
            <span id="tooltip">Education</span>
          </div>
        </div>
      </Nav>
      <Contact>
        <div id="icons">
          <div id="icon">
            <a href="#footer">
              <RiContactsLine style={iconStyle} className="icons" role="button" />
            </a>
            <span id="tooltip">Contact me</span>
          </div>
        </div>
      </Contact>
    </Container>
  );
}

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
    
    #tooltip {
      visibility: hidden;
      background-color: rgb(112, 112, 112);
      color: rgb(255, 255, 255);
      text-align: center;
      padding: 5px;
      border-radius: 6px;
      position: absolute;
      z-index: 1;
      white-space: nowrap;
    }
    :hover #tooltip {
      visibility: visible;
    }
  }
    
    @media (max-width: 600px) {
        .icons {
            width: 1.9rem;
            /* background-color: yellow; */
        }
    }
`;

const Contact = styled.div`
    margin-bottom: 0.7rem;

    #icon {
    position: relative;

    #tooltip {
      visibility: hidden;
      background-color: rgb(112, 112, 112);
      color: rgb(255, 255, 255);
      text-align: center;
      padding: 5px;
      margin-left: 0.5rem;
      border-radius: 6px;
      position: absolute;
      z-index: 1;
      white-space: nowrap;
    }
    :hover #tooltip {
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