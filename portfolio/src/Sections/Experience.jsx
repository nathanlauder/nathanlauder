import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../Components/SectionTitle';
import WorkCard from '../Components/WorkCard';
import jpmcl from '../imgs/desc.jpeg';
import ge from '../imgs/meatball.png';

const Experience = () => {
  const ExperienceContainer = styled.div`
    margin-left: 4.5rem;
    justify-self: center;
    @media (max-width: 600px) {
      margin-left: 1rem;
    }
  `;

  const SpotLight = styled.div`
    margin: 0 auto 2rem auto;
  `;

  const WorkCards = styled.div`
    display: flex;
    justify-content: space-evenly;
  `;

  return (
    <ExperienceContainer id="experience">
      <SectionTitle>Experience</SectionTitle>
      <SpotLight>
        <WorkCard
          position="Software Engineer Intern"
          company="DMSi Software"
          date="Current"
          description="I am currently working at DMSi as a Software Engineer. I am working in Web Development as we migrate applications."
          logo="https://www.dmsi.com/wp-content/themes/dmsi/img/dmsi-logo.svg"
        />
      </SpotLight>
      <WorkCards>
        <WorkCard
          position="Software Engineer"
          company="JPMorgan Chase &amp; Co."
          date="July 2022"
          description="After graduation, I will be joining JPMC as a Software Engineer in the Software Engineer Program."
          logo={jpmcl}
        />
        <WorkCard
          position="Software Engineer Intern"
          company="General Electric Healthcare"
          date="Summer 2021"
          description="During my second summer at GEHC, I worked as a SWE Intern building a backend integration between portfolio management systems."
          logo={ge}
        />
        <WorkCard
          position="Vulnerability Management Knowledge Lead Intern"
          company="General Electric Healthcare"
          date="Summer 2020"
          description="During my first summer at GEHC, I was in the Security, Risk, and Compliance team working on the resource Wiki for the ops team and stakeholders."
          logo={ge}
        />
      </WorkCards>
    </ExperienceContainer>
  );
};

export default Experience;