import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../Components/SectionTitle';

const Container = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
`;

const ProjectCard = styled.div`
  background-color: var(--navy);
  margin: 1rem auto;
  width: 18rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 2px solid gray;
  /* box-shadow: 2px 2px 4px #a9a9a9; */
  text-align: center;
`;

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: max-content max-content max-content;
  justify-content: space-evenly;
  
  @media screen and (max-width: 1150px) {
    ${ProjectCard} {
      width: 15rem;
    }
  }
  @media screen and (max-width: 1050px) {
    grid-template-columns: auto;
    ${ProjectCard} {
      width: 18rem;
    }
  }
  @media screen and (max-width: 450px) {
    ${ProjectCard} {
      width: 70vw;
    }
  }
`;

const ProjectTitle = styled.div`
  margin: 0 0.5rem 0.5rem 0;
  font-size: 1.5rem;
`;

const ProjectImageContainer = styled.div`
  margin: 1rem auto;
  width: 10rem;
  border-radius: 1rem;
`;

const ProjectImage = styled.img`
  border-radius: 0.5rem;
  width: 100%;
`;

const ProjectDescription = styled.div`
  margin: 0.5 0.5rem 0.5rem 0;
  font-size: 1rem;
  line-height: 22.5px;
`;

const Projects = () => (
  <Container id="projects">
    <SectionTitle>Projects</SectionTitle>
    <ProjectContainer>
      <ProjectCard>
        <ProjectTitle>
          Go URL Shortener
        </ProjectTitle>
        <ProjectImageContainer>
          <ProjectImage src="imgs/url-shortener.png" alt="Url Shortener UI" />
        </ProjectImageContainer>
        <ProjectDescription>
          This is a highly efficient URL shortener using FastHTTP and Golang. This shortener
          processed over 50,000 requests per second, and features a very simple React UI.
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectTitle>
          TODO &amp; FIXME scanner.
        </ProjectTitle>
        <ProjectImageContainer>
          <ProjectImage src="imgs/github.jpeg" alt="image of code" />
        </ProjectImageContainer>
        <ProjectDescription>
          This is something I am working on which
          scans a project directory for any TODO/FIXME lines and creates
          a list of all of them within the project.
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectTitle>
          4-year Plan &amp; Registration System
        </ProjectTitle>
        <ProjectImageContainer>
          <ProjectImage src="imgs/library.jpg" alt="battleship" />
        </ProjectImageContainer>
        <ProjectDescription>
          A ReactJS PWA built to provide four-year planning and registration
          to colleges to smooth the stress of registration season.
        </ProjectDescription>
      </ProjectCard>
    </ProjectContainer>
  </Container>
);

export default Projects;