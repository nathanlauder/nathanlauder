import React from 'react';
import styled from 'styled-components';

import { DiSqllite } from 'react-icons/di';
import { FaJava } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { RiCss3Line, RiHtml5Line } from 'react-icons/ri';
import {
  SiExpress,
  SiMongodb,
  SiMui,
  SiPostgresql,
  SiR,
  SiReact,
  SiRust,
  SiSpringboot,
  SiTypescript
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

const Tools = () => (
  <Container id="tools">
    <SectionTitle>Tools</SectionTitle>
    <ToolBox>
      <Languages>
        <Subtitle>Languages</Subtitle>
        <LangList>
          <Lang>
            <SiRust />
            Rust
          </Lang>
          <Lang>
            <SiTypescript />
            TypeScript
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
            <FaJava />
            Java
          </Lang>
          <Lang>
            <FaGolang />
            Go
          </Lang>
          <Lang>
            <SiR />
            R
          </Lang>
          <Lang>
            <TbBrandPython />
            Python
          </Lang>
        </LangList>
      </Languages>
      <Frameworks>
        <Subtitle>Frameworks</Subtitle>
        <FrameworkList>
          <Lang>
            <SiReact />
            ReactJS
          </Lang>
          <Lang>
            <SiExpress />
            ExpressJS
          </Lang>
          <Lang>
            <SiSpringboot />
            SpringBoot
          </Lang>
          <Lang>
            <SiMui />
            MaterialUI
          </Lang>
        </FrameworkList>
        <Subtitle>
          Databases
        </Subtitle>
        <LangList>
          <Lang>
            <SiMongodb />
            MongoDB
          </Lang>
          <Lang>
            <SiPostgresql />
            PostgreSQL
          </Lang>
          <Lang>
            <DiSqllite />
            SQLite
          </Lang>
        </LangList>
      </Frameworks>
    </ToolBox>
  </Container>
);

export default Tools;