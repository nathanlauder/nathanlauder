import React from 'react';
import styled from 'styled-components';

import { FaNodeJs } from 'react-icons/fa';
import { GiCamel } from 'react-icons/gi';
import { RiHtml5Line, RiCss3Line } from 'react-icons/ri';
import { IoLogoJavascript } from 'react-icons/io';
import {
  SiJava,
  SiR,
  SiMysql,
  SiReact,
  SiExpress,
  SiMongodb,
  SiRust
} from 'react-icons/si';
import { TbBrandPython } from 'react-icons/tb';

import SectionTitle from '../Components/SectionTitle';
import Subtitle from '../Components/Subtitle';

const Container = styled.div``;

const LangList = styled.ul`
  color: black;

  @media screen and (max-width: 600px) {
    margin-right: 5rem;
    margin-left: 1rem;
  }
`;

const Lang = styled.li`
  margin: 0.8rem 0;
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 1rem;

  svg {
    font-size: 1.8rem;
    margin-right: 0.5rem;
  }
`;

const FrameworkList = styled.ul`
  @media screen and (max-width: 600px) {
    margin-left: 1rem;

    ${Lang} {
      margin-right: 6rem;
    }
  }
`;

const ToolBox = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  
  @media screen and (max-width: 600px) {
    flex-direction: column;
    #languages, #frameworks {
      margin: 1rem auto;
    }
  }
`;

const LangLogo = styled.img`
  margin: 0 1rem 1rem 0;
  width: 1.2rem;
`;

const InterestList = styled.ul`
  margin-left: 1rem;

  li {
    margin-bottom: 2rem;
  }
`;

const Tools = () => (
  <Container id="tools">
    <SectionTitle>Tools</SectionTitle>
    <ToolBox>
      <div id="languages">
        <Subtitle>Languages</Subtitle>
        <LangList>
          <Lang>
            <IoLogoJavascript />
            Javascript
          </Lang>
          <Lang>
            <RiHtml5Line />
            HTML
          </Lang>
          <Lang>
            <RiCss3Line />
            CSS
          </Lang>
          <Lang>
            <SiJava />
            Java
          </Lang>
          <Lang>
            <SiR />
            R
          </Lang>
          <Lang>
            <TbBrandPython />
            Python
          </Lang>
          <Lang>
            <SiMysql />
            MySQL/SQL
          </Lang>
          <Lang>
            <LangLogo src="imgs/lambdaBlack.png" alt="language logo" />
            Scheme
          </Lang>
          <Lang>
            <GiCamel />
            Perl
          </Lang>
        </LangList>
      </div>
      <div id="frameworks">
        <Subtitle>Frameworks</Subtitle>
        <FrameworkList>
          <Lang>
            <SiReact />
            ReactJS
          </Lang>
          <Lang>
            <FaNodeJs />
            NodeJS
          </Lang>
          <Lang>
            <SiExpress />
            ExpressJS
          </Lang>
          <Lang>
            <SiMongodb />
            MongoDB
          </Lang>
        </FrameworkList>
        <Subtitle>
          Learning
        </Subtitle>
        <LangList>
          <Lang>
            <SiRust />
            Rust
          </Lang>
        </LangList>
        <Subtitle>
          Interests
        </Subtitle>
        <InterestList>
          <Lang>API Development</Lang>
          <Lang>Web Development</Lang>
          <Lang>Cybersecurity</Lang>
        </InterestList>
      </div>
    </ToolBox>
  </Container>
);

export default Tools;