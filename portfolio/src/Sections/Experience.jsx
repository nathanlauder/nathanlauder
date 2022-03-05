import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../Components/SectionTitle';
import WorkCard from '../Components/WorkCard';

const Experience = () => {
  const ExperienceContainer = styled.div`
    margin-left: 4.5rem;
    justify-self: center;
    @media (max-width: 600px) {
      margin-left: 1rem;
    }
  `;

  const WorkCards = styled.div`
    margin: 0 auto;
  `;

  return (
    <ExperienceContainer id="experience">
      <SectionTitle>Experience</SectionTitle>
      <WorkCards>
        <WorkCard
          position="Software Engineer Intern"
          company="DMSi Software"
          date="Current"
          description="I am currently working at DMSi as a Software Engineer. I am working in Web Development as we migrate applications."
          logo="https://www.dmsi.com/wp-content/themes/dmsi/img/dmsi-logo.svg"
        />
      </WorkCards>
    </ExperienceContainer>
  );
};

export default Experience;