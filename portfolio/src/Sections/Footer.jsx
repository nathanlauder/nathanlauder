import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import SkewedContainer from 'sc-react';
import Link from '../Components/Link';
import Tooltip from '../Components/Tooltip';

const Container = styled.div`
  color: white;
`;

const Connect = styled.div`
  margin: 1rem auto;
  font-size: 1.7rem;
`;

const Icons = styled.div`
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

    &:hover ${Tooltip} {
      visibility: visible;
    }
  }
`;

const Icon = styled.div`
  position: relative;

  &:hover ${Tooltip} {
    visibility: visible;
  }
`;

const Signature = styled.div`
  width: 15rem;
  margin: 1rem auto;
  img {
      width: 100%;
  }
`;

const Copyright = styled.div`
  padding: 0.5rem;
  text-align: center;
  margin-bottom: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    ${Connect} {
      font-size: 1.3rem;
    }
    ${Icons} a svg{ 
      font-size: 2rem;
    }
    ${Copyright} small{
      font-size: 0.8rem;
    }
    ${Signature} {
      width: 35%;
    }
  }
`;

const Footer = () => (
  <Container id="footer">
    <SkewedContainer top="right" color="white" bgColor="black">
      <Content id="content">
        <Connect>Elsewhere on the Web</Connect>
        <Icons>
          <Icon>
            <Link href="https://www.github.com/nathanlauder" target="_blank" rel="noreferrer">
              <FaGithub role="button" />
            </Link>
            <Tooltip>GitHub</Tooltip>
          </Icon>
          <Icon>
            <Link href="https://www.linkedin.com/in/nathan-lauder-1905b5193/" target="_blank" rel="noreferrer">
              <FaLinkedin id="icon" role="button" />
            </Link>
            <Tooltip>LinkedIn</Tooltip>
          </Icon>
          <Icon>
            <Link href="mailto:laudern42@gmail.com" target="_blank" rel="noreferrer">
              <HiOutlineMail id="icon" role="button" />
            </Link>
            <Tooltip>Email me!</Tooltip>
          </Icon>
        </Icons>
        <Signature>
          <img src="imgs/Signature.png" alt="signature" />
        </Signature>
        <Copyright>
          <small>Copyright &copy; Nathan Lauder. All rights reserved.</small>
        </Copyright>
      </Content>
    </SkewedContainer>
  </Container>
);

export default Footer;