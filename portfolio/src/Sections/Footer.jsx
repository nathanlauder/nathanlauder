import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import SkewedContainer from 'sc-react';
import Tooltip from '../Components/Tooltip';

const Footer = () => (
  <Container id="footer">
    <SkewedContainer top="right" color="white" bgColor="black">
      <Content id="content">
        <div id="connect">Elsewhere on the Web</div>
        <div id="icons">
          <div id="icon">
            <a href="https://www.github.com/nathanlauder" target="_blank" rel="noreferrer">
              <FaGithub role="button" />
            </a>
            <Tooltip>GitHub</Tooltip>
          </div>
          <div id="icon">
            <a href="https://www.linkedin.com/in/nathan-lauder-1905b5193/" target="_blank" rel="noreferrer">
              <FaLinkedin id="icon" role="button" />
            </a>
            <Tooltip>LinkedIn</Tooltip>
          </div>
          <div id="icon">
            <a href="mailto:laudern42@gmail.com" target="_blank" rel="noreferrer">
              <HiOutlineMail id="icon" role="button" />
            </a>
            <Tooltip>Email me!</Tooltip>
          </div>
        </div>
        <div id="signature">
          <img src="imgs/Signature.png" alt="signature" />
        </div>
        <div id="copy">
          <small>Copyright &copy; Nathan Lauder. All rights reserved.</small>
        </div>
      </Content>
    </SkewedContainer>
  </Container>
);

const Container = styled.div`
  color: white;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  #connect {
    margin: 1rem auto;
    font-size: 1.7rem;
  }
  #icons {
    margin: 1rem; 
    display: flex;
    justify-content: center;
    a {
      color: white;
      margin: 0 1rem;
      svg {
          font-size: 3rem;
      }
    }

    #icon {
      position: relative;

      :hover ${Tooltip} {
        visibility: visible;
      }
    }
  }
  #signature {
    width: 15rem;
    margin: 1rem auto;
    img {
        width: 100%;
    }
  }
  #copy {
    padding: 0.5rem;
    text-align: center;
    margin-bottom: 0;
      
  }
  @media (max-width: 600px) {
    #connect {
      font-size: 1.3rem;
    }
    #icons a svg{ 
      font-size: 2rem;
    }
    #copy small{
      font-size: 0.8rem;
    }
    #signature {
      width: 35%;
    }
  }
`;

export default Footer;