import React from 'react';
import styled from 'styled-components';

import { BiLogoGoLang, BiLogoTypescript } from 'react-icons/bi';
import { DiMysql } from 'react-icons/di';
import { FaJava, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { RiCss3Line, RiHtml5Line } from 'react-icons/ri';
import {
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiR,
  SiReact,
  SiRust
} from 'react-icons/si';
import { TbBrandPython } from 'react-icons/tb';

import SectionTitle from '../Components/SectionTitle';
import Subtitle from '../Components/Subtitle';

const Container = styled.div``;

const LangList = styled.ul`
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

const Languages = styled.div``;
const Frameworks = styled.div``;

const ToolBox = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  
  @media screen and (max-width: 600px) {
    flex-direction: column;
    ${Languages}, ${Frameworks} {
      margin: 1rem auto;
    }
  }
`;

// const LangLogo = styled.img`
//   margin: 0 1rem 1rem 0;
//   width: 1.2rem;
// `;

const InterestList = styled.ul`
  margin-left: 0.5rem;

  li {
    margin-bottom: 2rem;
  }
`;

const Tools = () => (
  <Container id="tools">
    <SectionTitle>Tools</SectionTitle>
    <ToolBox>
      <Languages>
        <Subtitle>Languages</Subtitle>
        <LangList>
          <Lang>
            <IoLogoJavascript />
            JavaScript
          </Lang>
          <Lang>
            <BiLogoTypescript />
            TypeScript
          </Lang>
          <Lang>
            <FaJava />
            Java
          </Lang>
          <Lang>
            <SiRust />
            Rust
          </Lang>
          <Lang>
            <BiLogoGoLang />
            Go
          </Lang>
          <Lang>
            <TbBrandPython />
            Python
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
            <SiR />
            R
          </Lang>
        </LangList>
      </Languages>
      <Frameworks>
        <Subtitle>Frameworks & DBs</Subtitle>
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
          <Lang>
            <DiMysql />
            MySQL/SQL
          </Lang>
          <Lang>
            <SiGraphql />
            GraphQL
          </Lang>
        </FrameworkList>
        <Subtitle>
          Interests
        </Subtitle>
        <InterestList>
          <Lang>API Development</Lang>
          <Lang>Web Development</Lang>
          <Lang>Cybersecurity</Lang>
        </InterestList>
      </Frameworks>
    </ToolBox>
  </Container>
);

export default Tools;